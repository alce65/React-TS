import { useState, useEffect, useCallback } from 'react';

type Item = {
    id: number;
};

type Props = {
    getData: () => Promise<Item[]>;
};

export const Items: React.FC<Props> = ({ getData }) => {
    const [items, setItems] = useState<Item[]>([]);

    const loadData = useCallback(async (): Promise<void> => {
        // Lógica para cargar datos
        const data = await getData();
        setItems(data);
    }, [getData]);

    useEffect(() => {
        console.log('Use effect');
        loadData();
    }, [loadData]);

    return <div>Items number: {items.length}</div>;
};

export const ItemsWrapper: React.FC = () => {
    const getData = useCallback(async (): Promise<Item[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([{ id: 1 }, { id: 2 }, { id: 3 }]);
            }, 1000);
        });
    }, []);

    // return <Items getData={async () => []}></Items>;
    return <Items getData={getData}></Items>;
};
