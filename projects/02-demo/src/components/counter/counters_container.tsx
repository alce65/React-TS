import { useState, type JSX } from 'react';
import { Counter } from './counter';
import './counters_container.css';

export function CountersContainer(): JSX.Element {
    const [countGlobal, setCountGlobal] = useState(0);
    // const handleClick = () => setCountGlobal(countGlobal + 1);
    // const total = countGlobal * 2;

    const updateCountGlobal = (): void => {
        setCountGlobal(countGlobal + 1);
    };

    const template = (
        <div className="counters-container">
            <h2>Valor total: {countGlobal}</h2>
            <Counter setCountGlobal={updateCountGlobal} />
            <Counter setCountGlobal={updateCountGlobal} />
        </div>
    );

    return template;
}
