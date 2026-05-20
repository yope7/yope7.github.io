---
layout: post
title: "systemd-and-docker"
author: Yoshiki
categories: [Tech]
image: assets/images/10.jpg
featured: false
hidden: false
wip: true
---

# 自作WEBアプリをdocker化する

## はじめに

Webアプリケーションを作るとき，最初は手元で `npm run start` を実行して動作確認している．
すぐにサーバが立ち上がるし，標準出力からログも見えるので十分．

しかしサービスも完成に近づき，放置でうまいことサーバには生き続けてもらう必要が出てきた．
ターミナル上から `npm run start` しているだけだと，ターミナルを閉じたタイミングやサーバ再起動時にプロセスが止まるし，何かしらの理由で落ちたときに自動で復旧しないため，誰かを困らせてしまうかもしれない．

今回は，研究室内で利用するWeb サービスと Slack Bot を題材に，`npm run start` での手動起動から systemd による常駐化，さらに（色々あって） Docker コンテナ化へ移行した流れをまとめる．

## 前提：２つのサービスを作ったよ

今回2つのサーバを対象とする．
1つ目はWeb ブラウザから在庫や商品情報を管理するための Web アプリケーションである．バックエンドは Node.js で動作し，簡単な API とデータ保存機構を持っている．Viteとかも使ってみている．（別記事？）

2つ目はSlack 上から在庫情報を確認したり，簡単な操作を行ったりするための Bot である．Bot は Web アプリケーションの API にアクセスし，Slack のコマンドやボタン操作に応じて情報を返す．これもNode.js で動作する．

> 同じサーバでよくね？とも思ったが，エラー時の原因の切り分けとか保守性を考えて分離した．

## 問題：手動起動ではプロセスが安定しない

実行して出かけたらサーバが止まってる

> 当たり前だけど

_なぜ？_：`npm run start` を実行すると，Node.js のプロセスは基本的にそのログインセッションに紐づく．したがってターミナルを閉じたり，SSH 接続が切れたりすると，プロセスも終了する．

さらに，アプリケーションが何かしらの原因で止まった時，この方法では自動再起動の仕組みがないので誰か（自分）が気づいて再起動するまでサービスは止まったままになる．

## 第一段階：systemd に登録する

この問題に対する最初の解決策として，アプリケーションを systemd のサービスとして登録した．（Dockerでコンテナ化するの難しそうだったから楽そうなのをやってみたってのが本音）

> systemd は，Linux で広く使われているサービス管理の仕組み．ユニットファイルにコマンド，ユーザ，作業ディレクトリ等を書くとOS にプロセスの管理を任せられる．

例えばこう．

```ini
[Unit]
Description=Example Node.js Application
After=network.target

[Service]
Type=simple
User=appuser
WorkingDirectory=/path/to/application
EnvironmentFile=/path/to/application/.env
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

こうすると

1. SSH セッションから切り離してプロセスを動かせる．ターミナルを閉じても，サービスは OS に管理された状態で動き続ける．
1. サーバ再起動時に自動起動できる．`systemctl enable ~` しておけば，マシンが起動したあとに対象サービスも自動で起動する．
1. `Restart=always` すると，プロセスが落ちても再起動してくれる．
1. ログを`journalctl` で確認できる.これを`npm run start`でやるなら`hogehoge > ~/log`みたいな書き込みしなきゃいけなくてnotスマート

## 第二段階：Docker コンテナ化する

> もうsystemdでよくね？

否．今後別VMに移行する時に環境依存とかで大変なことになるかもしれない．

> 他サービス全部dockerで管理されてるってのもある

現に，systemdに登録する時にnpm ciするとnodeとSQliteのバージョンがぐちゃっとして苦労した．これは何回もやりたくはない．

Docker を使うと，アプリケーションの実行環境をイメージとしてまとめられる．
諸々のバージョン，インストール，ビルド手順，起動コマンドなどを Dockerfile に記述し，実行時にはそのイメージからコンテナを立ち上げる．こうするとどんな環境でもぶっ壊れずに動く．

たとえば，概念的には次のような Dockerfile を用意する．

```dockerfile
FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD ["npm", "run", "start"]
```

また，Docker Compose を使うことで，ポート，環境変数，永続化ディレクトリなどを宣言的に管理できる．

```yaml
services:
  app:
    build: .
    ports:
      - "8787:8787"
    env_file:
      - .env
    volumes:
      - ./data:/app/data
    restart: unless-stopped
```

このようにしておくと，基本的な起動操作は次のように統一できる．

> サービス名を手打ちしなくていいのもいいね．前もだけど

```bash
docker compose build
docker compose up -d
docker compose logs -f
```

停止する場合は次のようにする．

```bash
docker compose down
```

手順が単純になり，別の環境でも同じように起動しやすくなる．

## コンテナ化で注意した点

Docker 化では，単に Dockerfile を書くだけではなく，サービスのスクリプトもいくつか修正した．．

### 1. `localhost` が指すものが変わる

<img src="{{site.baseurl}}/assets/images/0520/container_localhost.png" alt="localhostの指すもの" style="width:50%; display:block; margin-left:auto; margin-right:auto;" />

ホスト上でアプリケーションを直接実行している場合，`http://localhost:8787` はホスト自身の 8787 番ポートを指す．
Docker コンテナの中で `localhost` と書くと，それはコンテナ自身を指す．そのため，Bot コンテナからホスト側の Web API にアクセスしたい場合，`localhost` のままでは接続できない．

Linux 環境では，`host.docker.internal` を使えるように Docker Compose 側で設定する方法がある．概念的には次のような指定である．

```yaml
extra_hosts:
  - "host.docker.internal:host-gateway"
```

そのうえで，Bot 側の API URL を次のようにする．

```bash
INVENTORY_API_BASE_URL=http://host.docker.internal:8787/api
```

> 今後は別のVMにそれぞれのコンテナを置くので，それぞれのサービスのIPアドレスを指定すればいい話．あんまり重要ではない．

### 4. 永続データはボリュームで外に逃がす

Docker コンテナを作り直した時に本番データが消えてしまうのは困るので，ホスト側ディレクトリをマウントするようにした．

```yaml
volumes:
  - ./data:/app/data
  - ./uploads:/app/uploads
```

#今後の課題

- 実際に移行してみる
- サービスの死活監視&アラート
