import { useEffect } from 'react';
import { Link } from 'react-router';
import './products.css';
import { useProducts } from './hooks/use-products';

export const Products: React.FC = () => {
    const { products, loadProducts } = useProducts();
    useEffect(() => {
        if (products.length !== 0) return;
        console.log('useEffect ejecuta loadData');
        loadProducts();
    }, [loadProducts, products.length]);

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
