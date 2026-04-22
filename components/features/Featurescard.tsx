"use client";

import React from 'react';
import { Monitor, ClipboardList } from 'lucide-react';

const KeystrokeDashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 p-12 gap-24 items-center justify-center">

      {/* Section 1: Keystroke Records (Image Left, Text Right) */}
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
        <div className="flex-1">
          <img
            src="/assets/images/keystroke-records.png"
            alt="Keystroke Records Dashboard"
            className="w-full rounded-lg shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
          />
        </div>

        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <Monitor className="text-emerald-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Keystroke Records</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Best Free Keylogger gives you the power to see what was typed on each application by
            recording all keystrokes entered on each of them. It keeps track of where the keystroke
            was entered, the user who typed, and the date and time of the record. You just have to
            click "Load Report" and all the past records for the selected date are loaded.
          </p>
        </div>
      </div>

      {/* Section 2: Clipboard Records (Text Left, Image Right) */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 max-w-6xl w-full">
        <div className="flex-1">
          <img
            src="/assets/images/best-free-keylogger-applications (3).png"
            alt="Clipboard Records Dashboard"
            className="w-full rounded-lg shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
          />
        </div>

        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardList className="text-emerald-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Clipboard Records</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Best Free Keylogger can watch the clipboard, and it can record what was cut or copied.
            In addition, Best Free Keylogger can also identify the content by type: text or files.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
        <div className="flex-1">
          <img
            src="/assets/images/keystroke-records.png"
            alt="Keystroke Records Dashboard"
            className="w-full rounded-lg shadow-sm border border-gray-200"
          />
        </div>

        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <Monitor className="text-gray-800" size={24} />
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Keystroke Records</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Best Free Keylogger gives you the power to see what was typed on each application by
            recording all keystrokes entered on each of them. It keeps track of where the keystroke
            was entered, the user who typed, and the date and time of the record. You just have to
            click "Load Report" and all the past records for the selected date are loaded.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 max-w-6xl w-full">
        <div className="flex-1">
          <img
            src="/assets/images/best-free-keylogger-applications (3).png"
            alt="Clipboard Records Dashboard"
            className="w-full rounded-lg shadow-sm border border-gray-200"
          />
        </div>

        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardList className="text-gray-800" size={24} />
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Clipboard Records</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Best Free Keylogger can watch the clipboard, and it can record what was cut or copied.
            In addition, Best Free Keylogger can also identify the content by type: text or files.
          </p>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl w-full">
        <div className="flex-1">
          <img
            src="/assets/images/keystroke-records.png"
            alt="Keystroke Records Dashboard"
            className="w-full rounded-lg shadow-sm border border-gray-200"
          />
        </div>

        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <Monitor className="text-gray-800" size={24} />
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Keystroke Records</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Best Free Keylogger gives you the power to see what was typed on each application by
            recording all keystrokes entered on each of them. It keeps track of where the keystroke
            was entered, the user who typed, and the date and time of the record. You just have to
            click "Load Report" and all the past records for the selected date are loaded.
          </p>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 max-w-6xl w-full">
        <div className="flex-1">
          <img
            src="/assets/images/best-free-keylogger-applications (3).png"
            alt="Clipboard Records Dashboard"
            className="w-full rounded-lg shadow-sm border border-gray-200"
          />
        </div>

        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardList className="text-gray-800" size={24} />
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Clipboard Records</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Best Free Keylogger can watch the clipboard, and it can record what was cut or copied.
            In addition, Best Free Keylogger can also identify the content by type: text or files.
          </p>
        </div>
      </div>



    </div>
  );
};

export default KeystrokeDashboard;