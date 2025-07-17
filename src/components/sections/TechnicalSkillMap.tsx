interface Skill {
  name: string;
  level: number;
  isHeader?: boolean;
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faLayerGroup, faChartBar, faBroadcastTower, faWrench } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// categoryMetaの内容をskillsに統合

// サブカテゴリ名ごとのアイコン割り当て
const subCategoryIcons: Record<string, IconDefinition> = {
  'グラフィック': faPalette,
  'UI/UX': faLayerGroup,
  '3D・動画': faLayerGroup,
  'ツール・分析': faChartBar,
  '配信・SNS運用': faBroadcastTower,
  'Frontend': faLayerGroup,
  'Backend': faLayerGroup,
  'Mobile & Others': faWrench,
};

const skills: Record<string, { skillColor: string; icon: IconDefinition; textColor: string; iconBg: string; skills: Skill[] }> = {
  "エンジニアリング": {
    skillColor: 'bg-green-500',
    icon: faCode,
    textColor: 'text-green-800',
    iconBg: 'bg-green-500',
    skills: [
      { name: 'Frontend', level: 0, isHeader: true },
      { name: 'HTML/CSS/JS', level: 5 },
      { name: '- Vue.js', level: 4 },
      { name: '- React', level: 1 },
      { name: '- A-Frame', level: 2 },
      { name: 'Backend', level: 0, isHeader: true },
      { name: 'PHP', level: 4 },
      { name: '- Wordpress', level: 4 },
      { name: '- Laravel', level: 4 },
      { name: 'Python', level: 2 },
      { name: 'Ruby on Rails', level: 1 },
      { name: 'Perl', level: 1 },
      { name: 'Mobile & Others', level: 0, isHeader: true },
      { name: 'React Native', level: 1 },
      { name: 'GAS', level: 3 },
      { name: 'シェルスクリプト\nコマンドプロンプト', level: 3 },
      { name: 'DB設計', level: 3 },
    ],
  },
  "デザイン・クリエイティブ": {
    skillColor: 'bg-purple-500',
    icon: faPalette,
    textColor: 'text-purple-800',
    iconBg: 'bg-purple-500',
    skills: [
      { name: 'グラフィック', level: 0, isHeader: true },
      { name: 'Photoshop', level: 4 },
      { name: 'Illustrator', level: 4 },
      { name: 'UI/UX', level: 0, isHeader: true },
      { name: 'Adobe XD', level: 4 },
      { name: 'Figma', level: 1 },
      { name: '3D・動画', level: 0, isHeader: true },
      { name: 'Premiere Pro', level: 1 },
      { name: 'VRoid Studio', level: 2 },
      { name: 'Blender', level: 1 },
      { name: 'Unity', level: 2 },
    ],
  },
  "ツール・分析・運用": {
    skillColor: 'bg-blue-500',
    icon: faChartBar,
    textColor: 'text-blue-800',
    iconBg: 'bg-blue-500',
    skills: [
      { name: 'ツール・分析', level: 0, isHeader: true },
      { name: 'Git', level: 3 },
      { name: 'Google Analytics', level: 3 },
      { name: 'Google Tag Manager', level: 3 },
      { name: 'Google Looker Studio', level: 1 },
      { name: '配信・SNS運用', level: 0, isHeader: true },
      { name: 'OBS Studio', level: 2 },
      { name: 'Meta Business Suite', level: 3 },
    ],
  },
};

export default function SkillMap() {
  return (
    <div className="max-w-6xl mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, { skillColor, skills: skillList, icon, textColor, iconBg }]) => (
          <div
            key={category}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full"
          >
            <h2 className={`text-[min(5vw,1.5rem)] font-bold mb-4 flex items-center justify-center gap-3 ${textColor}`}>
              <span className={`${iconBg} text-white p-2 rounded-lg`}>
                <FontAwesomeIcon icon={icon} className="w-6 h-6" />
            </span>
              {category}
          </h2>
            <div className="mt-[2rem] space-y-6">
              {(() => {
                // サブカテゴリごとにグループ化
                const groups: { header: Skill; items: Skill[] }[] = [];
                let currentGroup: { header: Skill | null; items: Skill[] } = { header: null, items: [] };
                skillList.forEach((skill) => {
                  if (skill.isHeader) {
                    if (currentGroup.header) groups.push(currentGroup as { header: Skill; items: Skill[] });
                    currentGroup = { header: skill, items: [] };
                  } else {
                    currentGroup.items.push(skill);
                  }
                });
                if (currentGroup.header) groups.push(currentGroup as { header: Skill; items: Skill[] });
                return groups.map((group, gidx) => (
                  <div key={gidx}>
                    <div className="flex items-center gap-3 w-full mb-2">
                      <span className="inline-flex items-center gap-2 font-bold text-gray-600 text-[min(4.5vw,1.15rem)] text-left pb-1 bg-transparent">
                        {subCategoryIcons[group.header.name] && (
                          <FontAwesomeIcon icon={subCategoryIcons[group.header.name]} className="w-4 h-4" />
                        )}
                        {group.header.name}
                    </span>
                  </div>
                    <ul className="space-y-2">
                      {group.items.map((skill, idx) => (
                        <li key={idx} className="flex items-center justify-between">
                          <span className="whitespace-pre-line text-[min(4vw,1.1rem)]">{skill.name}</span>
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
                ));
              })()}
            </div>
        </div>
      ))}
      </div>
    </div>
  );
}
