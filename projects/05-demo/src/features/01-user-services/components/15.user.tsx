import { useEffect } from 'react';
import { useUser } from '../hooks/3.use.user';

// Ejemplo de un componente que obtiene datos de un servicio y los muestra
// con la lógica de carga y error en el custom hook useUser

export const UserLogged: React.FC = () => {
    const { user, loading, error, load } = useUser();

    useEffect(() => {
        load();
    }, [load]);

    return (
        <div>
            <h1>User</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {user && (
                <div>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Username: {user.username}</p>
                </div>
            )}
        </div>
    );
};
