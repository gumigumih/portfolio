import { useState, useEffect } from 'react';
import { verifyPassword } from '../../utils/auth';
import Login from './Login';
import ProtectedPage from '../Pages/ProtectedPage';
import LoadingAnimation from '../UI/LoadingAnimation';
import MainVisual from '../UI/MainVisual';

export default function Auth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const urlPassword = searchParams.get('pwd');

    // ✅ Promiseで並列に処理する
    const passwordCheck = new Promise<void>((resolve) => {
      if (urlPassword && verifyPassword(urlPassword)) {
        setAuthenticated(true);
      }
      resolve();
    });

    const wait3sec = new Promise((resolve) => setTimeout(resolve, 3000));

    Promise.all([passwordCheck, wait3sec]).then(() => {
      setIsChecking(false);
    });
  }, []);

  if (isChecking) return <LoadingAnimation />;

  return (
    <div className="w-screen min-h-screen bg-[#fafafa] text-gray-800 font-['Zen_Maru_Gothic']">
      {authenticated ? (
        <ProtectedPage />
      ) : (
        <div className="relative w-full min-h-screen flex items-center justify-center">
          {/* 背景のメインビジュアル */}
          <div className="absolute inset-0 opacity-30">
            <MainVisual />
          </div>
          
          {/* ログインフォーム */}
          <div className="relative z-10">
            <Login onAuthenticate={() => setAuthenticated(true)} />
          </div>
        </div>
      )}
    </div>
  );
}
