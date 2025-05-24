/* eslint-disable @typescript-eslint/no-unused-vars */
import { type JSX, useActionState, useState } from "react";

// Probando el uso de useActionState
// nuevo Hook de React
// Esta incompleta y no se incluyo en el curso

type Contact = {
    id: number;
    userName: string;
    email: string;
    passwd: string;
    isOkConditions: boolean;
    turn: string;
    course: string;
};

type ContactDTO = Omit<Contact, "id">;

export const Contacts = (): JSX.Element => {
    const initialState: Contact = {
        id: 0,
        userName: "",
        email: "",
        passwd: "",
        isOkConditions: false,
        turn: "",
        course: "",
    };
    const [userData, setUserData] = useState<Contact>(initialState);

    const someAction = async (_previousState: Error | null, formData: FormData): Promise<Error | null> => {
        const data: ContactDTO = {
            userName: formData.get("userName") as string,
            email: formData.get("email") as string,
            passwd: formData.get("passwd") as string,
            isOkConditions: formData.get("isOkConditions") == 'on' ? true : false,
            turn: formData.get("turn") as string,
            course: formData.get("course") as string,
        };

        console.log("Enviando", data);

        try {
            const result = await (async (): Promise<Contact> => ({
                ...data,
                id: 1,
            }))();

            console.log("Resultado", result);
            setUserData(result);
            return null;
        } catch (error) {
            return error as Error;
        }
    };

    const [_errorState, submitAction] = useActionState<Error | null, FormData>(
        someAction,
        null
    );

    // const handleSubmit = (ev: React.FormEvent): void => {
    //     ev.preventDefault();
    //     console.log("Enviando", userData);
    // };

    // const handleChange = (
    //     ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    // ): void => {
    //     const formControl = ev.target;
    //     // desestructurar no podría acceder a .checked
    //     // se accede más adelante gracias a una guarda de tipos
    //     console.dir(formControl);
    //     setUserData({
    //         ...userData,
    //         [formControl.name]:
    //             formControl.type === "checkbox"
    //                 ? formControl.checked
    //                 : formControl.value,
    //     });
    // };

    return (
        <form action={submitAction}>
            <legend>Contacta con nosotros</legend>
            <p>Ejemplo de 'Controlled Form'</p>

            <div className="group-control">
                <input
                    type="text"
                    name="userName"
                    placeholder="Dime tu nombre"
                    required
                    value={userData.userName}
                    // onChange={handleChange}
                />
            </div>

            <div className="group-control">
                <input
                    type="email"
                    name="email"
                    placeholder="Dime tu email"
                    required
                    value={userData.email}
                    // onChange={handleChange}
                />
            </div>

            <div className="group-control">
                <input
                    type="password"
                    name="passwd"
                    placeholder="Dime tu password"
                    required
                    value={userData.passwd}
                    //onChange={handleChange}
                />
            </div>

            <div className="group-control">
                <input
                    type="checkbox"
                    name="isOkConditions"
                    id="is-ok"
                    checked={userData.isOkConditions}
                    //onChange={handleChange}
                />
                <label htmlFor="is-ok">Acepto las condiciones...</label>
            </div>

            <fieldset name="turn">
                <legend>Selecciona un turno</legend>
                <input
                    type="radio"
                    name="turn"
                    id="turno-m"
                    value="M"
                    //onChange={handleChange}
                />
                <label htmlFor="turno-m">Mañana</label>
                <input
                    type="radio"
                    name="turn"
                    id="turno-t"
                    value="T"
                    //onChange={handleChange}
                />
                <label htmlFor="turno-t">Tarde</label>
                <input
                    type="radio"
                    name="turn"
                    id="turno-n"
                    value="N"
                    // onChange={handleChange}
                />
                <label htmlFor="turno-n">Noche</label>
            </fieldset>

            <label htmlFor="course">Elige un curso</label>
            <select
                name="course"
                id="course"
                value={userData.course}
                // onChange={handleChange}
            >
                <option value=""></option>
                <option value="A">Angular</option>
                <option value="R">React</option>
                <option value="N">Node</option>
            </select>

            <button type="submit">Enviar</button>
        </form>
    );
};
