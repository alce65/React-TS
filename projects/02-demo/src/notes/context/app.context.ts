import { createContext } from 'react';
import { type UseNotes } from '../hooks/use.notes1';
import type { Note } from '../types/note';
import type { UseNotesFlux } from '../hooks/use.notes2';

export type AppContextStructure = {
    notesContext1: Note[];
    notesContext2: UseNotes;
    notesContext3: UseNotesFlux
};

export const AppContext = createContext<AppContextStructure>(
    {} as AppContextStructure,
);
