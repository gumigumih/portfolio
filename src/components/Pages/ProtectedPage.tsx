import imageMainvisual from '../../assets/images/mainvisual.png';
import SkillMatrix from '../Skills/SkillMatrix.tsx';
import ProductManagementSkills from '../Skills/ProductManagementSkills.tsx';
import TechnicalSkillMap from '../Skills/TechnicalSkillMap.tsx';
import SlideNav from '../Layout/SlideNav.tsx';
import MajorProjects from '../Works/MajorProjects.tsx';
import TourismProjects from '../Works/TourismProjects.tsx';
import PromotionProjects from '../Works/PromotionProjects.tsx';
import AvatarSupport from '../Works/AvatarSupport.tsx';
import WorkSection from '../Layout/WorkSection.tsx';
import Work1Data from '../Works/Data/work1.ts';
import Work2Data from '../Works/Data/work2.ts';
import Work3Data from '../Works/Data/work3.ts';
import Work4Data from '../Works/Data/work4.ts';
import Work5Data from '../Works/Data/work5.ts';
import Work6Data from '../Works/Data/work6.ts';
import Work7Data from '../Works/Data/work7.ts';
import Work8Data from '../Works/Data/work8.ts';
import Work9Data from '../Works/Data/work9.ts';
import Work10Data from '../Works/Data/work10.ts';
import Work11Data from '../Works/Data/work11.ts';
import Work12Data from '../Works/Data/work12.ts';
import Work13Data from '../Works/Data/work13.ts';
import Work14Data from '../Works/Data/work14.ts';
import HeartShape from '../UI/HeartShape.tsx';
import FadeInSection from '../UI/FadeInSection.tsx';

export default function ProtectedPage() {
  return (
    <div className="relative max-w-screen-2xl w-full mx-auto md:pl-[12rem]">
      <SlideNav />

      <FadeInSection>
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
      </FadeInSection>

      <FadeInSection>
        <div id="ability">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            強み
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>
          <SkillMatrix />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="productManagementSkills">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            プロダクトマネジメントスキル
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>
          <ProductManagementSkills />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="technicalSkills">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            テクニカルスキル
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>

          <TechnicalSkillMap />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="majorProjects">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            プロダクト開発・運営
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>

          <MajorProjects />
        </div>
      </FadeInSection>

      {/* プロダクト開発・運営の案件 */}
      <FadeInSection>
        <div id="work13">
          <WorkSection {...Work13Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="work14">
          <WorkSection {...Work14Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="externalTeamManagement">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            観光・地域振興系
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>

          <TourismProjects />
        </div>
      </FadeInSection>

      {/* 観光・地域振興系の案件 */}
      <FadeInSection>
        <div id="work9">
          <WorkSection {...Work9Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="work5">
          <WorkSection {...Work5Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="work6">
          <WorkSection {...Work6Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="work7">
          <WorkSection {...Work7Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="work8">
          <WorkSection {...Work8Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="clientWork">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            アバター活用支援
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>

          <AvatarSupport />
        </div>
      </FadeInSection>

      {/* アバター活用支援の案件 */}
      <FadeInSection>
        <div id="work12">
          <WorkSection {...Work12Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="work11">
          <WorkSection {...Work11Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="work1">
          <WorkSection {...Work1Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="promotion">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            販促・その他
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>

          <PromotionProjects />
        </div>
      </FadeInSection>

      {/* 販促・その他の案件 */}
      <FadeInSection>
        <div id="work10">
          <WorkSection {...Work10Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="work2">
          <WorkSection {...Work2Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="work3">
          <WorkSection {...Work3Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="work4">
          <WorkSection {...Work4Data} />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div
          id="last"
          className="relative bg-white shadow-lg rounded-[1rem] p-[3rem] max-w-4xl mx-auto my-20 
                  before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,transparent_23%,#e5e7eb_24%,transparent_25%)] 
                  before:bg-[length:100%_2.5rem] before:z-0"
        >
          <div className="relative z-10">
            <div className="relative w-[100px] h-[100px] mx-auto mb-10 animate-pulse duration-700">
              <div className="absolute inset-0 blur-sm">
                <HeartShape />
              </div>

              <HeartShape />
            </div>
            <p className="text-[1.2rem] leading-relaxed text-gray-700">
              私は、プロダクトの品質を高め、円滑な開発と運用を支えるディレクションを行っています。<br />
              技術とデザインの両面からチームと連携し、ユーザーにとって使いやすく、継続的に改善できる仕組みをつくることを大切にしています。<br />
              <br />
              開発・デザイン・運用の橋渡し役として、チームがスムーズに進められる環境を整え、より良いものづくりに貢献したいと考えています。<br />
              <br />
              最後までご覧いただき、ありがとうございました。<br />
              もしご興味を持っていただけましたら、ぜひお気軽にご連絡ください。
            </p>
            <p className="text-right text-[1.2rem] mt-[3rem] text-gray-700">
              <span className="block text-[1.4rem] text-pink-500 mb-1">和田 愛</span>
              <a
                href="mailto:info@meggumi.com"
                className="inline-flex items-center gap-2 text-pink-400 underline hover:text-pink-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-pink-400"
                >
                  <path d="M12 12.713l11.985-8.713H.015L12 12.713zM12 14.999l-12-8.714V20h24V6.285L12 14.999z" />
                </svg>
                info@meggumi.com
              </a>
            </p>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

