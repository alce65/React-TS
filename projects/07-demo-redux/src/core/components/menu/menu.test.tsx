import { render, screen } from '@testing-library/react';
import { Menu } from './menu';
import {
    unstable_HistoryRouter as Router,
    type HistoryRouterProps,
} from 'react-router';
import { createMemoryHistory } from 'history';

describe('Menu component', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        history.push('/test');
        history.push = vi.fn();
        render(
            <Router
                history={history as unknown as HistoryRouterProps['history']}
            >
                <Menu />
            </Router>,
        );
    });
    afterEach(() => {
        vi.clearAllMocks();
    });
    test('should render menu', () => {
        let option = screen.getByText(/home/i);
        expect(option).toBeInTheDocument();
        option = screen.getByText(/about/i);
        expect(option).toBeInTheDocument();
        option = screen.getByText(/products/i);
        expect(option).toBeInTheDocument();
    });

    test('should respond when we click the link to home', async () => {
        const option = screen.getByText(/home/i) as HTMLAnchorElement;
        expect(option.href).toContain('/');
        option.click();
        // Check if history.push was called with the correct path
        expect(history.push).toHaveBeenCalledWith(
            expect.objectContaining({
                hash: '',
                pathname: '/',
                search: '',
            }),
            undefined,
            expect.anything(),
        );
    });
    test('should respond when we click the link to about', async () => {
        const option = screen.getByText(/about/i) as HTMLAnchorElement;
        expect(option.href).toContain('/about');
        option.click();
        // Check if history.push was called with the correct path
        expect(history.push).toHaveBeenCalledWith(
            expect.objectContaining({
                hash: '',
                pathname: '/about',
                search: '',
            }),
            undefined,
            expect.anything(),
        );
    });
    test('should respond when we click the link to products', async () => {
        const option = screen.getByText(/products/i) as HTMLAnchorElement;
        expect(option.href).toContain('/products');
        option.click();
        // Check if history.push was called with the correct path
        expect(history.push).toHaveBeenCalledWith(
            expect.objectContaining({
                hash: '',
                pathname: '/products',
                search: '',
            }),
            undefined,
            expect.anything(),
        );
    });
});
