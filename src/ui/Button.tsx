import React, { type ReactNode } from 'react';

interface Props {
  onclick?: () => void;
  children: ReactNode;
  style?: string;
}

const Button: React.FC<Props> = ({ onclick, children, style }) => {
  return (
    <button
      type="submit"
      onClick={onclick}
      className={`bg-[#4053cf] rounded-md text-white p-2 cursor-pointer hover:bg-[#4a5ce6] transition-colors duration-200 ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
