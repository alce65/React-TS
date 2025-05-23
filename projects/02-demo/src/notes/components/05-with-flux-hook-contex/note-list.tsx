import { useContext, useEffect, type JSX } from 'react';
import { NoteItem3 } from './note-item';
import { NoteAdd3 } from './note-add';
import { AppContext } from '../../context/app.context';

export function NoteList5(): JSX.Element {
    const { notesContext3: useNotes } = useContext(AppContext);
    const { notes, loadNotes, add, update, erase } = useNotes;

    useEffect(() => {
        loadNotes();
    }, [loadNotes]);

    const template = (
        <>
            <h2>Lista de Notas 05</h2>
            <NoteAdd3 add={add} />
            <div className="note-list">
                {notes.map((note) => (
                    <NoteItem3
                        key={note.id}
                        note={note}
                        deleteNote={erase}
                        updateNote={update}
                    />
                ))}
            </div>
        </>
    );
    return template;
}
