import { useEffect, useState } from 'react';
import './product-detail.css';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import type { Product, UUID } from '../types/product';
import repo from '../services/products.service';

export const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: UUID }>();
    const loadedProduct = useLoaderData<Product>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(loadedProduct);
    useEffect(() => {
        if (loadedProduct.id === id) return;
        const loadData = async (id: UUID): Promise<void> => {
            console.log('Loading product data for ID:', id);
            // Simulate fetching product data
            const fetchedProduct: Product = await repo.getProductById(id);
            setProduct(() => fetchedProduct);
        };
        loadData(id as UUID);
    }, [id, loadedProduct]);

    const handleClick = (): void => {
        console.log('Button clicked, navigating to home');
        navigate('/');
    };

    return (
        <section className="products">
            <header>
                <h2>Product Detail</h2>
                <p>ID: id {id}</p>
            </header>
            <p>
                {!product && 'Loading product details...'}
                {product && (
                    <>
                        <strong>Name:</strong> {product.name} <br />
                        <strong>Description:</strong> {product.description}{' '}
                        <br />
                        <strong>Price:</strong> {`${product.price}€`} <br />
                        <strong>Category:</strong> {product.category} <br />
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                            width="200"
                        />
                    </>
                )}
            </p>
            <button onClick={handleClick}>Inicio</button>
        </section>
    );
};

export default ProductDetail;
