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
    <li
      key={item.id}
      className=" relative grid  grid-cols-[1fr_1fr_.5fr] sm:grid-cols-[1fr_1fr_1fr] items-center  sm:text-xl w-full  mt-5 py-1 "
    >
      <div className="flex sm:gap-2 text-sm sm:text-lg items-center">
        <img
          src={getCategoryIcon(item.category)}
          alt={item.title}
          className="h-[3rem]"
        />
        <p>{item.title}</p>
      </div>
      <p className="text-xs sm:text-sm text-center ">{item.date}</p>
      <p className="justify-self-end">${item.amount}</p>
    </li>
  );
};

export default TransactionItem;
