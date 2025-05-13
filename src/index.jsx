import { HashRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';

import './settings/styles/effects.css';
import './settings/styles/theme.css';
import './settings/plugins/i18next';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
