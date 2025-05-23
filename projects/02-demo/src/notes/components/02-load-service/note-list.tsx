import { useEffect, useState, type JSX } from 'react';
import type { DTONote, Note } from '../../types/note';
import { NoteItem1 } from './note-item';
import { NoteAdd1 } from './note-add';
import { getNotes } from '../../services/repo.notes';

export function NoteList2(): JSX.Element {
    const initialNotes: Note[] = [];
    const [notes, setNotes] = useState(initialNotes);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async (): Promise<void> => {
        const loadedNotes = await getNotes();
        setNotes(loadedNotes);
    };

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
            <h2>Lista de Notas 02</h2>
            <NoteAdd1 add={addNote} />
            <div className="note-list">
                {notes.map((note) => (
                    <NoteItem1
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
