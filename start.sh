#!/bin/sh
set -e  # スクリプトの途中でエラーが出たら即終了

# Dockerコンテナをバックグラウンドで起動
echo "🚀 Starting Docker containers..."
if ! docker-compose up -d; then
  echo "❌ Failed to start Docker containers. Exiting..."
  exit 1
fi

echo "⌛ Waiting for React app to start..."

# node コンテナのIDを取得
NODE_CONTAINER_ID=$(docker-compose ps -q node)

# node コンテナが存在しない or 起動していない場合はエラーを出して終了
if [ -z "$NODE_CONTAINER_ID" ] || ! docker inspect -f '{{.State.Running}}' "$NODE_CONTAINER_ID" | grep -q "true"; then
  echo "❌ Node container is not running. Exiting..."
  exit 1
fi

# Reactアプリが起動するまで待機
until docker logs "$NODE_CONTAINER_ID" 2>&1 | grep -q "Compiled successfully"; do
  sleep 1
done

echo "✅ React App is running on http://localhost:3000 🚀"
