import { render } from '@testing-library/react';
import { App } from './App';

import { MemoryRouter } from 'react-router';
import { AppRoutes } from '../../routes/app-routes';
import { Layout } from '../layout/layout';

vi.mock('../layout/layout', () => ({
    Layout: vi.fn(({ children }) => <div>{children}</div>),
}));
vi.mock('../../routes/app-routes');

describe('App component', () => {
    test('should call components Header and Footer', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        expect(AppRoutes).toHaveBeenCalled();
        expect(Layout).toHaveBeenCalled();
    });
});
