import { useAuth } from '../../../hooks/useAuth';
import Login from './Login';
import ProtectedPage from '../../../components/pages/ProtectedPage';
import LoadingAnimation from '../../../components/ui/animations/LoadingAnimation';
import MainVisual from '../../../components/sections/MainVisual';

export default function Auth() {
  const { authenticated, setAuthenticated, isChecking } = useAuth();
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
