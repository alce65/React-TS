import { type JSX, useState } from 'react';

type Props = {
    initialCount: number;
};

// Tipado como React FunctionComponent

export const Counter1: React.FC<Props> = ({ initialCount }) => {
    const [count, setCount] = useState<number>(initialCount);
    return (
        <div>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>➕</button>
            <button onClick={() => setCount(count - 1)}>➖</button>
        </div>
    );
};

// Tipado del resultado como JSX.Element

export const Counter2 = ({ initialCount }: Props): JSX.Element => {
    const [count, setCount] = useState<number>(initialCount);
    return (
        <div>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>➕</button>
            <button onClick={() => setCount(count - 1)}>➖</button>
        </div>
    );
};

// Uso como handler de una función nombrada

export const Counter3: React.FC<Props> = ({ initialCount }) => {
    const [count, setCount] = useState<number>(initialCount);

    const handleIncrement = (value = 1): void => {
        setCount(count + value);
    };

    return (
        <div>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={() => handleIncrement()}>➕</button>
            <button onClick={() => handleIncrement(-1)}>➖</button>
        </div>
    );
};
