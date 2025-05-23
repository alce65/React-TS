import { useState, type JSX } from 'react';
import type { DTONote, Note } from '../../types/note';
import { NoteItem } from './note-item';
import { NoteAdd } from './note-add';
import './note-list.css';

type Props = {
    initialNotes: Note[];
};

export function NoteList1({ initialNotes }: Props): JSX.Element {
    const [notes, setNotes] = useState(initialNotes);

    const deleteNote = (id: string): void => {
        console.log('Eliminar nota', id);
        setNotes(notes.filter((note) => note.id !== id));
    };

    const updateNote = (note: Note): void => {
        console.log('Cambiar nota', note.id);
        setNotes(notes.map((n) => (n.id === note.id ? { ...n, ...note } : n)));
    };

    const addNote = (note: DTONote): void => {
        console.log('Añadir nota', note);
        setNotes([...notes, { ...note, id: crypto.randomUUID() }]);
    };

    const template = (
        <>
            <h2>Lista de Notas 01</h2>
            <NoteAdd add={addNote} />
            <div className="note-list">
                {notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        note={note}
                        deleteNote={deleteNote}
                        updateNote={updateNote}
                    />
                ))}
            </div>
        </>
    );
    return template;
}
