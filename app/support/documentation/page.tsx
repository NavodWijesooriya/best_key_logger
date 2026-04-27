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
  | 'advanced'
  | 'start/stop-monitoring'
  | 'schedule'
  | 'limit-monitoring'
  | 'screenshot-settings'
  | 'delivery-methods'
  | 'email-delivery'
  | 'lan-delivery'
  | 'ftp-delivery'
  | 'usb-delivery'
  | 'load-reports'
  | 'import-reports'
  | 'view-reports'
  | 'filter-reports'
  | 'web-filtering-blocking'
  | 'application-blocking'
  | 'time-limiting'
  | 'exclusions';

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
      { key: 'start/stop-monitoring', label: 'Start/Stop Monitoring' },
      { key: 'schedule', label: 'Schedule Monitoring' },
      { key: 'limit-monitoring', label: 'Limit Monitoring' },
      { key: 'screenshot-settings', label: 'Screenshot Settings' },
    ],
  },

  {
    title: 'Delivery Settings',
    key: 'delivery-settings',
    items: [
      { key: 'delivery-methods', label: 'Delivery Methods' },
      { key: 'email-delivery', label: 'Email Delivery' },
      { key: 'lan-delivery', label: 'LAN Delivery' },
      { key: 'ftp-delivery', label: 'FTP Delivery' },
      { key: 'usb-delivery', label: 'USB Delivery' },
    ],
  },

  {
    title: 'Reports',
    key: 'reports',
    items: [
      { key: 'load-reports', label: 'Load Reports' },
      { key: 'import-reports', label: 'Import Reports' },
      { key: 'view-reports', label: 'View Reports' },
      { key: 'filter-reports', label: 'Filter Reports' },
    ],
  },

  {
    title: 'Parental Controls',
    key: 'parental-controls',
    items: [
      { key: 'web-filtering-blocking', label: 'Web Filtering & Blocking' },
      { key: 'application-blocking', label: 'Application Blocking' },
      { key: 'time-limiting', label: 'Time Limiting' },
      { key: 'exclusions', label: 'Exclusions' },
    ],
  },
];

const getSectionGroupKey = (sectionKey: SectionKey) =>
  SECTION_GROUPS.find((group) => group.items.some((item) => item.key === sectionKey))?.key ??
  SECTION_GROUPS[0].key;

const DocumentationPage = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>('installation');
  const [openGroups, setOpenGroups] = useState<string[]>([getSectionGroupKey('installation')]);

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
            <img src="/assets/support/documentation/best-free-keylogger-security.png" alt="Security Settings" className="max-w-full rounded-md border border-gray-200" />

            <p>1.Change Login Password</p>
            <p>In order to change your login password, click Change
              Enter a password, confirm by typing it again.</p>

            <p>2.Change Unhide Keyword</p>
            <p>In order to change the Unhide Keyword which you enter in the Run dialog box, enter a new keyword in the input field.</p>

            <p>3.Change Unhide Hotkey</p>
            <p>In order to change the Unhide Hotkey, configure a custom key combination by toggling the relevant keys on or off and selecting a custom character key.</p>
          </div>
        ),
      },
      'remove-logs': {
        title: 'Remove Logs',
        linkLabel: 'Remove Logs',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <img src="/assets/support/documentation/best-free-keylogger-remove-logs.png" alt="Remove Logs" className="max-w-full rounded-md border border-gray-200" />

            <p>1. Automatically clear older logs

              By default, Best Free Keylogger is configured to stop monitoring when the total size of logs reaches 10 GB. You can change this setting by increasing or decreasing the Maximum Log Size or by configuring the application to clear old logs.

            </p>

            <p>2.Remove logs after delivering

              By default, Best Free Keylogger does not delete log files after sending them. You can configure it to do so by enabling this setting.

              Note: When enabled, logs that have been sent in a report will be deleted from the computer the application is running on.

            </p>

            <p>3.Remove all logs

              In order to manually remove all logs from the storage of the computer the application is running on, click Remove all logs.

              Note: This action cannot be undone</p>
          </div>
        ),
      },
      uninstall: {
        title: 'Uninstall',
        linkLabel: 'Uninstall',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <img src="/assets/support/documentation/best-free-keylogger-uninstall.png" alt="Uninstall" className="max-w-full rounded-md border border-gray-200" />
            <p>1.Auto Uninstall

              Select a future date to configure Best Free Keylogger to uninstall itself automatically.

            </p>

            <p>2.Give us feedback

              If you run into any difficulties or issues while using Best Free Keylogger or if you have any comments or suggestions regarding the software, click Feedback to send a message to the developers.

            </p>

            <p>3.Uninstall Immediately

              In order to uninstall Best Free Keylogger immediately, click Uninstall Now.</p>
          </div>
        ),
      },
      advanced: {
        title: 'Advanced',
        linkLabel: 'Advanced',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <img src="/assets/support/documentation/best-free-keylogger-advanced.png" alt="Advanced Settings" className="max-w-full rounded-md border border-gray-200" />

            <p>Delete web filtering cache

              When Parental Controls on Best Free Keylogger are enabled, the application creates a customized set of records to maximize web filtering efficiency. All these records will be deleted when you delete web filtering cache.</p>
          </div>
        ),
      },

      'start/stop-monitoring': {
        title: 'Start/Stop Monitoring',
        linkLabel: 'Start/Stop Monitoring',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Use the monitoring controls to start or pause activity logging as needed.</p>
            <p>Only enable monitoring where you have the required permission to collect data.</p>
          </div>
        ),
      },

      schedule: {
        title: 'Schedule Monitoring',
        linkLabel: 'Schedule Monitoring',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Set a schedule to automatically start or stop monitoring at specific times.</p>
            <p>This helps keep monitoring aligned with your operating hours or policy requirements.</p>
          </div>
        ),
      },

      'limit-monitoring': {
        title: 'Limit Monitoring',
        linkLabel: 'Limit Monitoring',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Configure limits to control how much data is collected or stored.</p>
            <p>Adjust retention and storage settings according to your usage needs.</p>
          </div>
        ),
      },

      'screenshot-settings': {
        title: 'Screenshot Settings',
        linkLabel: 'Screenshot Settings',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Choose when screenshots are captured and how often they are saved.</p>
            <p>Use conservative intervals if storage space is limited.</p>
          </div>
        ),
      },

      'delivery-methods': {
        title: 'Delivery Methods',
        linkLabel: 'Delivery Methods',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Select one or more delivery methods for sending logs and reports.</p>
            <p>Available options can include email, LAN, FTP, and USB delivery.</p>
          </div>
        ),
      },

      'email-delivery': {
        title: 'Email Delivery',
        linkLabel: 'Email Delivery',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Configure email delivery to send reports automatically to a trusted mailbox.</p>
            <p>Verify the sender and recipient settings before enabling automatic delivery.</p>
          </div>
        ),
      },

      'lan-delivery': {
        title: 'LAN Delivery',
        linkLabel: 'LAN Delivery',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Use LAN delivery to move reports to another machine on the local network.</p>
            <p>Confirm network permissions and destination availability before saving settings.</p>
          </div>
        ),
      },

      'ftp-delivery': {
        title: 'FTP Delivery',
        linkLabel: 'FTP Delivery',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Enter the FTP server details to upload reports to a remote server.</p>
            <p>Use secure credentials and test the connection before enabling uploads.</p>
          </div>
        ),
      },

      'usb-delivery': {
        title: 'USB Delivery',
        linkLabel: 'USB Delivery',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Set up USB delivery if you want to export reports to removable storage.</p>
            <p>Make sure the USB device is connected when the export action runs.</p>
          </div>
        ),
      },

      'load-reports': {
        title: 'Load Reports',
        linkLabel: 'Load Reports',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Load a saved report to review captured activity for a selected date.</p>
            <p>Choose the appropriate category before reviewing the available entries.</p>
          </div>
        ),
      },

      'import-reports': {
        title: 'Import Reports',
        linkLabel: 'Import Reports',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Import reports from supported files to review previously exported data.</p>
            <p>Check file compatibility before importing to avoid incomplete results.</p>
          </div>
        ),
      },

      'view-reports': {
        title: 'View Reports',
        linkLabel: 'View Reports',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Use the report viewer to inspect captured records in chronological order.</p>
            <p>Apply filters to narrow down the information you need.</p>
          </div>
        ),
      },

      'filter-reports': {
        title: 'Filter Reports',
        linkLabel: 'Filter Reports',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Filter reports by text, date, user, application, or page title.</p>
            <p>Filtering makes it easier to find specific activity within large log sets.</p>
          </div>
        ),
      },

      'web-filtering-blocking': {
        title: 'Web Filtering & Blocking',
        linkLabel: 'Web Filtering & Blocking',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Configure web filtering rules to block or allow specific websites.</p>
            <p>Review exclusions carefully before enforcing restrictions.</p>
          </div>
        ),
      },

      'application-blocking': {
        title: 'Application Blocking',
        linkLabel: 'Application Blocking',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Prevent selected applications from running on the monitored device.</p>
            <p>Use blocking rules only where you have administrative authority.</p>
          </div>
        ),
      },

      'time-limiting': {
        title: 'Time Limiting',
        linkLabel: 'Time Limiting',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Define time limits to control when monitoring or usage restrictions apply.</p>
            <p>Schedule limits around business rules or device policies.</p>
          </div>
        ),
      },

      exclusions: {
        title: 'Exclusions',
        linkLabel: 'Exclusions',
        content: (
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p>Add trusted applications or paths to exclusions so they are not affected by rules.</p>
            <p>Keep exclusions as narrow as possible to preserve the intended behavior.</p>
          </div>
        ),
      },

    }),
    []
  );

  const activeContent = sectionContent[activeSection] ?? sectionContent.installation;

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

export default DocumentationPage;