import React from 'react';
import Dashboard from './dashboard/Dashboard';
import AddExpense from './AddExpense';
import TransactionList from './transactions/TransactionList';

const AppLayout: React.FC = () => {
  return (
    <div className="w-[60%] flex flex-col justify-center p-5 rounded-md text-white  mx-auto gap-4 bg-[#0e1217]">
      <Dashboard />
      <AddExpense />
      <p className="text-2xl">Recent Transactions</p>
      <TransactionList />
    </div>
  );
};

export default AppLayout;
