import { DividerTitle } from '../ui';

export default function AboutSection() {
  return (
    <section id="about">
      <DividerTitle>自己紹介</DividerTitle>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-10 md:py-12">
        <div className="text-xl leading-relaxed text-gray-700">
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">熱量を、動かす仕組みへ。</p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-gray-700">Creative × Project Director</p>
          </div>
          <p className="mb-4 text-gray-700">良いものを作ろうとする人たち”が動ける環境を整える。</p>
          <p className="mb-4 text-gray-700">
            アバター、AI、XRなどの技術を扱うプロジェクトで、<br />
            多様な専門職の人たちが安心して力を発揮できるよう、<br />
            体制や仕組みを整えてきたディレクターです。
          </p>
          <p className="mb-4 text-gray-700">
            私は感情を動かすコンテンツを作る側ではありません。<br />
            でも、その想いや熱量を現実的に実現するための設計・進行・支援を担ってきました。
          </p>
          <p className="mb-4 text-gray-700">
            スケジュール、役割、ツール、システム──<br />
            プロジェクトが継続的に動くように整備し、<br />
            人の力がきちんと成果につながる環境をつくることを大切にしています。
          </p>
        </div>
      </div>
    </section>
  );
}
