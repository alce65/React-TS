import reactLogo from '../../../assets/react.svg';
import './header.css';

type Props = {
    title?: string;
    children?: React.ReactNode;
};
export const Header: React.FC<Props> = ({ title = 'Demo', children }) => {
    return (
        <header className="header">
            <div className="header-main">
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
                <h1>{title}</h1>
            </div>
            {children && <div className="header-children">{children}</div>}
        </header>
    );
};
