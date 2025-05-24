import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';
import { Route, Routes } from 'react-router';
import { Layout } from '../components/layout/layout';

type Props = {
    title?: string;
};
export const AppRoutes: React.FC<Props> = ({ title }) => {
    return (
        <Routes>
            <Route path="/" element={<Layout title={title} />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
        </Routes>
    );
};
