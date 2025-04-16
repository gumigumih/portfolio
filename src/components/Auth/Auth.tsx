import { useState, useEffect } from 'react';
import { verifyPassword } from '../../utils/auth';
import Login from './Login';
import ProtectedPage from './ProtectedPage';

export default function Auth() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const urlPassword = searchParams.get('pwd');

    if (urlPassword && verifyPassword(urlPassword)) {
      setAuthenticated(true);
    }
  }, []);

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
