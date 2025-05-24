import { useCallback, useState } from 'react';
import { getUser, type User } from '../../../services/repo.function';

type UserState = {
    user: User | null;
    loading: boolean;
    error: Error | null;
};

type UseUserHook = () => UserState & {
    load: () => Promise<void>;
};

export const useUser: UseUserHook = () => {
    const [user, setUser] = useState<UserState['user']>(null);
    const [loading, setLoading] = useState<UserState['loading']>(false);
    const [error, setError] = useState<UserState['error']>(null);

    const load = useCallback(async (): Promise<void> => {
        console.log('loadinng');
        setLoading(true);
        // setState((prevState) => ({
        //   ...prevState,
        //   loading: true,
        // }));
        try {
            const user = await getUser();
            setUser(user);
            // setState((prevState) => ({
            //   ...prevState,
            //   user: user,
            //   loading: false,
            // }));
        } catch (error) {
            setError(error as Error);
            // setState((prevState) => ({
            //   ...prevState,
            //   error: error as Error,
            //   loading: false,
            // }));
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        user,
        loading,
        error,
        load,
    };
};
