import React from 'react';
import { type RouteObject } from 'react-router';
import { App } from '../components/app/App';
import Home from '../../features/home/home';

// La Home se deja No Lazy, como ejemplo de como sería
// const Home = React.lazy(() => import('../../features/home/home'));
const Products = React.lazy(() => import('../../features/products/products'));

const getFDetail = (): Promise<{ default: React.FC }> =>
    import('../../features/products/pages/product-detail');
// const ProductDetail = React.lazy(getFDetail);

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
                // loader: loadRootData,
            },
            {
                path: 'product/:id',
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
