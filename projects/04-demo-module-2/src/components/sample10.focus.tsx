import { useRef } from "react";
// import { createRef } from "react";

export const FormFocus: React.FC = () => {
    
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
                <input
                    ref={inputRef} // Referencia al input
                    type="text"
                    id="fc1-name"
                    name="name"
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="fc1-email" name="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="fc1-password" name="password" />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={focusInput}>Focus</button>
        </form>
    );
};
