import { useCallback, useReducer, useState } from 'react';

// import { ApiNotesRepository } from '../services/api.notes.repository';
import { notesReducer } from '../reducers/notes.reducer';
import * as ac from '../reducers/notes.action.creators';
import type { DTONote, Note } from '../types/note';
import {
    addNote,
    deleteNote,
    getNotes,
    updateNote,
} from '../services/repo.notes';

// const urlBase = 'http://localhost:3000/notes';

export type UseNotesFlux = {
    notes: Note[];
    loadState: string;
    loadNotes: () => Promise<void>;
    add: (note: DTONote) => Promise<void>;
    update: (note: Note) => Promise<void>;
    erase: (id: Note['id']) => Promise<void>;
};

export function useNotesFlux(): UseNotesFlux {
    // const repo = useMemo(() => new ApiNotesRepository(urlBase), []);

    // const [notes, setNotes] = useState<Note[]>([]);

    const [notes, dispatch] = useReducer(notesReducer, []);
    const [loadState, setLoadState] = useState('Loading');

    // Ejecuta el callback
    // una vez al renderizar el componente por vez primera
    // cada vez que cambie una variable del array de dependencias
    const loadNotes = useCallback(async () => {
        try {
            const notes = await getNotes();
            // setNotes(notes);
            dispatch(ac.loadNotesActionCreator(notes));
            setLoadState('Loaded');
            console.log('Load notes');
        } catch (error) {
            console.error((error as Error).message);
        }
    }, []);

    const add = async (note: DTONote): Promise<void> => {
        try {
            // 1 - Asíncrono : repo
            const fullNote = await addNote(note);
            // 2 - Síncrono: State
            // setNotes([...notes, fullNote]);
            dispatch(ac.createNoteActionCreator(fullNote));
        } catch (error) {
            console.error((error as Error).message);
        }
    };

    const update = async (note: Note): Promise<void> => {
        try {
            // 1 - Asíncrono : repo
            const updatedNote = await updateNote(note);
            // 2 - Síncrono: State

            // const newNotes = notes.map((item) =>
            //   item.id !== note.id ? item : updatedNote
            // );
            // setNotes(newNotes);
            dispatch(ac.updateNoteActionCreator(updatedNote));
        } catch (error) {
            console.error((error as Error).message);
        }
    };

    const erase = async (id: Note['id']): Promise<void> => {
        try {
            await deleteNote(id);
            // setNotes(notes.filter((item) => item.id !== note.id));
            dispatch(ac.deleteNoteActionCreator(id));
        } catch (error) {
            console.error((error as Error).message);
        }
    };

    return {
        notes,
        loadState,
        loadNotes,
        add,
        update,
        erase,
    };
}
