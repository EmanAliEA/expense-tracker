import type { ExpenseContextType, expenseType } from './ExpenseProvider.d';
const LOCAL_STORAGE_KEY = 'expenses';

// format date  to April 20, 2024
export function formatDate(date: string) {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate: string = dateObj.toLocaleDateString(undefined, options);
  // console.log('Formatted Date:', formattedDate);
  return formattedDate;
}

export function categoryPercentage(
  category: string,
  expenses: expenseType[]
): number {
  const result = expenses.reduce((acc: number, expense) => {
    if (expense.category === category) acc += 1;
    return acc;
  }, 0);
  return result;
}

export function setLocalStorage(expenses: ExpenseContextType) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
}

export function getLocalStorage(): ExpenseContextType {
  const storedExpenses = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storedExpenses) {
    return JSON.parse(storedExpenses) as ExpenseContextType;
  }
  return { balance: 0, expenses: [] }; // Return default structure if nothing is found
}
