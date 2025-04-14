#!/bin/bash

# 今日の日付を取得
TODAY=$(date +"%Y-%m-%d")

# テンプレートファイルのパス
TEMPLATE="_posts/2001-09-20-title.md"

# 新しいファイル名
NEW_FILE="_posts/${TODAY}-title.md"

# テンプレートをコピー
cp "$TEMPLATE" "$NEW_FILE"

# ファイル内の日付を更新
sed -i '' "s/0000-00-00/$TODAY/g" "$NEW_FILE"

echo "新しい投稿ファイルが作成されました: $NEW_FILE" 