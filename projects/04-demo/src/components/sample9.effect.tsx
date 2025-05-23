import { useState, useEffect } from "react";

type Item = {
    id: number;
}

const getData = async (): Promise<Item[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]);
        }, 1000);
    });
}


export const Items: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async (): Promise<void>  => {
    // Lógica para cargar datos
    const data = await getData();
    setItems(data);
  };

  return <div>Items number: {items.length}</div>;
};