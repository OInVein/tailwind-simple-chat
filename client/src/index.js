import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './tailwind-base.css';
import App from './app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
