/* eslint-disable react-refresh/only-export-components */
import React, { useReducer } from "react";
import { getRandom } from "./services/service";

// 1. Definición de los tipos de datos

type CounterState = {
    value: number;
    clicks: number;
    isActive: boolean;
};

// 2. Definición de los "types" de las posibles acciones

export const ActionTypes = {
    start: "counter@start",
    stop: "counter@stop",
    reset: "counter@reset",
    update: "counter@update",
    roll: "counter@rollDice",
} as const;

// 3. Definición de los tipos posibles en las acciones

type ActionWithPayload<T> = {
    type: typeof ActionTypes.update | typeof ActionTypes.roll;
    payload: T;
};

type ActionWithOutPayload = {
    type:
        | typeof ActionTypes.start
        | typeof ActionTypes.stop
        | typeof ActionTypes.reset;
};

type Action<T> = ActionWithOutPayload | ActionWithPayload<T>;

// 4. Definición de los  creadores de acciones

const start = (): ActionWithOutPayload => ({
    type: ActionTypes.start,
});

const stop = (): ActionWithOutPayload => ({
    type: ActionTypes.stop,
});

const update = (value: 1 | -1): ActionWithPayload<1 | -1> => ({
    type: ActionTypes.update,
    payload: value,
});

const reset = (): ActionWithOutPayload => ({
    type: ActionTypes.reset,
});

const rollDice =
    (value: number, callback: () => Promise<number>) =>
    async (dispatch: React.Dispatch<Action<number>>): Promise<void> => {
        const data = await callback();
        if (data === undefined) {
            console.error("No se ha podido obtener el valor");
            return;
        }

        const ac = (num: number): ActionWithPayload<number> => ({
            type: ActionTypes.roll,
            payload: num,
        });
        dispatch(ac(value * data));
    };

const updateThunkG =
    <P, C>(value: P, callback: () => Promise<C>) =>
    async (dispatch: React.Dispatch<Action<P>>): Promise<void> => {
        const ac = (value: P): ActionWithPayload<P> => ({
            type: ActionTypes.update,
            payload: value,
        });

        // Ejemplo de función que podría llegar con callback
        // const getData = (): Promise<number> => {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             resolve(value);
        //         }, 1000);
        //     });
        // };

        await callback();
        dispatch(ac(value));
    };

export { start, stop, update, reset, rollDice, updateThunkG };

// 5. Definición del reducer

type Reducer = React.Reducer<CounterState, Action<number>>;
//(state: CounterState, action: Action) => CounterState;

const reducer: Reducer = (
    state: CounterState,
    action: Action<number>
): CounterState => {
    switch (action.type) {
        case ActionTypes.start:
            return {
                ...state,
                isActive: true,
            };
        case ActionTypes.stop:
            return {
                ...state,
                isActive: false,
            };
        case ActionTypes.update:
        case ActionTypes.roll:
            return {
                ...state,
                value: state.value + action.payload,
                clicks: state.clicks + 1,
            };
        case ActionTypes.reset:
            return {
                ...state,
                value: 0,
                clicks: 0,
                isActive: false,
            };
        default:
            console.log(typeof action);
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

export const CounterFluxPlus: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialCounter);

    const handleChange = (value: 1 | -1): void => {
        if (state.isActive) {
            dispatch(update(value));
        }
    };

    const handleReset = (): void => {
        dispatch(reset());
    };

    const handleStart = (): void => {
        dispatch(start());
    };

    const handleStop = (): void => {
        dispatch(stop());
    };

    const handleRollDice = async (): Promise<void> => {
        const sign = Math.random() > 0.5 ? 1 : -1;
        rollDice(sign, getRandom)(dispatch);
    };

    return (
        <div>
            <h3>Counter</h3>
            <p>Value: {state.value}</p>
            <p>Clicks: {state.clicks}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={() => handleChange(1)}>➕</button>
            <button onClick={() => handleChange(-1)}>➖</button>
            <button onClick={() => handleRollDice()}>Roll Dice</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};
