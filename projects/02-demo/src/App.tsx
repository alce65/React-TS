import type { JSX } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { ItemsWrapper } from './components/items/item.wrapper';
import { CountersContainer } from './components/counter/counters_container';

import { NotesPage } from './notes/notes.page';

function App(): JSX.Element {
    return (
        <>
            <Header />
            <CountersContainer />
            <ItemsWrapper />
            <NotesPage />

            <p className="read-the-docs">
                Proyecto con TS - React - Vite - Vitest
            </p>
        </>
    );
}

export default App;
