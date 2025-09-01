import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills, subCategoryIcons } from '../../data/skills';
import { SectionTitle, Card, SkillLevel } from '../ui';

export default function SkillMap() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-10">
        <SectionTitle
          title="テクニカルスキルマップ"
          subtitle="エンジニアリング、デザイン、ツール運用まで幅広いスキルを習得しています"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, { skillColor, skills: skillList, icon, textColor, iconBg }]) => (
            <Card key={category} className="p-8 flex flex-col h-full">
              <h2 className={`text-[min(5vw,1.5rem)] font-bold mb-4 flex items-center justify-center gap-3 ${textColor}`}>
                <span className={`${iconBg} text-white p-2 rounded-lg`}>
                  <FontAwesomeIcon icon={icon} className="w-6 h-6" />
                </span>
                {category}
              </h2>
              <div className="mt-[2rem] space-y-6">
                {(() => {
                  // サブカテゴリごとにグループ化
                  const groups: { header: any; items: any[] }[] = [];
                  let currentGroup: { header: any | null; items: any[] } = { header: null, items: [] };
                  skillList.forEach((skill) => {
                    if (skill.isHeader) {
                      if (currentGroup.header) groups.push(currentGroup as { header: any; items: any[] });
                      currentGroup = { header: skill, items: [] };
                    } else {
                      currentGroup.items.push(skill);
                    }
                  });
                  if (currentGroup.header) groups.push(currentGroup as { header: any; items: any[] });
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
                      <div className="space-y-3">
                        {group.items.map((skill, sidx) => (
                          <div key={sidx} className="flex items-center justify-between">
                            <span className="text-[min(4vw,1.1rem)] text-gray-700 whitespace-pre-line">
                              {skill.name}
                            </span>
                            <SkillLevel level={skill.level} color={skillColor} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
