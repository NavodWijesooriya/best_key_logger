'use client';

import React from 'react';
import {
  Keyboard,
  Clipboard,
  Camera,
  Globe,
  Layout,
  Search,
  Filter,
  FileCode,
  Users,
  Clock,
  Lock,
  Shield,
  Mail,
  Database,
  Trash2,
  EyeOff,
  Power,
  UserCheck,
  ShieldAlert,
  Hourglass,
  GlobeLock,
  Ban,
  LucideIcon,
} from 'lucide-react';

type FeatureItemProps = {
  icon: LucideIcon;
  text: string;
  description: string;
  accent: string;
};

const FeatureItem = ({ icon: Icon, text, description, accent }: FeatureItemProps) => (
  <div className="group relative rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-400/0 via-blue-400/0 to-indigo-400/0 opacity-0 transition group-hover:opacity-100" />
    <div className="relative h-full">
      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${accent} text-white shadow-lg`}>
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{text}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  </div>
);

const KeyloggerFeatures = () => {
  const columns = [
    {
      title: 'Capture',
      items: [
        { icon: Keyboard, text: 'Keystroke Records', description: 'Record typed input across every application.', accent: 'bg-blue-500' },
        { icon: Clipboard, text: 'Clipboard Records', description: 'Track copied and cut content automatically.', accent: 'bg-orange-500' },
        { icon: Camera, text: 'Screenshots', description: 'Capture on-screen activity at regular intervals.', accent: 'bg-purple-500' },
        { icon: Globe, text: 'Internet Activity', description: 'Review visited sites and search behavior.', accent: 'bg-emerald-500' },
      ],
    },
    {
      title: 'Management',
      items: [
        { icon: Layout, text: 'Application Usage', description: 'See which programs are active on the target PC.', accent: 'bg-cyan-500' },
        { icon: Search, text: 'Smart Read Filter', description: 'Filter noise from logs for faster review.', accent: 'bg-indigo-500' },
        { icon: Filter, text: 'Advanced Filtering', description: 'Sort data by user, date, text, or app.', accent: 'bg-fuchsia-500' },
        { icon: FileCode, text: 'HTML Reports', description: 'Export polished reports for easy sharing.', accent: 'bg-amber-500' },
      ],
    },
    {
      title: 'Security',
      items: [
        { icon: Users, text: 'Limit by User/Application', description: 'Focus monitoring on specific users or apps.', accent: 'bg-sky-500' },
        { icon: Clock, text: 'Scheduled Monitoring', description: 'Run collection only when you need it.', accent: 'bg-teal-500' },
        { icon: Lock, text: 'Encrypted Log Files', description: 'Keep captured data protected at rest.', accent: 'bg-slate-700' },
        { icon: Shield, text: 'Password Protection', description: 'Restrict access with an additional layer of security.', accent: 'bg-emerald-600' },
      ],
    },
    {
      title: 'Delivery',
      items: [
        { icon: Mail, text: 'Delivery via Email & FTP', description: 'Send reports to the destination you prefer.', accent: 'bg-pink-500' },
        { icon: Database, text: 'Back Up Old Logs', description: 'Retain previous records for long-term access.', accent: 'bg-blue-600' },
        { icon: Trash2, text: 'Automatic Log Clearance', description: 'Remove old logs on a schedule.', accent: 'bg-rose-500' },
        { icon: EyeOff, text: 'Invisible Mode', description: 'Run discreetly in the background.', accent: 'bg-violet-500' },
      ],
    },
    {
      title: 'Control',
      items: [
        { icon: Power, text: 'Auto Uninstallation', description: 'Cleanly remove the software when required.', accent: 'bg-gray-700' },
        { icon: UserCheck, text: 'Parental Controls', description: 'Support safer device use at home.', accent: 'bg-emerald-500' },
        { icon: ShieldAlert, text: 'Web Filtering', description: 'Block unwanted or risky websites.', accent: 'bg-orange-600' },
        { icon: Hourglass, text: 'Time Limiting', description: 'Limit access by schedule or duration.', accent: 'bg-indigo-600' },
      ],
    },
    {
      title: 'Restrictions',
      items: [
        { icon: GlobeLock, text: 'Internet Blocking', description: 'Disable network access when needed.', accent: 'bg-cyan-600' },
        { icon: Ban, text: 'Application Blocking', description: 'Prevent selected apps from launching.', accent: 'bg-red-500' },

      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-12">
      <div className="text-center mb-12">
        <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">
          Security Features
        </div>
        <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Powerful Keylogger Capabilities
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Everything is presented with the same clean, light, and modern styling used across the homepage.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {columns.flatMap((column) =>
          column.items.map((item, index) => (
            <FeatureItem
              key={`${column.title}-${item.text}-${index}`}
              icon={item.icon}
              text={item.text}
              description={item.description}
              accent={item.accent}
            />
          ))
        )}
      </div>

      <p className="mt-10 text-center text-sm text-slate-500">
        Advanced features for professional monitoring environments.
      </p>
    </section>
  );
};

export default KeyloggerFeatures;