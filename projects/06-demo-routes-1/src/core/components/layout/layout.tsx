import './layout.css';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router';
import { Menu } from '../menu/menu';

type Props = {
    title?: string;
};
export const Layout: React.FC<Props> = ({ title = '' }) => {
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
