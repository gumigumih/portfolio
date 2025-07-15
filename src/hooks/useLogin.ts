import { useState, useCallback } from 'react';
import { verifyPassword } from '../utils/auth';

export function useLogin(onAuthenticate: (password: string) => void) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleLogin = useCallback(() => {
    if (verifyPassword(input)) {
      onAuthenticate(input);
      setError('');
    } else {
      setError('パスワードが違います。もう一度お試しください。');
    }
  }, [input, onAuthenticate]);

  return {
    input,
    setInput,
    error,
    handleLogin,
  };
} 