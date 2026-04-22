import React from 'react';
import { ShieldCheck, Users, Scale, Star, Quote, CheckCircle2 } from 'lucide-react';

const ModernKeyloggerUI = () => {
  const targetAudience = [
    "System Administrators", "Businesses", "Parents",
    "Schools", "Cyber Cafes", "Personal Privacy"
  ];

  const testimonials = [
    {
      name: "Asheley",
      date: "June 2018",
      text: "I use Best Free Keylogger to watch my kid's internet behavior. Now I know exactly what he is doing on the internet. It ensures my kids stay out of trouble and away from predators.",
      role: "Parent"
    },
    {
      name: "Jayden",
      date: "July 2018",
      text: "After trying several products, I chose this. It's incredibly easy to install and works across all browsers including Chrome and Firefox. Excellent customer service.",
      role: "Power User"
    }
  ];



  return (
    <section className="bg-white text-slate-900 font-sans selection:bg-blue-100 py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 rounded-full">
            Security Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-family-roboto">
            What do users say about the best free keyloggers?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A comprehensive suite of tools designed for seamless, invisible background tracking and digital safety.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Sidebar Area */}
          <div className="lg:col-span-5 space-y-6">

            {/* Audience Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users size={80} />
              </div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <Users className="text-blue-600" size={24} />
                Who is it for?
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {targetAudience.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <span className="font-medium text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Card */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-lg group relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Scale size={24} className="text-emerald-400" />
                  Legal Compliance
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  Usage is legal provided you are the **authorized owner** of the device or have explicit **administrative consent**.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300">
                  <ShieldCheck size={16} />
                  Privacy First Encryption
                </div>
              </div>
              {/* Subtle background decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Testimonials Area */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6 content-start">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200/60 flex flex-col justify-between hover:border-blue-300 transition-all duration-300 group">
                <div>
                  <Quote className="text-blue-50 group-hover:text-blue-100 transition-colors mb-4" size={56} fill="currentColor" />
                  <p className="text-xl text-slate-700 leading-relaxed italic mb-8 relative z-10">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-slate-100 pt-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 font-bold text-lg border border-slate-200">
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{t.name}</h4>
                      <p className="text-sm text-slate-500">{t.role} • {t.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="mt-14 border-t border-slate-100 pt-10 flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <img src="/assets/awards/awardlogo1.png" alt="Awards" className="h-12 w-auto object-contain" />
          <img src="/assets/awards/awardlogo2.png" alt="Reviews" className="h-12 w-auto object-contain" />
          <img src="/assets/awards/awardlogo3.png" alt="Press" className="h-12 w-auto object-contain" />
          <img src="/assets/awards/awardlogo6.png" alt="Verified" className="h-12 w-auto object-contain" />
          <img src="/assets/awards/awardlogo7.png" alt="Secure" className="h-12 w-auto object-contain" />
          <img src="/assets/awards/img0027.png" alt="Privacy" className="h-12 w-auto object-contain" />
          <img src="/assets/awards/img0028.png" alt="Compliance" className="h-12 w-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default ModernKeyloggerUI;