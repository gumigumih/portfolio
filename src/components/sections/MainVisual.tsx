import imageMainvisual from '../../assets/images/mainvisual.png';

export default function MainVisual() {
  return (
    <div
      id="top"
      className="relative w-full min-h-[70vh] md:aspect-[16/9] flex flex-col md:flex-row justify-between items-center md:items-end text-slate-900"
    >
      {/* メインビジュアル */}
      <img
        src={imageMainvisual}
        alt="MainVisual"
        className="mt-20 md:mt-0 w-2/3 md:w-[42%] h-auto object-cover md:absolute md:left-10 md:bottom-10"
      />

      {/* テキストエリア */}
      <div className="md:absolute md:top-1/2 md:right-10 md:-translate-y-1/2 z-10 px-5 md:px-0 font-[Montserrat] font-medium text-center md:text-right w-full md:w-auto mt-6 md:mt-0">
        <p className="text-sm md:text-base tracking-widest uppercase text-gray-500">Product Manager</p>
        <h1 className="mt-2 text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900">MEGUMI WADA</h1>
        <div className="mt-6 flex justify-center md:justify-end gap-3">
          <a href="#projects" className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors">View Work</a>
          <a href="#last" className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800">Contact</a>
        </div>
      </div>
    </div>
  );
} 
