import { PRODUCTS } from './products.data';
import repo from './products.service';

// El Mock de productos es
// el array utilizado por el propio servicio
// en si mismo un mock de un fetch de datos

describe('Products Service', () => {
    test('should fetch all products', async () => {

        const products = await repo.getAllProducts();
        expect(products).toBeDefined();
        expect(products.length).toBeGreaterThan(0);
    });

    test('should fetch a product by ID', async () => {
        // Assuming this ID exists in the mock data
        const productId = PRODUCTS[0].id; 
        const product = await repo.getProductById(productId);
        expect(product).toBeDefined();
        expect(product.id).toBe(productId);
    });

    test('should throw an error for a non-existent product ID', async () => {
        const nonExistentId = crypto.randomUUID();
        await expect(
            repo.getProductById(nonExistentId),
        ).rejects.toThrow(`Product with ID ${nonExistentId} not found`);
    });
});
