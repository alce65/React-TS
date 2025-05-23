//import { useCallback } from 'react';
import { Items, type Item } from './items';

export const ItemsWrapper: React.FC = () => {
    // Simula una llamada a un servicio
    const getData = async (): Promise<Item[]> => {
        console.log('getData retorna datos');
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, name: 'Pepe' },
                    { id: 2, name: 'Luis' },
                    { id: 3, name: 'Rosa' },
                ]);
            }, 1000);
        });
    };

    // No se necesita useCallback
    // const getData = useCallback(async (): Promise<Item[]> => {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve([
    //                 { id: 1, name: 'Pepe' },
    //                 { id: 2, name: 'Luis' },
    //                 { id: 3, name: 'Rosa' },
    //             ]);
    //         }, 1000);
    //     });
    // }, []);

    // return <Items getData={async () => []}></Items>;
    return <Items getData={getData}></Items>;
};
