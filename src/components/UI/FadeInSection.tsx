import { useInView } from 'react-intersection-observer';

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  duration?: number;
};

export default function FadeInSection({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  duration = 700,
}: FadeInSectionProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-all transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } duration-${duration} delay-${delay} ${className}`}
    >
      {children}
    </div>
  );
}
