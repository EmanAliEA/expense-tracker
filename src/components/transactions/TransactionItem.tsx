import React from 'react';
import image from '../../assets/cutlery.png';
import type { expenseType } from '../../context/ExpenseProvider.d';
interface Props {
  item: expenseType;
}

const TransactionItem: React.FC<Props> = ({ item }) => {
  console.log(item);
  return (
    <li className="flex relative justify-between text-xl w-full items-center mt-5 py-1 ">
      <div className="flex gap-2 items-center">
        <img src={image} alt="" className="h-[3rem]" />
        <p>{item.title}</p>
      </div>
      <p className="text-sm">{item.date}</p>
      <p>${item.amount}</p>
    </li>
  );
};

export default TransactionItem;
