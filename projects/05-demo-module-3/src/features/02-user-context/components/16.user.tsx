import { useContext, useEffect } from "react";
import { UserContext } from "../context/user.context";

// Ejemplo de un componente que obtiene datos de un servicio y los muestra
// con la lógica de carga y error en el custom hook useUser

export const UserLoggedFromContext: React.FC = () => {
    const {
        userContext: { user, loading, error, load },
    } = useContext(UserContext);

    useEffect(() => {
        load();
    }, [load]);

    return (
        <div>
            <h3>User</h3>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {user && (
                <div>
                    <h4>{user.name}</h4>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.name}</p>
                </div>
            )}
        </div>
    );
};
