/* eslint-disable react-refresh/only-export-components */
import { type JSX } from 'react';

type Contact = {
    userName: string;
    email: string;
    passwd: string;
    isOkConditions: boolean;
    turn: string;
    course: string;
};

type StringMap = Record<string, string | boolean>;
type FormElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export const getDataFromHTMLFormExternal = <T extends StringMap>(
    form: HTMLFormElement,
    { ...data }: T,
): T => {
    // if (!(data instanceof Object)) return

    const formElements: HTMLFormControlsCollection = form.elements;
    const keys = Object.keys(data);

    const result: Record<string, string | boolean> = { ...data };
    for (const key of keys) {
        const element = formElements.namedItem(key) as
            | FormElements
            | RadioNodeList
            | null;
        if (!element) continue;
        // if (element instanceof RadioNodeList) continue

        // Si el elemento es un checkbox, se obtiene el valor del atributo checked
        result[key] =
            typeof data[key] === 'boolean'
                ? (element as HTMLInputElement).checked
                : (result[key] = element.value);
    }
    // Si el elemento es un checkbox, se obtiene el valor del atributo checked
    return result as T;
};

// Formulario no controlado de React utilizando HTMLFormElement y FormData

export const CourseRegistrationNC = (): JSX.Element => {
    const userData: Contact = {
        userName: '',
        email: '',
        passwd: '',
        isOkConditions: false,
        turn: '',
        course: '',
    };
    // const [userData, setUserData] = useState<Contact>(initialState);

    const getDataFromHTMLForm = (form: HTMLFormElement): Contact => {
        const formElements: HTMLFormControlsCollection = form.elements;
        const keys = Object.keys(userData) as (keyof Contact)[];

        // const userNameElement = formElements.namedItem(
        //     "userName"
        // ) as HTMLInputElement;
        // const emailElement = formElements.namedItem(
        //     "email"
        // ) as HTMLInputElement;
        // const passwdElement = formElements.namedItem(
        //     "passwd"
        // ) as HTMLInputElement;
        // const isOkConditionsElement = formElements.namedItem(
        //     "isOkConditions"
        // ) as HTMLInputElement;
        // const turnElement = formElements.namedItem("turn") as HTMLInputElement;
        // const courseElement = formElements.namedItem(
        //     "course"
        // ) as HTMLSelectElement;
        // const result = {
        //     userName: userNameElement.value,
        //     email: emailElement.value,
        //     passwd: passwdElement.value,
        //     // como isOkConditions es un booleano, se obtiene del atributo checked
        //     isOkConditions: isOkConditionsElement.checked,
        //     turn: turnElement.value,
        //     course: courseElement.value,
        // };

        const result: Record<string, string | boolean> = {};
        for (const key of keys) {
            const element = formElements.namedItem(key) as HTMLInputElement;
            // Si el elemento es un checkbox, se obtiene el valor del atributo checked
            result[key] =
                typeof userData[key] === 'boolean'
                    ? element.checked
                    : (result[key] = element.value);
        }
        return result as Contact;
    };

    const getDataFromFormData = (formData: FormData): Contact => {
        // const data: Record<string, FormDataEntryValue> =
        //     Object.fromEntries(formData);

        // const result = {
        //     userName: data.userName as string,
        //     email: data.email as string,
        //     passwd: data.passwd as string,
        //     // isOkConditions es un booleano, pero FormData devuelve un string
        //     isOkConditions: data.isCondition === "on",
        //     turn: data.turn as string,
        //     course: data.course as string,
        // };
        // return result;

        const keys = Object.keys(userData) as (keyof Contact)[];
        const result: Record<string, string | boolean> = {};
        for (const key of keys) {
            const value = formData.get(key) as string | boolean;
            // Si el elemento es un checkbox, se obtiene el valor del atributo checked
            result[key] =
                typeof userData[key] === 'boolean' ? value === 'on' : value;
        }
        return result as Contact;
    };

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
        ev.preventDefault();
        const form = ev.currentTarget;
        // Acceso a los datos como elementos del formulario
        const userData1 = getDataFromHTMLForm(form);
        console.log('Enviando (eleemnts)', userData1);

        const userData3 = getDataFromHTMLFormExternal(form, userData);
        console.log('Enviando (eleemnts)', userData3);

        // Acceso a los datos como FormData
        const formData = new FormData(form);
        const userData2 = getDataFromFormData(formData);
        console.log('Enviando (formdata)', userData2);
    };

    return (
        <form onSubmit={handleSubmit}>
            <legend>Registro en el curso</legend>
            <p>Ejemplo de 'UnControlled Form'</p>

            <div className="group-control">
                <input
                    type="text"
                    name="userName"
                    placeholder="Dime tu nombre"
                    required
                    defaultValue={userData.userName}
                />
            </div>

            <div className="group-control">
                <input
                    type="email"
                    name="email"
                    placeholder="Dime tu email"
                    required
                    defaultValue={userData.email}
                />
            </div>

            <div className="group-control">
                <input
                    type="password"
                    name="passwd"
                    placeholder="Dime tu password"
                    required
                    defaultValue={userData.passwd}
                />
            </div>

            <div className="group-control">
                <input
                    type="checkbox"
                    name="isOkConditions"
                    id="cr-is-ok"
                    defaultChecked={userData.isOkConditions}
                />
                <label htmlFor="is-ok">Acepto las condiciones...</label>
            </div>

            <fieldset name="turn">
                <legend>Selecciona un turno</legend>
                <input type="radio" name="turn" id="cr-turno-m" value="M" />
                <label htmlFor="turno-m">Mañana</label>
                <input type="radio" name="turn" id="cr-turno-t" value="T" />
                <label htmlFor="turno-t">Tarde</label>
                <input type="radio" name="turn" id="cr-turno-n" value="N" />
                <label htmlFor="turno-n">Noche</label>
            </fieldset>

            <label htmlFor="course">Elige un curso</label>
            <select name="course" id="cr-course" defaultValue={userData.course}>
                <option value=""></option>
                <option value="A">Angular</option>
                <option value="R">React</option>
                <option value="N">Node</option>
            </select>

            <button type="submit">Enviar</button>
        </form>
    );
};
