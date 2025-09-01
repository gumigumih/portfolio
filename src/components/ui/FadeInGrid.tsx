import React, { useEffect, useRef, useState } from 'react';

interface FadeInGridProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FadeInGrid: React.FC<FadeInGridProps> = ({
  children,
  className = '',
  delay = 100
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: `${delay}ms`
      }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
            transitionDelay: `${delay + (index * 150)}ms`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default FadeInGrid;
