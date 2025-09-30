export default function PrinciplesSection() {
  return (
    <section className="text-black">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-32">

        {/* /* タイトル（控えめ、装飾なし） */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
          私の考える「良い◯◯」
        </h2>
        <p className="mt-3 text-base md:text-lg mb-8">
          PMとしての意思決定・優先順位付けの拠り所にしている3つの「良い◯◯」です。
        </p>

        {/* 3カラムレイアウト（SP:1列 / MD+:3列） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 leading-relaxed">
          {/* 良いプロダクト */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">良いプロダクト</h3>
            <p className="mt-3 text-base md:text-lg">
              ユーザー（個人／組織）の課題を最小の形で解決し、施策の成果につなげること。
            </p>
          </div>

          {/* 良いUX */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">良いUX</h3>
            <p className="mt-3 text-base md:text-lg">
              ユーザーが迷わず最短で目的を達成し、そのプロセスで成果を実感できること。
            </p>
          </div>

          {/* 良いクリエイティブ */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">良いクリエイティブ</h3>
            <p className="mt-3 text-base md:text-lg">
              目的・目標・意図を的確に表現し、達成へ導く品質を備えていること。
            </p>
          </div>
        </div>

          {/* 区切り（下向きチェブロン） */}
          <div className="flex justify-center my-4 md:my-6" aria-hidden="true">
            <svg
              className="w-7 h-7 md:w-9 md:h-9 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

        {/* 大切にしていること */}
        <div className="pt-2 leading-relaxed max-w-3xl mx-auto">
          <h3 className="text-lg md:text-xl font-medium">大切にしていること</h3>
          <p className="mt-3 text-base md:text-lg">
            この3つのバランスをとることが、プロジェクト成功の鍵だと考えています。
          </p>
        </div>
      </div>
    </section>
  );
}
