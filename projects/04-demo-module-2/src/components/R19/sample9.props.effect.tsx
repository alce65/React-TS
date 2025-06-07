import { use, Suspense } from 'react';

// Probando el API use de React 19
// Esta incompleta y no se incluyo en el curso

type Item = {
    id: number;
};

type Props = {
    dataPromise: Promise<Item[]>;
};

export const Items: React.FC<Props> = ({ dataPromise }) => {
    // const [items, setItems] = useState<Item[]>([]);

    const items = use(dataPromise);

    if (!items) return null;

    // if (data.length > 0) {
    //     setItems(data);
    // }

    return <div>Items number: {items.length}</div>;
};

const getData = async (): Promise<Item[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1 }, { id: 2 }, { id: 3 }]);
        }, 1000);
    });
};
export const ItemsWrapperR19: React.FC = () => {
    const dataPromise = getData();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Items dataPromise={dataPromise}></Items>
        </Suspense>
    );
};
