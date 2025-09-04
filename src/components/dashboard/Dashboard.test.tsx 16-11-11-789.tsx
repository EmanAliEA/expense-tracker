import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { ExpenseProvider } from '../../context/ExpenseProvider';

describe('Dashboard', () => {
  test('renders with 0 balance', () => {
    render(
      <ExpenseProvider>
        <Dashboard />
      </ExpenseProvider>
    );
    const balance = screen.getByText(/$0/i);
    expect(balance).toBeInTheDocument();
  });
});
