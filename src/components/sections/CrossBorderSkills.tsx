import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faPalette, faCode, faUsers, faEye, faLightbulb, faBrain } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const categoryMetaList = [
  {
    name: 'プロダクト戦略',
    icon: faLayerGroup,
    iconBg: 'bg-blue-500',
    textColor: 'text-blue-800',
    dotColor: 'bg-blue-500',
    roleColor: 'text-blue-600',
    role: 'PdM、プロダクト戦略',
    items: [
      'ビジョン策定・ロードマップ',
      '市場/競合分析',
      '課金モデル・システム構築',
      '料金プラン・機能設計',
      '展示会運営',
      'ユーザーインタビュー・SNS反応分析',
      'Discord運営・意見収集',
      'パートナー/代理店設計',
      '法務・コンプラ対応',
    ],
  },
  {
    name: 'デザイン・UX',
    icon: faPalette,
    iconBg: 'bg-purple-500',
    textColor: 'text-purple-800',
    dotColor: 'bg-purple-500',
    roleColor: 'text-purple-600',
    role: 'メインUIデザイナー、UX設計者',
    items: [
      'UI/UXデザイン設計',
      'ユーザビリティテスト実施',
      'デザインシステム構築',
      'プロトタイピング・検証',
      'ブランディング・ロゴ制作',
      'プロモーション素材制作',
      '展示会ブースデザイン',
    ],
  },
  {
    name: 'エンジニアリング',
    icon: faCode,
    iconBg: 'bg-green-500',
    textColor: 'text-green-800',
    dotColor: 'bg-green-500',
    roleColor: 'text-green-600',
    role: 'メインWEBエンジニア、フルスタックエンジニア',
    items: [
      'Webアプリ開発',
      'GASアプリ開発',
      'DB設計',
      'システム設計',
      'コーポレートサイト制作・運営',
      'プロダクトサイト制作・運営',
      'Stripe月額課金システム構築',
    ],
  },
  {
    name: 'プロジェクトマネジメント',
    icon: faUsers,
    iconBg: 'bg-orange-500',
    textColor: 'text-orange-800',
    dotColor: 'bg-orange-500',
    roleColor: 'text-orange-600',
    role: 'PM、ディレクター',
    items: [
      'チームマネジメント',
      'タスク管理',
      'プロジェクト要件・仕様共有',
      '外注管理',
      'チームコミュニケーション促進',
      '技術・ノウハウ蓄積',
      'アバターアプリ用3Dキャラクター制作管理',
      'Unityアプリディレクション',
    ],
  },
  {
    name: 'カスタマーサクセス',
    icon: faEye,
    iconBg: 'bg-red-500',
    textColor: 'text-red-800',
    dotColor: 'bg-red-500',
    roleColor: 'text-red-600',
    role: 'CS、プロダクト運用',
    items: [
      '問い合わせサポート対応',
      '改善提案',
      'Discordコミュニティ運営',
      'アップデートお知らせ文作成',
      '法人向け契約更新サポート',
      'ユーザーフィードバック時の操作案内・サポート',
      'ヘルプページの作成・サポート体制の構築',
    ],
  },
  {
    name: '広報・マーケティング',
    icon: faBullhorn,
    iconBg: 'bg-pink-500',
    textColor: 'text-pink-800',
    dotColor: 'bg-pink-500',
    roleColor: 'text-pink-600',
    role: '広報・マーケター',
    items: [
      'プレスリリース',
      'SNS運用',
      'イベント告知・集客',
      '展示会企画・出展・運営',
      '展示会でのリード獲得・フォロー',
      '展示会でのキャンペーン実施・運営',
    ],
  },
];

const crossBorderEffectCards = [
  {
    icon: faCode,
    bg: 'bg-blue-500',
    title: '全体最適化の視点',
    description: '事業・組織全体を俯瞰し、最適な意思決定やリソース配分を実現。',
  },
  {
    icon: faLightbulb,
    bg: 'bg-green-500',
    title: 'コミュニケーションコスト削減',
    description: '複数領域を横断する知見で、部門間の連携や情報伝達をスムーズに。',
  },
  {
    icon: faBrain,
    bg: 'bg-purple-500',
    title: '迅速な意思決定',
    description: '幅広い経験を活かし、状況に応じた柔軟かつスピーディな判断が可能。',
  },
];

export default function CrossBorderSkills() {
  return (
    <div className="max-w-6xl mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryMetaList.map((cat) => (
          <div key={cat.name} className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-lg transition-all duration-300">
            <h4 className={`text-xl md:text-2xl font-bold ${cat.textColor} mb-3 flex items-center gap-3`}>
              <div className={`${cat.iconBg} text-white p-2 rounded-lg`}>
                <FontAwesomeIcon icon={cat.icon} className="w-5 h-5" />
            </div>
              {cat.name}
          </h4>
            <div className="space-y-3 text-base md:text-lg text-gray-700">
              {cat.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className={`w-2 h-2 ${cat.dotColor} rounded-full`}></span>
                  {item}
            </div>
              ))}
            </div>
            <div className={`mt-3 text-base md:text-lg ${cat.roleColor} font-medium`}>
              役割: {cat.role}
            </div>
          </div>
        ))}
          </div>
      {/* 越境型人材の価値は下部に横並びカードで表示 */}
      <div className="mt-8 bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5" />
            越境型人材の価値
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {crossBorderEffectCards.map(card => (
            <div key={card.title} className="text-center">
              <div className={`${card.bg} text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <FontAwesomeIcon icon={card.icon} className="w-5 h-5" />
            </div>
              <h4 className="font-semibold text-gray-800 mb-3 text-base md:text-lg">{card.title}</h4>
              <p className="text-base md:text-lg text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
