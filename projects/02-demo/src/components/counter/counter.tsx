import { useState, type JSX } from 'react';

type Props = {
    setCountGlobal: (c: number) => void;
};

export function Counter({ setCountGlobal }: Props): JSX.Element {
    const [count, setCount] = useState(0);
    const handleClick = (n = 1): void => {
        setCount(count + n);
        setCountGlobal(count + 1);
    };
    const template = (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={() => handleClick()}>Incrementar</button>
            <button onClick={() => handleClick(-1)}>Decrementar</button>
        </div>
    );
    return template;
}
