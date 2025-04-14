
const skills = {
  エンジニアリング: [
    { name: 'HTML/CSS/JS', level: 5 },
    { name: '- Vue.js', level: 3 },
    { name: '- A-Frame', level: 1 },
    { name: 'PHP', level: 3 },
    { name: '- Wordpress', level: 2 },
    { name: '- Laravel', level: 2 },
    { name: 'Python', level: 2 },
    { name: 'Ruby on Rails', level: 1 },
    { name: 'Perl', level: 1 },
    { name: 'GAS', level: 3 },
    { name: 'シェルスクリプト\nコマンドプロンプト', level: 3 },
    { name: 'DB設計', level: 3 },
  ],
  デザイン: [
    { name: 'Photoshop', level: 4 },
    { name: 'Illustrator', level: 4 },
    { name: 'Adobe XD', level: 3 },
    { name: 'Premiere Pro', level: 1 },
    { name: 'VRoid Studio', level: 1 },
    { name: 'Blender', level: 1 },
    { name: 'Unity', level: 2 },
  ],
  その他: [
    { name: 'Git', level: 3 },
    { name: 'OBS Studio', level: 2 },
    { name: 'Google Analytics', level: 3 },
    { name: 'Google Tag Manager', level: 3 },
    { name: 'Google Looker Studio', level: 1 },
    { name: 'Meta Business Suite', level: 3 },
  ],
};

export default function SkillMap() {
  return (
    <div className="grid grid-cols-3 gap-[min(2.5vw,2.5rem)] mt-[min(2.5vw,2.5rem)] w-[80%]">
      {Object.entries(skills).map(([category, skillList], index) => (
        <div key={index}>
          <h2 className="text-[min(2.5vw,2.5rem)] font-bold text-center">
            <span
              className={`bg-[linear-gradient(transparent_70%,${
                category === 'エンジニアリング' ? '#55FFDC' : category === 'デザイン' ? '#FEEE16' : '#E3E8EB'
              }_30%)]`}
            >
              {category}
            </span>
          </h2>
          <ul className="mt-[min(2vw,2rem)] space-y-[min(1vw,1rem)]">
            {skillList.map((skill, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <span className="whitespace-pre-line text-[min(1.2vw,1.2rem)]">{skill.name}</span>
                <div className="flex space-x-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className={`w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] ${
                          i < skill.level
                            ? (category === 'エンジニアリング'
                                ? 'bg-[#55FFDC]'
                                : category === 'デザイン'
                                  ? 'bg-[#FEEE16]'
                                  : 'bg-gray-500') + ' rounded-sm'
                            : 'bg-gray-200 scale-50 rounded-full'
                        }`}
                      ></div>
                    ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
