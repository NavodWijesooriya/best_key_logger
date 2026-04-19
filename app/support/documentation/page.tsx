"use client";

import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer';

type SectionKey = 'installation' | 'unhide' | 'login' | 'user-interface' | 'upgrade-to-pro';

type SectionContent = {
  title: string;
  linkLabel: string;
  content: React.ReactNode;
};

const SECTIONS: Array<{ key: SectionKey; label: string }> = [
  { key: 'installation', label: 'Installation' },
  { key: 'unhide', label: 'Unhide' },
  { key: 'login', label: 'Login' },
  { key: 'user-interface', label: 'User Interface' },
  { key: 'upgrade-to-pro', label: 'Upgrade To Pro' },
];

const UpgradeToProPage = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('upgrade-to-pro');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as SectionKey;
    if (SECTIONS.some((section) => section.key === hash)) {
      setActiveSection(hash);
    }
  }, []);

  const sectionContent = useMemo<Record<SectionKey, SectionContent>>(
    () => ({
      installation: {
        title: 'Installation',
        linkLabel: 'Installation',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>1. Run the installation setup (installer_free.exe or installer_trial.exe).</p>
            <img src="/assets/support/documentation/best-free-keylogger-advanced.png" alt="Installation Steps" className="max-w-full rounded-md border border-gray-200" />
            <p>Select the package you need to install.</p>
            <p>Select the destination to install Best Free Keylogger

              Note: It is recommended that you use the default location
              (C:\Program Files\Best Free Keylogger)</p>
            <p>Add Best Free Keylogger folder to the list of exceptions/exclusions on your antivirus software.

            </p>
            <p>Click Install and wait for the installation to finish. Note: The setup automatically downloads and installs the latest version of the software. Therefore, you need to be connected to the internet for the installation to succeed.</p>
            <p>Click Finish to close the setup wizard.</p>
            <p>You will see Unhide Instructions message box once the installation is successful. Use the default hotkey Ctrl + Alt + Shift + K to run Best Free Keylogger for the first time.</p>
            <p>When Best Free Keylogger is run for the first time, it is required to set up your password to log in to the application. Click Save after entering a secure password you can remember.</p>

          </div>
        ),
      },
      unhide: {
        title: 'Unhide',
        linkLabel: 'Unhide',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Use the configured hotkey combination to reveal the app interface when it is running in hidden mode.</p>
            <p>If the hotkey does not work, verify your shortcut settings in the app preferences.</p>
          </div>
        ),
      },
      login: {
        title: 'Login',
        linkLabel: 'Login',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Open the login screen and enter your registered email and password to access your dashboard.</p>
            <p>Use the password reset option if you cannot sign in.</p>
          </div>
        ),
      },
      'user-interface': {
        title: 'User Interface',
        linkLabel: 'User Interface',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The main toolbar gives access to logs, settings, and upgrade options from a single place.</p>
            <p>Hover over icons to see tooltips that explain each action.</p>
          </div>
        ),
      },
      'upgrade-to-pro': {
        title: 'Upgrade to Pro',
        linkLabel: 'Upgrade To Pro',
        content: (
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
                <img src="/path-to-toolbar-image.png" alt="Toolbar" className="max-w-full" />
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 mb-3">2. Enter the license key and click Upgrade.</p>
              <div className="border border-gray-200 p-4 w-fit">
                <img src="/path-to-modal-image.png" alt="Upgrade Modal" className="max-w-full" />
              </div>
            </div>
          </div>
        ),
      },
    }),
    []
  );

  const activeContent = sectionContent[activeSection];

  const handleSectionClick = (section: SectionKey) => {
    setActiveSection(section);
    window.history.replaceState(null, '', `#${section}`);
  };

  return (
    <>
      <Navbar />

      {/* Outer container ensures everything is centered in the viewport */}
      <div className="min-h-screen bg-gray-100 p-4 md:p-10 pt-24 md:pt-28">

        {/* Centered content wrapper with max-width to match document style */}
        <div className="max-w-6xl mx-auto flex gap-8">

          {/* Sidebar */}
          <aside className="w-64 shrink-0">
            <nav className="space-y-4">
              <div>
                <h2 className="font-bold text-gray-800 mb-2">Getting Started</h2>
                <ul className="space-y-2 text-gray-600 pl-4">
                  {SECTIONS.map((section) => {
                    const isActive = activeSection === section.key;

                    return (
                      <li key={section.key}>
                        <button
                          type="button"
                          onClick={() => handleSectionClick(section.key)}
                          className={`w-full text-left cursor-pointer transition-colors ${isActive
                            ? 'text-blue-600 font-bold border-l-2 border-blue-600 pl-2'
                            : 'hover:text-blue-600 pl-3'
                            }`}
                        >
                          {section.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content Card */}
          <main className="flex-1 bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
            <h1 className="text-3xl font-bold text-gray-700 mb-3">{activeContent.title}</h1>
            <p className="text-sm text-gray-500 mb-6">Current link: #{activeContent.linkLabel.toLowerCase().replace(/\s+/g, '-')}</p>

            {activeContent.content}
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UpgradeToProPage;