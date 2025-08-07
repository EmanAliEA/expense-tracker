export type expenseType = {
  id?: number;
  title: string;
  category: 'Food' | 'Transport' | 'Utilities';
  amount: number;
  date: string;
};

export interface ExpenseContextType {
  balance: number;
  expenses: expenseType[];
  // changeBalance: (amount: number) => void;
  addExpense?: (expense: expenseType) => void;
}
