import { useCallback, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import type { Product } from './types/product.d';
import repo from './services/products.service';
import './products.css';

export const Products: React.FC = () => {
    const loadedProducts = useLoaderData<Product[]>();
    const [products, setProducts] = useState<Product[]>(loadedProducts || []);

    const loadData = useCallback(async (): Promise<void> => {
        console.log('useCallback ejecuta loadData');
        const data = await repo.getAllProducts();
        setProducts(() => data);
    }, []);

    useEffect(() => {
        if (products.length !== 0) return;
        console.log('useEffect ejecuta loadData');
        loadData();
    }, [loadData, products.length]);

    return (
        <section className="products">
            <header>
                <h2>Welcome to the Demo 06 Project Products</h2>
                <p>
                    This project demonstrates the use
                    <br />
                    of TypeScript, React, Vite, and Vitest.
                </p>
            </header>
            <ul className="products-list">
                {products.map((item) => (
                    <li className="product-item" key={item.id}>
                        <Link to={'/product/' + item.id}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Products;
