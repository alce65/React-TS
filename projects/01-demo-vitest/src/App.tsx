import type { JSX } from 'react';
import './App.css';
import { Header } from './components/header/header';

function App(): JSX.Element {
    return (
        <>
            <Header />

            <p className="read-the-docs">
                Proyecto con TS - React - Vite - Vitest
            </p>
        </>
    );
}

export default App;
