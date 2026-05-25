import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { MovieProvider } from './context/MovieContext.jsx';

createRoot(document.getElementById('root')).render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
