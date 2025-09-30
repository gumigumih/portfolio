import React from 'react';

interface DividerTitleProps {
  children: React.ReactNode;
  className?: string;
}

const DividerTitle: React.FC<DividerTitleProps> = ({
  children,
  className = ''
}) => {
  return (
    <h2 className={`my-20 flex items-center gap-4 text-2xl font-bold text-gray-600 text-center ${className}`}>
      <span className="flex-grow h-px bg-gray-300"></span>
      {children}
      <span className="flex-grow h-px bg-gray-300"></span>
    </h2>
  );
};

export default DividerTitle;
