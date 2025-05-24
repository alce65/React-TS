import './App.css';
import { AppRoutes } from '../../routes/app-routes';
import { Layout } from '../layout/layout';

export const App: React.FC = () => {
    const title = import.meta.env.VITE_APP_TITLE || 'Demo 06 - Routes';

    return (
        <>
            <Layout title={title}>
                <AppRoutes />
            </Layout>
        </>
    );
};
