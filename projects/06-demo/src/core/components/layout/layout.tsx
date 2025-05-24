import './layout.css';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router';

type Props = {
    title?: string;
};
export const Layout: React.FC<Props> = ({ title = '' }) => {
    return (
        <>
            <Header title={title} />
            <main className="main">
                {/* This is where the child components will be rendered */}
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
