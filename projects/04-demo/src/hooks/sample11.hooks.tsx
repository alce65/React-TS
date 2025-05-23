/* eslint-disable react-refresh/only-export-components */
import { type JSX, useState } from 'react';

export function useToggle(initial = false): [boolean, () => void] {
    // export function useToggle(initial = false) {
    const [state, setState] = useState<boolean>(initial);
    const toggle = (): void => setState((prev) => !prev);
    return [state, toggle];
}
export function useLocalStorage<T>(
    key: string,
    initialValue: T,
): [T, (value: T) => void, () => void] {
    const calculateInitialValue = (): T => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    };
    const [storedValue, setStoredValue] = useState<T>(calculateInitialValue);

    const setValue = (value: T): void => {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    const getValue = (): T => {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        setValue(initialValue);
        return initialValue;
    };

    return [storedValue, setValue, getValue];
}

export const TestHookComponent = (): JSX.Element => {
    const [state, toggle] = useToggle();

    console.log(state, toggle);

    return (
        <>
            <h2>Test Hook</h2>
            <p>
                {state ? 'On' : 'Off'}
                <span> </span>
                <button onClick={toggle}>Toggle</button>
            </p>
        </>
    );
};
