import React from 'react';
import { useState } from "react";
import Login from "./Login";
import ProtectedPage from "./ProtectedPage";

export default function Auth() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-[#fefefe] text-gray-800 font-['Zen_Maru_Gothic']">
      {authenticated ? <ProtectedPage /> : <Login onAuthenticate={() => setAuthenticated(true)} />}
    </div>
  );
}