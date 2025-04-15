
export default function W3ClientWork() {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-[min(2.5vw,2.5rem)] font-bold mt-[min(2vw,2rem)] text-center">
        <span className={`bg-[linear-gradient(transparent_70%,#E3E8EB_30%)]`}>クライアントワーク・その他</span>
      </h3>
      <div className="mt-[min(2vw,2rem)] space-y-4 text-center w-[min(50vw,50rem)] text-[min(1.5vw,1.5rem)] font-bold">
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
      <p className="text-[min(1vw,1rem)] mt-[min(2vw,2rem)]">
        このポートフォリオでは、カテゴリーごとに実績を紹介しています。
        <br />
        詳細な職歴の流れは職務経歴書をご覧ください。
      </p>
    </div>
  );
}
