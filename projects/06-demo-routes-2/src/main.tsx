import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { appRoutes } from './core/routes/routes.ts';
import './index.css';
// import { App } from './core/components/app/App.tsx';

// createRoot(document.getElementById('root') as HTMLDivElement).render(
//     <StrictMode>
//         <App />
//     </StrictMode>,
// );

const root = document.getElementById('root');
if (!root) {
    throw new Error('No root element found');
}

const router = createBrowserRouter(appRoutes);
createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
