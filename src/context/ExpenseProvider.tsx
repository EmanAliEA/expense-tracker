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
  const [currentID, setCurrentID] = useState<number>(0);
  const [expenses, setExpenses] = useState<expenseType[]>(
    initialExpense.expenses
  );
  const addExpense = (expense: expenseType) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { id: currentID, ...expense },
    ]);
    setBalance((prev) => prev + +expense.amount);
    setCurrentID((prevID) => prevID + 1);
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
