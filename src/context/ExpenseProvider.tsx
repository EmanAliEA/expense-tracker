import { createContext, useEffect, useState } from 'react';
import type { ExpenseContextType, expenseType } from './ExpenseProvider.d';
import { getLocalStorage, setLocalStorage } from './expenseFunctions';

interface Props {
  children: React.ReactNode;
}

const ExpenseContext = createContext({} as ExpenseContextType);
const initialExpense = getLocalStorage();
const ExpenseProvider: React.FC<Props> = (props) => {
  const [balance, setBalance] = useState<number>(initialExpense.balance);
  const [expenses, setExpenses] = useState<expenseType[]>(
    initialExpense.expenses
  );
  const addExpense = (expense: expenseType) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...expense }]);
    setBalance((prev) => prev + +expense.amount);
  };
  useEffect(() => {
    setLocalStorage({ balance, expenses });
  }, [expenses, balance]);
  const value: ExpenseContextType = {
    balance,
    expenses,
    addExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseProvider, ExpenseContext };
