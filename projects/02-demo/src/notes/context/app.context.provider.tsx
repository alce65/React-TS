import type { JSX, ReactNode } from 'react';
import { AppContext, type AppContextStructure } from './app.context';
import { useNotes } from '../hooks/use.notes1';
import { NOTES } from '../data/notes';
import { useNotesFlux } from '../hooks/use.notes2';

type Props = {
    children: ReactNode;
};
export function AppContextProvider({ children }: Props): JSX.Element {
    const context: AppContextStructure = {
        notesContext1: NOTES,
        notesContext2: useNotes(),
        notesContext3: useNotesFlux(),
    };

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
}
