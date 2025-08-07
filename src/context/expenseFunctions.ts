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
export function clearLocalStorage() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export function getCategoryIcon(category: string): string {
  switch (category) {
    case 'Food':
      return '/foodIcon.png';
    case 'Transport':
      return '/carIcon.png';
    case 'Utilities':
      return '/utilitiesIcon.png';
    default:
      return '❓';
  }
}

// export function getCategoryTotalsByMonth(expenses) {
//   const categoryMap = {
//     Food: [],
//     Transport: [],
//     Utilities: [],
//   };

//   const monthLabels: string[] = [];

//   // Group expenses by month and category
//   const grouped = {};

//   expenses.forEach((expense: expenseType) => {
//     const date = new Date(expense.date);
//     const month = date.toLocaleString('default', { month: 'short' });
//     const yearMonth = `${month} ${date.getFullYear()}`;

//     if (!grouped[yearMonth]) {
//       grouped[yearMonth] = {
//         Food: 0,
//         Transport: 0,
//         Utilities: 0,
//       };
//       monthLabels.push(yearMonth);
//     }

//     if (grouped[yearMonth][expense.category] !== undefined) {
//       grouped[yearMonth][expense.category] += expense.amount;
//     }
//   });

//   // Fill category arrays
//   monthLabels.forEach((month) => {
//     categoryMap.Food.push(grouped[month].Food || 0);
//     categoryMap.Transport.push(grouped[month].Transport || 0);
//     categoryMap.Utilities.push(grouped[month].Utilities || 0);
//   });

//   return {
//     foodData: categoryMap.Food,
//     transportData: categoryMap.Transport,
//     utilitiesData: categoryMap.Utilities,
//     months: monthLabels,
//   };
// }
