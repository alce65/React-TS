import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import type { Product, UUID } from '../types/product';
import { useProducts } from '../hooks/use-products';
import './product-detail.css';

export const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: UUID }>();
    const navigate = useNavigate();
    const { products, getProductById } = useProducts();
    const [product, setProduct] = useState<Product | null>(
        products.find((p) => p.id === id) || null,
    );

    useEffect(() => {
        if (product?.id === id) return;
        const loadData = async (id: UUID): Promise<void> => {
            console.log('Loading product data for ID:', id);
            const fetchedProduct: Product = await getProductById(id);
            setProduct(() => fetchedProduct);
        };
        loadData(id as UUID);
    }, [id, getProductById, product?.id]);

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
