import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'app/App';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/storeProviders';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/errorBoundary';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);

