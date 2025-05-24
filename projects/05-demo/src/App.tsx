import type { JSX } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { UserLogged } from './features/01-user-services/components/15.user';

function App(): JSX.Element {
    return (
        <>
            <Header />
            <main>
                <section id="Sample8">
                    <h2>Consumiendo ApiRepoService</h2>
                    <p>El componente utiliza el Hook useUer</p>
                    <p>El Hook utiliza el servicio</p>
                    <UserLogged key={1} />
                </section>
            </main>
        </>
    );
}

export default App;
