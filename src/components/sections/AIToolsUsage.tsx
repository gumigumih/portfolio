
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
            <Card key={tool.name} className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`${tool.color} text-white p-2 rounded-lg`}>
                  <FontAwesomeIcon icon={tool.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-[min(5vw,1.5rem)] font-bold ${tool.titleColor}`}>{tool.name}</h3>
                  <p className="text-[min(4vw,1.1rem)] text-gray-500">{tool.description}</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700 text-[min(4vw,1.1rem)] uppercase tracking-wide mb-4">
                  主な活用場面
                </h4>
                <div className="space-y-4">
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
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-8">
          <h3 className="text-[min(5vw,1.5rem)] font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5" />
            AI活用による効果
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiEffectCards.map(card => (
              <div key={card.title} className="text-center">
                <div className="bg-gray-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={card.icon} className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-[min(4vw,1.1rem)]">{card.title}</h4>
                <p className="text-[min(4vw,1.1rem)] text-gray-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
} 