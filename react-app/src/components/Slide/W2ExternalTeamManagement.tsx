import React from "react";

export default function W2ExternalTeamManagement() {
  return (
    <div>
      <h3 className="text-[min(2.5vw,2.5rem)] font-bold mt-[min(2vw,2rem)] text-center">
        <span className={`bg-[linear-gradient(transparent_70%,#E3E8EB_30%)]`}>外注管理・チームマネジメント</span>
      </h3>
      <div className='mt-[min(2vw,2rem)] space-y-4 text-center w-[min(50vw,50rem)] text-[min(1.5vw,1.5rem)] font-bold'>
        <a href='#work11' className='border border-gray-700 rounded-lg block p-2'
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          アバター個別相談アプリ「FukuokaVsapo」
        </a>
        <a href='#work10' className='border border-gray-700 rounded-lg block p-2'
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          TV番組「アニシャド応援部」3Dキャラクター制作・撮影支援
        </a>
      </div>
      <p className="text-[min(1vw,1rem)] mt-[min(2vw,2rem)]">
        このポートフォリオでは、特にマネジメント経験が強いプロジェクトを優先的に紹介しています。<br />
        詳細な職歴の流れは職務経歴書をご覧ください。
      </p>
    </div>
  )
};
