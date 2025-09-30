import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faLightbulb, 
  faCode, 
  faRocket,
  faChartLine,
  faEye,
  faCogs
} from '@fortawesome/free-solid-svg-icons';

const integratedProcess = [
  {
    step: '01',
    title: '要件分析・設計',
    icon: faUsers,
    color: 'bg-blue-500',
    textColor: 'text-blue-800',
    description: 'プロダクト要件の理解と設計',
    details: [
      '要件定義書の作成と整理',
      '機能一覧表の作成',
      'ユーザーフローの設計',
      '画面フローの設計'
    ]
  },
  {
    step: '02',
    title: 'デザイン設計',
    icon: faLightbulb,
    color: 'bg-yellow-500',
    textColor: 'text-yellow-800',
    description: 'UI/UXデザインとプロトタイプ作成',
    details: [
      'UI/UXデザインの設計',
      'プロトタイプの作成',
      'ユーザビリティの検証',
      'XDでの再利用可能なUI部品の整理'
    ]
  },
  {
    step: '03',
    title: '技術実装',
    icon: faCode,
    color: 'bg-green-500',
    textColor: 'text-green-800',
    description: 'フロントエンド・バックエンド開発',
    details: [
      '採用技術の選定',
      'フレームワーク準拠のアーキテクチャ設計',
      'WEB開発：フルスタック実装、Unity：実装委託',
      'データベース設計とAPI設計・実装'
    ]
  },
  {
    step: '04',
    title: 'テスト・改善',
    icon: faRocket,
    color: 'bg-purple-500',
    textColor: 'text-purple-800',
    description: '品質保証と継続的改善',
    details: [
      'ソフトウェアテスト一覧の作成',
      'ユーザーフィードバック収集',
      'ユーザーコミュニティの運営',
      '継続的な改善サイクル'
    ]
  }
];

const designPrinciples = [
  {
    title: 'シンプルで分かりやすい',
    description: '複雑な機能でも直感的に操作できるよう、シンプルなUIを心がける',
    icon: faUsers,
    color: 'bg-blue-500',
    textColor: 'text-blue-800'
  },
  {
    title: '実装可能な設計',
    description: '技術的な制約を理解し、実装可能で保守しやすいデザインを設計',
    icon: faChartLine,
    color: 'bg-green-500',
    textColor: 'text-green-800'
  },
  {
    title: 'ユーザーフィードバック重視',
    description: '実際のユーザーからの意見を重視し、継続的に改善を重ねる',
    icon: faEye,
    color: 'bg-purple-500',
    textColor: 'text-purple-800'
  }
];

const engineeringPrinciples = [
  {
    title: '再利用可能な部品設計',
    description: 'コンポーネント化とモジュール設計により、開発効率と保守性を向上させる',
    icon: faCode,
    color: 'bg-blue-500',
    textColor: 'text-blue-800'
  },
  {
    title: '責務の分離と疎結合',
    description: '単一責任原則に従い、各コンポーネントの責務を明確に分離する',
    icon: faCogs,
    color: 'bg-green-500',
    textColor: 'text-green-800'
  },
  {
    title: '技術選定の最適化',
    description: '既存の知見を最大限活かしつつ、プロジェクトに最適な技術を選定する',
    icon: faRocket,
    color: 'bg-purple-500',
    textColor: 'text-purple-800'
  }
];

export default function ProductDevelopmentSection() {
  return (
    <div className="max-w-6xl mx-auto px-10">
      {/* 統合プロダクト開発プロセス */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integratedProcess.map((process, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className={`${process.color} text-white p-2 rounded-lg`}>
                  <FontAwesomeIcon icon={process.icon} className="w-5 h-5" />
                </div>
                <span className={`text-2xl font-bold ${process.textColor}`}>{process.step}</span>
              </div>
              <h4 className={`text-xl md:text-2xl font-bold ${process.textColor} mb-2`}>{process.title}</h4>
              <p className="text-base md:text-lg text-gray-600 mb-4">{process.description}</p>
              <ul className="space-y-2">
                                  {process.details.map((detail, idx) => (
                    <li key={idx} className="text-base md:text-lg text-gray-600 flex items-start gap-2">
                      <span className={`w-2 h-2 ${process.color} rounded-full mt-2 flex-shrink-0`}></span>
                      {detail}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* デザイン原則 */}
      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
          デザイン原則
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designPrinciples.map((principle, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={principle.icon} className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-3 text-base md:text-lg">{principle.title}</h4>
              <p className="text-base md:text-lg text-gray-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* エンジニアリング原則 */}
      <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faCode} className="w-5 h-5" />
          エンジニアリング原則
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engineeringPrinciples.map((principle, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={principle.icon} className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-3 text-base md:text-lg">{principle.title}</h4>
              <p className="text-base md:text-lg text-gray-600">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
