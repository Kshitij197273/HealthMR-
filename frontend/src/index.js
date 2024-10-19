import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.js';
import AppContextProvider from './context/AppContext.jsx'; // Make sure the path is correct
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppContextProvider> {/* Wrap App in AppContextProvider */}
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
