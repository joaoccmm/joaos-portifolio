import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.scss';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
//Components
import App from './pages/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);