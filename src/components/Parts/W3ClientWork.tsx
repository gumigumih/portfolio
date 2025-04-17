
export default function W3ClientWork() {
  return (
    <div className="w-full px-10 flex flex-col items-center">
      <h3 className="text-[2.5rem] font-bold mt-[2rem] text-gray-600 text-center">
        <span className="relative inline-block">
          <span className={`absolute inset-x-0 bottom-1 h-4 bg-slate-400/40`}></span>
          <span className="relative z-1">クライアントワーク・その他</span>
        </span>
      </h3>
      <div className="mt-[2rem] space-y-4 text-center w-full max-w-[50rem] text-[1.2rem] md:text-[1.5rem] text-gray-600 font-bold">
        <a
          href="#work1"
          className="border border-gray-700 rounded-lg block p-2"
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          にじさんじのくじじゅうじ（VR収録支援・進行管理）
        </a>
        <a
          href="#work3"
          className="border border-gray-700 rounded-lg block p-2"
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          ARコンテンツによるお菓子パッケージプロモーション
        </a>
        <a
          href="#work4"
          className="border border-gray-700 rounded-lg block p-2"
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          バーチャル名刺背景ジェネレーター（50,000ユーザー獲得）
        </a>
        <a
          href="#work2"
          className="border border-gray-700 rounded-lg block p-2"
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          YouTube非公開日時予約管理WEBアプリ
        </a>
        <a
          href="#work9"
          className="border border-gray-700 rounded-lg block p-2"
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          文化財3DスキャンWEB公開システム
        </a>
        <a
          href="#work10"
          className="border border-gray-700 rounded-lg block p-2"
          onClick={(event) => {
            event.preventDefault(); // デフォルトのページジャンプを防ぐ
            const targetId = event.currentTarget.getAttribute('href')?.substring(1); // `#` を削除
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          24時間365日ストリーミング配信管理システム
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
