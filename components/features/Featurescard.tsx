'use client';

import React from 'react';
import { Monitor, ClipboardList } from 'lucide-react';

const KeystrokeDashboard: React.FC = () => {
  const featureBlocks = [
    {
      icon: Monitor,
      title: 'Keystroke Records',
      image: '/assets/images/keystroke-records.png',
      alt: 'Keystroke Records Dashboard',
      description:
        'See what was typed in each application and keep track of when, where, and by whom each entry was recorded.',
      accent: 'bg-emerald-500',
    },
    {
      icon: ClipboardList,
      title: 'Clipboard Records',
      image: '/assets/images/best-free-keylogger-applications (3).png',
      alt: 'Clipboard Records Dashboard',
      description:
        'Capture copied and cut content, including text and files, with the same clean card styling used throughout the site.',
      accent: 'bg-blue-500',
    },

    {
      icon: ClipboardList,
      title: 'Clipboard Records',
      image: '/assets/images/best-free-keylogger-applications (3).png',
      alt: 'Clipboard Records Dashboard',
      description:
        'Capture copied and cut content, including text and files, with the same clean card styling used throughout the site.',
      accent: 'bg-blue-500',
    },

    {
      icon: ClipboardList,
      title: 'Clipboard Records',
      image: '/assets/images/best-free-keylogger-applications (3).png',
      alt: 'Clipboard Records Dashboard',
      description:
        'Capture copied and cut content, including text and files, with the same clean card styling used throughout the site.',
      accent: 'bg-blue-500',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">
          Feature Highlights
        </div>
        <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Detailed Monitoring Views
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          These cards now share the same spacing, contrast, and rounded surfaces as the homepage.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {featureBlocks.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className="group relative p-px rounded-3xl bg-linear-to-br from-slate-200/40 to-slate-300/40 transition-all duration-500 hover:from-blue-400/40 hover:to-indigo-400/40"
            >
              <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 p-6 shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl sm:p-8">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${feature.accent} text-white shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-slate-900">{feature.title}</h3>

                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <img src={feature.image} alt={feature.alt} className="w-full object-cover" />
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default KeystrokeDashboard;