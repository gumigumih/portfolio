import { DividerTitle } from '../ui';

export default function AboutSection() {
  return (
    <section id="about">
      <DividerTitle>自己紹介</DividerTitle>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-10 md:py-12">
        <div className="text-xl leading-relaxed text-gray-700">
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">「熱量を、動かす仕組みへ。」</p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-gray-700">Creative × Structure Director</p>
          </div>
          <p className="mb-4 text-gray-700">創る人が最大限に力を発揮できる環境”を整える。</p>
          <p className="mb-4 text-gray-700">
            アバター、AI、XRなどの技術を扱う現場で、<br />
            表現者やクリエイターが安心して“良いものづくり”に集中できるよう支えるディレクターです。
          </p>
          <p className="mb-4 text-gray-700">
            私自身が感情を動かす表現を生み出すわけではありません。<br />
            でも、その感情を支える・引き出す人たちの熱量を、<br />
            きちんとプロジェクトとして成立させることに力を注いできました。
          </p>
          <p className="mb-4 text-gray-700">
            スケジュール、体制、ツール、システム——<br />
            「どうすればチームが動けるか」を考え、<br />
            混乱しがちな現場を整えながら、成果に結びつけてきました。
          </p>
        </div>
      </div>
    </section>
  );
}
