import { useState } from "react";
import CryptoJS from "crypto-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const PASSWORD_HASH = process.env.REACT_APP_PASSWORD_HASH; // GitHub Actions で設定する

export default function Auth() {
  const [input, setInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(""); // エラーメッセージを管理するステート

  const handleLogin = () => {
    const hashedInput = CryptoJS.SHA256(input).toString();
    if (hashedInput === PASSWORD_HASH) {
      setAuthenticated(true);
      setError(""); // 成功時にエラーをクリア
    } else {
      setError("パスワードが違います。もう一度お試しください。"); // エラーメッセージをセット
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      {authenticated ? (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-gray-800">秘密のページ</h1>
          <p className="mt-4 text-gray-600">ここに保護されたコンテンツを表示します。</p>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">パスワードを入力</h2>
          <p className="text-gray-600 text-center text-sm mt-2">
            このページを閲覧するにはパスワードが必要です。
          </p>

          {/* エラーメッセージ（エラーがあるときだけ表示） */}
          {error && (
            <div className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mt-4">
              <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
              <span>{error}</span>
            </div>
          )}

          <input
            type="password"
            placeholder="パスワード"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full mt-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4 transition duration-200"
          >
            ログイン
          </button>
        </div>
      )}
    </div>
  );
}
