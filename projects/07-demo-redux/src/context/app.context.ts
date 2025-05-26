
import { createContext } from "react";
import type { ProductRepository } from "../features/products/services/repo//product.repo"

// Contexto, tipos y valor inicial

export type ThemeState = "dark" | "light";
export type LanguageState = "es" | "en";

type Context = {
    theme: ThemeState;
    setTheme: React.Dispatch<React.SetStateAction<ThemeState>>;
    language: LanguageState;
    setLanguage: React.Dispatch<React.SetStateAction<LanguageState>>;
    title: string;
    repo: ProductRepository
};

const defaultContext: Context = {} as Context;

export const AppContext = createContext<Context>(defaultContext);


