import { NavLink } from 'react-router';
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
                        <NavLink to={option.path} className="menu-link">
                            {option.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
