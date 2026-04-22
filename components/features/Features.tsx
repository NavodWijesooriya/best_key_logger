'use client';

import React from 'react';
import {
  Keyboard, Clipboard, Camera, Globe, Layout, Search, Filter, FileCode,
  Users, Clock, Lock, Shield, Mail, Database, Trash2, EyeOff,
  Power, UserCheck, ShieldAlert, Hourglass, GlobeLock, Ban, LucideIcon
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

type FeatureItemProps = {
  icon: LucideIcon;
  text: string;
};

const FeatureItem = ({ icon: Icon, text }: FeatureItemProps) => (
  <div className="flex items-center gap-4 p-3.5 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group cursor-default">
    {/* Modern Icon Container */}
    <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 border border-slate-100 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-500">
      <Icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-500" />
    </div>

    {/* Text */}
    <span className="text-[15px] font-semibold text-slate-600 group-hover:text-slate-900 transition-colors duration-500">
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
    { icon: Mail, text: "Delivery via Email & FTP" },
    { icon: Database, text: "Back Up Old Logs" },
    { icon: Trash2, text: "Automatic Log Clearance" },
  ];

  const column3 = [
    { icon: EyeOff, text: "Invisible Mode" },
    { icon: Power, text: "Auto Uninstallation" },
    { icon: UserCheck, text: "Parental Controls" },
    { icon: ShieldAlert, text: "Web Filtering" },
    { icon: Hourglass, text: "Time Limiting" },
    { icon: GlobeLock, text: "Internet Blocking" },
    { icon: Ban, text: "Application Blocking" },
  ];

  return (
    <>
      <Navbar />
      <section className="relative py-24 pt-36 px-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">

        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full border border-emerald-200">
            Security Features
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-family-roboto">
            Powerful Keylogger Capabilities.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need for advanced monitoring, wrapped in a clean,
            intuitive interface designed for maximum control.
          </p>
        </div>

        {/* Main Features Card */}
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-2xl bg-white/60 border border-white/80 shadow-lg rounded-3xl p-8 md:p-12 lg:p-16">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

              {/* Column 1 */}
              <div className="space-y-2">
                <h3 className="px-4 mb-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Capture</h3>
                <div className="space-y-1">
                  {column1.map((item, index) => (
                    <FeatureItem key={index} icon={item.icon} text={item.text} />
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <h3 className="px-4 mb-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Management</h3>
                <div className="space-y-1">
                  {column2.map((item, index) => (
                    <FeatureItem key={index} icon={item.icon} text={item.text} />
                  ))}
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <h3 className="px-4 mb-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Security</h3>
                <div className="space-y-1">
                  {column3.map((item, index) => (
                    <FeatureItem key={index} icon={item.icon} text={item.text} />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Subtle footer hint */}
          <p className="text-center mt-12 text-slate-500 text-sm">
            Advanced features for professional monitoring environments.
          </p>
        </div>
      </section>
    </>
  );
};

export default KeyloggerFeatures;