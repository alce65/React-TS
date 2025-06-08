import { type JSX, type SyntheticEvent, useState } from 'react';

export type Contact = {
    userName: string;
    email: string;
    passwd: string;
    isOkConditions: boolean;
    turn: string;
    course: string;
};

export type FormErrors = {
    userName?: string;
    email?: string;
    passwd?: string;
    isOkConditions?: boolean;
    turn?: string;
    course?: string;
};

export const CourseRegistrationE = (): JSX.Element => {
    const initialState: Contact = {
        userName: '',
        email: '',
        passwd: '',
        isOkConditions: false,
        turn: '',
        course: '',
    };
    const [userData, setUserData] = useState<Contact>(initialState);
    // const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleSubmit = (ev: SyntheticEvent): void => {
        ev.preventDefault();
        console.log('Enviando', userData);
    };

    const handleChange = (ev: SyntheticEvent): void => {
        const formControl = ev.target as HTMLFormElement;
        console.dir(formControl);
        setUserData({
            ...userData,
            [formControl.name]:
                formControl.type === 'checkbox'
                    ? formControl.checked
                    : formControl.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <legend>Contacta con nosotros</legend>
            <p>Ejemplo de 'Controlled Form'</p>

            <div className="group-control">
                <input
                    type="text"
                    name="userName"
                    placeholder="Dime tu nombre"
                    required
                    value={userData.userName}
                    onChange={handleChange}
                />
            </div>

            <div className="group-control">
                <input
                    type="email"
                    name="email"
                    placeholder="Dime tu email"
                    required
                    value={userData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="group-control">
                <input
                    type="password"
                    name="passwd"
                    placeholder="Dime tu password"
                    required
                    value={userData.passwd}
                    onChange={handleChange}
                />
            </div>

            <div className="group-control">
                <input
                    type="checkbox"
                    name="isOkConditions"
                    id="is-ok"
                    checked={userData.isOkConditions}
                    onChange={handleChange}
                />
                <label htmlFor="is-ok">Acepto las condiciones...</label>
            </div>

            <fieldset name="turn" onChange={handleChange}>
                <legend>Selecciona un turno</legend>
                <input type="radio" name="turn" id="turno-m" value="M" />
                <label htmlFor="turno-m">Mañana</label>
                <input type="radio" name="turn" id="turno-t" value="T" />
                <label htmlFor="turno-t">Tarde</label>
                <input type="radio" name="turn" id="turno-n" value="N" />
                <label htmlFor="turno-n">Noche</label>
            </fieldset>

            <label htmlFor="course">Elige un curso</label>
            <select
                name="course"
                id="course"
                value={userData.course}
                onChange={handleChange}
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
