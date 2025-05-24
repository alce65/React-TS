import reactLogo from '../../../assets/react.svg';
import './header.css';

type Props = {
    title?: string;
};
export const Header: React.FC<Props> = ({ title = 'Demo' }) => {
    return (
        <header className="header">
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h1>{title}</h1>
        </header>
    );
};
