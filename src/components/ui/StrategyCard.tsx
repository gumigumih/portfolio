import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Card from './Card';

interface StrategyCardProps {
  icon: IconDefinition;
  title: string;
  color: string;
  textColor: string;
  description: string;
  principles: string[];
  className?: string;
}

const StrategyCard: React.FC<StrategyCardProps> = ({
  icon,
  title,
  color,
  textColor,
  description,
  principles,
  className = ''
}) => {
  return (
    <Card className={`p-8 flex flex-col h-full ${className}`} hover={false}>
      <h3 className={`text-xl md:text-2xl font-bold mb-4 flex items-center justify-center gap-3 ${textColor}`}>
        <span className={`${color} text-white p-2 rounded-lg`}>
          <FontAwesomeIcon icon={icon} className="w-6 h-6" />
        </span>
        {title}
      </h3>
      
      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
        {description}
      </p>
      
      <ul className="space-y-3 flex-1">
        {principles.map((principle, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className={`${color} w-2 h-2 rounded-full mt-2 flex-shrink-0`} />
            <span className="text-base md:text-lg text-gray-700 leading-relaxed">
              {principle}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default StrategyCard;
