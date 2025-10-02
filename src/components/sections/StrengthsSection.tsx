import { VennDiagram, HighlightedText, Card } from '../ui';
import { strengths } from '../../data/strengths';

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
          circleColors={{
            left: 'bg-sky-300/50',
            right: 'bg-pink-300/50',
            top: 'bg-amber-300/50',
          }}
          textColors={{
            left: 'text-sky-800',
            right: 'text-pink-800',
            top: 'text-amber-900',
          }}
        />
        <div className="mt-6 text-center md:text-left text-xl">
          <p>
            だから——<HighlightedText variant="emphasis">任せて安心、プロジェクトを前に進めるPM</HighlightedText>
          </p>
        </div>
      </div>

      {/* 3つの強み（カードレイアウト） */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4 md:px-10">
        {strengths.map((strength) => (
          <Card
            key={strength.id}
            id={strength.id}
            className="border border-gray-200 !p-0 !rounded-xl overflow-visible"
            hover={false}
            title={strength.title}
            icon={strength.icon}
            iconBg={strength.iconBg}
            textColor={strength.textColor}
            footerContent={strength.conclusion}
            footerBg={strength.footerBg}
          >
            <div className="text-xl text-gray-700 space-y-4 flex-grow">
              {strength.content.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
