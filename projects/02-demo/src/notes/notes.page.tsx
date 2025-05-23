import type { JSX } from 'react';
import { NoteList1 } from './components/01-basic/note-list';
import { NoteList2 } from './components/02-load-service/note-list';
import { NoteList3 } from './components/03-with-context/note-list';
import { NoteList4 } from './components/04-with-hook-context/note-list';
import { AppContextProvider } from './context/app.context.provider';
import { NOTES } from '../data/notes';

export function NotesPage(): JSX.Element {
    const initialNotes = NOTES;

    return (
        <AppContextProvider>
            <div>
                <h1>Notas</h1>

                <NoteList1 initialNotes={initialNotes} />
                <hr />
                <NoteList2 />
                <hr />
                <NoteList3 />
                <hr />
                <NoteList4 />
            </div>
        </AppContextProvider>
    );
}
