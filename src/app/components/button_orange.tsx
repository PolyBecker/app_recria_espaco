'use client';
import React from 'react';

interface ButtonOrangeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ButtonOrange({ children, className = '', ...props }: ButtonOrangeProps) {
  return (
    <button
      className={`bg-[#F88208] hover:bg-[#FFA13F] active:bg-[#FFA13F] text-white font-semibold py-2 px-4 rounded ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
