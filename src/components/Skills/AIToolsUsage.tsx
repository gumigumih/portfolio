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
    color: 'bg-blue-500'
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
    color: 'bg-green-500'
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
        items: ['参加セミナー内容のまとめ音声作成']
      },
      {
        title: '顧客対応',
        items: ['お客様サポート']
      }
    ],
    icon: faLightbulb,
    color: 'bg-purple-500'
  }
];

export default function AIToolsUsage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-8">
        <p className="text-lg text-gray-600 text-center leading-relaxed">
          生成AIツールを積極的に活用し、開発効率の向上と創造性の拡張を実現しています。
          <br />
          各ツールの特性を理解し、適切な場面で使い分けることで、より高品質なアウトプットを生み出しています。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aiTools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`${tool.color} text-white p-3 rounded-lg`}>
                <FontAwesomeIcon icon={tool.icon} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
                <p className="text-sm text-gray-500">{tool.description}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                主な活用場面
              </h4>
              <div className="space-y-3">
                {tool.usage.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-600 border-b border-gray-200 pb-1">
                      {category.title}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
          AI活用による効果
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faCode} className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">開発効率の向上</h4>
            <p className="text-sm text-gray-600">
              コーディング時間の短縮と品質向上を実現
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">創造性の拡張</h4>
            <p className="text-sm text-gray-600">
              新しいアイデアの発想と問題解決の多様化
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faBrain} className="w-6 h-6" />
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