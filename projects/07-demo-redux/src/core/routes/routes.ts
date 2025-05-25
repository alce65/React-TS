import React from 'react';
import { type RouteObject } from 'react-router';
import { App } from '../components/app/App';
import Home from '../../features/home/home';
import type { Product, UUID } from "../../features/products/types/product.d";

// La Home se deja No Lazy, como ejemplo de como sería
// const Home = React.lazy(() => import('../../features/home/home'));
const Products = React.lazy(() => import('../../features/products/products'));

const getFDetail = (): Promise<{ default: React.FC }> =>
    import('../../features/products/pages/product-detail');
// const ProductDetail = React.lazy(getFDetail);


const loadProductData = async (): Promise<Product[]> => {
    const {default: repo} = await import('../../features/products/services/products.service');
    return await repo.getAllProducts();
};

const loadProductById = async ({ params }: { params: Record<string, unknown> }): Promise<Product> => {
    const { default: repo } = await import('../../features/products/services/products.service');
    return await repo.getProductById(params.id as UUID);
};


export const appRoutes: RouteObject[] = [
    {
        path: '/',
        Component: App,
        children: [
            {
                // path: '/',
                index: true, // This will render the Home component at the root path
                Component: Home,
            },
            {
                path: '/products',
                Component: Products,
                loader: loadProductData,
            },
            {
                path: 'product/:id',
                loader: loadProductById,
                lazy: {
                    Component: async () => (await getFDetail()).default,
                },
            },
            {
                path: 'about',
                lazy: {
                    Component: async () =>
                        (await import('../../features/about/about')).About,
                },
            },
        ],
    },
];

// <Route
//     index
//     element={
//         <React.Suspense fallback=}>
//             <Home />
//         </React.Suspense>
//     }
// />
