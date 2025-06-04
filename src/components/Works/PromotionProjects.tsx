export default function ClientWork() {
  return (
    <div className="w-full px-10 flex flex-col items-center">
      <h3 className="text-[2rem] md:text-[2.5rem] text-gray-600 font-bold mt-[2rem] text-center">
        <span className="relative inline-block">
          <span className="absolute inset-x-0 bottom-1 h-4 bg-slate-400/40"></span>
          <span className="relative z-1">販促・その他</span>
        </span>
      </h3>
      <div className="mt-[2rem] space-y-4 text-center w-full max-w-[50rem] text-[1.2rem] md:text-[1.5rem] text-gray-600 font-bold">
        <a
          href="#work10"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          24時間365日ストリーミング配信
          <br />
          <span className="text-[0.8em]">（配信管理システム）</span>
        </a>
        <a
          href="#work2"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          YouTube非公開日時予約管理
          <br />
          <span className="text-[0.8em]">（WEBアプリ化）</span>
        </a>
        <a
          href="#work3"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          ARコンテンツによるお菓子パッケージ
          <br />
          <span className="text-[0.8em]">（プロモーションARコンテンツ）</span>
        </a>
        <a
          href="#work4"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          バーチャル名刺背景ジェネレーター（50,000ユーザー獲得）
          <br />
          <span className="text-[0.8em]">（オンライン会議用背景画像生成）</span>
        </a>
      </div>
    </div>
  );
} 