import type { Product } from '../types/product';
import reducer from './slice';
import * as ac from './slice';

describe('productsSlice', () => {
    const initialState = {
        products: [],
        loading: false,
        error: null,
    };

    const initialProducts: Product[] = [
        { id: '1-1-1-1-1-1', name: 'Product 1', price: 100 },
        { id: '2-2-2-2-2-2', name: 'Product 2', price: 200 },
    ];

    test('should handle setProducts', () => {
        const newProducts: Product[] = [
            { id: '1-1-1-1-1-1', name: 'Product 1', price: 100 },
            { id: '2-2-2-2-2-2', name: 'Product 2', price: 200 },
        ];
        const state = reducer(initialState, ac.setProducts(newProducts));
        expect(state.products).toEqual(newProducts);
    });

    test('should handle addProduct', () => {
        const newProduct: Product = {
            id: '3-3-3-3-3-3',
            name: 'Product 3',
            price: 300,
        };
        const state = reducer(initialState, ac.addProduct(newProduct));
        expect(state.products).toContainEqual(newProduct);
    });
    test('should handle updateProduct', () => {
        const updatedProduct: Product = {
            id: '1-1-1-1-1-1',
            name: 'Updated Product 1',
            price: 150,
        };
        const state = reducer(
            { ...initialState, products: initialProducts },
            ac.updateProduct(updatedProduct),
        );
        expect(state.products).toContainEqual(updatedProduct);
    });
    test('should handle deleteProduct', () => {
        const state = reducer(
            { ...initialState, products: initialProducts },
            ac.deleteProduct('1-1-1-1-1-1'),
        );
        expect(state.products).toHaveLength(1);
        expect(state.products[0].id).toBe('2-2-2-2-2-2');
    });
});
