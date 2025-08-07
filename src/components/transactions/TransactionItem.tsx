import React from 'react';
// import image from '../../assets/cutlery.png';
import type { expenseType } from '../../context/ExpenseProvider.d';
import { getCategoryIcon } from '../../context/expenseFunctions';
interface Props {
  item: expenseType;
}

const TransactionItem: React.FC<Props> = ({ item }) => {
  console.log(item);
  return (
    <li className=" relative grid grid-cols-3 items-center  text-xl w-full  mt-5 py-1 ">
      <div className="flex gap-2 items-center">
        <img src={getCategoryIcon(item.category)} alt="" className="h-[3rem]" />
        <p>{item.title}</p>
      </div>
      <p className="text-sm text-center ">{item.date}</p>
      <p className="justify-self-end">${item.amount}</p>
    </li>
  );
};

export default TransactionItem;
