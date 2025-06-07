/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useState } from "react";

type ContextType = {
    name: string | null;
    isLogged: boolean;
    updateUser?: (name: string | null, isLogged: boolean) => void;
};

// El contexto es un objeto que puede ser accedido desde cualquier parte de la aplicación

export const context = createContext<ContextType>({
    name: null,
    isLogged: false,
});

// El valor del contexto es un objeto que contiene la información que queremos compartir

// Context Provider es un componente de React
// que siempre recibe la propiedad children
// y que se encarga de envolver a los componentes que necesitan acceder al contexto

type Props = {
    children: React.ReactNode;
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
    // La principal utilidad del contexto es definir un estado global
    // disponible para todos los componentes

    const [name, setName] = useState<ContextType["name"]>(null);
    const [isLogged, setIsLogged] = useState<ContextType["isLogged"]>(false);

    const updateUser = useCallback(
        (name: string | null, isLogged: boolean): void => {
            setName(name);
            setIsLogged(isLogged);
        },
        []
    );

    const contextValue: ContextType = {
        name,
        isLogged,
        updateUser,
    };

    return <context.Provider value={contextValue}>{children}</context.Provider>;
};
