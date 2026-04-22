'use client';

import React from 'react';
import { Download, ShieldCheck } from 'lucide-react';

const KeyloggerDownloadPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans text-slate-900 pt-24">

      {/* Header */}
      <header className="max-w-6xl mx-auto text-center mb-20">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full border border-emerald-200">
          Download Center
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-family-roboto">
          Download Best Free Keylogger
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Simple, secure, and lightweight monitoring software.
        </p>
      </header>

      {/* Main Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">

        {/* Branding Card */}
        <div className="bg-white p-6 inline-flex flex-col items-center rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
          {/* Icon Container with Overlap */}
          <div className="relative mb-6">
            {/* Main Blue Key Icon */}
            <img
              src="/assets/download/img0026.png"
              alt="Keylogger Icon"
              className="w-24 h-24 object-contain"
            />

            {/* Windows 11 Compatibility Badge (Overlaid) */}
            <div className="absolute -bottom-2 -right-2 bg-white p-0.5 shadow-sm border border-slate-200 rounded-sm">
              <img
                src="/assets/download/logo.png"
                alt="Windows 11 Compatible"
                className="w-12 h-auto"
              />
            </div>
          </div>

          {/* Metadata Text */}
          <div className="text-[15px] text-slate-700 leading-tight space-y-0.5 text-center">
            <p>
              Version: <span className="text-slate-600">8.2.1</span>
            </p>
            <p>
              Released: <span className="text-slate-600">2025-07-15</span>
            </p>
            <p>
              File-size: <span className="text-slate-600">6.6 MB</span>
            </p>
          </div>
        </div>

        {/* Lite Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200 hover:shadow-lg hover:border-emerald-200 transition-all flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Lite Version</h2>
            <p className="text-sm text-slate-600 mb-6">Free basic monitoring features.</p>

            <div className="flex items-center gap-2 text-sm text-emerald-600 mb-4">
              <ShieldCheck className="w-4 h-4" /> Verified Safe Download
            </div>
          </div>

          <div>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-3 py-3 rounded-xl text-lg font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
              <Download className="w-5 h-5" /> Download
            </button>

            <p className="text-sm text-slate-600 mt-3 text-center">
              <span className="font-semibold text-slate-900">Free</span>, no license required
            </p>
          </div>
        </div>

        {/* Pro Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200 hover:shadow-lg hover:border-emerald-200 transition-all flex flex-col justify-between relative overflow-hidden">

          <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
            Popular
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Pro Version</h2>
            <p className="text-sm text-slate-600 mb-6">Advanced tracking & full features.</p>

            <div className="flex items-center gap-2 text-sm text-emerald-600 mb-4">
              <ShieldCheck className="w-4 h-4" /> Verified Safe Download
            </div>
          </div>

          <div>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-3 py-3 rounded-xl text-lg font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
              <Download className="w-5 h-5" /> Download
            </button>

            <p className="text-sm text-gray-500 mt-3 text-center">
              <span className="font-semibold text-gray-700">7-day trial</span>, no key required
            </p>
          </div>
        </div>

      </div>

      {/* Video Section */}
      <div className="mt-16 w-full max-w-4xl">
        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/360200785?h=6f9c659b2d"
            className="w-full h-[400px]"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default KeyloggerDownloadPage;
