const skills = {
  "エンジニアリング": {
    color: 'bg-slate-400/40',
    skillColor: 'bg-slate-400',
    skills: [
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
  },
  "デザイン": {
    color: 'bg-slate-400/40',
    skillColor: 'bg-slate-400',
    skills: [
      { name: 'Photoshop', level: 4 },
      { name: 'Illustrator', level: 4 },
      { name: 'Adobe XD', level: 3 },
      { name: 'Premiere Pro', level: 1 },
      { name: 'VRoid Studio', level: 1 },
      { name: 'Blender', level: 1 },
      { name: 'Unity', level: 2 },
    ],
  },
  "その他": {
    color: 'bg-slate-400/40',
    skillColor: 'bg-slate-400',
    skills: [
      { name: 'Git', level: 3 },
      { name: 'OBS Studio', level: 2 },
      { name: 'Google Analytics', level: 3 },
      { name: 'Google Tag Manager', level: 3 },
      { name: 'Google Looker Studio', level: 1 },
      { name: 'Meta Business Suite', level: 3 },
    ],
  },
};

export default function SkillMap() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[2.5rem] mt-[2.5rem] w-[80%] mx-auto">
      {Object.entries(skills).map(([category, { color, skillColor, skills: skillList }]) => (
        <div key={category}>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-center">
            <span className="relative inline-block">
              <span className={`absolute inset-x-0 bottom-1 h-4 ${color}`}></span>
              <span className="relative z-1">{category}</span>
            </span>
          </h2>
          <ul className="mt-[2rem] space-y-[1rem]">
            {skillList.map((skill, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <span className="whitespace-pre-line text-[1.2rem]">{skill.name}</span>
                <div className="flex space-x-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className={`w-[1.2rem] h-[1.2rem] ${
                          i < skill.level
                            ? `${skillColor} rounded-sm`
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
