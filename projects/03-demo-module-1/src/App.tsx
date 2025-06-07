import type { JSX } from 'react';
import './App.css';
import { Header } from './components/header/header';
import { Button1, Button2 } from './components/sample3.buttons';
import { CounterWithEvent1 } from './components/sample4.counters';
import { Contacts } from './components/sample6.contacts.';
import { CourseRegistration } from './components/sample6a.course';
import { HelloWorld } from './components/sample1.hellow';
import { Counter1 } from './components/sample2.counters';
import { FormComponent2 } from './components/sample5.forms';
import {
    ProfileCard,
    type ProfileProps,
} from './components/sample7.profile';
import { Box } from './components/sample8.box';

function App(): JSX.Element {
    const profile: ProfileProps['profile'] = {
        type: 'user',
        name: 'Pepe',
        email: 'pepe@sample.com',
    };

    return (
        <>
            <Header />
            <main>
                <section id="Sample1">
                    <h2>Sample 1 - Hello World</h2>
                    <HelloWorld />
                </section>
                <section id="Sample2">
                    <h2>Sample 2 - Counters</h2>
                    <Counter1 initialCount={0} />
                </section>
                <section id="Sample3">
                    <h2>Sample 3 - Buttons</h2>
                    <Button1
                        variant="primary"
                        size="medium"
                        onClick={() => {
                            console.log('Button1 clicked');
                        }}
                    >
                        <b>Hacer clic</b>
                    </Button1>
                    <Button2
                        variant="primary"
                        size="medium"
                        onClick={() => {
                            console.log('Button2 clicked');
                        }}
                    >
                        Hacer clic
                    </Button2>
                </section>
                <section id="Sample4">
                    <h2>Sample 4 - Counter & Events</h2>
                    <CounterWithEvent1 initialCount={0} />
                </section>
                <section id="Sample5">
                    <h2>Sample 5 - Form</h2>
                    <FormComponent2 />
                </section>
                <section id="Sample6">
                    <h2>Sample 6 - Contacts</h2>
                    <p>
                        Ejemplo de formulario controlado: Registro en un curso
                    </p>
                    <Contacts />
                </section>
                <section id="Sample6a">
                    <h2>Sample 6a - Course Registration</h2>
                    <p>
                        Ejemplo de formulario NO controlado: Registro en un
                        curso
                    </p>
                    <CourseRegistration />
                </section>
                <section id="Sample7n8">
                    <h2>Sample 8 - Box</h2>
                    <h2>Sample 7 - Profile</h2>
                    <Box id='sample7' visible={true} className='box'>
                        <ProfileCard profile={profile} />
                    </Box>
                </section>

            </main>
        </>
    );
}

export default App;
