import React from 'react';
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import mainvisual from "../../assets/images/mainvisual@2x.png";

export function ProtectedPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useScrollSnap({ ref: containerRef as React.MutableRefObject<HTMLDivElement>, duration: 300 });

  return (
    <div ref={containerRef} className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="max-w-screen-xl w-full mx-auto">

        {/* セクション 1 */}
        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-end bg-gray-100 relative">
          <img src={mainvisual} alt="MainVisual" className="absolute h-full left-0 bottom-0" />
          <h1 className="text-4xl font-bold text-gray-800 montserrat-500">WADA MEGUMI</h1>
          <p className="mt-4 text-gray-600">ここに保護されたコンテンツを表示します。</p>
        </div>

        {/* セクション 2 */}
        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center bg-gray-200 relative">
          <h2 className="text-3xl font-bold text-gray-800">セクション 2</h2>
          <p className="mt-4 text-gray-600">2ページ目のコンテンツです。</p>
        </div>

        {/* セクション 3 */}
        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center bg-gray-300 relative">
          <h2 className="text-3xl font-bold text-gray-800">セクション 3</h2>
          <p className="mt-4 text-gray-600">3ページ目のコンテンツです。</p>
        </div>

      </div>
    </div>
  );
}
