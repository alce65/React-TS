import { Link } from 'react-router';
import './menu.css';

type MenuOption = {
    label: string;
    path: string;
};

export const Menu: React.FC = () => {
    const menuOptions: MenuOption[] = [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' },
        { label: 'About', path: '/about' },
    ];

    return (
        <nav className="menu">
            <ul>
                {menuOptions.map((option) => (
                    <li key={option.path}>
                        <Link to={option.path} className="menu-link">
                            {option.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
