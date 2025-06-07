/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

type ContextType = {
    name: string | null;
    isLogged: boolean;
};

// El contexto es un objeto que puede ser accedido desde cualquier parte de la aplicación

export const Context = createContext<ContextType>({
    name: null,
    isLogged: false,
});

// El valor del contexto es un objeto que contiene la información que queremos compartir

const contextValue: ContextType = {
    name: "Javier",
    isLogged: true,
};

// Context Provider es un componente de React
// que siempre recibe la propiedad children
// y que se encarga de envolver a los componentes que necesitan acceder al contexto

type Props = {
    children: React.ReactNode;
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
