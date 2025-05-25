import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';
import { Products } from '../../features/products/products';
import { ProductDetail } from '../../features/products/pages/product-detail';
import { appRoutes } from './routes';

vi.mock('../../features/home/home');
vi.mock('../../features/about/about');
vi.mock('../../features/products/products');
vi.mock('../../features/products/pages/product-detail');

vi.mock('../../features/products/services/products.service');

describe('App component', () => {
    test('should render info for invalid routes', () => {
        const router = createMemoryRouter(appRoutes, {
            initialEntries: ['/invalid-route'],
        });
        render(<RouterProvider router={router} />);

        const element = screen.getByText('404 Not Found');
        expect(element).toBeInTheDocument();
    });

    test('should route to home page', async () => {
        const router = createMemoryRouter(appRoutes, { initialEntries: ['/'] });
        render(<RouterProvider router={router} />);
        await waitFor(() => {
            expect(Home).toHaveBeenCalled();
        });
    });
    test('should route to products page', async () => {
        const router = createMemoryRouter(appRoutes, {
            initialEntries: ['/products'],
        });
        render(<RouterProvider router={router} />);

        await waitFor(() => {
            expect(Products).toHaveBeenCalled();
        });
    });

    test('should route to product detail page', async () => {
        const router = createMemoryRouter(appRoutes, {
            initialEntries: ['/product/1'],
        });
        render(<RouterProvider router={router} />);

        await waitFor(() => {
            expect(ProductDetail).toHaveBeenCalled();
        });
    });

    test('should route to about page', async () => {
        const router = createMemoryRouter(appRoutes, {
            initialEntries: ['/about'],
        });
        render(<RouterProvider router={router} />);

        await waitFor(() => {
            expect(About).toHaveBeenCalled();
        });
    });
});
