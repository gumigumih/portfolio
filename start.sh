docker-compose up -d
echo "⌛ Waiting for React app to start..."

until docker logs $(docker-compose ps -q node) 2>&1 | grep -q "Compiled successfully"; do
  sleep 1
done

echo "✅ React App is running on http://localhost:3000 🚀"
