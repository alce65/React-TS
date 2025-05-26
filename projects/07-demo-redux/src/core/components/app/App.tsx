import './App.css';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router';
import { Menu } from '../menu/menu';

export const App: React.FC = () => {


    return (
        <>
            <Header>
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
