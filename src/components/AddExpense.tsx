import React from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import type { expenseType } from '../context/ExpenseProvider.d';
import { formatDate } from '../context/expenseFunctions';
import { useExpenseContext } from '../context/useExpenseContext';
import { toast } from 'react-toastify';

const AddExpense: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<expenseType>();

  const { addExpense } = useExpenseContext();
  const onSubmit: SubmitHandler<expenseType> = (data) => {
    // console.log(data);
    if (addExpense) {
      addExpense({
        ...data,
        id: new Date().toISOString(),
        date: formatDate(data.date),
        title: data.title[0].toUpperCase() + data.title.slice(1),
      });
      toast('Expense Added Successfully !', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      reset();
    } else {
      toast.error('Failed to add expense: addExpense is undefined.', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  return (
    <div className="bg-(--primary-bgColor) p-5 flex text-white w-full text-xl flex-col gap-6 rounded-md">
      <p>AddExpense</p>
      <form className="flex flex-wrap gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={`${errors.title?.message || 'Title'}`}
          register={register}
        />

        <Input
          placeholder={`${errors.amount?.message || 'Amount'}`}
          register={register}
        />
        <Input
          placeholder={`${errors.category?.message || 'Category'}`}
          type="list"
          register={register}
        />
        <Input
          placeholder={`${errors.date?.message || 'Date'}`}
          type="date"
          register={register}
          control={control}
        />
        <Button style="grow-1 w-[100%]">Add</Button>
      </form>
    </div>
  );
};

export default AddExpense;
