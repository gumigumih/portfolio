import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';

const productStrategyPrinciples = [
  {
    icon: faLightbulb,
    title: 'ユーザー価値を起点にする',
    color: 'bg-blue-500',
    textColor: 'text-blue-800',
    description: '直感的で分かりやすいUI/UXを第一に考え、技術よりも必要性を問い直す。',
    principles: [
      '直感的で分かりやすいUI/UX設計',
      'ユーザー視点での価値検証',
      '技術実現性よりも必要性の追求',
      'ユーザビリティを最優先とした設計'
    ]
  },
  {
    icon: faChartLine,
    title: '事業の持続性と成長を両立させる',
    color: 'bg-green-500',
    textColor: 'text-green-800',
    description: '短期的なKPIだけでなく、長期的にユーザーに愛されるプロダクトづくりを重視。',
    principles: [
      '長期的なユーザー愛着の構築',
      '継続的な改善と進化の重視',
      '事業成長とユーザー体験の両立',
      'インクリメンタルな進化の実現'
    ]
  },
  {
    icon: faUsers,
    title: 'ジェネラリストとしての意思決定力',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-800',
    description: '各領域の知識を統合し、事業全体のバランスを見据えた最適解を導き出す。',
    principles: [
      '各領域の知識を統合した最適解の導出',
      'スペシャリストの意見を尊重した意思決定',
      '事業全体のバランスを見据えた判断',
      '幅広い経験を活かした問題解決'
    ]
  }
];

export default function ProductStrategySection() {
  return (
    <div className="max-w-6xl mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productStrategyPrinciples.map((area, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full"
          >
            <h3 className={`text-[min(5vw,1.5rem)] font-bold mb-4 flex items-center justify-center gap-3 ${area.textColor}`}>
              <span className={`${area.color} text-white p-2 rounded-lg`}>
                <FontAwesomeIcon icon={area.icon} className="w-6 h-6" />
              </span>
              {area.title}
            </h3>
            
            <p className="text-[min(4vw,1.1rem)] text-gray-600 leading-relaxed mb-6">
              {area.description}
            </p>
            
            <ul className="space-y-3 flex-1">
              {area.principles.map((principle, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <div className={`${area.color} w-2 h-2 rounded-full mt-2 flex-shrink-0`} />
                  <span className="text-[min(4vw,1.1rem)] text-gray-700 leading-relaxed">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
