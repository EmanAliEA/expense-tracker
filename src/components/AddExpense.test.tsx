import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AddExpense from './AddExpense';
import { ExpenseProvider } from '../context/ExpenseProvider';
import { ToastContainer } from 'react-toastify';

describe('AddExpense', () => {
  test('render form ', () => {
    render(
      <ExpenseProvider>
        <AddExpense />
      </ExpenseProvider>
    );
    const inputElems = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    const list = screen.getByTestId('browser-datalist');
    expect(inputElems).toHaveLength(2);
    expect(button).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });

  describe('onClick', () => {
    test('check error massage when inputs are empty', async () => {
      render(
        <ExpenseProvider>
          <AddExpense />
        </ExpenseProvider>
      );
      fireEvent.click(screen.getByRole('button'));
      const inputElems = await screen.findAllByPlaceholderText(
        'This field is required'
      );
      expect(inputElems).toHaveLength(3);
    });
    test('empty field when enter all details and check toast', async () => {
      render(
        <ExpenseProvider>
          <AddExpense />
          <ToastContainer />
        </ExpenseProvider>
      );

      const titleElem = screen.getByPlaceholderText('Title');
      const amountElem = screen.getByPlaceholderText('Amount');
      const categoryElem = screen.getByPlaceholderText('Category');
      const dateElem = screen.getByPlaceholderText('Date');

      fireEvent.change(titleElem, { target: { value: 'food' } });
      fireEvent.change(amountElem, { target: { value: '20' } });

      fireEvent.change(categoryElem, { target: { value: 'Food' } });
      fireEvent.change(dateElem, { target: { value: '2025-08-12' } });

      fireEvent.click(screen.getByRole('button'));
      const allElem = [titleElem, amountElem, dateElem, categoryElem];
      await waitFor(async () => {
        allElem.forEach((elem) => {
          expect(elem).toHaveValue('');
        });
      });
      expect(
        await screen.findByText('Expense Added Successfully !')
      ).toBeInTheDocument();
    });
  });
});
