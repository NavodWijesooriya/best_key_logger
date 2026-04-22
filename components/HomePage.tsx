'use client';

import React, { useState } from 'react';
import {
  Keyboard, Clipboard, Camera, Globe, AppWindow, FileText,
  Users, Clock, Lock, ShieldCheck, Mail, Trash2, EyeOff,
  Zap, UserRound, Filter, Hourglass, Ban, HardDrive, Search,
  Calendar, User, ArrowRight, Shield, Activity, Share2, CheckCircle2, Scale, Quote, Star
} from 'lucide-react';

const HomePage = () => {
  // Features Section State
  const featureList = [
    { name: 'Keystrokes', icon: '⌨️', image: '/assets/images/best-free-keylogger-applications (1).png' },
    { name: 'Clipboard', icon: '📋', image: '/assets/images/best-free-keylogger-applications (2).png' },
    { name: 'Screenshots', icon: '📸', image: '/assets/images/screenshots-view.png' },
    { name: 'Internet', icon: '🌐', image: '/assets/images/best-free-keylogger-applications (4).png' },
    { name: 'Applications', icon: '💻', image: '/assets/images/best-free-keylogger-applications.png' }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const currentFeature = featureList[activeIndex];

  // Main Features Section Data
  const mainFeatures = [
    { icon: <Keyboard size={20} />, text: "Record Keystrokes", color: "text-blue-500" },
    { icon: <Clipboard size={20} />, text: "Monitor Clipboard", color: "text-orange-500" },
    { icon: <Camera size={20} />, text: "Capture Screenshots", color: "text-purple-500" },
    { icon: <Globe size={20} />, text: "Internet Activities", color: "text-emerald-500" },
    { icon: <AppWindow size={20} />, text: "App Monitoring", color: "text-cyan-500" },
    { icon: <Search size={20} />, text: '"Smart Read" Filter', color: "text-indigo-500" },
    { icon: <FileText size={20} />, text: "HTML Reports", color: "text-rose-500" },
    { icon: <Users size={20} />, text: "User Access Control", color: "text-slate-500" },
    { icon: <Clock size={20} />, text: "Scheduled Monitoring", color: "text-amber-500" },
  ];

  // What Customers Say Section Data
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
    <main className="font-sans text-slate-900">
      {/* ===== FEATURES SECTION ===== */}
      <section className="w-full py-12 sm:py-16 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
          <nav className="mb-8 border-b border-slate-100 pb-2">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
              {featureList.map((feature, index) => (
                <li
                  key={feature.name}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    flex items-center cursor-pointer pb-2
                    text-base sm:text-lg font-medium
                    ${index === activeIndex ? 'text-blue-600 border-b-4 border-blue-600' : 'text-slate-500'}
                    transition-all duration-300 ease-in-out
                  `}
                >
                  <span className="mr-2 opacity-80">{feature.icon}</span>
                  {feature.name}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mx-auto mt-4 w-full max-w-5xl overflow-hidden rounded-xl shadow-2xl aspect-video bg-slate-50 border border-slate-100">
            <img
              src={currentFeature.image}
              alt={`${currentFeature.name} feature view`}
              className="h-full w-full object-cover transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* ===== MAIN FEATURES SECTION ===== */}
      <section className="bg-white min-h-screen py-20 px-6 font-sans text-slate-900 selection:bg-blue-100">
        <div className="max-w-6xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 rounded-full">
              Security Overview
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-family-roboto">
              Powerful Monitoring Features
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              A comprehensive suite of tools designed for seamless, invisible background tracking and digital safety.
            </p>
          </div>

          {/* Modern Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {mainFeatures.map((item, idx) => (
              <div key={idx} className="group flex items-center p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className={`p-3 rounded-xl bg-white shadow-sm mr-4 ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-slate-700">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Why Choose Section (Modern Bento Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-32">

            {/* Card 1: Monitor Everything */}
            <div className="relative group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-200">
                  <Shield size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Monitor everything</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Best Free Keylogger can record all keystrokes, internet activity, clipboard activity, and local application usage while capturing screenshots of on-going activities on the target computer at set intervals.
                </p>
                <div className="mb-8 overflow-hidden rounded-xl border border-slate-200">
                  <img
                    src="/assets/images/best-free-keylogger-applications.png"
                    alt="Total Visibility preview"
                    className="h-40 w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Smart Reporting (Highlighted) */}
            <div className="relative group bg-slate-900 rounded-3xl p-8 shadow-2xl lg:-translate-y-4 transition-all duration-500">
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6">
                  <Search size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Friendly report viewer</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Best Free Keylogger is equipped with an easy-to-use, but extremely powerful report viewer and screenshot viewer. With unique "Smart-Read" feature on Best Free Keylogger, keystroke reports become highly user-friendly and easy to read.
                </p>
                <div className="mb-6 overflow-hidden rounded-xl border border-slate-700">
                  <img
                    src="/assets/images/best-free-keylogger-applications (1).png"
                    alt="Smart-Read Intelligence preview"
                    className="h-40 w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3: Delivery Methods */}
            <div className="relative group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Share2 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Multiple delivery methods</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Reports generated by Best Free Keylogger can be emailed or uploaded to an FTP server of your choice. You can also configure Best Free Keylogger to send reports to a computer on the same LAN or to copy logs to a USB drive automatically when plugged in.
              </p>
              <div className="mb-8 overflow-hidden rounded-xl border border-slate-200">
                <img
                  src="/assets/images/best-free-keylogger-applications (2).png"
                  alt="Remote Delivery preview"
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>

            {/* Card 4: Stealth Mode */}
            <div className="relative group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 mb-6">
                <EyeOff size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Configurable</h3>
              <ul className="list-none text-slate-500 text-sm leading-relaxed mb-8 space-y-1">
                <li className="font-medium mb-2">Best Free Keylogger can:</li>
                <li>+ Uninstall itself automatically</li>
                <li>+ Monitor according to a schedule</li>
                <li>+ Clear logs automatically</li>
                <li>+ Filter users and applications</li>
                <li>+ and more...</li>
              </ul>
              <div className="mb-8 overflow-hidden rounded-xl border border-slate-200">
                <img
                  src="/assets/images/best-free-keylogger-applications (3).png"
                  alt="Stealth Operation preview"
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>

            {/* Card 5: Timeline Tracking */}
            <div className="relative group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Calendar size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Find what you are looking for</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Best Free Keylogger's Report Viewer is packed with seach filters that make finding what you want amazingly quick and exteremly extremely easy.
              </p>
              <div className="mb-8 overflow-hidden rounded-xl border border-slate-200">
                <img
                  src="/assets/images/best-free-keylogger-applications (4).png"
                  alt="Timeline Insights preview"
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>

            {/* Card 6: Secure Storage */}
            <div className="relative group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">
                <HardDrive size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Safe and secure</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Best Free Keylogger works invisibly in the background, and it is password protected. Thefore, only the user who installed the software can see or open it using the password. Even antivirus programs cannot detect the software and all log files are encrypted for the security of your information.
              </p>
              <div className="mb-8 overflow-hidden rounded-xl border border-slate-200">
                <img
                  src="/assets/images/best-free-keylogger-applications.png"
                  alt="Secure Archive preview"
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WHAT CUSTOMERS SAY SECTION ===== */}
      <section className="bg-white text-slate-900 font-sans selection:bg-blue-100 py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 rounded-full">
              Customer Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-family-roboto">
              What do users say about the best free keyloggers?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Trusted by system administrators, businesses, and families worldwide for secure monitoring solutions.
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
                    Usage is legal provided you are the <strong>authorized owner</strong> of the device or have explicit <strong>administrative consent</strong>.
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

          {/* Awards Section */}
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
    </main>
  );
};

export default HomePage;
