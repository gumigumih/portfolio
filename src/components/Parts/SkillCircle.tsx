import React from 'react';

// Props の型を定義
type CircleSectionProps = {
  title: string;
  titlePosition: string;
  color: string;
  position: string;
  skills: string[];
  skillsPosition: string;
};

const CircleSection: React.FC<CircleSectionProps> = ({
  title,
  titlePosition,
  color,
  position,
  skills,
  skillsPosition,
}) => {
  return (
    <div className={`absolute w-[min(35vw,35rem)] h-[min(35vw,35rem)] rounded-full ${position}`}>
      <h3 className={`absolute ${titlePosition} text-[min(2.5vw,2.5rem)] font-bold bg-[#fafafa]`}>
        <span className={`bg-[linear-gradient(transparent_70%,${color}_30%)]`}>{title}</span>
      </h3>
      <ul className={`absolute ${skillsPosition} text-[min(1.2vw,1.2rem)] bg-[#fafafa]/80`}>
        {skills.map((skill, index) => (
          <li key={index} className="whitespace-pre-line">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillCircle: React.FC = () => {
  return (
    <div className="w-full h-full mt-[min(1.0vw,1.0rem)] flex flex-col justify-center items-center relative">
      <div className="absolute w-[min(48vw,48rem)] h-[min(48vw,48rem)] mx-auto">
        {/* 3つの円を配置 */}
        <div className="absolute w-[min(35vw,35rem)] h-[min(35vw,35rem)] rounded-full border border-gray-800 top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute w-[min(35vw,35rem)] h-[min(35vw,35rem)] rounded-full border border-gray-800 bottom-0 left-0 transform"></div>
        <div className="absolute w-[min(35vw,35rem)] h-[min(35vw,35rem)] rounded-full border border-gray-800 bottom-0 right-0 transform"></div>
      </div>

      <div className="absolute bg-gray-800 py-[min(0.5vw,0.5rem)] px-[min(1.5vw,1.5rem)] text-white text-[min(2vw,2rem)] text-center font-bold">
        エンジニアリングとデザインの経験を活かして
        <br />
        プロジェクト全体をマネジメントします
      </div>

      <div className="absolute w-[min(50vw,50rem)] h-[min(50vw,50rem)] mx-auto">
        {/* 各セクションをコンポーネント化 */}
        <CircleSection
          title="マネジメント"
          titlePosition="bottom-[55%] left-[50%] -translate-x-1/2"
          color="#FF72D0"
          position="top-0 left-1/2 transform -translate-x-1/2"
          skills={['#プロジェクトマネジメント', '#外注管理', '#提案・見積もり']}
          skillsPosition="bottom-[70%] left-[50%] -translate-x-1/2 w-[min(19vw,19rem)]"
        />

        <CircleSection
          title="エンジニアリング"
          titlePosition="top-[55%] right-[45%] w-[min(20vw,20rem)]"
          color="#55FFDC"
          position="bottom-0 left-0"
          skills={['#システム・DB設計', '#フロントエンド・\nバックエンド開発', '#API設計・実装']}
          skillsPosition="top-[70%] right-[45%]"
        />

        <CircleSection
          title="デザイン"
          titlePosition="top-[55%] left-[45%]"
          color="#FEEE16"
          position="bottom-0 right-0"
          skills={['#UI/UXデザイン', '#プロトタイピング', '#ロゴ・バナー・\nチラシデザイン']}
          skillsPosition="top-[70%] left-[45%] w-[min(13.5vw,13.5rem)]"
        />
      </div>
    </div>
  );
};

export default SkillCircle;
