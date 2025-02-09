import { useState } from "react";
import CryptoJS from "crypto-js";

const PASSWORD_HASH = process.env.REACT_APP_PASSWORD_HASH; // GitHub Actions で設定する

export default function Auth() {
  const [input, setInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    const hashedInput = CryptoJS.SHA256(input).toString();
    if (hashedInput === PASSWORD_HASH) {
      setAuthenticated(true);
    } else {
      alert("パスワードが違います！");
    }
  };

  return (
    <div>
      {authenticated ? (
        <div>
          <h1>秘密のページ</h1>
          <p>ここに保護されたコンテンツを表示します。</p>
        </div>
      ) : (
        <div>
          <h2>パスワードを入力してください</h2>
          <input
            type="password"
            placeholder="パスワード"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleLogin}>ログイン</button>
        </div>
      )}
    </div>
  );
}
