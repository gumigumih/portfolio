import { DividerTitle } from '../ui';

export default function AboutSection() {
  return (
    <section id="about">
      <DividerTitle>自己紹介</DividerTitle>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-10 md:py-12">
        <div className="text-xl leading-relaxed text-gray-700">
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">プロジェクト・設計・実装の視点をつなぐ。</p>
            <p className="mt-2 text-lg md:text-xl font-semibold text-gray-700">Technical PM / Playing Tech Lead</p>
          </div>
          <p className="mb-4 text-gray-700">
            プロジェクト全体、システム設計、実装のそれぞれの視点から課題を捉え、技術的な判断に必要な情報を整理します。
          </p>
          <p className="mb-4 text-gray-700">
            AI、リアルタイム通信、アバター、XRなどの技術を扱うプロジェクトで、<br />
            技術PM・プレイングテックリード・エンジニアの視点を切り替えながら関わってきました。
          </p>
          <p className="mb-4 text-gray-700">
            調査・検証・実装にも入りながら、設計と実装のギャップを埋め、技術判断の解像度を上げています。
          </p>
          <p className="mb-4 text-gray-700">
            技術だけ、進行管理だけ、デザインだけに閉じず、<br />
            ビジネス側の目的と開発現場の制約を翻訳しながら、関係者が判断できる状態を整えます。
          </p>
          <p className="mb-4 text-gray-700">
            決裁者の代わりに決めるのではなく、意思決定に必要な材料を揃え、決まった方針を要件や計画へ落とし込み、<br />
            関係者と連携しながら開発を前に進めることを大切にしています。
          </p>
        </div>
      </div>
    </section>
  );
}
