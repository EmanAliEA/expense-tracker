// import React, { useState } from 'react';

import BasicDatePicker from './DatePicker';

interface Props {
  type?: string;
  placeholder?: string;
  style?: string;
  register: any;
  control?: any;
}

const Input: React.FC<Props> = ({
  placeholder,
  type = 'text',
  register,
  control,
}) => {
  if (type === 'date') return <BasicDatePicker control={control} />;
  if (type === 'list') {
    return (
      <>
        <input
          type="text"
          placeholder="Category"
          list="browsers"
          className="w-[100%] sm:w-[48%] outline-none placeholder:text-sm sm:placeholder:text-lg   px-1  sm:px-2 border-1 border-gray-400 rounded-md grow-1"
          {...register(placeholder?.toLowerCase() || '', {
            required: 'This field is required',
          })}
        />
        <datalist id="browsers" data-testid="browser-datalist">
          <option value="Food" />
          <option value="Transport" />
          <option value="Utilities" />
        </datalist>
      </>
    );
  }

  return (
    <input
      placeholder={placeholder}
      type={type}
      className="w-[48%] p-1 sm:p-3 border-1 sm:text-sm placeholder:text-base  outline-none border-gray-400 rounded-md grow-1"
      {...register(placeholder?.toLowerCase(), {
        required: 'This field is required',
      })}
    />
  );
};

export default Input;
