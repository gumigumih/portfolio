import { useState, useEffect } from 'react';
import { verifyPassword } from '../utils/auth';

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const urlPassword = searchParams.get('pwd');

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

  return { authenticated, setAuthenticated, isChecking };
} 