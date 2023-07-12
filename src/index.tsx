import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InitialPage from './pages/InitialPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <InitialPage />
  </React.StrictMode>
);

