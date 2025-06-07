import { render, screen } from '@testing-library/react';
import { Products } from './products';
import repo from './services/products.service';
import { PRODUCTS } from './services/products.data';
import { MemoryRouter } from 'react-router';
import { act } from 'react';

describe('Products component', () => {
    beforeEach(async () => {
        vi.spyOn(repo, 'getAllProducts').mockResolvedValue(PRODUCTS);
        await act(async () => {
            render(
                <MemoryRouter>
                    <Products />
                </MemoryRouter>,
            );
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
