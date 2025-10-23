import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';
import TechStack from './TechStack';

const Grid = () => {
  return (
    <section id="about" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple to-blue-400">
        About Me
      </h2>

      {/* About Grid */}
      <BentoGrid className="max-w-7xl mx-auto">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item.id}
            title={item.title}
            description={item.description}
            header={item.img}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="relative group row-span-1 rounded-xl border border-neutral-200 bg-white p-8 md:p-12 transition-all duration-300 dark:border-white/[0.2] dark:bg-black-100 hover:shadow-xl"
          style={{
            background: "#090817",
            backgroundColor:
              "linear-gradient(169deg,rgba(9, 8, 23, 1) 0%, rgba(232, 231, 248, 1) 35%, rgba(26, 42, 128, 1) 100%)",
          }}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 z-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-sky-400 group-hover:shadow-[0_0_25px_4px_rgba(56,189,248,0.4)] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-white">
              Technical Skills
            </h2>
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid