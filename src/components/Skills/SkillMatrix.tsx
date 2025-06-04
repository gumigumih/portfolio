const sections = [
  {
    title: 'プロダクトマネジメント',
    color: 'bg-pink-400/40',
    experiences: [
      '#ユーザー理解・分析',
      '#プロダクト戦略立案',
      '#要件定義・設計',
      '#プロジェクト推進',
      '#チームマネジメント',
      '#KPI設計・効果測定'
    ]
  },
  {
    title: '制作スキル',
    color: 'bg-teal-300/40',
    experiences: [
      '#UI/UXデザイン',
      '#フロントエンド開発',
      '#バックエンド開発',
      '#API設計・実装',
      '#システム設計',
      '#開発環境構築'
    ]
  }
];

type Props = {
  title: string;
  color: string;
  experiences: string[];
};

function Section({title, color, experiences}: Props) {
  return (
    <div className="flex-1 p-4">
      <h3 className="text-center text-[2rem] md:text-[2.5rem] font-bold mb-6">
        <span className="relative inline-block">
          <span className={`absolute inset-x-0 bottom-1 h-4 ${color}`}></span>
          <span className="relative z-1">{title}</span>
        </span>
      </h3>
      <ul className="text-[2.2vw] md:text-[1.1rem] lg:text-[1.3rem]">
        {experiences.map((experience, index) => (
          <li key={index} className="whitespace-pre-line text-nowrap mb-2">
            {experience}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillMatrix() {
  return (
    <div className="w-full max-w-[90vw] md:max-w-[64rem] lg:max-w-[72rem] mx-auto mt-[1.0rem]">
      <div className="bg-gray-800 py-3 px-6 text-white text-center font-bold text-nowrap text-[3vw] md:text-[1.3rem] lg:text-[1.6rem] mx-auto mb-8 max-w-[60%]">
        プロダクトマネジメント × 制作スキル
        <br />
        を活かしたプロダクトの創造
      </div>

      <div className="flex items-center gap-12">
        {sections.map((section, idx) => (
          <>
            <Section key={idx} {...section} />
            {idx === 0 && (
              <div className="text-gray-800 text-[4vw] md:text-[2rem] lg:text-[2.5rem] font-bold">
                ×
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
} 