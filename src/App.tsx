import { BrowserRouter } from 'react-router-dom';
import ProtectedPage from './components/pages/ProtectedPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ProtectedPage />
    </BrowserRouter>
  )
}

export default App
