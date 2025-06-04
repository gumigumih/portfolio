export default function AvatarSupport() {
  return (
    <div className="w-full px-10 flex flex-col items-center">
      <h3 className="text-[2rem] md:text-[2.5rem] text-gray-600 font-bold mt-[2rem] text-center">
        <span className="relative inline-block">
          <span className="absolute inset-x-0 bottom-1 h-4 bg-slate-400/40"></span>
          <span className="relative z-1">アバター活用支援</span>
        </span>
      </h3>
      <div className="mt-[2rem] space-y-4 text-center w-full max-w-[50rem] text-[1.2rem] md:text-[1.5rem] text-gray-600 font-bold">
        <a
          href="#work12"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          「FukuokaVsapo」
          <br />
          <span className="text-[0.8em]">（アバター個別相談アプリ）</span>
        </a>
        <a
          href="#work11"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          TV番組「アニシャド応援部」
          <br />
          <span className="text-[0.8em]">（3Dキャラクター制作・撮影支援）</span>
        </a>
        <a
          href="#work1"
          className="border border-gray-700 rounded-lg block p-2 hover:bg-gray-100 transition duration-200"
          onClick={(event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href')?.substring(1);
            if (targetId) {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          にじさんじのくじじゅうじ
          <br />
          <span className="text-[0.8em]">（VR収録支援・進行管理）</span>
        </a>
      </div>
    </div>
  );
} 