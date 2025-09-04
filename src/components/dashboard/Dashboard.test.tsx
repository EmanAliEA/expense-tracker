import Dashboard from './Dashboard';
import { render, screen } from '@testing-library/react';

describe('Dashboard Component', () => {
  it('render Dashboard with balance and charts', () => {
    try {
      render(<Dashboard />);
    } catch (error) {
      console.error('Error rendering Dashboard:', error);
    }
    const element = screen.getByText(/dashboard/i);
    expect(element).toBeInTheDocument();
  });
});
