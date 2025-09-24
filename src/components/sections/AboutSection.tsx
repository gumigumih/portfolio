import { DividerTitle, NotebookPaper } from '../ui';

export default function AboutSection() {
  return (
    <section id="about">
      <DividerTitle>自己紹介</DividerTitle>
      <NotebookPaper>
        <div className="text-[1.2rem] leading-relaxed text-gray-700">
          <p className="mb-4 text-gray-700">
            新卒でベンチャー企業に入社し、PMとして案件を推進しながら、 <br />
            Webエンジニア兼UIデザイナーとして自社プロダクトの立ち上げから運用改善まで携わってきました。<br />

            要件定義からUI設計・実装、クライアント調整や改善施策の実行まで幅広く担当し、<br />
            「PM」「Webエンジニア」「UIデザイナー」の3つの立場を経験してきたことが、<br />
            技術・デザイン・ビジネスを横断してプロダクトを前に進める力につながっています。
          </p>
        </div>
      </NotebookPaper>
    </section>
  );
}
