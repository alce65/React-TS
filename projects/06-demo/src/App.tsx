import type { JSX } from 'react';
import './App.css';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';

function App(): JSX.Element {
    const title = import.meta.env.VITE_APP_TITLE || 'Demo 06 - Routes';

    return (
        <>
            <Header title={title} />
            <Footer />
        </>
    );
}

export default App;
