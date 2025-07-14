import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLightbulb, faBrain } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface UsageCategory {
  title: string;
  items: string[];
}

interface AITool {
  name: string;
  description: string;
  usage: UsageCategory[];
  icon: IconDefinition;
  color: string;
  titleColor: string;
  dotColor: string;
}

const aiTools: AITool[] = [
  {
    name: 'Cursor',
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
    ],
    icon: faCode,
    color: 'bg-blue-500',
    titleColor: 'text-blue-800',
    dotColor: 'bg-blue-500'
  },
  {
    name: 'ChatGPT & Gemini',
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
    ],
    icon: faBrain,
    color: 'bg-green-500',
    titleColor: 'text-green-800',
    dotColor: 'bg-green-500'
  },
  {
    name: 'Notebook LM',
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
    ],
    icon: faLightbulb,
    color: 'bg-purple-500',
    titleColor: 'text-purple-800',
    dotColor: 'bg-purple-500'
  }
];

export default function AIToolsUsage() {
  return (
    <div className="max-w-6xl mx-auto px-10">
      <div className="mb-8">
        <p className="text-lg text-gray-600 text-center leading-relaxed">
          生成AIツールを積極的に活用し、開発効率の向上と創造性の拡張を実現しています。
          <br />
          各ツールの特性を理解し、適切な場面で使い分けることで、より高品質なアウトプットを生み出しています。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiTools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`${tool.color} text-white p-2 rounded-lg`}>
                <FontAwesomeIcon icon={tool.icon} className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`text-lg font-bold ${tool.titleColor}`}>{tool.name}</h3>
                <p className="text-sm text-gray-500">{tool.description}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                主な活用場面
              </h4>
              <div className="space-y-3">
                {tool.usage.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-600 border-b border-gray-200 pb-1">
                      {category.title}
                    </h5>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <span className={`w-2 h-2 ${tool.dotColor} rounded-full`}></span>
                          <span className="text-sm text-gray-700">{item}</span>
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

      <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5" />
          AI活用による効果
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faCode} className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">開発効率の向上</h4>
            <p className="text-sm text-gray-600">
              コーディング時間の短縮と品質向上を実現
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">創造性の拡張</h4>
            <p className="text-sm text-gray-600">
              新しいアイデアの発想と問題解決の多様化
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faBrain} className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">学習の加速</h4>
            <p className="text-sm text-gray-600">
              新しい技術や概念の理解を迅速化
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 