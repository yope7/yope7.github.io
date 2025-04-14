---
layout: post
title: "NAS を使用した GitLab 永続化構築レポート"
author: Yoshiki
categories: [Tech]
tags: [Tech]
image: assets/images/1.jpg
description: "NAS を使用した GitLab 永続化構築レポート"
featured: false
hidden: false
---

# GitLab 永続化構築レポート（NFS ＋ Docker Compose）

## 概要

GitLab および PostgreSQL コンテナを Docker Compose により構築し、PostgreSQL のデータディレクトリを NFS 経由でストレージサーバ上の指定ディレクトリに永続化した．

## 構成情報

- GitLab ホスト IP：xxx.xxx.xxx.5
- NFS サーバ（ストレージ）IP：xxx.xxx.xxx.58
- NFS マウント先：/mnt/nfs/postgres_data
- NFS エクスポート元：/mnt/storage/gitlab_data/gitlab

## 実施手順

### 1. NFS サーバ側（ストレージ）の準備（管理者が実施）

- `/mnt/storage/gitlab_data/gitlab` を作成：

- ストレージ管理画面より NFS クライアント（GitLab サーバ）の許可設定を実施：
  - クライアント追加（ホスト名＋ IP）
  - アクセス許可（rw, no_root_squash）

### 2. GitLab サーバ側の準備

- マウントポイント作成：

```bash
mkdir -p /mnt/nfs/postgres_data
```

- NFS マウント実行：

```bash
mount -t nfs xxx.xxx.xxx.58:/mnt/storage/gitlab_data/gitlab /mnt/nfs/postgres_data
```

- `/etc/fstab` に永続化設定を追加：

```
xxx.xxx.xxx.58:/mnt/storage/gitlab_data/gitlab /mnt/nfs/postgres_data nfs defaults 0 0
```

### 3. Docker Compose 構成修正

- postgres サービスのボリュームを以下に変更：

```yaml
volumes:
  - /mnt/nfs/postgres_data:/var/lib/postgresql/data
```

### 4. GitLab 再構築（初期化）

（永続化前と競合したので初期化手法も記す．マイグレーションなど，もっといい手法はあるが，テストデータに価値はないので削除した．）

- GitLab と PostgreSQL のコンテナ削除：

```bash
docker compose stop gitlab postgres
docker compose rm -f gitlab postgres
```

- PostgreSQL データの初期化（NFS ディレクトリ削除）：

```bash
rm -rf /mnt/nfs/postgres_data/*
```

- GitLab / PostgreSQL の再起動：

```bash
docker compose up -d gitlab postgres
```

- GitLab DB 初期化：

```bash
docker exec -it gitlab gitlab-rake gitlab:setup
```

→ 「yes」で初期化実行

結構待機．．．

## どうやって完了を確認したか

- `/mnt/nfs/postgres_data` に PG_VERSION, base/, pg_wal/ 等が存在し、更新されていることを確認
- Web UI にアクセスし、ログインとプロジェクト作成が可能なことを確認
- `docker ps` において Health.Status = healthy であることを確認

## 感想

初心者輪講で勉強した NFS を実用に近い環境で応用することができて有意義であった．
今後は何を永続化するか，ログローテーションはどうするか，バックアップはどうするか，などを考える．
