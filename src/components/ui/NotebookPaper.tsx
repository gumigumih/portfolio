import React from 'react';

interface NotebookPaperProps {
  children: React.ReactNode;
  className?: string;
}

const NotebookPaper: React.FC<NotebookPaperProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`relative bg-white shadow-lg rounded-[1rem] p-[3rem] max-w-4xl mx-auto my-20 
      before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,transparent_23%,#e5e7eb_24%,transparent_25%)] 
      before:bg-[length:100%_2.5rem] before:z-0 ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NotebookPaper;
