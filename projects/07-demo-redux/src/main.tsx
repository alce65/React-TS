import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { appRoutes } from './core/routes/routes.ts';
import { store } from './store/index.ts';
import { AppContextProvider } from './context/app.context.provider.tsx';
import { InMemoryProductRepository } from './features/products/services/repo/in-memory.product.repo.ts';
import './index.css';

const root = document.getElementById('root');
if (!root) {
    throw new Error('No root element found');
}

const repo = new InMemoryProductRepository();
const title = import.meta.env.VITE_APP_TITLE || 'Demo 07';

const router = createBrowserRouter(appRoutes);
createRoot(root).render(
    <StrictMode>
        <AppContextProvider repo={repo} title={title}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </AppContextProvider>
    </StrictMode>,
);
