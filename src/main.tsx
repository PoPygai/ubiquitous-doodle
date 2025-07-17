import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom'; // Fixed import
import './index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <App /> {/* Directly render App (routes should be defined inside App) */}
            </BrowserRouter>
        </I18nextProvider>
    </React.StrictMode>
);