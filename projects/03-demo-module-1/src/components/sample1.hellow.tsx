import { type JSX } from "react";

// HelloWorld: () => JSX.Element
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const HelloWorld = () => {
    return <h1>Hola Mundo</h1>;
};

export const ByWorld = (): JSX.Element => {
    return <h1>Adios Mundo</h1>;
};

export const CiaoWorld: React.FC = () => {
    return <h1>Ciao Mundo</h1>;
};
