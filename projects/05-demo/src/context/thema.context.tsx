/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

// Contexto, tipos y valor inicial

type ThemeState = "dark" | "light";
type LanguageState = "es" | "en";

type Context = {
    theme: ThemeState;
    setTheme: React.Dispatch<React.SetStateAction<ThemeState>>;
    language: LanguageState;
    setLanguage: React.Dispatch<React.SetStateAction<LanguageState>>;
};

const defaultContext: Context = {
    theme: "light",
    setTheme: (state) => state,
    language: "es",
    setLanguage: (state) => state,
};

export const ThemeContext = createContext<Context>(defaultContext);

// Context Provider es un componente de React

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeState>("light");
    const [language, setLanguage] = useState<LanguageState>("es");

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                language,
                setLanguage,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
