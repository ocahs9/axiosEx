import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import GlobalStyles from './styles/GlobalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles/>
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </React.StrictMode>,
)
