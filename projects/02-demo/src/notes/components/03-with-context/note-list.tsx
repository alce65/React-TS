import { useContext, useState, type JSX } from 'react';
import type { DTONote, Note } from '../../types/note';
import { NoteItem2 } from './note-item';
import { NoteAdd2 } from './note-add';
import { AppContext } from '../../context/app.context';

export function NoteList3(): JSX.Element {
    const { notesContext1: initialNotes } = useContext(AppContext);

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
            <h2>Lista de Notas 03</h2>
            <NoteAdd2 add={addNote} />
            <div className="note-list">
                {notes.map((note) => (
                    <NoteItem2
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
