// import { useSelector } from 'react-redux';
//import type { RootState } from '../../store';
import { useAppSelector } from '../../store/hooks';
import './home.css';

export const Home: React.FC = () => {
    // const { products } = useSelector((state: RootState) => state.products);
    const { products } = useAppSelector((state) => state.products);

    return (
        <section className="home">
            <h2>Welcome to the Demo 06 Project Home</h2>
            <p>
                This project demonstrates the use of TypeScript, React, Vite,
                and Vitest.
            </p>
            <p>Total de productos disponibles: {products.length}</p>
        </section>
    );
};

export default Home;
