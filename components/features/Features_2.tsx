'use client';

import React from 'react';

const KeyloggerUI = () => {
  const featureBlocks = [
    {
      title: '"Smart Read" Filter',
      image: '/assets/images/smart-read.png',
      alt: 'Smart Read Feature',
      description:
        '"Smart-Read" is a unique feature on Best Free Keylogger that massively improves readability of keystroke reports. "Smart-Read" can clear the clutter of keystrokes by cleverly analyzing the records and filtering out unimportant keystrokes such as backspace and delete to show only the final string of characters. This feature can be switched on or off with just one click.',
    },
    {
      title: 'Advanced Filtering',
      image: '/assets/images/advanced-filtering.png',
      alt: 'Advanced Filtering Feature',
      description:
        'Best Free Keylogger report viewer is equipped with filters that can filter the records by user, date, text content, application, URL etc. This feature helps you find what you are looking for without having to strain your eyes scanning the whole report.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 font-sans text-slate-700">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {featureBlocks.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-center text-2xl font-bold text-slate-800">{feature.title}</h2>

              <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
                <img src={feature.image} alt={feature.alt} className="w-full" />
              </div>

              <p className="mt-6 text-center text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyloggerUI;