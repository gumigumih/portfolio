export default function ExternalTeamManagement() {
  return (
    <div className="w-full px-10 flex flex-col items-center">
      <h3 className="text-[2rem] md:text-[2.5rem] text-gray-600 font-bold mt-[2rem] text-center">
        <span className="relative inline-block">
          <span className="absolute inset-x-0 bottom-1 h-4 bg-slate-400/40"></span>
          <span className="relative z-1">観光・地域振興系</span>
        </span>
      </h3>
      <div className="mt-[2rem] space-y-4 text-center w-full max-w-[50rem] text-[1.2rem] md:text-[1.5rem] text-gray-600 font-bold">
        <a
          href="#work9"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          文化財3Dスキャン
          <br />
          <span className="text-[0.8em]">（WEB公開システム開発）</span>
        </a>
        <a
          href="#work5"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          歴史体験型デジタルコンテンツ開発
          <br />
          歴史体験型デジタルコンテンツ活用・バスツアー企画
          <br />
          新規バスツアー企画・音声ガイド開発
          <br />
          <span className="text-[0.8em]">（文化庁・観光庁補助金事業）</span>
        </a>
      </div>
    </div>
  );
} 