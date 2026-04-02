'use client';

import React from 'react';
import {
  Keyboard, Clipboard, Camera, Globe, Layout, Search, Filter, FileCode,
  Users, Clock, Lock, Shield, Mail, Database, Trash2, EyeOff,
  Power, UserCheck, ShieldAlert, Hourglass, GlobeLock, Ban
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

type FeatureItemProps = {
  icon: any;
  text: string;
};

const FeatureItem = ({ icon: Icon, text }: FeatureItemProps) => (
  <div className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-white/60 hover:shadow-md group">



    {/* Icon */}
    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:from-blue-500 group-hover:to-blue-500 transition-all">
      <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
    </div>

    {/* Text */}
    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
      {text}
    </span>
  </div>
);

const KeyloggerFeatures = () => {
  const column1 = [
    { icon: Keyboard, text: "Keystroke Records" },
    { icon: Clipboard, text: "Clipboard Records" },
    { icon: Camera, text: "Screenshots" },
    { icon: Globe, text: "Internet Activity" },
    { icon: Layout, text: "Application Usage" },
    { icon: Search, text: '"Smart Read" Filter' },
    { icon: Filter, text: "Advanced Filtering" },
    { icon: FileCode, text: "HTML Reports" },
  ];

  const column2 = [
    { icon: Users, text: "Limit by User/Application" },
    { icon: Clock, text: "Scheduled Monitoring" },
    { icon: Lock, text: "Encrypted Log Files" },
    { icon: Shield, text: "Password Protection" },
    { icon: Mail, text: "Delivery via Email, FTP, LAN, USB" },
    { icon: Database, text: "Back Up Old Logs" },
    { icon: Trash2, text: "Automatic Log Clearance" },
  ];

  const column3 = [
    { icon: EyeOff, text: "Invisible Mode" },
    { icon: Power, text: "Automatic Uninstallation" },
    { icon: UserCheck, text: "Parental Controls" },
    { icon: ShieldAlert, text: "Web Filtering" },
    { icon: Hourglass, text: "Time Limiting Internet Access" },
    { icon: GlobeLock, text: "Internet Blocking" },
    { icon: Ban, text: "Application Blocking" },
  ];

  return (
    <>
      <Navbar />
      <section className="relative py-20 pt-32 px-4 bg-gradient-to-br from-gray-50 to-gray-100">



        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Keylogger Features
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Everything you need for advanced monitoring with a clean and modern experience.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-3xl p-8 md:p-14">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Column 1 */}
            <div className="space-y-3">
              {column1.map((item, index) => (
                <FeatureItem key={index} icon={item.icon} text={item.text} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              {column2.map((item, index) => (
                <FeatureItem key={index} icon={item.icon} text={item.text} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              {column3.map((item, index) => (
                <FeatureItem key={index} icon={item.icon} text={item.text} />
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default KeyloggerFeatures;