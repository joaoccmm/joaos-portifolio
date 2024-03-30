import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app/App';
import './assets/styles/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);