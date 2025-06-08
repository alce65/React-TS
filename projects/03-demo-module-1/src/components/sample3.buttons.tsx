import { type JSX, type PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary";
type Size = "small" | "medium" | "large";

type Props = {
    variant: ButtonVariant;
    size: Size;
    // onClick: () => void;
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode;
};



export const Button1: React.FC<Props> = ({
    variant,
    size,
    onClick,
    children,
}) => {
    return (
        <button className={`btn ${variant} ${size}`} onClick={onClick}>
            {children}
        </button>
    );
};

type Props2 = {
    variant: ButtonVariant;
    size: Size;
    // onClick: () => void;
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children: string;
};

export const Button2 = ({
    variant,
    size,
    onClick,
    children,
}: Props2): JSX.Element => {
    return (
        <button className={`btn ${variant} ${size}`} onClick={onClick}>
            {children}
        </button>
    );
};

// Usando el utility type de React para PropsWithChildren

type BaseProps = {
    variant: ButtonVariant;
    size: Size;
    onClick: React.MouseEventHandler<HTMLButtonElement>
};  

type FinalProps = PropsWithChildren<BaseProps>;


export const Button3: React.FC<FinalProps> = ({
    variant,
    size,
    onClick,
    children,
}): JSX.Element => {
    return (
        <button className={`btn ${variant} ${size}`} onClick={onClick}>
            {children}
        </button>
    );
}
