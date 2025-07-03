---
layout: post
title: "[基礎のメモ]公開鍵と一緒にsshユーザ作っといてと言われたら"
author: Yoshiki
categories: [Tech]
image: assets/images/10.jpg
featured: false
hidden: false
wip: false
---

鍵渡すから Linux ユーザ作っといて〜への対応方法のまとめ

# 「SSH で鍵ログインできるようにして」と言われたら

## はじめに

Linux 管理者の基礎，ユーザ追加，鍵ログインの設定

## 結論

```
input: 「作って」
output: ssh testuser@192.XXX.XX.XX
```

## 1. ユーザアカウントの作成

```bash
adduser testuser
```

ユーザ名に.など記号を含むとエラーになることがある

## 2. .ssh/authorized_keys の準備

渡された公開鍵ファイル（例：id_ed25519.pub）を authorized_keys に登録する．

```bash
mkdir -p /home/testuser/.ssh
vi /home/testuser/.ssh/authorized_keys
```

> 大体こういうサーバには Vim 入ってない．．．

公開鍵の中身を貼り付けて保存

## 3. パーミッションの設定

```bash
chown -R testuser:testuser /home/testuser/.ssh
chmod 700 /home/testuser/.ssh
chmod 600 /home/testuser/.ssh/authorized_keys
```

## 4. SSH 設定の確認と再起動

```bash
vi /etc/ssh/sshd_config
```

以下が有効になっていることを確認：

```
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
```

設定後，SSH デーモンを再起動：

```bash
systemctl restart sshd
```

⸻

5. sudo 権限を与える（必要な場合）

```bash
echo 'testuser ALL=(ALL) NOPASSWD:ALL' > /etc/sudoers.d/testuser
chmod 440 /etc/sudoers.d/testuser
```

## 6. ログイン確認（オプション）

秘密鍵がないとできないよ〜

でも確認したい．できたか心配だ...

```bash
last | grep testuser
```

## 7. ユーザへの通知文例

```
考え中．何書くのがいいんだろうか．
ssh testuser@192.XXX.XX.XX
sudo pass: XXXXXX
```
