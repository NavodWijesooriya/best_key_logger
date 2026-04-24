"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { FileText, Folder, FolderOpen } from 'lucide-react';
import Link from 'next/link';
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
            <img src="/assets/support/documentation/best-free-keylogger-setup.png" alt="Installation Steps" className="max-w-full rounded-md border border-gray-200" />
            <p>2.Read thoroughly and understand the End User License Agreement. Installation of Best Free Keylogger requires you to accept the agreement. Proceed if you do.</p>
            <p>3.Select the package you need to install.</p>
            <img src="/assets/support/documentation/best-free-keylogger-installation-type.png" alt="Package Selection" className="max-w-full rounded-md border border-gray-200" />
            <p>4.Select the destination to install Best Free Keylogger

              Note: It is recommended that you use the default location
              (C:\Program Files\Best Free Keylogger)</p>
            <p>5.Add Best Free Keylogger folder to the list of exceptions/exclusions on your antivirus software.

            </p>
            <p>6.Click Install and wait for the installation to finish. Note: The setup automatically downloads and installs the latest version of the software. Therefore, you need to be connected to the internet for the installation to succeed.

            </p>
            <p>7.Click Finish to close the setup wizard.</p>
            <p>8.You will see Unhide Instructions message box once the installation is successful. Use the default hotkey Ctrl + Alt + Shift + K to run Best Free Keylogger for the first time.</p>

            <img src="/assets/support/documentation/best-free-keylogger-unhide-instructions.png" alt="Unhide Instructions" className="max-w-full rounded-md border border-gray-200" />

            <p>9. When Best Free Keylogger is run for the first time, it is required to set up your password to log in to the application. Click Save after entering a secure password you can remember.</p>
            <img src="/assets/support/documentation/best-free-keylogger-set-password (1).png" alt="Set Password" className="max-w-full rounded-md border border-gray-200" />

          </div>
        ),
      },
      unhide: {
        title: 'Unhide',
        linkLabel: 'Unhide',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>You can use either of the following to Unhide Best Free Keylogger user interface.</p>
            <p>1. Default: Ctrl + Alt + Shift + K
              Path to Setting: Settings  Security: Unhide Hotkey
              Method: Press all the keys in the above key combination together.</p>

            <p>2. Unhide Keyword:</p>
            <p>Default: unhide

              Path to Setting: Settings  Security: Unhide Keyword

              Method: Type in the above keyword in the Run dialog box. Press  + R to open Run dialog box on Windows</p>

            <img src="/assets/support/documentation/best-free-keylogger-unhide-keyword.png" alt="Unhide Keyword" className="max-w-full rounded-md border border-gray-200" />
          </div>
        ),
      },
      login: {
        title: 'Login',
        linkLabel: 'Login',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Type in you login password and press enter after unhiding the user interface.</p>
            <img src="/assets/support/documentation/best-free-keylogger-login.png" alt="Login Screen" className="max-w-full rounded-md border border-gray-200" />

            <p>If it is the first time the application is run, set up your password.</p>
            <img src="/assets/support/documentation/best-free-keylogger-set-password (1).png" alt="Set Password" className="max-w-full rounded-md border border-gray-200" />
          </div>
        ),
      },
      'user-interface': {
        title: 'User Interface',
        linkLabel: 'User Interface',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <img src="/assets/support/documentation/best-free-keylogger-user-interface.png" alt="User Interface" className="max-w-full rounded-md border border-gray-200" />

            <p>1. Main Toolbar</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Settings:</strong> Settings control panel of the application.</li>
              <li><strong>Logs:</strong> Error logs and process logs of the application.</li>
              <li><strong>Import:</strong> Import external logs to the application.</li>
              <li><strong>Help:</strong> Online Support Center for Best Free Keylogger.</li>
              <li><strong>About:</strong> Information regarding current version of the application.</li>
              <li><strong>Upgrade to Pro:</strong> Product activation interface.</li>
            </ul>

            <p>2.Record Categories: Select the relevant category after loading the report to view the records. The number of records loaded is shown in front of each category.</p>

            <p>3.Calendar:Select the date to load the corresponding report. By default, the current date is selected.</p>

            <p>4.Count:

              Click to view the list of dates with monitoring logs available and the number of records available for each date.

            </p>

            <p>5.Filter:

              Click to open Filters window to filter available records by text, user, date, application, URL, window title, or web page title.

            </p>

            <p>6.Load Report:

              Click to load reports available for the date selected in the calendar.

            </p>

            <p>7.Day-wise Record Count:

              shows the number of records available in each category for the date selected in the calendar.

            </p>

            <p>8.Chronological sort:

              Click to toggle order of records between chronological order and reverse-chronological order.

            </p>

            <p>9.Filter by User:

              Select a user from Users to filter records by user.

            </p>

            <p>10.Filter by App:

              Select an application from Apps to filter records by application.

            </p>

            <p>11.Smart Read:

              Switch on Smart Read to enable Best Free Keylogger to process keystroke records internally by removing irrelevant keystrokes, such as “backspace”, and making the records more readable.

            </p>

            <p>12.Zoom Controls:

              Zoom in or Zoom out the contents in the report viewer.</p>

            <p>13.Report Viewer:

              Reports are loaded into this pane.</p>

            <p>14.Total local logs size:

              Total size of the log files saved in the local computer.</p>


          </div>
        ),
      },
      'upgrade-to-pro': {
        title: 'Upgrade to Pro',
        linkLabel: 'Upgrade To Pro',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>
              After you purchase the Pro version of Best Free Keylogger, you will be emailed a license key for the product(get license key). When you receive the license key,
            </p>
            <p>1.Unhide Best Free Keylogger user interface and click Upgrade to Pro on the main toolbar.</p>
            <img src="/assets/support/documentation/best-free-keylogger-upgrade-to-pro01.png" alt="Upgrade Toolbar" className="max-w-full rounded-md border border-gray-200" />

            <p>2.Enter the license key and click Upgrade.</p>
            <img src="/assets/support/documentation/best-free-keylogger-upgrade-to-pro02.png" alt="Upgrade Modal" className="max-w-full rounded-md border border-gray-200" />

            <p>If you run into any issues while trying to activate the Pro version, please <Link href="/support" className="text-blue-600">contact our support team</Link>.</p>

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

            {activeContent.content}
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UpgradeToProPage;