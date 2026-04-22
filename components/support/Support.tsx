import React from 'react';
import Link from 'next/link';
import { HelpCircle, FileText, MessageCircle, ChevronRight, Headphones, BookOpen, Mail } from 'lucide-react';

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  path: string;
}

const SupportCard: React.FC<SupportCardProps> = ({ icon, title, description, badge, path }) => {
  return (
    <Link href={path} className="group relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-emerald-200 hover:-translate-y-1">
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-6">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {badge}
          </div>
        </div>
      )}

      {/* Icon Container with Animation */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-emerald-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
        <div className="relative text-slate-400 group-hover:text-emerald-700 transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h2 className="text-slate-900 text-xl font-semibold mb-3 group-hover:text-slate-900 transition-colors">
        {title}
      </h2>

      {/* Description */}
      <p className="text-slate-500 text-center text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Learn More Link */}
      <div className="flex items-center gap-1 bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-[0_0_16px_rgba(16,185,129,0.25)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-hover:bg-emerald-600">
        <span>Learn More</span>
        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export const SupportCenter: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 flex flex-col items-center gap-16 font-sans pt-24">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        {/* Decorative Element */}
        <div className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-50 to-emerald-100 px-4 py-2 rounded-full shadow-sm mb-6 border border-emerald-200">
          <Headphones size={16} className="text-emerald-600" />
          <span className="text-sm text-emerald-700 font-medium">24/7 Support Available</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-family-roboto">
          {' '}
          We're Here to Help You Succeed
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Get the help you need, when you need it. Our support team is here to assist you 24/7.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <SupportCard
          icon={<HelpCircle size={64} strokeWidth={1.5} />}
          title="FAQs"
          description="Find answers to frequently asked questions and quick solutions to common issues"
          badge="Most Popular"
          path="/support/faq"

        />


        <SupportCard
          icon={<FileText size={64} strokeWidth={1.5} />}
          title="Documentation"
          description="Technical documentation for Best Free Keylogger with detailed guides and API references"
          path="/support/documentation"
        />

        <SupportCard
          icon={<MessageCircle size={64} strokeWidth={1.5} />}
          title="Contact Us"
          description="Get personalized help from our expert support team via email or live chat"
          path="/support#contact-support"
        />
      </div>

      {/* Additional Support Info */}
      <div id="contact-support" className="text-center max-w-2xl w-full scroll-mt-32">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Mail size={18} className="text-slate-600" />
            <span className="text-sm font-medium text-gray-600">Quick Response</span>
          </div>
          <p className="text-gray-500 text-sm">
            Can't find what you're looking for?{' '}
            <a href="#" className="text-blue-500 hover:text-blue-400 hover:underline font-medium transition-colors">
              Contact our support team
            </a>{' '}
            and we'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportCenter;