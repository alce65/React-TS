// import { BaseSyntheticEvent } from "react";
import { type SyntheticEvent, useState, type JSX } from 'react';

type Props = {
    initialCount: number;
};
export const CounterWithEvent1: React.FC<Props> = ({ initialCount }) => {
    const [count, setCount] = useState<number>(initialCount);

    const handleClick = (event: SyntheticEvent<HTMLButtonElement>): void => {
        const element = event.currentTarget;
        const { value } = element.dataset as unknown as { value: string };
        setCount(count + Number(value));
    };

    return (
        <div>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={handleClick} data-value={1}>
                ➕
            </button>
            <button onClick={handleClick} data-value={-1}>
                ➖
            </button>
        </div>
    );
};

export const CounterWithEvent2 = ({ initialCount }: Props): JSX.Element => {
    const [count, setCount] = useState<number>(initialCount);

    // const handleClick = (
    //     event: SyntheticEvent<HTMLButtonElement>
    // ) => {
    // (property) React.BaseSyntheticEvent
    // <PointerEvent, EventTarget & HTMLButtonElement, EventTarget>
    // .target: EventTarget
    //const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const handleClick = (
        event: React.PointerEvent<HTMLButtonElement>,
    ): void => {
        // const element  = event.currentTarget;
        const element = event.target as HTMLButtonElement;
        //  element: EventTarget
        const { value } = element.dataset as DOMStringMap;
        setCount(count + Number(value));
    };

    return (
        <div>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={handleClick} data-value={1}>
                ➕
            </button>
            <button onClick={handleClick} data-value={-1}>
                ➖
            </button>
        </div>
    );
};

export const CounterWithEvent3: React.FC<Props> = ({ initialCount }) => {
    const [count, setCount] = useState<number>(initialCount);

    // const handleClick = (
    //     event: SyntheticEvent<HTMLButtonElement>
    // ) => {
    // (property) React.BaseSyntheticEvent
    // <PointerEvent, EventTarget & HTMLButtonElement, EventTarget>
    // .target: EventTarget
    //const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    const handleClick = (
        event: React.PointerEvent<HTMLButtonElement>,
    ): void => {
        const element = event.currentTarget;
        // const element = event.target as HTMLButtonElement;
        //  element: EventTarget
        const { value } = element.dataset as DOMStringMap;
        setCount(count + Number(value));
    };

    return (
        <div>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={handleClick} data-value={1}>
                ➕
            </button>
            <button onClick={handleClick} data-value={-1}>
                ➖
            </button>
        </div>
    );
};
