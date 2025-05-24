import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AppRoutes } from './app-routes';
import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';

vi.mock('../../features/home/home');
vi.mock('../../features/about/about');

describe('App component', () => {
    test('should render info for invalid routes', () => {
        render(
            <MemoryRouter initialEntries={['/invalid-route']}>
                <AppRoutes />
            </MemoryRouter>,
        );
        const element = screen.getByText('404 Not Found');
        expect(element).toBeInTheDocument();
    });

    test('should route to home page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <AppRoutes />
            </MemoryRouter>,
        );
        expect(Home).toHaveBeenCalled();
    });
    test('should route to about page', () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <AppRoutes />
            </MemoryRouter>,
        );

        expect(About).toHaveBeenCalled();
    });
});
