import { render, screen, within } from '@testing-library/react';
import TransactionList from './TransactionList';
import { ExpenseContext, ExpenseProvider } from '../../context/ExpenseProvider';
import { ExpenseContextType } from '../../context/ExpenseProvider.d';

describe('TransactionList', () => {
  test('renders without items', () => {
    render(
      <ExpenseProvider>
        <TransactionList />
      </ExpenseProvider>
    );
    const message = screen.getByText(/no transactions found/i);
    expect(message).toBeInTheDocument();
  });
  test('renders with items', () => {
    const mockExpenses: ExpenseContextType = {
      balance: 20,
      expenses: [
        {
          id: '0',
          title: 'chicken',
          category: 'Food',
          amount: 12,
          date: '01-02-2023',
        },
        {
          id: '1',
          title: 'taxi',
          category: 'Transport',
          amount: 12,
          date: '01-02-2023',
        },
      ],
    };
    const { container } = render(
      <ExpenseContext.Provider value={mockExpenses}>
        <TransactionList />
      </ExpenseContext.Provider>
    );
    const liElem = within(container).getAllByRole('listitem');
    expect(liElem).toHaveLength(mockExpenses.expenses.length);
  });
});
