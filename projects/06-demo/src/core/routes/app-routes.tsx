import React from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from '../components/layout/layout';

const Home = React.lazy(() => import('../../features/home/home'));
const Products = React.lazy(() => import('../../features/products/products'));
const ProductDetail = React.lazy(
    () => import('../../features/products/pages/product-detail'),
);
const About = React.lazy(() => import('../../features/about/about'));

type Props = {
    title?: string;
};
export const AppRoutes: React.FC<Props> = ({ title }) => {
    return (
        <Routes>
            <Route path="/" element={<Layout title={title} />}>
                <Route
                    index
                    element={
                        <React.Suspense fallback={<div>Loading Home...</div>}>
                            <Home />
                        </React.Suspense>
                    }
                />
                <Route
                    path="products"
                    element={
                        <React.Suspense
                            fallback={<div>Loading Products...</div>}
                        >
                            <Products />
                        </React.Suspense>
                    }
                />
                <Route
                    path="product/:id"
                    element={
                        <React.Suspense
                            fallback={<div>Loading Product Detail...</div>}
                        >
                            <ProductDetail />
                        </React.Suspense>
                    }
                />
                <Route
                    path="about"
                    element={
                        <React.Suspense fallback={<div>Loading About...</div>}>
                            <About />
                        </React.Suspense>
                    }
                />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
        </Routes>
    );
};
