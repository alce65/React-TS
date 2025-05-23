import type { JSX, SyntheticEvent } from "react";
import type { DTONote } from "../../types/note";


type Props = {
    add: (note: DTONote) => void;
};

export function NoteAdd({ add }: Props): JSX.Element {
    const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>): void => {
        ev.preventDefault();
        const form = ev.currentTarget;

        const newNote: DTONote = {
            title: (form.elements.namedItem("title") as HTMLInputElement).value,
            content: (form.elements.namedItem("content") as HTMLInputElement)
                .value,
            isImportant: false,
        };

        console.log(newNote);
        add(newNote);
    };

    return (
        <form aria-label="add-note" onSubmit={handleSubmit}>
            <legend>Añadir nota</legend>
            <input
                type="text"
                name="title"
                placeholder="Describe la nota"
                required
            />
            <input
                type="text"
                name="content"
                placeholder="Contenido de la nota"
                required
            />
            <button type="submit">Añadir</button>
        </form>
    );
}
