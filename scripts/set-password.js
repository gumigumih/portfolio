const fs = require("fs");
const path = require("path");
const CryptoJS = require("crypto-js");

// コマンドライン引数からパスワードを取得
const args = process.argv.slice(2);
const password = args[0];

if (!password) {
  console.error("❌ エラー: パスワードを指定してください。\n例: npm run set-password -- mypassword123");
  process.exit(1);
}

// パスワードを SHA-256 でハッシュ化
const hashedPassword = CryptoJS.SHA256(password).toString();

// `.env` のパス
const envPath = path.join(__dirname, "../.env");

// `.env` に書き込む内容
const envContent = `REACT_APP_PASSWORD_HASH=${hashedPassword}\n`;

try {
  fs.writeFileSync(envPath, envContent, { flag: "w" });
  console.log(`✅ .env にパスワードを設定しました: ${password}`);
} catch (error) {
  console.error("❌ `.env` の書き込みに失敗しました:", error);
}
