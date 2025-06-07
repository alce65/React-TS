import React, { useState, useEffect } from 'react';

// Debería venir de un servicio
const getData = async (): Promise<Item[]> => {
    return [];
};

type UseItems = {
    items: Item[];
    loadData: () => Promise<void>;
};
const useItems = (): UseItems => {
    const [items, setItems] = useState<Item[]>([]);
    const loadData = async (): Promise<void> => {
        // Lógica para cargar datos
        const data = await getData();
        setItems(data);
    };

    return { items, loadData };
};

type Item = {
    id: number;
};

/* 
Con respecto al array de dependencias, hay que tener en cuenta lo que ocurre 
si en este se incluye una función obtenida desde otro hook.
Asi nos lo sugiere el linter de React cuando detecta que ejecutamos 
una función procedente de otro hook dentro de un useEffect:
*/

export const Items: React.FC = () => {
    const { items, loadData } = useItems();

    // React Hook useEffect has a missing dependency: 'loadData'.
    // Either include it or remove the dependency array.eslint

    useEffect(() => {
        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>Items number: {items.length}</div>;
};
