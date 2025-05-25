import './App.css';
import { AppRoutes } from '../../routes/app-routes';

export const App: React.FC = () => {
    const title = import.meta.env.VITE_APP_TITLE || 'Demo 06 - Routes 2';

    return (
        <>
            <AppRoutes title={title} />
        </>
    );
};
