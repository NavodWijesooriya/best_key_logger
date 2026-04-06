'use client';

import React from 'react';
import { Download, ShieldCheck } from 'lucide-react';

const KeyloggerDownloadPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans text-gray-700 pt-24">

      {/* Header */}
      <header className="text-center mb-14 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-family-roboto">
          Download Best Free Keylogger
        </h2>
        <p className="text-lg text-gray-500">
          Simple, secure, and lightweight monitoring software.
        </p>
      </header>

      {/* Main Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">

        {/* Branding Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center md:items-start border border-gray-100 hover:shadow-md transition">
          <div className="relative mb-6">
            <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-white text-5xl">🔑</span>
            </div>

            <div className="absolute -bottom-3 -right-3 bg-white border border-gray-200 rounded-lg px-2 py-1 shadow-sm text-[10px] text-gray-500 font-medium">
              Windows 11
            </div>
          </div>

          <div className="text-sm text-gray-500 space-y-1 text-center md:text-left">
            <p><span className="font-medium text-gray-700">Version:</span> 8.2.1</p>
            <p><span className="font-medium text-gray-700">Released:</span> 2025-07-15</p>
            <p><span className="font-medium text-gray-700">Size:</span> 6.6 MB</p>
          </div>
        </div>

        {/* Lite Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Lite Version</h2>
            <p className="text-sm text-gray-500 mb-6">Free basic monitoring features.</p>

            <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
              <ShieldCheck className="w-4 h-4" /> Verified Safe Download
            </div>
          </div>

          <div>
            <button className="w-full bg-[#38a815] hover:bg-[#2f8f12] text-white flex items-center justify-center gap-3 py-3 rounded-xl text-lg font-semibold shadow-sm transition-all">
              <Download className="w-5 h-5" /> Download
            </button>

            <p className="text-sm text-gray-500 mt-3 text-center">
              <span className="font-semibold text-gray-700">Free</span>, no license required
            </p>
          </div>
        </div>

        {/* Pro Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition flex flex-col justify-between relative overflow-hidden">

          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            Popular
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Pro Version</h2>
            <p className="text-sm text-gray-500 mb-6">Advanced tracking & full features.</p>

            <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
              <ShieldCheck className="w-4 h-4" /> Verified Safe Download
            </div>
          </div>

          <div>
            <button className="w-full bg-[#38a815] hover:bg-[#2f8f12] text-white flex items-center justify-center gap-3 py-3 rounded-xl text-lg font-semibold shadow-sm transition-all">
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
