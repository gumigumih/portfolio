
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { toolMetaList, aiEffectCards, subCategoryIcons } from '../../data/aiTools';
import { Card } from '../ui';

export default function AIToolsUsage() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolMetaList.map((tool) => (
            <Card 
              key={tool.name}
              title={tool.name}
              icon={tool.icon}
              iconBg={tool.color}
              textColor={tool.titleColor}
              subtitle={tool.description}
            >
              <div className="space-y-6">
                {tool.usage.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-2">
                    <span className="inline-flex items-center gap-2 font-bold text-gray-600 text-[min(4.5vw,1.15rem)] text-left mb-3 pb-1 bg-transparent">
                      {subCategoryIcons[category.title] && (
                        <FontAwesomeIcon icon={subCategoryIcons[category.title]} className="w-4 h-4" />
                      )}
                      {category.title}
                    </span>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-3">
                          <span className={`w-2 h-2 ${tool.dotColor} rounded-full`}></span>
                          <span className="text-[min(4vw,1.1rem)] text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
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