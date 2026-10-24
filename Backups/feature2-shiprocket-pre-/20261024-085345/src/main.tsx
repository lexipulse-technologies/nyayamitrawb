import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initSecurityShield } from './utils/securityShield';

// Initialize LEXIPULSE TECHNOLOGIES Anti-Replication & Content-Lock Shield on boot
initSecurityShield();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);