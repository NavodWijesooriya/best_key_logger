import React from 'react';
import { HelpCircle, FileText, MessageCircle } from 'lucide-react'; // Using lucide-react for icons

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SupportCard: React.FC<SupportCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full max-w-sm">
      <div className="text-gray-400 mb-6">
        {icon}
      </div>
      <h2 className="text-[#5CACFF] text-xl font-medium mb-4">
        {title}
      </h2>
      <p className="text-gray-500 text-center text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const SupportCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center pt-16 px-4 p-24">
      <h1 className="text-4xl font-normal text-gray-700 mb-20">v
        Welcome to bestxsoftware Support Center!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <SupportCard
          icon={<HelpCircle size={80} strokeWidth={1.5} />}
          title="FAQs"
          description="Find answers to frequently asked questions"
        />

        <SupportCard
          icon={<FileText size={80} strokeWidth={1.5} />}
          title="Documentation"
          description="Technical documentation for best free keylogger"
        />

        <SupportCard
          icon={<MessageCircle size={80} strokeWidth={1.5} />}
          title="Contact Us"
          description="Get help from our support team"
        />
      </div>
    </div>
  );
};

export default SupportCenter;