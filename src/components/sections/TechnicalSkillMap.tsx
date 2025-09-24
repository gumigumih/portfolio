
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills, subCategoryIcons } from '../../data/skills'; // SkillGroup, Skill などの型インポートは不要になる場合があります
import { Card, SkillLevel, DividerTitle } from '../ui';

export default function SkillMap() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ title, skillColor, skills: skillGroups, icon, textColor, iconBg }) => (
            <Card 
              key={title} 
              className="flex flex-col h-full"
              title={title}
              icon={icon}
              iconBg={iconBg}
              textColor={textColor}
            >
              <div className="space-y-6">
                {skillGroups.map((group, gidx) => (
                  <div key={gidx} className="space-y-2">
                    <div className="flex items-center gap-3 w-full mb-2">
                      <span className="inline-flex items-center gap-2 font-bold text-gray-600 text-[min(4.5vw,1.15rem)] text-left pb-1 bg-transparent">
                        {subCategoryIcons[group.title] && (
                          <FontAwesomeIcon icon={subCategoryIcons[group.title]} className="w-4 h-4" />
                        )}
                        {group.title}
                      </span>
                    </div>
                    {group.items.map((item, sidx) => (
                      <div key={sidx} className="flex items-center justify-between">
                        <span className="text-[min(4vw,1.1rem)] text-gray-700 whitespace-pre-line">
                          {item.title}
                        </span>
                        <SkillLevel level={item.level} color={skillColor} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
