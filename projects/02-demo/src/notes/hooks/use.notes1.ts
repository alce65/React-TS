import { useCallback, useState } from 'react';
import type { DTONote, Note } from '../types/note';
import { getNotes } from '../services/repo.notes';

type UseNotes = {
    notes: Note[];
    loadNotes: () => Promise<void>;
    addNote: (note: DTONote) => void;
    updateNote: (note: Note) => void;
    deleteNote: (id: string) => void;
};

export function useNotes(): UseNotes {
    // const repo = useMemo(() => new ApiTasksRepository(urlBase), []);
    const [notes, setNotes] = useState<Note[]>([]);

    const loadNotes = useCallback(async () => {
        try {
            const loadedNotes = await getNotes();
            setNotes(loadedNotes);
        } catch (error) {
            const message = (error as Error).message;
            console.error('Error al cargar las notas', message);
        }
    }, []);

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

    return {
        notes,
        loadNotes,
        addNote,
        updateNote,
        deleteNote,
    };
}
