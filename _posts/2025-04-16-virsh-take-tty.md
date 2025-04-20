---
layout: post
title: "[対処法]virsh console したままターミナルを閉じた！"
author: Yoshiki
categories: [Tech]
image: assets/images/10.jpg
featured: false
hidden: false
---

シリアルコンソールに ASCII を送り込んだ話

## 問題

```bash
virsh console AAA
```

したままターミナルを閉じた．

```bash
virsh console AAA
```

すると，他のドメインが使用中と出る．

強制的に奪い取ってくれないようだ．

vm を reboot すれば止まると思うが，サービス稼働中のためそれは避けたい．

## 対処法

```bash
sudo virsh dumpxml AAA | grep tty
```

or

```bash
sudo virsh dumpxml AAA | grep pty
```

から，どの仮想シリアルコンソールを使っているか特定する．

わかって仕舞えば

```bash
sudo bash -c "echo -ne '\035' > /dev/pts/1"
```

でエスケープの ASCII の`Ctrl + ]` を送り込めば止まる．

### ところで

```bash
sudo screen /dev/pts/1
```

によってシリアルコンソールを覗き込めるが，Virsh 独特のコマンドだからか，`Ctrl + ]` は機能しない．
