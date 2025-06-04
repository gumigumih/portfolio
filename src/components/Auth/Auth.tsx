import { useState, useEffect } from 'react';
import { verifyPassword } from '../../utils/auth';
import Login from './Login';
import ProtectedPage from '../Pages/ProtectedPage';
import LoadingAnimation from '../UI/LoadingAnimation'; // ← 前のローダー

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
    <div className="flex w-screen min-h-screen items-center justify-center bg-[#fafafa] text-gray-800 font-['Zen_Maru_Gothic']">
      {authenticated ? (
        <ProtectedPage />
      ) : (
        <Login onAuthenticate={() => setAuthenticated(true)} />
      )}
    </div>
  );
}
