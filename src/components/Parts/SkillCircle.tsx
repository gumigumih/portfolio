
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
    <div className={`absolute w-full aspect-square rounded-full ${position}`}>
      <h3 className={`absolute ${titlePosition} text-nowrap text-[4vw] md:text-[2rem] lg:text-[2.5rem] font-bold bg-[#fafafa]`}>
        <span className={`bg-[linear-gradient(transparent_70%,${color}_30%)]`}>{title}</span>
      </h3>
      <ul className={`absolute ${skillsPosition} text-[2.5vw] md:text-[1.2rem] lg:text-[1.5rem] bg-[#fafafa]/80`}>
        {skills.map((skill, index) => (
          <li key={index} className="whitespace-pre-line text-nowrap">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillCircle: React.FC = () => {
  return (
    <div className="relative w-full max-w-[90vw] md:max-w-[36rem] lg:max-w-[48rem] aspect-square mx-auto mt-[1.0rem] flex flex-col justify-center items-center">
      <div className="absolute w-full h-full">
        {/* 3つの円を配置 */}
        <div className="absolute w-[60vw] md:w-[26rem] lg:w-[35rem] aspect-square rounded-full border border-gray-800 top-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[60vw] md:w-[26rem] lg:w-[35rem] aspect-square rounded-full border border-gray-800 bottom-0 left-0"></div>
        <div className="absolute w-[60vw] md:w-[26rem] lg:w-[35rem] aspect-square rounded-full border border-gray-800 bottom-0 right-0"></div>
      </div>

      <div className="absolute bg-gray-800 py-2 px-4 text-white text-center font-bold text-nowrap text-[3.5vw] md:text-[1.5rem] lg:text-[2rem]">
        エンジニアリングとデザインの経験を活かして
        <br />
        プロジェクト全体をマネジメントします
      </div>

      <div className="absolute w-full h-full">
        {/* 各セクションをコンポーネント化 */}
        <CircleSection
          title="マネジメント"
          titlePosition="bottom-[65%] left-1/2 -translate-x-1/2 text-center"
          color="#FF72D0"
          position="top-0 left-1/2 transform -translate-x-1/2"
          skills={['#プロジェクトマネジメント', '#外注管理', '#提案・見積もり']}
          skillsPosition="bottom-[75%] left-1/2 -translate-x-1/2"
        />

        <CircleSection
          title="エンジニアリング"
          titlePosition="top-[65%] right-[55%]"
          color="#55FFDC"
          position="bottom-0 left-0"
          skills={['#システム・DB設計', '#フロントエンド・\nバックエンド開発', '#API設計・実装']}
          skillsPosition="top-[75%] right-[55%]"
        />

        <CircleSection
          title="デザイン"
          titlePosition="top-[65%] left-[55%]"
          color="#FEEE16"
          position="bottom-0 right-0"
          skills={['#UI/UXデザイン', '#プロトタイピング', '#ロゴ・バナー・\nチラシデザイン']}
          skillsPosition="top-[75%] left-[55%]"
        />
      </div>
    </div>
  );
};

export default SkillCircle;
