import type { JSX } from 'react';
import './App.css';
import { Header } from './components/header/header';

function App(): JSX.Element {
    return (
        <>
            <Header />
            <main></main>
        </>
    );
}

export default App;
