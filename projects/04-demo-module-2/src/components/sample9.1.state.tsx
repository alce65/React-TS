import { useEffect, useState } from 'react';

// Tipo never[] en el estado
export const SampleNever: React.FC = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        //@ts-expect-error El tipo 'string' no se puede asignar al tipo 'never'.
        setState(['Pepe', 'Luis', 'Juana']);
    }, []);

    return (
        <div>
            <h1>Sample 9.1</h1>
            <p>State management with useState</p>
            <p>{state.length}</p>
            <ul>
                {state.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

// Tipo unknown[] en el estado

export const SampleUnknown: React.FC = () => {
    const [state, setState] = useState<unknown[]>([]);

    useEffect(() => {
        // Simulate a state change
        setState(['Pepe', 'Luis', 'Juana']);
    }, []);

    return (
        <div>
            <h1>Sample 9.1</h1>
            <p>State management with useState</p>
            <p>{state.length}</p>
            <ul>
                {state.map((item, index) => (
                    <li key={index}>{item as string}</li>
                ))}
            </ul>
        </div>
    );
};
