'use client';

import React from 'react';

const KeyloggerUI = () => {
  const featureBlocks = [
    {
      title: 'Smart Read Filter',
      image: '/assets/images/smart-read.png',
      alt: 'Smart Read Feature',
      description:
        'Smart Read improves readability by filtering out clutter and showing only the final string of characters in keystroke reports.',
    },
    {
      title: 'Advanced Filtering',
      image: '/assets/images/advanced-filtering.png',
      alt: 'Advanced Filtering Feature',
      description:
        'Advanced filtering helps you sort records by user, date, text content, application, or URL without scanning the entire report.',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">
          Report Experience
        </div>
        <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Smart Filtering Tools
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Review activity with the same rounded cards, soft shadows, and subtle contrast used on the homepage.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {featureBlocks.map((feature, index) => {
          const featured = index === 0;

          return (
            <article
              key={feature.title}
              className="group relative p-px rounded-3xl bg-linear-to-br from-slate-200/40 to-slate-300/40 transition-all duration-500 hover:from-blue-400/40 hover:to-indigo-400/40"
            >
              <div
                className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-8 backdrop-blur-xl border shadow-lg transition-all duration-500 group-hover:-translate-y-1 ${featured ? 'bg-slate-900 text-white border-white/10' : 'bg-white/80 border-white/40'
                  }`}
              >
                <h3 className={`text-center text-2xl font-bold ${featured ? 'text-white' : 'text-slate-900'}`}>
                  {feature.title}
                </h3>

                <div className={`mt-6 overflow-hidden rounded-2xl border ${featured ? 'border-white/10' : 'border-slate-200'}`}>
                  <img src={feature.image} alt={feature.alt} className="w-full object-cover" />
                </div>

                <p className={`mt-6 text-center text-sm leading-relaxed ${featured ? 'text-slate-300' : 'text-slate-600'}`}>
                  {feature.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default KeyloggerUI;