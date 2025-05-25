import { render } from '@testing-library/react';
import { App } from './App';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

vi.mock('../header/header');
vi.mock('../footer/footer');

describe('App component', () => {
    test('should call components Header and Footer', () => {
        render(<App />);
        expect(Header).toHaveBeenCalled();
        expect(Footer).toHaveBeenCalled();
    });
});
