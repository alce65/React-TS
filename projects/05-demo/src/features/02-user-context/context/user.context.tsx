import { createContext, useMemo } from 'react';
import { useUser } from '../hooks/4.use.user';
import { ApiUserRepository } from '../../../services/api.user.repo';

// Contexto, tipos y valor inicial

type Context = {
    userContext: ReturnType<typeof useUser>;
};

const defaultContext: Context = {} as Context;

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<Context>(defaultContext);

// Context Provider es un componente de React

type Props = {
    children: React.ReactNode;
};
export const UserContextProvider: React.FC<Props> = ({ children }) => {
    // const repo = new ApiUserRepository();
    const args = { repo: useMemo(() => new ApiUserRepository(), []) };
    const userContext = useUser(args);

    // En React 19 no es necesario usar Context.Provider

    return (
        <UserContext
            value={{
                userContext,
            }}
        >
            {children}
        </UserContext>
    );
};
