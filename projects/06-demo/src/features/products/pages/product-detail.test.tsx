import { act, render, screen } from '@testing-library/react';
import { ProductDetail } from './product-detail.tsx';
import { MemoryRouter, Route, Routes } from 'react-router';
import repo from '../services/products.service';
import type { Product } from '../types/product';

describe('ProductDetail component', () => {
    const product: Product = {
        id: '46392892-ac1e-4b5b-b395-978c318ef7ef',
        name: 'Product_1',
        description: 'Description of Product 1',
        price: 100,
        category: 'Category 1',
        image: 'https://example.com/product1.jpg',
    };
    const url = '/product/' + product.id;
    beforeEach(async () => {
        vi.spyOn(repo, 'getProductById').mockResolvedValue(product);
        await act(async () =>
            render(
                <MemoryRouter initialEntries={[url]}>
                    <Routes>
                        <Route
                            path="/product/:id"
                            element={<ProductDetail />}
                        ></Route>
                    </Routes>
                </MemoryRouter>,
            ),
        );
    });
    test('should render project info', () => {
        const info = screen.getByRole('heading', {
            name: /product detail/i,
        });
        expect(info).toBeInTheDocument();
    });

    test('should render product details', () => {
        const name = screen.getByText(new RegExp(product.name, 'i'));
        expect(name).toBeInTheDocument();
        if (product.description) {
            const description = screen.getByText(
                new RegExp(product.description, 'i'),
            );
            expect(description).toBeInTheDocument();
        }
        const price = screen.getByText(
            new RegExp(`${product.price}€`, 'i'),
        );
        expect(price).toBeInTheDocument();
        if (product.category) {
            const category = screen.getByText(
                new RegExp(product.category, 'i'),
            );
            expect(category).toBeInTheDocument();
        }
    });

    test('should return to home on button click', async () => {
        const button = screen.getByRole('button', { name: /inicio/i });
        expect(button).toBeInTheDocument();
        await act(async () => {
            button.click();
        });
        expect(window.location.pathname).toBe('/');
    });
});
