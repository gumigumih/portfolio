import React from "react";

export default function W1MajorProjects() {
  return (
    <div>
      <h3 className="text-[min(2.5vw,2.5rem)] font-bold mt-[min(2vw,2rem)] text-center">
        <span className={`bg-[linear-gradient(transparent_70%,#E3E8EB_30%)]`}>大規模プロジェクト</span>
      </h3>
      <div className='mt-[min(2vw,2rem)] space-y-4 text-center w-[min(50vw,50rem)] text-[min(1.5vw,1.5rem)] font-bold'>
        <a href='#work5' className='border border-gray-700 rounded-lg block p-2'
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          歴史体験型デジタルコンテンツ開発<br />
          歴史体験型デジタルコンテンツ活用・バスツアー企画<br />
          新規バスツアー企画・音声ガイド開発<br />
          <span className='text-[0.8em]'>（文化庁・観光庁補助金事業）</span>
        </a>
        <a href='#work13' className='border border-gray-700 rounded-lg block p-2'
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          NICE CAMERA<br />
          <span className='text-[0.8em]'>（リモート会議・ライブ配信向けアバターソフト）</span>
        </a>
        <a href='#work14' className='border border-gray-700 rounded-lg block p-2'
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          AI-KATA S2P<br />
          <span className='text-[0.8em]'>（AIキャラクター生成ツール）</span>
        </a>
      </div>
      <p className="text-[min(1vw,1rem)] mt-[min(2vw,2rem)]">
        このポートフォリオでは、カテゴリーごとに実績を紹介しています。<br />
        詳細な職歴の流れは職務経歴書をご覧ください。
      </p>
    </div>
  )
};
