#!/bin/bash

# 引数からタイトルを取得（デフォルトは"title"）
TITLE=${1:-title}

# 今日の日付を取得
TODAY=$(date +"%Y-%m-%d")

# テンプレートファイルのパス
TEMPLATE="_posts/2001-09-20-title.md"

# 新しいファイル名
NEW_FILE="_posts/${TODAY}-${TITLE}.md"

# テンプレートをコピー
cp "$TEMPLATE" "$NEW_FILE"

# ファイル内の日付を更新
sed -i '' "s/0000-00-00/$TODAY/g" "$NEW_FILE"

# ファイル内のタイトルを更新
sed -i '' "s/title: \"title\"/title: \"$TITLE\"/g" "$NEW_FILE"

echo "新しい投稿ファイルが作成されました: $NEW_FILE" 