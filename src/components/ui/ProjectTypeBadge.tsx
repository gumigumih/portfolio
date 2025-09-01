import React from 'react';
import { PROJECT_TYPE_LABELS, PROJECT_TYPE_COLORS } from '../../constants/projectTypes';

interface ProjectTypeBadgeProps {
  type: string;
  className?: string;
}

const ProjectTypeBadge: React.FC<ProjectTypeBadgeProps> = ({ type, className = '' }) => {
  const label = PROJECT_TYPE_LABELS[type] || type;
  const color = PROJECT_TYPE_COLORS[type] || 'bg-gray-500';
  
  return (
    <div className={`absolute top-2 right-2 px-2 py-1 rounded text-white text-[1.05rem] ${color} ${className}`}>
      {label}
    </div>
  );
};

export default ProjectTypeBadge;
