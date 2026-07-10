import React from 'react';

interface VennDiagramProps {
  labels?: {
    left?: string;
    right?: string;
    top?: string;
    center?: string;
  };
  inside?: {
    left?: string;
    right?: string;
    top?: string;
    center?: string;
  };
  circleColors?: {
    left?: string;
    right?: string;
    top?: string;
  };
  textColors?: {
    left?: string;
    right?: string;
    top?: string;
  };
  className?: string;
}

// シンプルな3円ベン図（Tailwindで重なり表現）
const VennDiagram: React.FC<VennDiagramProps> = ({
  labels = {},
  inside,
  circleColors = {},
  textColors = {},
  className = '',
}) => {
  const leftCircle = circleColors.left || 'border border-slate-300 bg-transparent';
  const rightCircle = circleColors.right || 'border border-slate-300 bg-transparent';
  const topCircle = circleColors.top || 'border border-slate-300 bg-transparent';
  const leftText = textColors.left || 'text-indigo-800';
  const rightText = textColors.right || 'text-emerald-800';
  const topText = textColors.top || 'text-amber-900';
  return (
    <div className={`relative w-full aspect-square ${className}`}>
      {/* circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[100%] h-[100%]">
            {/* Left */}
            <div className={`absolute w-[58%] h-[58%] rounded-full ${leftCircle} left-[0%] top-[42%]`} />
            {inside?.left && (
              <div className={`absolute w-[58%] h-[58%] left-[0%] top-[42%] flex items-center justify-center ${leftText} text-base md:text-base font-semibold text-center px-2 leading-snug`}>
                {inside.left}
              </div>
            )}
            {/* Right */}
            <div className={`absolute w-[58%] h-[58%] rounded-full ${rightCircle} right-[0%] top-[42%]`} />
            {inside?.right && (
              <div className={`absolute w-[58%] h-[58%] right-[0%] top-[42%] flex items-center justify-center ${rightText} text-base md:text-base font-semibold text-center px-2 leading-snug`}>
                {inside.right}
              </div>
            )}
            {/* Top */}
            <div className={`absolute w-[58%] h-[58%] rounded-full ${topCircle} left-1/2 -translate-x-1/2 top-[5%]`} />
            {inside?.top && (
              <div className={`absolute w-[58%] h-[58%] left-1/2 -translate-x-1/2 top-[5%] flex items-center justify-center ${topText} text-base md:text-base font-semibold text-center px-2 leading-snug`}>
                {inside.top}
              </div>
            )}
          {/* Center text */}
          {labels.center && !inside?.center && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-gray-700 text-base md:text-base font-semibold leading-snug">
              {labels.center}
            </div>
          )}
          {inside?.center && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-gray-800 text-base md:text-base font-semibold leading-snug">
              {inside.center}
            </div>
          )}
        </div>
      </div>
      {/* Labels */}
      {labels.left && (
        <div className="absolute left-[10%] bottom-[10%] text-gray-700 text-sm font-medium">{labels.left}</div>
      )}
      {labels.right && (
        <div className="absolute right-[10%] bottom-[10%] text-gray-700 text-sm font-medium text-right">{labels.right}</div>
      )}
      {labels.top && (
        <div className="absolute left-1/2 -translate-x-1/2 top-[6%] text-gray-700 text-sm font-medium">{labels.top}</div>
      )}
    </div>
  );
};

export default VennDiagram;
