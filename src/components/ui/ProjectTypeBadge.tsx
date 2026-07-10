import React from 'react';
import { PROJECT_TYPE_LABELS } from '../../constants/projectTypes';

interface ProjectTypeBadgeProps {
  type: string;
  className?: string;
}

const ProjectTypeBadge: React.FC<ProjectTypeBadgeProps> = ({ type, className = '' }) => {
  const label = PROJECT_TYPE_LABELS[type] || type;
  
  return (
    <div className={`absolute top-3 right-3 border border-slate-300 bg-white/90 px-2 py-1 text-xs font-semibold text-slate-700 backdrop-blur ${className}`}>
      <span className="text-slate-400">領域</span>
      <span className="mx-1 text-slate-300">/</span>
      {label}
    </div>
  );
};

export default ProjectTypeBadge;
