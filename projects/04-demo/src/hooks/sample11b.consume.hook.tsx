/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react';
import { useLocalStorage } from './sample11.hooks';

type User = {
    id: number;
    name: string;
};

type UseSampleHook = {
    user: User | null;
    loadUser: () => Promise<void>;
};

export const useSample = (): UseSampleHook => {
    const [user, setUser] = useState<User | null>(null);

    const loadUser = async (): Promise<void> => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users/1',
        );
        const data = await response.json();
        setUser(data);
    };

    return { user, loadUser };
};

export const Sample11b: React.FC = () => {
    const { user, loadUser } = useSample();

    useEffect(() => {
        console.log('Sample11b: useEffect');
        loadUser();
    }, [loadUser]);

    return (
        <div>
            <h3>Sample 11b</h3>
            <p>User nema: {user?.name}</p>
        </div>
    );
};

export const Sample11a: React.FC = () => {
    const [user, , getValue] = useLocalStorage<User>('user', {
        id: 1,
        name: 'Pepe',
    });

    useEffect(() => {
        //localStorage.setItem('user', JSON.stringify('Pepe'));
        console.log('Sample11b: useEffect');
        getValue();
    }, [getValue]);

    return (
        <div>
            <h3>Sample 11b</h3>
            <p>User name: {user.name}</p>
        </div>
    );
};
