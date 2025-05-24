import type { JSX } from 'react';
import './App.css';
import { Header } from './components/header/header';

import { UserContextProvider } from './features/02-user-context/context/user.context';
import { UserLoggedFromContext } from './features/02-user-context/components/16.user';
import { UserLogged } from './features/01-user-services/components/15.user';

function App(): JSX.Element {
    return (
        <>
            <Header />
            <main>
                <section id="user-services">
                    <h2>Consumiendo ApiRepoService</h2>
                    <p>El componente utiliza el Hook useUer</p>
                    <p>El Hook utiliza el servicio</p>
                    <UserLogged key={1} />
                </section>
                <section id="user-context">
                    <h2>Consumiendo Contexto</h2>
                    <p>El componente consume el contexto</p>
                    <p>El contexto utiliza el Hook useUer</p>
                    <p>El Hook utiliza el servicio ApiRepoService</p>
                    <UserContextProvider>
                        <UserLoggedFromContext key={1} />
                    </UserContextProvider>
                </section>
            </main>
        </>
    );
}

export default App;
