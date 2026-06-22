import React from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/noto-sans-armenian';
import App from '@/App';
import '@/index.scss';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element was not found');
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
