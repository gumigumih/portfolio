import { VennDiagram, HighlightedText } from '../ui';

export default function VennIntro() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
      <VennDiagram
        className="mb-6 max-w-xl md:max-w-2xl"
        inside={{
          left: '技術理解',
          right: 'デザイン視点',
          top: 'プロジェクト推進力',
        }}
      />
      <div className="mt-6 text-center md:text-left text-xl">
        <p>
          だから——<HighlightedText variant="emphasis">任せて安心、プロジェクトを前に進めるPM</HighlightedText>
        </p>
      </div>
    </div>
  );
}
