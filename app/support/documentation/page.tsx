import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer';

const UpgradeToProPage = () => {
  return (
    <>
      <Navbar />

      {/* Outer container ensures everything is centered in the viewport */}
      <div className="min-h-screen bg-gray-100 p-4 md:p-10 pt-24 md:pt-28">

        {/* Centered content wrapper with max-width to match document style */}
        <div className="max-w-6xl mx-auto flex gap-8">

          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-4">
              <div>
                <h2 className="font-bold text-gray-800 mb-2">Getting Started</h2>
                <ul className="space-y-2 text-gray-600 pl-4">
                  <li className="hover:text-blue-600 cursor-pointer">Installation</li>
                  <li className="hover:text-blue-600 cursor-pointer">Unhide</li>
                  <li className="hover:text-blue-600 cursor-pointer">Login</li>
                  <li className="hover:text-blue-600 cursor-pointer">User Interface</li>
                  <li className="text-blue-600 font-bold border-l-2 border-blue-600 pl-2">Upgrade To Pro</li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content Card */}
          <main className="flex-1 bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Upgrade to Pro</h1>

            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>
                After you purchase the Pro version of Best Free Keylogger, you will be
                emailed a license key for the product
                <a href="#" className="text-blue-500 hover:underline ml-1">(get license key)</a>.
                When you receive the license key,
              </p>

              <div>
                <p className="font-semibold text-gray-800 mb-3">1. Unhide Best Free Keylogger user interface and click Upgrade to Pro on the main toolbar.</p>
                <div className="bg-gray-50 p-4 border border-gray-200 inline-block">
                  {/* Replace with actual image */}
                  <img src="/path-to-toolbar-image.png" alt="Toolbar" className="max-w-full" />
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-3">2. Enter the license key and click Upgrade.</p>
                <div className="border border-gray-200 p-4 w-fit">
                  {/* Replace with actual image */}
                  <img src="/path-to-modal-image.png" alt="Upgrade Modal" className="max-w-full" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UpgradeToProPage;