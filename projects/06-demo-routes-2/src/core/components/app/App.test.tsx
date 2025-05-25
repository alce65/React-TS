import { render } from '@testing-library/react';
import { App } from './App';

import { MemoryRouter } from 'react-router';
import { AppRoutes } from '../../routes/app-routes';

vi.mock('../../routes/app-routes');

describe('App component', () => {
    test('should call components Header and Footer', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );
        expect(AppRoutes).toHaveBeenCalled();
    });
});
