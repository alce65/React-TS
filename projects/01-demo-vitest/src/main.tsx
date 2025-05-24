import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// createRoot(document.getElementById('root') as HTMLDivElement).render(
//     <StrictMode>
//         <App />
//     </StrictMode>,
// );

const root = document.getElementById('root');
if (!root) {
    throw new Error('No root element found');
}
createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
