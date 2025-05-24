import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import { Layout } from './layout';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

vi.mock('../header/header');
vi.mock('../footer/footer');

describe('Layout component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Layout title="Demo 06"></Layout>
            </MemoryRouter>,
        );
    });

    test('should call components Header and Footer', () => {
        expect(Header).toHaveBeenCalled();
        expect(Footer).toHaveBeenCalled();
    });
});
