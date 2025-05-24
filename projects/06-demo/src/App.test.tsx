import { render } from '@testing-library/react';
import App from './App';
import { Header } from './core/components/header/header';
import { Footer } from './core/components/footer/footer';
import { MemoryRouter } from 'react-router';

vi.mock('./core/components/header/header');
vi.mock('./core/components/footer/footer');

describe('App component', () => {
    test('should call components Header and Footer', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        expect(Header).toHaveBeenCalled();
        expect(Footer).toHaveBeenCalled();
    });
});
