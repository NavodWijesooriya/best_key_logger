import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

const KeyloggerDownloadPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans text-gray-700 pt-24">

      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-medium text-gray-800 mb-4">
          Download Best Free Keylogger
        </h1>
        <p className="text-xl text-gray-500">
          Thank you for your interest in our software.
        </p>
      </header>

      {/* Main Content Grid */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* Left Column: Product Branding */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="relative">
            {/* Main Icon Placeholder */}
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-white text-6xl font-bold">🔑</div>
            </div>
            {/* Windows 11 Compatibility Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white border border-gray-200 rounded-md p-1 shadow-md w-20">
              <div className="bg-blue-600 h-8 w-full flex items-center justify-center rounded-sm">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                  <div className="w-2 h-2 bg-white"></div>
                </div>
              </div>
              <div className="text-[10px] text-center font-bold text-gray-500 mt-1 leading-tight">
                Windows 11<br />Compatible
              </div>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500 space-y-1">
            <p>Version: 8.2.1</p>
            <p>Released: 2025-07-15</p>
            <p>File-size: 6.6 MB</p>
          </div>
        </div>

        {/* Center Column: Lite Version */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl text-gray-400 font-light mb-2">Lite Version</h2>
          <button className="text-xs border border-gray-300 px-4 py-1.5 rounded bg-gray-50 hover:bg-gray-100 transition-colors mb-6">
            Hash Verification
          </button>

          <button className="bg-[#38a815] hover:bg-[#2f8f12] text-white flex items-center px-8 py-3 rounded-md text-xl font-semibold shadow-sm transition-all mb-4 w-full justify-center md:w-auto">
            <div className="bg-white rounded-full p-0.5 mr-3">
              <Download className="text-[#38a815] w-5 h-5 stroke-[3px]" />
            </div>
            Download
          </button>

          <p className="text-lg text-gray-600">
            <span className="font-bold text-gray-800">Free</span>, no license key required.
          </p>
        </div>

        {/* Right Column: Pro Version */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl text-gray-400 font-light mb-2">Pro Version</h2>
          <button className="text-xs border border-gray-300 px-4 py-1.5 rounded bg-gray-50 hover:bg-gray-100 transition-colors mb-6">
            Hash Verification
          </button>

          <button className="bg-[#38a815] hover:bg-[#2f8f12] text-white flex items-center px-8 py-3 rounded-md text-xl font-semibold shadow-sm transition-all mb-4 w-full justify-center md:w-auto">
            <div className="bg-white rounded-full p-0.5 mr-3">
              <Download className="text-[#38a815] w-5 h-5 stroke-[3px]" />
            </div>
            Download
          </button>

          <p className="text-lg text-gray-600">
            <span className="font-bold text-gray-800">7-day trial</span>, no trial key required.
          </p>
        </div>

      </div>

      <iframe title="vimeo-player" src="https://player.vimeo.com/video/360200785?h=6f9c659b2d" width="640" height="360" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowfullscreen></iframe>
    </div>
  );
};

export default KeyloggerDownloadPage;