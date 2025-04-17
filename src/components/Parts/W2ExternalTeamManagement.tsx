
export default function W2ExternalTeamManagement() {
  return (
    <div className="w-full px-10 flex flex-col items-center">
      <h3 className="text-[2.5rem] font-bold mt-[2rem] text-gray-600 text-center">
        <span className="relative inline-block">
          <span className={`absolute inset-x-0 bottom-1 h-4 bg-slate-400/40`}></span>
          <span className="relative z-1">外注管理・チームマネジメント</span>
        </span>
      </h3>
      <div className="mt-[2rem] space-y-4 text-center w-full max-w-[50rem] text-[1.2rem] md:text-[1.5rem] text-gray-600 font-bold">
        <a
          href="#work12"
          className="border border-gray-700 rounded-lg block p-2"
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
        <a
          href="#work11"
          className="border border-gray-700 rounded-lg block p-2"
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
      <p className="text-[1rem] mt-[2rem]">
        このポートフォリオでは、カテゴリーごとに実績を紹介しています。
        <br />
        詳細な職歴の流れは職務経歴書をご覧ください。
      </p>
    </div>
  );
}
