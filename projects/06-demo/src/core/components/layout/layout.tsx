import type { JSX } from 'react';
import './layout.css';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

type Props = {
    children: JSX.Element;
    title: string;
};
export const Layout: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <Header title={title} />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
};
