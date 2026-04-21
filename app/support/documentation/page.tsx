"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { FileText, Folder, FolderOpen } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer';

type SectionKey =
  | 'installation'
  | 'unhide'
  | 'login'
  | 'user-interface'
  | 'upgrade-to-pro'
  | 'security'
  | 'remove-logs'
  | 'uninstall'
  | 'advanced';

type SectionGroup = {
  title: string;
  key: string;
  items: Array<{ key: SectionKey; label: string }>;
};

type SectionContent = {
  title: string;
  linkLabel: string;
  content: React.ReactNode;
};

const SECTION_GROUPS: SectionGroup[] = [
  {
    title: 'Getting Started',
    key: 'getting-started',
    items: [
      { key: 'installation', label: 'Installation' },
      { key: 'unhide', label: 'Unhide' },
      { key: 'login', label: 'Login' },
      { key: 'user-interface', label: 'User Interface' },
      { key: 'upgrade-to-pro', label: 'Upgrade To Pro' },
    ],
  },
  {
    title: 'General Settings',
    key: 'general-settings',
    items: [
      { key: 'security', label: 'Security' },
      { key: 'remove-logs', label: 'Remove Logs' },
      { key: 'uninstall', label: 'Uninstall' },
      { key: 'advanced', label: 'Advanced' },
    ],
  },

  {
    title: 'Monitoring Settings',
    key: 'monitoring-settings',
    items: [
      { key: 'security', label: 'Start/Stop Monitoring' },
      { key: 'remove-logs', label: 'Schedule Monitoring' },
      { key: 'uninstall', label: 'Limit Monitoring' },
      { key: 'advanced', label: 'Screenshot Settings' },
    ],
  },

  {
    title: 'Delivery Settings',
    key: 'delivery-settings',
    items: [
      { key: 'security', label: 'Delivery Methods' },
      { key: 'remove-logs', label: 'Email Delivery' },
      { key: 'uninstall', label: 'Lan Delivery' },
      { key: 'advanced', label: 'FTP Delivery' },
      { key: 'advanced', label: 'USB Delivery' },
    ],
  },

  {
    title: 'Reports',
    key: 'reports',
    items: [
      { key: 'security', label: 'Load Reports' },
      { key: 'remove-logs', label: 'import Reports' },
      { key: 'uninstall', label: 'View Reports' },
      { key: 'advanced', label: 'Filter Reports' },
    ],
  },

  {
    title: 'Parental Controls',
    key: 'parental-controls',
    items: [
      { key: 'security', label: 'Web Filtering & Blocking' },
      { key: 'remove-logs', label: 'Application Blocking' },
      { key: 'uninstall', label: 'Time Limiting' },
      { key: 'advanced', label: 'Exclusions' },
    ],
  },
];

const getSectionGroupKey = (sectionKey: SectionKey) =>
  SECTION_GROUPS.find((group) => group.items.some((item) => item.key === sectionKey))?.key ??
  SECTION_GROUPS[0].key;

const UpgradeToProPage = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('upgrade-to-pro');
  const [openGroups, setOpenGroups] = useState<string[]>([getSectionGroupKey('upgrade-to-pro')]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as SectionKey;
    if (SECTION_GROUPS.some((group) => group.items.some((section) => section.key === hash))) {
      setActiveSection(hash);
      setOpenGroups((current) =>
        current.includes(getSectionGroupKey(hash)) ? current : [...current, getSectionGroupKey(hash)]
      );
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
      security: {
        title: 'Security',
        linkLabel: 'Security',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Use the Security page to protect the application with your password and access controls.</p>
            <p>Choose a strong password and keep it in a secure place so only authorized users can open the app.</p>
          </div>
        ),
      },
      'remove-logs': {
        title: 'Remove Logs',
        linkLabel: 'Remove Logs',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Use Remove Logs to clear stored activity records from the dashboard.</p>
            <p>Confirm the action carefully before deleting logs, because removed data cannot be restored.</p>
          </div>
        ),
      },
      uninstall: {
        title: 'Uninstall',
        linkLabel: 'Uninstall',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Open the uninstall instructions if you want to remove the software from your device.</p>
            <p>Follow the on-screen prompts to complete removal and restart the system if prompted.</p>
          </div>
        ),
      },
      advanced: {
        title: 'Advanced',
        linkLabel: 'Advanced',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>The Advanced section contains expert options for configuring behavior, privacy, and app preferences.</p>
            <p>Adjust these settings only if you are familiar with the impact of each option.</p>
          </div>
        ),
      },
    }),
    []
  );

  const activeContent = sectionContent[activeSection];

  const handleSectionClick = (section: SectionKey) => {
    setActiveSection(section);
    setOpenGroups((current) => {
      const groupKey = getSectionGroupKey(section);
      return current.includes(groupKey) ? current : [...current, groupKey];
    });
    window.history.replaceState(null, '', `#${section}`);
  };

  const handleGroupClick = (groupKey: string) => {
    setOpenGroups((current) =>
      current.includes(groupKey)
        ? current.filter((key) => key !== groupKey)
        : [...current, groupKey]
    );
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
              {SECTION_GROUPS.map((group) => {
                const isOpen = openGroups.includes(group.key);

                return (
                  <div key={group.key}>
                    <button
                      type="button"
                      onClick={() => handleGroupClick(group.key)}
                      className="font-bold text-gray-800 mb-2 flex items-center justify-between w-full text-left"
                    >
                      <span className="flex items-center gap-2">
                        {isOpen ? (
                          <FolderOpen size={16} className="text-amber-600" aria-hidden="true" />
                        ) : (
                          <Folder size={16} className="text-amber-600" aria-hidden="true" />
                        )}
                        <span>{group.title}</span>
                      </span>
                    </button>

                    {isOpen && (
                      <ul className="space-y-2 text-gray-600 pl-4">
                        {group.items.map((section) => {
                          const isActive = activeSection === section.key;

                          return (
                            <li key={section.key}>
                              <button
                                type="button"
                                onClick={() => handleSectionClick(section.key)}
                                className={`w-full text-left cursor-pointer transition-colors flex items-center gap-2 ${isActive
                                  ? 'text-blue-600 font-bold border-l-2 border-blue-600 pl-2'
                                  : 'hover:text-blue-600 pl-3'
                                  }`}
                              >
                                <FileText size={14} aria-hidden="true" />
                                <span>{section.label}</span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
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