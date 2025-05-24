import reactLogo from '../../assets/react.svg';
import './header.css';
export const Header: React.FC = () => {
    return (
        <header className="header">
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h1>Demo 01 with Jest</h1>
        </header>
    );
};
