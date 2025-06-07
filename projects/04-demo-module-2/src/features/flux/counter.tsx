import React, { useReducer } from "react";

// 1. Definición de los tipos de datos

type CounterState = {
    value: number;
    clicks: number;
    isActive: boolean;
};

// 2. Definición de las posibles acciones

type ActionWithOutPayload = {
    type: "update" | 'rollDice';
    payload: number;
};

type ActionWithPayload = {
    type: "reset" | "start" | "stop";
};

type Action = ActionWithOutPayload | ActionWithPayload;

// 3. Definición del reducer

type Reducer = React.Reducer<CounterState, Action>;
//(state: CounterState, action: Action) => CounterState;

const reducer: Reducer = (
    state: CounterState,
    action: Action
): CounterState => {
    switch (action.type) {
        case "start":
            return {
                ...state,
                isActive: true,
            };
        case "stop":
            return {
                ...state,
                isActive: false,
            };
        case "update":
        case "rollDice":
            return {
                ...state,
                value: state.value + action.payload,
                clicks: state.clicks + action.payload,
            };
        case "reset":
            return {
                ...state,
                value: 0,
                clicks: 0,
                isActive: false,
            };
        default:
            return state;
    }
};

// 4. Definición del estado inicial

const initialCounter: CounterState = {
    value: 0,
    clicks: 0,
    isActive: false,
};

// 5. Definición del componente

export const CounterFlux: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialCounter);

    const handleChange = (value: number): void => {
        if (state.isActive) {
            dispatch({ type: "update", payload: value });
            
        }
    };

    const handleReset = (): void => {
        dispatch({ type: "reset" });
    };

    const handleStart = (): void => {
        dispatch({ type: "start" });
    };

    const handleStop = (): void => {
        dispatch({ type: "stop" });
    };

    return (
        <div>
            <h3>Counter</h3>
            <p>Value: {state.value}</p>
            <p>Clicks: {state.clicks}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={() => handleChange(1)}>➕</button>
            <button onClick={() => handleChange(-1)}>➖</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
