import './App.css';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router';
import { Menu } from '../menu/menu';

export const App: React.FC = () => {
    const title = import.meta.env.VITE_APP_TITLE || 'Demo 06 - Routes 2';

    return (
        <>
            <Header title={title}>
                <Menu />
            </Header>
            <main className="main">
                {/* This is where the child components will be rendered */}
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
