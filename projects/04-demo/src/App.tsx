import type { JSX } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { UserInfo } from './components/sample8.2.overload.';
import { ItemsWrapper } from './components/sample9.props.effect';
import { FormFocus } from './components/sample10.focus';
import { FormFocusDS } from './components/sample10a.focus_ds';
import { TestHookComponent } from './hooks/sample11.hooks';
import { Sample11a } from './hooks/sample11b.consume.hook';

function App(): JSX.Element {
    return (
        <>
            <Header />
            <main>
                <section id="Sample8">
                    <h2>Componente DisplayField desde UserInfo</h2>
                    <UserInfo />
                </section>
                <section id="Sample9">
                    <h2>Componente Items desde ItemsWrapper</h2>
                    <ItemsWrapper />
                </section>
                <section id="Sample10">
                    <h2>Componente FormFocus</h2>
                    <FormFocus />
                </section>
                <section id="Sample10a">
                    <h2>Componente FormFocus Design System</h2>
                    <FormFocusDS />
                </section>
                <section id="Sample11">
                    <h2>Custom Hooks</h2>
                    <p className='subtitle'>useToggle desde TestHookComponent</p>
                    <TestHookComponent />
                    <p className='subtitle'>useLocalStorage desde Sample11a</p>
                    <Sample11a />
                </section>
            </main>
        </>
    );
}

export default App;
