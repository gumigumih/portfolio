export default function MajorProjects() {
  return (
    <div className="w-full px-10 flex flex-col items-center">
      <h3 className="text-[2rem] md:text-[2.5rem] text-gray-600 font-bold mt-[2rem] text-center">
        <span className="relative inline-block">
          <span className="absolute inset-x-0 bottom-1 h-4 bg-slate-400/40"></span>
          <span className="relative z-1">大規模プロジェクト</span>
        </span>
      </h3>
      <div className="mt-[2rem] space-y-4 text-center w-full max-w-[50rem] text-[1.2rem] md:text-[1.5rem] text-gray-600 font-bold">
        <a
          href="#work13"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          NICE CAMERA
          <br />
          <span className="text-[0.8em]">（リモート会議・ライブ配信向けアバターソフト）</span>
        </a>
        <a
          href="#work14"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          AI-KATA S2P
          <br />
          <span className="text-[0.8em]">（AIキャラクター生成ツール）</span>
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