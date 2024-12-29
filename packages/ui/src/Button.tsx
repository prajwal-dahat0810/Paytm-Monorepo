import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ onClick, children, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-lg text-sm max-sm:text-[12px] px-5 py-2 me-2 mb-2 ${className}`}
    >
      {children}
    </button>
  );
};
