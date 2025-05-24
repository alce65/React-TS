import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';
import { Route, Routes } from 'react-router';
import { Layout } from '../components/layout/layout';
import { Products } from '../../features/products/products';
import { ProductDetail } from '../../features/products/pages/product-detail';

type Props = {
    title?: string;
};
export const AppRoutes: React.FC<Props> = ({ title }) => {
    return (
        <Routes>
            <Route path="/" element={<Layout title={title} />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
        </Routes>
    );
};
