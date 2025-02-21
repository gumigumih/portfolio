import React from 'react';
import { useState } from "react";
import { Login } from "./Login";
import { ProtectedPage } from "./ProtectedPage";

export default function Auth() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-[#29b7e3]/60 via-[#e0609c]/60 to-[#e9c96b]/60 bg-fixed text-gray-800 font-sans">
      {authenticated ? <ProtectedPage /> : <Login onAuthenticate={() => setAuthenticated(true)} />}
    </div>
  );
}