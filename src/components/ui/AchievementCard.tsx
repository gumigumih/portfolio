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
      className={`bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col items-center hover:scale-[1.03] transition-transform duration-200 ${className}`}
    >
      <div className="text-gray-700 font-semibold text-base mb-1 text-center">
        {achievement.title}
      </div>
      <div className="text-xl font-extrabold text-gray-800 mb-1 leading-none">
        {achievement.value}
      </div>
      <div className="text-gray-600 text-base text-center whitespace-pre-line">
        {achievement.description}
      </div>
    </div>
  );
};

export default AchievementCard;
