import type { Product, UUID } from '../types/product.d';
import { PRODUCTS } from './products.data';

const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PRODUCTS);
        }, 500);
    });
};

const getProductById = async (id: UUID): Promise<Product> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = PRODUCTS.find((product) => product.id === id); // Example to find a product by ID
            if (!product) {
                reject(new Error(`Product with ID ${id} not found`));
                return;
            }
            resolve(product);
        }, 1000);
    });
};

export default {
    getAllProducts,
    getProductById,
};
