import React from 'react';

interface HighlightedTextProps {
  children: React.ReactNode;
  variant?: 'default' | 'emphasis' | 'yellow';
  className?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  children,
  variant = 'default',
  className = ''
}) => {
  const variantClasses = {
    default: 'bg-gray-100 px-1 rounded font-semibold',
    emphasis: 'bg-yellow-100 px-1 rounded font-bold',
    yellow: 'bg-yellow-100 px-1 rounded font-bold'
  };

  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default HighlightedText;
