import { useState } from 'react';
import { AppContext, type LanguageState, type ThemeState } from './app.context';
import type { ProductRepository } from '../features/products/services/repo/product.repo';
// Context Provider es un componente de React

type Props = {
    children: React.ReactNode;
    repo: ProductRepository
    title: string;
};

export const AppContextProvider: React.FC<Props> = ({ children, repo, title }) => {
    const [theme, setTheme] = useState<ThemeState>('light');
    const [language, setLanguage] = useState<LanguageState>('es');

    return (
        <AppContext
            value={{
                theme,
                setTheme,
                language,
                setLanguage,
                title,
                repo,
            }}
        >
            {children}
        </AppContext>
    );
};
