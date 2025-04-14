import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// ✅ Tailwind CSS を CDN で使用
const script = document.createElement('script');
script.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(script);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
