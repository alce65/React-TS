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
                        <a href={option.path}>{option.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
