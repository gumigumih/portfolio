import React from 'react';

interface SkillLevelProps {
  level: number;
  maxLevel?: number;
  className?: string;
  color?: string;
}

const SkillLevel: React.FC<SkillLevelProps> = ({
  level,
  maxLevel = 5,
  className = '',
  color = 'bg-blue-500'
}) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {Array.from({ length: maxLevel }, (_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full ${
            index < level ? color : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default SkillLevel;
