import React, { useRef } from 'react';
import imageMainvisual from '../../assets/images/mainvisual@2x.png';
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
    <div className="relative max-w-screen-2xl w-full mx-auto pl-[min(12vw,12rem)]">
      <SlideNav />

      <div id='top' className="w-full aspect-[16/9] flex flex-col justify-center items-end relative">
        <img src={imageMainvisual} alt="MainVisual" className="absolute h-full left-0 bottom-0" />
        <div className="pt-[min(4vw,4rem)] mr-[min(5vw,5rem)] font-[Montserrat] font-medium text-right">
          <h1 className="text-[min(6vw,6rem)]">MEGUMI WADA</h1>
          <p className="text-[min(2.5vw,2.5rem)] -mt-[min(2vw,2rem)] text-gray-600">(旧姓 HAYASHIBARA)</p>
          <p className="text-[min(4vw,4rem)]">Director</p>
        </div>
      </div>

      <div id="ability">
        <h2 className="my-20 flex items-center gap-4 text-[min(1.5vw,1.5rem)] font-bold text-gray-600 text-center">
          <span className="flex-grow h-px bg-gray-300"></span>
          能力
          <span className="flex-grow h-px bg-gray-300"></span>
        </h2>
        <SkillCircle />
      </div>

      <div id="skill">
        <h2 className="my-20 flex items-center gap-4 text-[min(1.5vw,1.5rem)] font-bold text-gray-600 text-center">
          <span className="flex-grow h-px bg-gray-300"></span>
          テクニカルスキル
          <span className="flex-grow h-px bg-gray-300"></span>
        </h2>

        <SkillMap />
      </div>

      <div id="majorProjects">
        <h2 className="my-20 flex items-center gap-4 text-[min(1.5vw,1.5rem)] font-bold text-gray-600 text-center">
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
        <h2 className="my-20 flex items-center gap-4 text-[min(1.5vw,1.5rem)] font-bold text-gray-600 text-center">
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
        <h2 className="my-20 flex items-center gap-4 text-[min(1.5vw,1.5rem)] font-bold text-gray-600 text-center">
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

      <div id="last">
        <div className="w-full">
          <img src={imageHeart} alt="" className="w-[40%] mx-auto -mt-[min(3vw,3rem)]" />
          <p className="text-center text-[min(1.5vw,1.5rem)] mt-[min(2vw,2rem)]">
            私は、プロダクトの品質向上とスムーズな運用を支えるディレクションを行っています。
            <br />
            技術とデザインの両面から、開発チーム・デザインチームと連携し、スムーズに進行できる環境を整えます。
            <br />
            また、ユーザーにとって使いやすい形を追求し、継続的に改善できる仕組みを作ることを大切にしています。
          </p>
        </div>
      </div>

      <div id="" className="w-full aspect-[16/9] flex flex-col justify-center items-end relative">
        <div className="w-full">
          <p className="text-center text-[min(1.5vw,1.5rem)] mt-[min(3vw,3rem)]">
            最後までご覧いただきありがとうございます。
            <br />
            開発・デザイン・運用の連携をスムーズにし、より良いプロダクトを作ることに貢献したいと考えています。
            <br />
            ぜひお話しする機会をいただければ幸いです。お気軽にご連絡ください。
          </p>
          <p className="text-center text-[min(1.5vw,1.5rem)] mt-[min(3vw,3rem)]">
            和田 愛<br />
            info@meggumi.com
          </p>
        </div>
      </div>
    </div>
  );
}
