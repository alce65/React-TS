import { useCallback, useEffect, useState } from 'react';
import './items.css';

export type Item = {
    id: number;
    name: string;
};

type Props = {
    getData: () => Promise<Item[]>;
};

export const Items: React.FC<Props> = ({ getData }) => {
    const [items, setItems] = useState<Item[]>([]);

    // Load data sin usar async/await
    //   const loadDataCB = (): void => {
    //     getData().then((data) => {
    //       setItems(() => data);
    //     });
    //   };

    // Load data usando async/await sin usar useCallback
    // Provoca un bucle infinito
    // const loadData = async (): Promise<void> => {
    //     console.log('useCallback ejecuta loadData');
    //     const data = await getData();
    //     setItems(() => data);
    // };

    // Load data usando async/await y useCallback
    const loadData = useCallback(async (): Promise<void> => {
        console.log('useCallback ejecuta loadData');
        const data = await getData();
        setItems(() => data);
    }, [getData]);

    useEffect(() => {
        console.log('useEffect ejecuta loadData');
        loadData();
    }, [loadData]);

    // React Hook useEffect has a missing dependency: 'loadData'.
    // Either include it or remove the dependency array.

    return (
        <div className="items">
            <h1>Items: {items.length}</h1>
            {/* <button onClick={() => setItems([...Items, { id: Items.length + 1, name: `Item ${Items.length + 1}` }])}>
                Add Item
            </button> */}
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};


