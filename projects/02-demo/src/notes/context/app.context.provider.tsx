import type { JSX, ReactNode } from "react";
import { AppContext, type AppContextStructure } from "./app.context";
import { useNotes } from "../hooks/use.notes1";
import { NOTES } from "../../data/notes";

type Props = {
    children: ReactNode;
};
export function AppContextProvider({ children }: Props): JSX.Element {
    const context: AppContextStructure = {
        notesContext1: NOTES,
        notesContext2: useNotes(),
    };

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
}
