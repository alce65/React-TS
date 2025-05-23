import { createContext } from 'react';
import { useNotes } from '../hooks/use.notes1';
import type { Note } from '../types/note';

export type AppContextStructure = {
    notesContext1: Note[];
    notesContext2: ReturnType<typeof useNotes>;
};

export const AppContext = createContext<AppContextStructure>(
    {} as AppContextStructure,
);
