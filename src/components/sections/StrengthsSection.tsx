import { VennDiagram, HighlightedText, Card } from '../ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faCode, faPalette } from '@fortawesome/free-solid-svg-icons';

const strengths = [
  {
    id: 'project-drive',
    title: 'プロジェクト推進力',
    icon: faRocket,
    iconBg: 'bg-amber-500',
    textColor: 'text-amber-800',
    footerBg: 'bg-amber-100',
    content: [
      'PMとして受託案件・自社プロダクトを推進し、要件定義・進行管理・ステークホルダー調整を一貫して担当してきました。',
      'ユーザー体験 × 技術的実現性 × 事業的要請を総合判断し、最適な優先順位を決定します。',
    ],
    conclusion: '「プロジェクト全体を任せても安心」 と言われる推進力を培ってきました',
  },
  {
    id: 'technical-understanding',
    title: '技術理解',
    icon: faCode,
    iconBg: 'bg-indigo-500',
    textColor: 'text-indigo-800',
    footerBg: 'bg-indigo-100',
    content: [
      'Webエンジニアとして実装・DB設計を経験しており、開発チームと同じ目線で課題や実現可能性を議論できます。',
      '技術的な制約を踏まえた現実的な提案や改善を実行します。',
    ],
    conclusion: '「できる／できない」だけでなく、「どうすればできるか」を考えられるPMです',
  },
  {
    id: 'design-perspective',
    title: 'デザイン視点',
    icon: faPalette,
    iconBg: 'bg-emerald-500',
    textColor: 'text-emerald-800',
    footerBg: 'bg-emerald-100',
    content: [
      'UI/UXデザイナーとして画面設計・改善を担当し、「直感的に理解できる体験」を重視して課金フローや登録画面を改善してきました。',
      'また、図解や資料化によって誰でも理解できるアウトプットを整備することを心がけています。',
    ],
    conclusion: 'ユーザー起点で迷わず使える体験を作ることを大切にしています',
  },
];

export default function StrengthsSection() {
  return (
    <>
      {/* ベン図 */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <VennDiagram
          className="mb-6 max-w-xl md:max-w-2xl"
          inside={{
            left: strengths[1].title,
            right: strengths[2].title,
            top: strengths[0].title,
          }}
          colors={{
            left: 'bg-indigo-300',
            right: 'bg-emerald-300',
            top: 'bg-amber-300',
          }}
        />
        <div className="mt-6 text-center md:text-left text-[1.2rem]">
          <p>
            だから——<HighlightedText variant="emphasis">任せて安心、プロジェクトを前に進めるPM</HighlightedText>
          </p>
        </div>
      </div>

      {/* 3つの強み（カードレイアウト） */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4 md:px-10">
        {strengths.map((strength) => (
          <Card key={strength.id} id={strength.id} className="border border-gray-200 flex flex-col !rounded-xl overflow-visible" hover={false}>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className={`text-xl font-bold mb-8 text-center flex items-center justify-center gap-3 ${strength.textColor}`}>
                <span className={`${strength.iconBg} text-white p-2 rounded-lg`}>
                  <FontAwesomeIcon icon={strength.icon} className="w-5 h-5" />
                </span>
                {strength.title}
              </h3>
              <div className="text-[1.2rem] text-gray-700 space-y-4 flex-grow">
                {strength.content.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>
            <div className={`relative p-4 pt-8 rounded-b-xl ${strength.footerBg}`}>
              <div className="absolute top-0 left-0 w-full h-4 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
              <p className={`font-semibold text-[1.2rem] ${strength.textColor}`}>
                {strength.conclusion}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}