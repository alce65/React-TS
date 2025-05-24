import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router';
import type { Product } from './types/product.d';
import repo from './services/products.service';
import './products.css';

export const Products: React.FC = () => {
    const [items, setItems] = useState<Product[]>([]);

    const loadData = useCallback(async (): Promise<void> => {
        console.log('useCallback ejecuta loadData');
        const data = await repo.getAllProducts();
        setItems(() => data);
    }, []);

    useEffect(() => {
        console.log('useEffect ejecuta loadData');
        loadData();
    }, [loadData]);

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
                {items.map((item) => (
                    <li className="product-item" key={item.id}>
                        <Link to={'/product/' + item.id}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};
