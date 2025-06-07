import { type JSX, useState } from 'react';

export const FormComponent = (): JSX.Element => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // (property) React.ChangeEvent<HTMLInputElement>.target:
        // EventTarget & HTMLInputElement
        const element = e.target;
        setValue(element.value);
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        console.log('Form submitted with value:', value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <button type="submit">Enviar</button>
        </form>
    );
};

type FormData = {
    name: string;
    email: string;
};
type FormErrors = {
    name?: string;
    email?: string;
};

export const FormComponent2 = (): JSX.Element => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        // Validar el formulario
        if (!formData.name) {
            setFormErrors({ ...formErrors, name: 'El nombre es obligatorio' });
        } else {
            setFormErrors({});
            console.log('Formulario enviado:', formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
            />
            {formErrors.name && <span>{formErrors.name}</span>}
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};
