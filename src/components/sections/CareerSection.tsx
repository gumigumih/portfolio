
import { DividerTitle, NotebookPaper, HighlightedText } from '../ui';

export default function CareerSection() {
  return (
    <section id="career">
      <DividerTitle>キャリアについて</DividerTitle>
      <NotebookPaper>
        <p className="text-[1.2rem] leading-relaxed text-gray-700">
          新卒で入社したベンチャー企業では、<HighlightedText>受託開発プロジェクトのPM</HighlightedText>を務めながら、<br />
          同時に<HighlightedText>自社プロダクトの立ち上げから運用</HighlightedText>まで一貫して担当しました。<br />
          要件定義、UI設計・実装、マーケティング、カスタマーサポートまで幅広い業務を経験し、<br />
          <HighlightedText>ユーザーの声に基づいた改善</HighlightedText>を重ね、5年間でプロダクトの成長に貢献しました。<br />
          <br />
          多岐にわたるプロジェクトをディレクションする中で、<br />
          <HighlightedText variant="emphasis">ジェネラリストとして幅広い経験を持ちながら、WebエンジニアリングとUIデザインという2つの専門性を強みとしています</HighlightedText>。<br />
          特定分野での深い技術力と、PM・ディレクション業務で身につけた<HighlightedText>幅広い知識・経験</HighlightedText>を併せ持ち、<br />
          開発・デザイン・ビジネスの橋渡し役として、プロダクト全体を最適化する意思決定ができるようになりました。<br />
          <br />
          また、他分野の専門家との交流を通じて、<HighlightedText>プロダクトを多角的に捉える</HighlightedText>ことができ、<br />
          改善施策の立案・実行から収益化まで一貫して携わり、<br />
          結果的に<HighlightedText>「フルサイクルエンジニア」</HighlightedText>と<HighlightedText>「PdM的立ち回り」</HighlightedText>を自然に行えるようになりました。<br />
          これはまさに今の時代に求められる<HighlightedText variant="emphasis">総合的なプロダクト開発力</HighlightedText>そのものです。<br />
          <br />
          特に<HighlightedText>ユーザーの声に基づいた改善</HighlightedText>と、<br />
          <HighlightedText>持続的な価値創造</HighlightedText>に深く関心を持っています。
        </p>
      </NotebookPaper>
    </section>
  );
} 