import { render, screen } from '@testing-library/react';
import { Menu } from './menu';

describe('Menu component', () => {
    test('should render project info', () => {
        render(<Menu />);
        let option = screen.getByText(/home/i);
        expect(option).toBeInTheDocument();
        option = screen.getByText(/about/i);
        expect(option).toBeInTheDocument();
        option = screen.getByText(/products/i);
        expect(option).toBeInTheDocument();
    });
});
