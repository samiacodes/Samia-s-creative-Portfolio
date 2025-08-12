import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id="about" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
      <BentoGrid className="max-w-7xl mx-auto">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.img}
            // icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}



export default Grid