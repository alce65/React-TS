import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product, UUID } from '../types/product';

type ProductsState = {
    products: Product[];
    loading: boolean;
    error: string | null;
};

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const updatedProduct = action.payload;
            const index = state.products.findIndex(
                (p) => p.id === updatedProduct.id,
            );
            if (index !== -1) {
                state.products[index] = updatedProduct;
            }
        },
        deleteProduct: (state, action: PayloadAction<UUID>) => {
            state.products = state.products.filter(
                (p) => p.id !== action.payload,
            );
        },
    },
});

export default productsSlice.reducer;
export const { setProducts, addProduct, updateProduct, deleteProduct } =
    productsSlice.actions;
