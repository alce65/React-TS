import type { JSX } from 'react';
import './App.css';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Route, Routes } from 'react-router';

function App(): JSX.Element {
    const title = import.meta.env.VITE_APP_TITLE || 'Demo 06 - Routes';

    return (
        <>
            <Header title={title} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
