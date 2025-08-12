import { getCategoryIcon } from '../../context/expenseFunctions';
import { expenseType } from '../../context/ExpenseProvider.d';
import TransactionItem from './TransactionItem';
import { render, screen } from '@testing-library/react';

describe('TransactionItem', () => {
  test('renders transaction item correctly', () => {
    const currentItem: expenseType = {
      title: 'chicken burger',
      category: 'Food',
      amount: 10,
      date: '2023-10-01',
    };
    render(<TransactionItem item={currentItem} />);
    const title = screen.getByText(currentItem.title);
    const amount = screen.getByText(`$${currentItem.amount}`);
    const date = screen.getByText(currentItem.date);
    const categoryIcon = screen.getByRole('img', { name: currentItem.title });
    expect(title).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(categoryIcon).toHaveAttribute(
      'src',
      getCategoryIcon(currentItem.category)
    );
  });
});
