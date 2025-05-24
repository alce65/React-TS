import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';
import { Route, Routes } from 'react-router';
export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    );
};
