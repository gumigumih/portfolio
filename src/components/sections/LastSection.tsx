
import HeartShape from '../ui/icons/HeartShape';
import { DividerTitle, NotebookPaper } from '../ui';

export default function LastSection() {
  return (
    <section id="last">
      <DividerTitle>さいごに</DividerTitle>
      <NotebookPaper>
        <div className="relative w-[100px] h-[100px] mx-auto mb-10 animate-pulse duration-700">
          <div className="absolute inset-0 blur-sm">
            <HeartShape />
          </div>
          <HeartShape />
        </div>
        <p className="text-[1.2rem] leading-relaxed text-gray-700 text-center">
          最後までご覧いただき、ありがとうございました。<br />
          もしご興味を持っていただけましたら、ぜひお気軽にご連絡ください。
        </p>
        <p className="text-right text-[1.2rem] mt-[3rem] text-gray-700">
          <span className="block text-[1.4rem] text-pink-500 mb-1">和田 愛</span>
          <a
            href="mailto:info@meggumi.com"
            className="inline-flex items-center gap-2 text-pink-400 underline hover:text-pink-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-pink-400"
            >
              <path d="M12 12.713l11.985-8.713H.015L12 12.713zM12 14.999l-12-8.714V20h24V6.285L12 14.999z" />
            </svg>
            info@meggumi.com
          </a>
        </p>
      </NotebookPaper>
    </section>
  );
} 