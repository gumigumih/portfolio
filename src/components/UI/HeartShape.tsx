export default function HeartShape() {
  return (
    <div className="relative w-full h-full">
      {/* 左ハート */}
      <div className="absolute w-[50%] h-[80%] bg-pink-500 rounded-t-[25px] rotate-[-45deg] left-[14%]" />
      {/* 右ハート */}
      <div className="absolute w-[50%] h-[80%] bg-pink-500 rounded-t-[25px] rotate-[45deg] right-[14%]" />
    </div>
  );
}
