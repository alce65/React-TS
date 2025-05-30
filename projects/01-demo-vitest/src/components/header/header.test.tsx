import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Header component', () => {
    test('should render correctly', () => {
        const title = 'Demo';
        render(<Header title={title} />);
        const element = screen.getByText(title);
        expect(element).toBeInTheDocument();
    });
});
