import type { JSX } from 'react';
import type { Note } from '../../types/note';

type Props = {
    note: Note;
    deleteNote: (id: string) => void;
    updateNote: (note: Note) => void;
};

export function NoteItem1({ note, deleteNote, updateNote }: Props): JSX.Element {
    const handleDelete = (): void => {
        console.log('Eliminar nota', note.id);
        deleteNote(note.id);
    };

    const handleChange = (): void => {
        console.log('Cambiar nota', note.id);
        const updatedNote = { ...note, isImportant: !note.isImportant };
        updateNote(updatedNote);
    };

    const template = (
        <div className="note-item">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p>
                <input
                    type="checkbox"
                    checked={note.isImportant}
                    onChange={handleChange}
                />{' '}
                {note.isImportant ? 'Importante' : 'No importante'}
            </p>
            <button onClick={handleDelete}>Eliminar</button>
        </div>
    );
    return template;
}
