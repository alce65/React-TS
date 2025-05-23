import { type JSX } from "react";

type ButtonVariant = "primary" | "secondary";
type Size = "small" | "medium" | "large";

type Props = {
    variant: ButtonVariant;
    size: Size;
    onClick: () => void;
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
    onClick: () => void;
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
