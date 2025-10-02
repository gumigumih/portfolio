import { DividerTitle } from '../ui';

export default function AboutSection() {
  return (
    <section id="about">
      <DividerTitle>自己紹介</DividerTitle>
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-10 md:py-12">
        <div className="text-xl leading-relaxed text-gray-700">
          <p className="mb-4 text-gray-700">
            Webエンジニア・UIデザイナーとしてキャリアをスタートし、その後PMとして受託案件や自社プロダクトを推進してきました。<br/>技術・デザイン・ビジネスを横断しながら、プロジェクトを前に進めてきた経験があります。
          </p>
        </div>
      </div>
    </section>
  );
}
