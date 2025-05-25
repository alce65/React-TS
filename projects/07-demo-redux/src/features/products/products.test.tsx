import { render, screen } from '@testing-library/react';
import { Products } from './products';
import repo from './services/products.service';
import { PRODUCTS } from './services/products.data';
import { createRoutesStub } from 'react-router';
import { act } from 'react';
import type { Product } from './types/product';

describe('Products component', () => {
    const Stub = createRoutesStub([
        {
            path: '/products',
            Component: Products,
            loader(): Product[] {
                return [];
            },
        },
    ]);

    beforeEach(async () => {
        vi.spyOn(repo, 'getAllProducts').mockResolvedValue(PRODUCTS);
        await act(async () => {
            render(<Stub initialEntries={['/products']} />);
        });
    });

    test('should render project info', () => {
        const info = screen.getByText(/product/i);
        expect(info).toBeInTheDocument();
    });

    test('should render product list', async () => {
        const items = await screen.findAllByRole('listitem');
        expect(items.length).toBe(PRODUCTS.length);
    });
});
