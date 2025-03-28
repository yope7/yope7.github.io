---
layout: post
title: "Build This Page"
author: Yoshiki
categories: [Tech]
tags: [Ruby, Jekyll]
image: assets/images/0329/jekyll.png
description: "本サイトのビルド方法をまとめます．"
featured: true
hidden: false
protected: false
---

本ブログは，Ruby と Jekyll（ジキル）を用いて構築され，Github Pages でホスティングされています

基本的には[このページ](https://qiita.com/madoreenu/items/b47833bf785562c77819)を参考にブログを作成しました．

本ページはビルド方法の備忘録です．

## ブログの作成

### 1. パッケージのインストール(Mac)

HomeBrew を前提とします．

Ruby のインストール

```bash
brew install rbenv ruby-build
```

注意：ruby のバージョンは以下を指定してください．

```bash
ruby 2.7.8p225 (2023-03-30 revision 1f4d455848) [arm64-darwin24]
```

具体的には，以下のコマンドを打ちます．

```bash
rbenv install 2.7.8
rbenv local 2.7.8
rbenv rehash
```

Jekyll と Bundler のインストール

```bash
gem install jekyll bundler
```

### 2. テーマの選定

[無料テーマ一覧](https://jekyllthemes.io/free)から，自分の好きなテーマを選びます．
今回は[mediumish](https://jekyllthemes.io/theme/mediumish)にしました．

### 3. テーマのダウンロード

```bash
git clone https://github.com/wowthemesnet/mediumish-theme-jekyll.git
```

としてもいいですが，git がややこしくなるので Download ZIP でダウンロードします．

### 4. ビルドの準備

ダウンロードしたテーマのディレクトリに移動します．

```bash
cd mediumish-theme-jekyll
```

その後，以下のコマンドを打ちます．

```bash
bundle install
```

により，必要な gem をインストールします．

**しかし，大抵パッケージの依存関係でエラーが出ます！**

### 5. Gemfile.lock の修正

Gemfile.lock を修正します．(ここがいちばんの躓きポイント)

```bash
- ffi (1.10.0)
- ffi (1.10.0-x64-mingw32)

+ ffi (1.15.5)
+ ffi (1.15.5-x64-mingw32)

- BUNDLED WITH
- 2.0.1

+ BUNDLED WITH
+ 2.6.6
```

### 6. ビルド

```bash
bundle exec jekyll build
```

により，ビルドが完了します．

### 7. ローカル環境で実行

```bash
bundle exec jekyll serve
```

により，ローカル環境で実行できます．

### 8. Github Pages で公開

ビルドしたファイルを Github Pages に公開します．
git で公開レポジトリを作成してください．この辺りの詳細は省きます．

```bash
git init
git remote add origin https://github.com/username/repository.git
git add .
git commit -m "commit message"
git push -u origin master
```

github のリポジトリの設定で，Github Pages を有効にしてください．

これで，Github Pages に公開できます．

actions タブから生成されたページにアクセスできます．

本ページでは，技術的なログを残すテストがてら，ブログの作成方法をまとめました．
