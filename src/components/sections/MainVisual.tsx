import imageMainvisual from '../../assets/images/mainvisual.png';

export default function MainVisual() {
  return (
    <div
      id="top"
      className="w-full aspect-auto md:aspect-[16/9] flex flex-col md:flex-row justify-between items-center md:items-end relative"
    >
      {/* メインビジュアル */}
      <img
        src={imageMainvisual}
        alt="MainVisual"
        className="mt-20 md:mt-0 w-1/3 md:w-2/5 h-auto object-cover md:absolute md:left-0 md:bottom-0"
      />

      {/* テキストエリア */}
      <div className="md:absolute md:top-1/2 md:-translate-y-1/3 md:right-0 z-10 px-5 md:pr-[min(5vw,5rem)] font-[Montserrat] font-medium text-center md:text-right w-full md:w-auto">
        <p className="text-[min(3.5vw,1.4rem)] md:text-[min(2.8vw,2.8rem)]">Product Manager</p>
        <h1 className="text-[min(6.4vw,3.2rem)] md:text-[min(4.8vw,4.8rem)]">MEGUMI WADA</h1>
        <p className="text-[min(3vw,1.5rem)] md:text-[min(2.5vw,2.5rem)] -mt-2 text-gray-600">(旧姓 HAYASHIBARA)</p>
      </div>
    </div>
  );
} 