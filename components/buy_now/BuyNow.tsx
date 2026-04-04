import React from 'react';
import {
  Check,
  HelpCircle,
  RefreshCw,
  CreditCard,
  ShieldCheck,
  Send,
  LifeBuoy,
  MessageSquare
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';

const ProductPage = () => {
  const pricingFeatures = [
    { name: "All monitoring features", lite: true, pro: true },
    { name: "Specific program | User logging", lite: true, pro: true },
    { name: "Uninstall automatically", lite: true, pro: true },
    { name: "Clear logs automatically", lite: true, pro: true },
    { name: "Log file encryption", lite: true, pro: true },
    { name: "Advanced filtering options", lite: true, pro: true },
    { name: "Unlimited Screenshots", lite: "10 per day", pro: true },
    { name: "Invisible mode", lite: false, pro: true },
    { name: "Delivery options (email, FTP, LAN, USB)", lite: false, pro: true },
    { name: "Premium tech support", lite: false, pro: true },
  ];

  const valueProps = [
    {
      icon: <HelpCircle className="text-[#0066b2]" size={48} />,
      title: "Priority Support",
      desc: "Unlimited lifetime technical support"
    },
    {
      icon: <RefreshCw className="text-[#0066b2]" size={48} />,
      title: "Free Upgrades",
      desc: "Free upgrades until the release of the next major version."
    },
    {
      icon: <CreditCard className="text-[#0066b2]" size={48} />,
      title: "One-time Purchase",
      desc: "Licenses are a one-time purchase. They do not have an expiration date."
    },
    {
      icon: <ShieldCheck className="text-[#0066b2]" size={48} />,
      title: "Secure Purchase",
      desc: "Our online ordering system is powered by a secure e-commerce platform for selling software products."
    },
    {
      icon: <Send className="text-[#0066b2]" size={48} />,
      title: "Instant Delivery",
      desc: "Registration keys are delivered instantly to your e-mail after payment submission."
    },
    {
      icon: <LifeBuoy className="text-[#0066b2]" size={48} />,
      title: "Recoverable Keys",
      desc: "If you ever lose your license key, we will provide a new one free of charge."
    }
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 flex flex-col items-center gap-12 font-sans pt-24">

      {/* 1. Pricing Table Section */}
      <div className="relative w-full max-w-4xl bg-white shadow-lg border border-gray-200 overflow-hidden rounded-sm">
        <div className="absolute top-0 left-0 overflow-hidden w-32 h-32">
          <div className="absolute top-4 -left-8 bg-[#cc0000] text-white text-[10px] font-bold uppercase py-1 px-10 -rotate-45 shadow-sm">
            Special Offer
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="p-8 text-left align-bottom">
                <h1 className="text-2xl font-semibold text-gray-700">
                  Best Free Keylogger <span className="font-light text-gray-400">Onetime Payment</span>
                </h1>
              </th>
              <th className="w-32 p-4 text-center bg-gray-50/50">
                <div className="text-xl font-medium text-gray-800">Lite</div>
                <div className="text-gray-400 font-normal mt-2">Free</div>
              </th>
              <th className="w-40 p-4 text-center bg-gray-50">
                <div className="text-xl font-medium text-gray-800">Pro</div>
                <button className="mt-2 bg-[#f14343] hover:bg-red-600 text-white font-bold py-2 px-6 rounded shadow-md transition-colors text-sm">
                  Buy $39
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {pricingFeatures.map((f, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="px-8 py-3 text-gray-600 text-[14px]">{f.name}</td>
                <td className="px-4 py-3 text-center bg-gray-50/30">
                  {f.lite === true ? <Check className="inline-block text-sky-500" size={18} /> : <span className="text-xs text-gray-400">{f.lite}</span>}
                </td>
                <td className="px-4 py-3 text-center bg-gray-50/60">
                  {f.pro && <Check className="inline-block text-sky-500" size={18} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2. NEW Guarantee & Buy Now Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl py-6">
        {/* Money Back Badge */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* The Outer Gold Star/Ribbon Shape */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600 via-yellow-400 to-yellow-600 rounded-full shadow-inner opacity-90" style={{ clipPath: 'polygon(50% 0%, 54% 12%, 67% 9%, 67% 22%, 81% 22%, 78% 35%, 91% 38%, 85% 50%, 91% 62%, 78% 65%, 81% 78%, 67% 78%, 67% 91%, 54% 88%, 50% 100%, 46% 88%, 33% 91%, 33% 78%, 19% 78%, 22% 65%, 9% 62%, 15% 50%, 9% 38%, 22% 35%, 19% 22%, 33% 22%, 33% 9%, 46% 12%)' }}></div>
          {/* Inner Content */}
          <div className="z-10 bg-white rounded-full w-28 h-28 border-4 border-yellow-500 flex flex-col items-center justify-center text-center p-2 shadow-lg">
            <div className="text-[8px] font-bold text-gray-800 uppercase tracking-tighter mb-1">100% Money Back</div>
            <div className="flex flex-col bg-[#333] text-white rounded-full w-16 h-16 items-center justify-center border-2 border-yellow-400">
              <span className="text-2xl font-black leading-none">15</span>
              <span className="text-[9px] font-bold uppercase">Days</span>
            </div>
            <div className="text-[9px] font-black text-gray-800 uppercase mt-1 leading-tight">Guarantee</div>
          </div>
        </div>

        {/* Text & Button */}
        <div className="flex flex-col items-start gap-3">
          <button className="bg-[#f14343] hover:bg-red-600 text-white font-medium py-3 px-12 rounded-sm shadow-md transition-all text-xl">
            Buy now
          </button>
          <div className="text-gray-500 text-lg">
            <p>We provide a 100% Money Back Guarantee.</p>
            <p className="text-sm">
              Read more about our <a href="#" className="text-blue-500 hover:underline">Refund Policy</a>
            </p>
          </div>
        </div>
      </div>

      {/* 3. Value Propositions Grid */}
      <div className="w-full max-w-4xl bg-white p-10 shadow-sm border border-gray-200 rounded-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {valueProps.map((prop, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-4">{prop.icon}</div>
              <h3 className="text-[#0066b2] font-semibold text-sm mb-2">{prop.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed px-2">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FAQ Section */}
      <div className="w-full max-w-4xl bg-white p-10 shadow-sm border border-gray-200 rounded-sm">
        <div className="flex items-start gap-3 mb-6">
          <MessageSquare className="text-gray-400 mt-1" size={24} />
          <h2 className="text-lg text-gray-500 font-medium tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-5 ml-9 text-[13px] text-gray-500 leading-relaxed">
          <p>You will receive the activation key immediately via Email</p>
          <p>
            Purchase of Best Free Keylogger is a one-time charge and for your protection we
            never store credit card information in our system.
          </p>
          <p>
            If you have any questions regarding the ordering process, please refer to the{' '}
            <a href="#" className="text-[#3b82f6] hover:underline">Ordering FAQ</a>
          </p>
          <p>
            If you require direct assistance from our support team on a new purchase or an
            existing license email us at{' '}
            <a href="mailto:support@bestxsoftware.com" className="text-[#3b82f6] hover:underline">
              support@bestxsoftware.com
            </a>
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProductPage;