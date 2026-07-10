import React from 'react';

interface Achievement {
  title: string;
  value: string;
  description: string;
}

interface AchievementCardProps {
  achievement: Achievement;
  className?: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, className = '' }) => {
  return (
    <div
      className={`border border-slate-200 bg-slate-50 p-3 ${className}`}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {achievement.title}
      </div>
      <div className="mt-2 text-lg font-semibold leading-tight text-slate-900">
        {achievement.value}
      </div>
      <div className="mt-1 text-sm leading-relaxed text-slate-600 whitespace-pre-line">
        {achievement.description}
      </div>
    </div>
  );
};

export default AchievementCard;
