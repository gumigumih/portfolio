import { useState, useEffect, useCallback } from 'react';
import CryptoJS from 'crypto-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const PASSWORD_HASH = import.meta.env.VITE_PASSWORD_HASH;

type LoginProps = {
  onAuthenticate: (password: string) => void;
};

export default function Login({ onAuthenticate }: LoginProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleLogin = useCallback(
    (password?: string) => {
      const hashedInput = CryptoJS.SHA256(password || input).toString();
      if (hashedInput === PASSWORD_HASH) {
        onAuthenticate(password || input);
        setError('');
      } else {
        setError('パスワードが違います。もう一度お試しください。');
      }
    },
    [input, onAuthenticate],
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const urlPassword = searchParams.get('pwd');
    if (urlPassword) {
      handleLogin(urlPassword);
    }
  }, [handleLogin]);

  return (
    <div className="backdrop-blur-lg bg-white/30 shadow-sm rounded-lg p-8 max-w-md w-full border border-white/20">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">パスワードを入力</h2>
      <p className="text-gray-600 text-center text-sm mt-2">このページを閲覧するにはパスワードが必要です。</p>
      {error && (
        <div className="flex items-center bg-red-100/30 border border-red-400/40 text-red-700 px-4 py-2 rounded-md mt-4">
          <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
          <span>{error}</span>
        </div>
      )}
      <input
        type="password"
        placeholder="パスワード"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full mt-4 px-4 py-2 border rounded-lg bg-white/40 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={() => handleLogin()}
        className="w-full bg-[#e0609c]/80 hover:bg-[#e0609c]/100 text-white font-semibold py-2 px-4 rounded-lg mt-4 transition duration-200 backdrop-blur-md border border-white/40"
      >
        ログイン
      </button>
    </div>
  );
}
