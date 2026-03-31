'use client';

import React, { useState } from 'react';

const Features = () => {
  const featureList = [
    { name: 'Keystrokes', icon: '⌨️', image: '/assets/images/best-free-keylogger-applications (1).png' },
    { name: 'Clipboard', icon: '📋', image: '/assets/images/best-free-keylogger-applications (2).png' },
    { name: 'Screenshots', icon: '📸', image: '/assets/images/screenshots-view.png' },
    { name: 'Internet', icon: '🌐', image: '/assets/images/best-free-keylogger-applications (4).png' },
    { name: 'Applications', icon: '💻', image: '/assets/images/best-free-keylogger-applications.png' }
  ];

  // 2. State to track the index of the currently active feature.
  // We initialize it to 0 (the first item).
  const [activeIndex, setActiveIndex] = useState(0);

  // 3. Define the current active feature based on the index.
  const currentFeature = featureList[activeIndex];

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
        <nav className="mb-8 border-b border-gray-100 pb-2">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
            {featureList.map((feature, index) => (
              <li
                key={feature.name}
                onClick={() => setActiveIndex(index)}
                className={`
                  flex items-center cursor-pointer pb-2
                  text-base sm:text-lg font-medium
                  ${index === activeIndex ? 'text-blue-600 border-b-4 border-blue-600' : 'text-gray-500'}
                  transition-all duration-300 ease-in-out
                `}
              >
                <span className="mr-2 opacity-80">{feature.icon}</span>
                {feature.name}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto mt-4 w-full max-w-5xl overflow-hidden rounded-xl shadow-2xl aspect-video bg-slate-100">
          <img
            src={currentFeature.image}
            alt={`${currentFeature.name} feature view`}
            className="h-full w-full object-cover transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;