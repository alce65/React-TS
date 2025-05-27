import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import * as ac from '../redux/slice';
import type { Product, ProductDTO } from '../types/product';
import { AppContext } from '../../../context/app.context';
import { use } from 'react';

type UseProducts = {
    products: Product[];
    loadProducts: () => Promise<void>;
    getProductById: (id: Product['id']) => Promise<Product>;
    addProduct: (productData: ProductDTO) => Promise<void>;
    updateProduct: (
        id: Product['id'],
        productData: ProductDTO,
    ) => Promise<void>;
    deleteProduct: (id: Product['id']) => Promise<void>;
};

export const useProducts = (): UseProducts => {
    const { repo } = use(AppContext);
    const { products } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();

    const loadProducts = async (): Promise<void> => {
        const products = await repo.getProducts();
        dispatch(ac.setProducts(products));
    };

    const getProductById = async (
        id: Product['id'],
    ): Promise<Product> => {
        const product = await repo.getProductById(id);
        return product;
    };

    const addProduct = async (productData: ProductDTO): Promise<void> => {
        const newProduct = await repo.createProduct(productData);
        dispatch(ac.addProduct(newProduct));
    };
    const updateProduct = async (
        id: Product['id'],
        productData: ProductDTO,
    ): Promise<void> => {
        const updatedProduct = await repo.updateProduct(id, productData);
        dispatch(ac.updateProduct(updatedProduct));
    };
    const deleteProduct = async (id: Product['id']): Promise<void> => {
        await repo.deleteProduct(id);
        dispatch(ac.deleteProduct(id));
    };

    return { products, loadProducts, 
        getProductById,
        addProduct, updateProduct, deleteProduct };
};
