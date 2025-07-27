import React, { Fragment } from 'react';
import TransactionItem from './TransactionItem';
import { useExpenseContext } from '../../context/useExpenseContext';

const TransactionList: React.FC = () => {
  const { expenses } = useExpenseContext();
  return (
    <ul className="flex flex-col p-4 bg-(--primary-bgColor) items-center rounded-md gap-1">
      {expenses.map((item) => (
        <Fragment key={item.id}>
          <TransactionItem item={item} />
          <div className="bg-gray-300/50 h-[.5px] w-19/20 mt-1"></div>
        </Fragment>
      ))}
      {/* <TransactionItem />
      <div className="bg-gray-300/50 h-[.5px] w-19/20 mt-1"></div> */}
    </ul>
  );
};

export default TransactionList;
