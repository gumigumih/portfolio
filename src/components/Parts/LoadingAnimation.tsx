import HeartShape from "./HeartShape";

export default function LoadingAnimation() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-[#fafafa]">
      {/* animate-pulse で全体にゆらぎを与える */}
      <div className="relative w-[100px] h-[100px] duration-300">

        {/* ドキドキ波動用のハート（ping） */}
        <div className="absolute inset-0 blur-xs animate-ping duration-1000">
          <HeartShape />
        </div>

        {/* ドキドキ波動用のハート（ping） */}
        <div className="absolute inset-0 opacity-75 animate-ping duration-1000">
          <HeartShape />
        </div>

        {/* 固定表示されるハート（上に重なる） */}
        <HeartShape />
      </div>

      <p className="text-sm text-pink-500 font-['Zen_Maru_Gothic']">確認中...</p>
    </div>
  );
}