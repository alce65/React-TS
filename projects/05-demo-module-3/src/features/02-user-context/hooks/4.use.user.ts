import { useCallback, useState } from 'react';
import type { User, UserRepository } from '../../../services/repo';

type UserState = {
    user: User | null;
    loading: boolean;
    error: Error | null;
};

type UseUserHook = ({
    id,
    repo,
}: {
    id?: number;
    repo: UserRepository;
}) => UserState & {
    load: () => Promise<void>;
};

export const useUser: UseUserHook = ({ id = 1, repo }) => {
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
            const user = await repo.getUserById(id);
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
    }, [id, repo]);

    return {
        user,
        loading,
        error,
        load,
    };
};
