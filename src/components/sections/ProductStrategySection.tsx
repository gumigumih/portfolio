
import { productStrategyPrinciples } from '../../data/productStrategy';
import { StrategyCard, SectionTitle, FadeInGrid } from '../ui';

export default function ProductStrategySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-10">
        <SectionTitle
          title="プロダクト戦略の3つの柱"
          subtitle="ユーザー価値、事業成長、意思決定力を統合したアプローチで、持続可能なプロダクト開発を実現します"
        />
        
        <FadeInGrid>
          {productStrategyPrinciples.map((principle, index) => (
            <StrategyCard
              key={index}
              icon={principle.icon}
              title={principle.title}
              color={principle.color}
              textColor={principle.textColor}
              description={principle.description}
              principles={principle.principles}
            />
          ))}
        </FadeInGrid>
      </div>
    </section>
  );
}
