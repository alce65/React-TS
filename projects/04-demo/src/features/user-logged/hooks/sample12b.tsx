import { useState, useEffect, useCallback } from "react";
type User = { id: number; name: string };
const fetchUser = async (): Promise<User> => {
    const res = await fetch("/api/user");
    if (!res.ok) throw new Error("Error al obtener el usuario");
    return await res.json();
};

type UseUserHook = () => {
    user: User | null;
    loading: boolean;
    error: Error | null;
    loadData: () => Promise<void>;
};

const useUserHook: UseUserHook = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const loadData = useCallback(async (): Promise<void> => {
        try {
            const userData = await fetchUser();
            setUser(userData);
        } catch (error) {
            const typedError = error as Error;
            console.error(typedError.message);
            setError(typedError);
        } finally {
            setLoading(false);
        }
    }, []);

    return { user, loading, error, loadData };
};

export const UserComponentWithHook: React.FC = () => {
    const { user, loading, error, loadData } = useUserHook();

    useEffect(() => {
        loadData();
    }, [loadData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return <div>User: {user?.name}</div>;
};
