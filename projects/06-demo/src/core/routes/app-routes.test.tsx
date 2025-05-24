import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AppRoutes } from './app-routes';
import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';
import { Products } from '../../features/products/products';
import { ProductDetail } from '../../features/products/pages/product-detail';

vi.mock('../../features/home/home');
vi.mock('../../features/about/about');
vi.mock('../../features/products/products');
vi.mock('../../features/products/pages/product-detail');

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

    test('should route to home page', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <AppRoutes />
            </MemoryRouter>,
        );
        await waitFor(() => {
            expect(Home).toHaveBeenCalled();
        });
    });
    test('should route to products page', async () => {
        // const Products = vi.fn();
        // const ProductDetail = vi.fn();
        // vi.mock('../../features/products/products', () => ({
        //     __esModule: true,
        //     default: Products,
        // }));
        // vi.mock('../../features/products/pages/product-detail', () => ({
        //     __esModule: true,
        //     default: ProductDetail,
        // }));

        render(
            <MemoryRouter initialEntries={['/products']}>
                <AppRoutes />
            </MemoryRouter>,
        );

        await waitFor(() => {
            expect(Products).toHaveBeenCalled();
        });
    });

    test('should route to product detail page', async () => {
        render(
            <MemoryRouter initialEntries={['/product/1']}>
                <AppRoutes />
            </MemoryRouter>,
        );

        await waitFor(() => {
            expect(ProductDetail).toHaveBeenCalled();
        });
    });
    test('should route to about page', async () => {
        render(
            <MemoryRouter initialEntries={['/about']}>
                <AppRoutes />
            </MemoryRouter>,
        );

        await waitFor(() => {
            expect(About).toHaveBeenCalled();
        });
    });
});
