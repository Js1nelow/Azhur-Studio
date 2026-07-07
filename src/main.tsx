import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './components/ThemeProvider.tsx';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Le9r0gtAAAAAOXHD9QkRtIvpSM3Lo2n091h4ETE'}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  </StrictMode>,
);
