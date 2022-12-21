import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { init } from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
