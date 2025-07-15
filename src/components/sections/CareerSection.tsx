import React from 'react';

export default function CareerSection() {
  return (
    <div id="career">
      <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
        <span className="flex-grow h-px bg-gray-300"></span>
        キャリアについて
        <span className="flex-grow h-px bg-gray-300"></span>
      </h2>
      <div className="relative bg-white shadow-lg rounded-[1rem] p-[3rem] max-w-4xl mx-auto my-20 
        before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,transparent_23%,#e5e7eb_24%,transparent_25%)] 
        before:bg-[length:100%_2.5rem] before:z-0">
        <div className="relative z-10">
          <p className="text-[1.2rem] leading-relaxed text-gray-700">
            WEBエンジニアとしてキャリアをスタートし、<br />
            デザイン技術も活かしてWEBエンジニア兼UIデザイナーとして活動してきました。<br />
            現在は受注開発でチーム制作を行い、ディレクター職としてプロジェクト全体をリードしています。<br />
            <br />
            また、自社プロダクトの企画・開発・運営経験もあり、<br />
            設計・開発からUIデザイン、展示会運営、法務対応、カスタマーサポートまで幅広く担当してきました。<br />
            改善施策の立案・実行から収益化まで一貫して携わり、<br />
            結果的に「フルサイクルエンジニア」と「PdM的立ち回り」を自然に行っており、<br />
            これはまさに今の時代に求められる「越境型人材」そのものです。<br />
            <br />
            特にプロダクトライフサイクル全体での価値提供と、<br />
            持続的なビジネスモデルの構築に深く関心を持っています。<br />
            <br />
            今後はよりプロダクト志向を強め、<br />
            持続的な価値創造にコミットする役割を目指しています。
          </p>
        </div>
      </div>
    </div>
  );
} 