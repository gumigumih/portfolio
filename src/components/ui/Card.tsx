import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  title?: string;
  icon?: IconDefinition;
  iconBg?: string;
  textColor?: string;
  subtitle?: string;
  id?: string;
  footerContent?: React.ReactNode;
  footerBg?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
  title,
  icon,
  iconBg,
  textColor,
  subtitle,
  id,
  footerContent,
  footerBg,
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-lg overflow-hidden';
  const hoverClasses = hover ? 'cursor-pointer hover:shadow-xl transition-shadow duration-300' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;
  
  return (
    <div id={id} className={classes} onClick={onClick}>
      <div className="p-6 flex flex-col flex-grow h-full">
        {title && icon && (
          <h3 className={`text-xl font-bold mb-8 text-center flex items-center justify-center gap-3 ${textColor}`}>
            <span className={`${iconBg} text-white p-2 rounded-lg`}>
              <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            </span>
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-[min(4vw,1.1rem)] text-gray-500 -mt-4 mb-4 text-center">{subtitle}</p>
        )}
        <div className="flex flex-col flex-grow">{children}</div>
        {footerContent && (
          <div className={`relative -m-6 mt-6 p-6 pt-8 rounded-b-xl ${footerBg}`}>
            <div className="absolute top-0 left-0 w-full h-4 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
            <p className={`font-semibold text-[1.2rem] ${textColor}`}>
              {footerContent}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
