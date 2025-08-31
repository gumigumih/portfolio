import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLightbulb, faBrain, faLayerGroup, faWrench, faUsers } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// サブカテゴリ名ごとのアイコン割り当て
const subCategoryIcons: Record<string, IconDefinition> = {
  '開発': faCode,
  'ドキュメント': faLayerGroup,
  '企画・アイデア': faLightbulb,
  'コミュニケーション': faWrench,
  '学習・検証': faBrain,
  '会議・プロジェクト': faLayerGroup,
  '学習・セミナー': faBrain,
  '顧客対応': faUsers,
};

const toolMetaList = [
  {
    name: 'Cursor',
    icon: faCode,
    color: 'bg-blue-500',
    titleColor: 'text-blue-800',
    dotColor: 'bg-blue-500',
    description: 'AI搭載コードエディタ',
    usage: [
      {
        title: '開発',
        items: ['コーディング', 'リファクタリング', 'コードレビュー']
      },
      {
        title: 'ドキュメント',
        items: ['要件定義書作成', '仕様作成', '文章作成']
      }
    ]
  },
  {
    name: 'ChatGPT & Gemini',
    icon: faBrain,
    color: 'bg-green-500',
    titleColor: 'text-green-800',
    dotColor: 'bg-green-500',
    description: '汎用AIチャットボット（併用）',
    usage: [
      {
        title: '企画・アイデア',
        items: ['企画アイディア出し', 'デザインアイディア（画像生成）']
      },
      {
        title: 'コミュニケーション',
        items: ['メール返信サポート', 'SNS用文章添削']
      },
      {
        title: '学習・検証',
        items: ['学習支援', 'ファクトチェック']
      }
    ]
  },
  {
    name: 'Notebook LM',
    icon: faLightbulb,
    color: 'bg-purple-500',
    titleColor: 'text-purple-800',
    dotColor: 'bg-purple-500',
    description: 'GoogleのAI研究アシスタント',
    usage: [
      {
        title: '会議・プロジェクト',
        items: ['会議の議事録のまとめ', 'プロジェクト文章の整理・活用']
      },
      {
        title: '学習・セミナー',
        items: ['参加セミナー内容のまとめ', 'まとめ音声作成']
      },
      {
        title: '顧客対応',
        items: ['お客様サポート']
      }
    ]
  },
];

const aiEffectCards = [
  {
    icon: faCode,
    bg: 'bg-blue-500',
    title: '開発効率の向上',
    description: 'コーディング時間の短縮と品質向上を実現',
  },
  {
    icon: faLightbulb,
    bg: 'bg-green-500',
    title: '創造性の拡張',
    description: '新しいアイデアの発想と問題解決の多様化',
  },
  {
    icon: faBrain,
    bg: 'bg-purple-500',
    title: '学習の加速',
    description: '新しい技術や概念の理解を迅速化',
  },
];

export default function AIToolsUsage() {
  return (
    <div className="max-w-6xl mx-auto px-10">
      <div className="mb-12">
        <p className="text-lg text-gray-600 text-center leading-relaxed">
          生成AIツールを積極的に活用し、開発効率の向上と創造性の拡張を実現しています。
          <br />
          各ツールの特性を理解し、適切な場面で使い分けることで、より高品質なアウトプットを生み出しています。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toolMetaList.map((tool) => (
          <div
            key={tool.name}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`${tool.color} text-white p-2 rounded-lg`}>
                <FontAwesomeIcon icon={tool.icon} className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-[min(5vw,1.5rem)] font-bold ${tool.titleColor}`}>{tool.name}</h3>
                <p className="text-[min(4vw,1.1rem)] text-gray-500">{tool.description}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700 text-[min(4vw,1.1rem)] uppercase tracking-wide mb-4">
                主な活用場面
              </h4>
              <div className="space-y-4">
                {tool.usage.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-2">
                    <span className="inline-flex items-center gap-2 font-bold text-gray-600 text-[min(4.5vw,1.15rem)] text-left mb-3 pb-1 bg-transparent">
                      {subCategoryIcons[category.title] && (
                        <FontAwesomeIcon icon={subCategoryIcons[category.title]} className="w-4 h-4" />
                      )}
                      {category.title}
                    </span>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3">
                          <span className={`w-2 h-2 ${tool.dotColor} rounded-full`}></span>
                          <span className="text-[min(4vw,1.1rem)] text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
        <h3 className="text-[min(5vw,1.5rem)] font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5" />
          AI活用による効果
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiEffectCards.map(card => (
            <div key={card.title} className="text-center">
              <div className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={card.icon} className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-3 text-[min(4vw,1.1rem)]">{card.title}</h4>
              <p className="text-[min(4vw,1.1rem)] text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 