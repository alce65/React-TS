import type { JSX } from "react";
import { NoteList } from "./components/01-basic/note-list";
import type { Note } from "./types/note";

export function NotesPage(): JSX.Element {


    const initialNotes: Note[] = [
        {
            id: "1",
            title: "Nota 1",
            content: "Contenido de la nota 1",
            isImportant: false,
        },
        {
            id: "2",
            title: "Nota 2",
            content: "Contenido de la nota 2",
            isImportant: true,
        },
        {
            id: "3",
            title: "Nota 3",
            content: "Contenido de la nota 3",
            isImportant: false,
        },
    ]

    return (
        <div>
            <h1>Notas</h1>
            <p>Esta es la página de notas.</p>
            <NoteList initialNotes={initialNotes} />
        </div>
    );
}
