import React, { useRef, useState, useEffect } from 'react';
import project1 from '../assets/img/portfolio/portfolio-1.jpg';
import project2 from '../assets/img/portfolio/portfolio-2.jpg';
import project3 from '../assets/img/portfolio/portfolio-3.jpg';
import project4 from '../assets/img/portfolio/portfolio-4.jpg';

const portfolioItems = [
  {
    id: 1,
    title: 'Abidors - Backend Developer',
    description: 'As a Full-Time Backend Developer, I developed a sophisticated real estate web system using the PERN stack, collaborating with a cross-functional team to deliver robust backend solutions.',
    imageUrl: project1
  },
  {
    id: 2,
    title: 'Deep Turing - Lead developer ',
    description: 'Led a team in the successful development and implementation of a sophisticated web-based system using the PERN (PostgreSQL, Express.js, React, Node.js) stack.',
    imageUrl: project2
  },
  {
    id: 3,
    title: 'Gaia Website',
    description: 'We built the gaia survey website and admin Dashboard, A website that helps people to explore gaia and know services company provide',
    imageUrl: project3
  },
  {
    id: 3,
    title: 'Akagera & Rhein Website',
    description: 'I was a fullstack developer in a team of several developers, luckily promoted to be lead developer for frontend.',
    imageUrl: project4
  }
]

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem(prevItem => (prevItem + 1) % portfolioItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: currentItem * 300,
        behavior: 'smooth',
      });
    }
  }, [currentItem]);

  const handleDotClick = (index: number) => {
    setCurrentItem(index);
  };

  return (
    <div className="py-12 h-auto flex flex-col items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Portfolio</h2>
        <div className="relative">
          <div ref={scrollContainerRef} className="flex space-x-8 overflow-x-hidden scroll-smooth scrollbar-hide">
            {portfolioItems.map((item) => (
              <div key={item.id} className="relative bg-white  cursor-pointer shadow-md rounded-lg overflow-hidden h-64 w-64 flex-shrink-0 group">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="text-center text-white px-4">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {portfolioItems.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${currentItem === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
