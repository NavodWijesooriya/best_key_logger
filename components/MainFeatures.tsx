import React from 'react';
import {
  Keyboard, Clipboard, Camera, Globe, AppWindow, FileText,
  Users, Clock, Lock, ShieldCheck, Mail, Trash2, EyeOff,
  Zap, UserRound, Filter, Hourglass, Ban, HardDrive, Search,
  Calendar, User, ArrowRight, Shield, Activity, Share2
} from 'lucide-react';

const BestFreeKeyloggerUI = () => {
  const features = [
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

  return (
    <div className="bg-white min-h-screen py-20 px-6 font-sans text-slate-900 selection:bg-blue-100">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase bg-blue-50 text-blue-600 rounded-full">
            Security Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Powerful Monitoring Features
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A comprehensive suite of tools designed for seamless, invisible background tracking and digital safety.
          </p>
        </div>

        {/* Modern Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((item, idx) => (
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
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Total Visibility</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Record all keystrokes, internet activity, and clipboard usage. Seamlessly captures screenshots at custom intervals for a complete visual audit trail.
              </p>
              <ul className="space-y-3">
                {['Keystrokes', 'Websites', 'Local Apps'].map((t) => (
                  <li key={t} className="flex items-center text-xs font-bold text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" /> {t.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Smart Reporting (Highlighted) */}
          <div className="relative group bg-slate-900 rounded-3xl p-8 shadow-2xl lg:-translate-y-4 transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6">
                <Search size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Smart-Read Intelligence</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                No more digging through raw data. Our "Smart-Read" engine formats keystrokes into human-readable conversations.
              </p>

              {/* Report Preview UI */}
              <div className="mt-auto bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div className="flex items-center justify-between mb-3 border-b border-slate-700 pb-2">
                  <span className="text-[10px] text-indigo-400 font-mono">LATEST_LOG.DAT</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-slate-700 rounded" />
                  <div className="h-2 w-1/2 bg-slate-700 rounded" />
                  <div className="h-2 w-2/3 bg-indigo-500/30 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Delivery Methods */}
          <div className="relative group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
              <Share2 size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Remote Delivery</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Get logs delivered directly to your inbox, FTP server, or local network. Automatic USB sync available for offline environments.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {['Email', 'FTP', 'LAN', 'USB'].map((method) => (
                <div key={method} className="flex items-center p-2 bg-slate-50 rounded-lg text-[10px] font-bold text-slate-600 border border-slate-100">
                  <Mail size={12} className="mr-2 text-emerald-500" /> {method}
                </div>
              ))}
            </div>

            <button className="mt-8 flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
              Configure SMTP <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BestFreeKeyloggerUI;