// import { DatePicker } from '@mui/x-date-pickers';
// import React, { useState } from 'react';

interface Props {
  type?: string;
  placeholder?: string;
  style?: string;
  register: any;
}

const Input: React.FC<Props> = ({ placeholder, type = 'text', register }) => {
  // if (type === 'date') return <DatePicker label="Basic date picker" />
  if (type === 'list') {
    return (
      <>
        <input
          type="text"
          placeholder="Category"
          list="browsers"
          className="w-[100%] sm:w-[48%] p-2 border-1 border-gray-400 rounded-md grow-1"
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
      className="w-[48%] p-2 border-1 border-gray-400 rounded-md grow-1"
      {...register(placeholder?.toLowerCase(), {
        required: 'This field is required',
      })}
    />
  );
};

export default Input;
