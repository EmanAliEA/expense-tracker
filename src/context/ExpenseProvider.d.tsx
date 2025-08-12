export type expenseType = {
  id?: string;
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

export type yearMonth = {
  Food: number;
  Transport: number;
  Utilities: number;
};
