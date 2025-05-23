import { useContext, useEffect, type JSX } from 'react';
import { NoteItem3 } from './note-item';
import { NoteAdd3 } from './note-add';
import { AppContext } from '../../context/app.context';

export function NoteList4(): JSX.Element {
    const { notesContext2: useNotes } = useContext(AppContext);
    const { notes, loadNotes, addNote, deleteNote, updateNote } = useNotes;

    useEffect(() => {
        loadNotes();
    }, [loadNotes]);

    const template = (
        <>
            <h2>Lista de Notas 04</h2>
            <NoteAdd3 add={addNote} />
            <div className="note-list">
                {notes.map((note) => (
                    <NoteItem3
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
