import { forwardRef, useRef } from "react";
// import { createRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// type InputProps ={
//     name: string;
//     // id?: string;
//     // value?: string;
//     // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     // onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
//     // onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
//     // placeholder?: string;
//     // className?: string;
//     // style?: React.CSSProperties;
// };

const Input = forwardRef<HTMLInputElement, InputProps>(({ name }, ref) => {
    return (
        <input
            ref={ref} // Referencia al input
            type="text"
            id="fc2-name"
            name={name}
        />
    );
});

export const FormFocusDS: React.FC = () => {
    // const inputRef = createRef<HTMLInputElement>();
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = (): void => {
        // Enfocar el input
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <Input name="name" ref={inputRef} />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={focusInput}>
                Focus
            </button>
        </form>
    );
};
