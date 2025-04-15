import React, { useRef } from 'react';
import imageMainvisual from '../../assets/images/mainvisual@2x.png';
import imageHeart from '../../assets/images/heart.png';
import SkillCircle from '../Parts/SkillCircle';
import SkillMap from '../Parts/SkillMap';
import SlideNav from '../Parts/SlideNav';
import W1MajorProjects from '../Parts/W1MajorProjects';
import W2ExternalTeamManagement from '../Parts/W2ExternalTeamManagement';
import W3ClientWork from '../Parts/W3ClientWork';
import Work1 from '../Parts/Work1';
import Work2 from '../Parts/Work2';
import Work3 from '../Parts/Work3';
import Work4 from '../Parts/Work4';
import Work5p1 from '../Parts/Work5_1';
import Work5p2 from '../Parts/Work5_2';
import Work6 from '../Parts/Work6';
import Work7 from '../Parts/Work7';
import Work8 from '../Parts/Work8';
import Work9 from '../Parts/Work9';
import Work10 from '../Parts/Work10';
import Work11 from '../Parts/Work11';
import Work12 from '../Parts/Work12';
import Work13 from '../Parts/Work13';
import Work14 from '../Parts/Work14';

export default function ProtectedPage() {
  return (
    <div className="w-screen">
      <SlideNav />

      <div className="max-w-screen-2xl w-full h-screen mx-auto">
        <div className="w-full aspect-[16/9] flex flex-col justify-center items-end relative">
          <img src={imageMainvisual} alt="MainVisual" className="absolute h-full left-0 bottom-0" />
          <div className="pt-[min(4vw,4rem)] mr-[min(5vw,5rem)] font-[Montserrat] font-medium text-right">
            <h1 className="text-[min(6vw,6rem)]">MEGUMI WADA</h1>
            <p className="text-[min(2.5vw,2.5rem)] -mt-[min(2vw,2rem)] text-gray-600">(旧姓 HAYASHIBARA)</p>
            <p className="text-[min(4vw,4rem)]">Director</p>
          </div>
        </div>

        <div
          id="ability"
          className="w-full aspect-[16/9] flex flex-col justify-center items-center relative"
        >
          <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2.5vw,2.5rem)] left-[min(1.5vw,1.5rem)] font-bold text-gray-600">
            能力
          </h2>

          <SkillCircle />
        </div>

        <div id="skill" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2.5vw,2.5rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
            テクニカルスキル
          </h2>

          <SkillMap />
        </div>

        <div
          id="majorProjects"
          className="w-full aspect-[16/9] flex flex-col justify-center items-center relative"
        >
          <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2.5vw,2.5rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
            実績
          </h2>

          <W1MajorProjects />
        </div>

        <div id="work5" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work5p1 />
        </div>

        <div id="" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work5p2 />
        </div>

        <div id="work6" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work6 />
        </div>

        <div id="work7" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work7 />
        </div>

        <div id="work8" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work8 />
        </div>

        <div id="work13" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work13 />
        </div>

        <div id="work14" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work14 />
        </div>

        <div
          id="externalTeamManagement"
          className="w-full aspect-[16/9] flex flex-col justify-center items-center relative"
        >
          <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2.5vw,2.5rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
            実績
          </h2>

          <W2ExternalTeamManagement />
        </div>

        <div id="work12" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work12 />
        </div>

        <div id="work11" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work11 />
        </div>

        <div
          id="clientWork"
          className="w-full aspect-[16/9] flex flex-col justify-center items-center relative"
        >
          <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2.5vw,2.5rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
            実績
          </h2>

          <W3ClientWork />
        </div>

        <div id="work1" className="w-full aspect-[16/9] relative">
          <Work1 />
        </div>

        <div id="work3" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work3 />
        </div>

        <div id="work4" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work4 />
        </div>

        <div id="work2" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work2 />
        </div>

        <div id="work9" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work9 />
        </div>

        <div id="work10" className="w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work10 />
        </div>

        <div id="last" className="w-full aspect-[16/9] flex flex-col justify-center items-end relative">
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
    </div>
  );
}
