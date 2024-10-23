import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
// Components
import App from './navigation/App';
// Helpers
import reportWebVitals from './reportWebVitals';
// Styles
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router>
          <App />
      </Router>
  </React.StrictMode>
);

reportWebVitals();
