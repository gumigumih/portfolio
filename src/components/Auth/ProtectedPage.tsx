import React, { useRef } from 'react';
import imageMainvisual from '../../assets/images/mainvisual.png';
import imageHeart from '../../assets/images/heart.png';
import SkillCircle from '../Parts/SkillCircle';
import SkillMap from '../Parts/SkillMap';
import SlideNav from '../Parts/SlideNav';
import W1MajorProjects from '../Parts/W1MajorProjects';
import W2ExternalTeamManagement from '../Parts/W2ExternalTeamManagement';
import W3ClientWork from '../Parts/W3ClientWork';
import WorkSection from '../Parts/WorkSection';
import Work1Data from '../WorkData/work1.ts';
import Work2Data from '../WorkData/work2.ts';
import Work3Data from '../WorkData/work3.ts';
import Work4Data from '../WorkData/work4.ts';
import Work5Data from '../WorkData/work5.ts';
import Work6Data from '../WorkData/work6.ts';
import Work7Data from '../WorkData/work7.ts';
import Work8Data from '../WorkData/work8.ts';
import Work9Data from '../WorkData/work9.ts';
import Work10Data from '../WorkData/work10.ts';
import Work11Data from '../WorkData/work11.ts';
import Work12Data from '../WorkData/work12.ts';
import Work13Data from '../WorkData/work13.ts';
import Work14Data from '../WorkData/work14.ts';

export default function ProtectedPage() {
  return (
    <div className="relative max-w-screen-2xl w-full mx-auto md:pl-[12rem]">
      <SlideNav />

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
        <div className="md:absolute md:top-1/2 md:right-0 z-10 px-5 md:pr-[min(5vw,5rem)] font-[Montserrat] font-medium text-center md:text-right w-full md:w-auto">
          <h1 className="text-[min(8vw,4rem)] md:text-[min(6vw,6rem)]">MEGUMI WADA</h1>
          <p className="text-[min(3vw,1.5rem)] md:text-[min(2.5vw,2.5rem)] -mt-2 text-gray-600">(旧姓 HAYASHIBARA)</p>
          <p className="text-[min(5vw,2rem)] md:text-[min(4vw,4rem)]">Director</p>
        </div>
      </div>

      <div id="ability">
        <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
          <span className="flex-grow h-px bg-gray-300"></span>
          能力
          <span className="flex-grow h-px bg-gray-300"></span>
        </h2>
        <SkillCircle />
      </div>

      <div id="skill">
        <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
          <span className="flex-grow h-px bg-gray-300"></span>
          テクニカルスキル
          <span className="flex-grow h-px bg-gray-300"></span>
        </h2>

        <SkillMap />
      </div>

      <div id="majorProjects">
        <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
          <span className="flex-grow h-px bg-gray-300"></span>
          実績
          <span className="flex-grow h-px bg-gray-300"></span>
        </h2>

        <W1MajorProjects />
      </div>

      <div id="work5">
        <WorkSection {...Work5Data} />
      </div>

      <div id="work6">
        <WorkSection {...Work6Data} />
      </div>

      <div id="work7">
        <WorkSection {...Work7Data} />
      </div>

      <div id="work8">
        <WorkSection {...Work8Data} />
      </div>

      <div id="work13">
        <WorkSection {...Work13Data} />
      </div>

      <div id="work14">
        <WorkSection {...Work14Data} />
      </div>

      <div id="externalTeamManagement">
        <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
          <span className="flex-grow h-px bg-gray-300"></span>
          実績
          <span className="flex-grow h-px bg-gray-300"></span>
        </h2>

        <W2ExternalTeamManagement />
      </div>

      <div id="work12">
        <WorkSection {...Work12Data} />
      </div>

      <div id="work11">
        <WorkSection {...Work11Data} />
      </div>

      <div id="clientWork">
        <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
          <span className="flex-grow h-px bg-gray-300"></span>
          実績
          <span className="flex-grow h-px bg-gray-300"></span>
        </h2>

        <W3ClientWork />
      </div>

      <div id="work1" className="w-full aspect-[16/9] relative">
        <WorkSection {...Work1Data} />
      </div>

      <div id="work3">
        <WorkSection {...Work3Data} />
      </div>

      <div id="work4">
        <WorkSection {...Work4Data} />
      </div>

      <div id="work2">
        <WorkSection {...Work2Data} />
      </div>

      <div id="work9">
        <WorkSection {...Work9Data} />
      </div>

      <div id="work10">
        <WorkSection {...Work10Data} />
      </div>

      <div id="last" className="relative bg-white shadow-lg border border-gray-300 rounded-[1rem] p-[3rem] max-w-4xl mx-auto my-20">
        <img src={imageHeart} alt="" className="w-[20%] mx-auto mb-[2rem]" />
        <p className="text-[1.2rem] leading-relaxed text-gray-700">
          私は、プロダクトの品質向上とスムーズな運用を支えるディレクションを行っています。
          <br />
          技術とデザインの両面から、開発チーム・デザインチームと連携し、
          <br />
          ユーザーにとって使いやすい形を追求しながら、継続的に改善できる仕組みを作ることを大切にしています。
          <br />
          <br />
          開発・デザイン・運用の連携をスムーズにし、より良いプロダクトを作ることに貢献したいと考えています。
          <br />
          最後までご覧いただきありがとうございました。
          <br />
          ぜひお話しする機会をいただければ幸いです。お気軽にご連絡ください。
        </p>
        <p className="text-center text-[1.2rem] mt-[3rem] font-serif text-gray-700">
          和田 愛<br />
          <a href="mailto:info@meggumi.com" className="underline text-blue-500">info@meggumi.com</a>
        </p>
      </div>

    </div>
  );
}
