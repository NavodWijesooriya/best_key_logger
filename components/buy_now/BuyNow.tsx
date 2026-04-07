import React from 'react';
import {
  Check,
  HelpCircle,
  RefreshCw,
  CreditCard,
  ShieldCheck,
  Send,
  LifeBuoy,
  MessageSquare,
  Zap,
  ArrowRight,
  Award
} from 'lucide-react';

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
      icon: <HelpCircle size={40} strokeWidth={1.5} />,
      title: "Priority Support",
      desc: "Unlimited lifetime technical support"
    },
    {
      icon: <RefreshCw size={40} strokeWidth={1.5} />,
      title: "Free Upgrades",
      desc: "Free upgrades until the release of the next major version."
    },
    {
      icon: <CreditCard size={40} strokeWidth={1.5} />,
      title: "One-time Purchase",
      desc: "Licenses are a one-time purchase. They do not have an expiration date."
    },
    {
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      title: "Secure Purchase",
      desc: "Our online ordering system is powered by a secure e-commerce platform for selling software products."
    },
    {
      icon: <Send size={40} strokeWidth={1.5} />,
      title: "Instant Delivery",
      desc: "Registration keys are delivered instantly to your e-mail after payment submission."
    },
    {
      icon: <LifeBuoy size={40} strokeWidth={1.5} />,
      title: "Recoverable Keys",
      desc: "If you ever lose your license key, we will provide a new one free of charge."
    }
  ];

  return (
    <div className="relative py-24 px-4 md:px-6 bg-linear-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col items-center gap-16 font-sans">

      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
          Pricing Plans
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-family-roboto">
          Don&apos;t have Pro version
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Compare Lite and Pro editions and choose the plan that fits your monitoring needs.
        </p>
      </div>

      {/* 1. Pricing Table Section */}
      <div className="relative w-full max-w-5xl">
        {/* Special Offer Badge - Modern */}
        <div className="absolute -top-3 -left-3 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-30"></div>
            <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold uppercase px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Zap size={14} className="fill-white" />
              Special Offer
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                <th className="p-8 text-left align-bottom">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Best Free Keylogger
                  </h1>
                  <p className="text-sm text-gray-400 font-normal mt-1">One-time payment • Lifetime license</p>
                </th>
                <th className="w-36 p-6 text-center">
                  <div className="text-lg font-semibold text-gray-700">Lite</div>
                  <div className="text-2xl font-bold text-gray-900 mt-2">Free</div>
                  <div className="text-xs text-gray-400 mt-1">Forever</div>
                </th>
                <th className="w-44 p-6 text-center bg-gradient-to-b from-gray-50 to-white relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      POPULAR
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-700">Pro</div>
                  <div className="text-3xl font-bold text-gray-900 mt-2">$39</div>
                  <button className="mt-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm w-full">
                    Get Pro
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingFeatures.map((f, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-4 text-gray-600 text-sm font-medium">{f.name}</td>
                  <td className="px-6 py-4 text-center">
                    {f.lite === true ?
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                        <Check className="text-green-600" size={14} />
                      </div> :
                      <span className="text-xs text-gray-400">{f.lite}</span>
                    }
                  </td>
                  <td className="px-6 py-4 text-center bg-gray-50/30">
                    {f.pro && f.pro !== true ?
                      <span className="text-xs text-gray-500">{f.pro}</span> :
                      f.pro &&
                      <div className="inline-flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                        <Check className="text-green-600" size={14} />
                      </div>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Guarantee & Buy Now Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl py-8 px-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100">
        {/* Money Back Badge - Modern */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur-xl opacity-30"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <Award size={36} className="text-white" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">100% Money Back Guarantee</h3>
            <p className="text-gray-500 text-sm mt-1">Not satisfied? Get a full refund within 30 days</p>
            <a href="#" className="text-blue-500 text-sm hover:underline mt-1 inline-block">Read Refund Policy →</a>
          </div>
        </div>

        {/* Button */}
        <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-10 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 text-lg flex items-center gap-2 group">
          Buy Now
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 3. Value Propositions Grid */}
      <div className="w-full max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Best Free Keylogger?</h2>
          <p className="text-gray-500 mt-2">Everything you need in one powerful package</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, i) => (
            <div key={i} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-600">
                    {prop.icon}
                  </div>
                </div>
                <h3 className="text-gray-800 font-semibold text-base mb-2">{prop.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. FAQ Section */}
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <div className="flex items-start gap-3 mb-8 pb-4 border-b border-gray-100">
            <div className="p-2 bg-gray-100 rounded-xl">
              <MessageSquare className="text-gray-600" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Frequently Asked Questions</h2>
              <p className="text-sm text-gray-400 mt-1">Everything you need to know about purchasing and using our software</p>
            </div>
          </div>

          <div className="space-y-6 ml-0 md:ml-12">
            <div className="group">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-800">Instant Delivery:</span> You will receive the activation key immediately via Email
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-semibold text-gray-800">Secure Transaction:</span> Purchase is a one-time charge. We never store credit card information in our system.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Questions about ordering? Please refer to our{' '}
                  <a href="#" className="text-blue-500 hover:underline font-medium">Ordering FAQ</a>
                </p>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Need direct assistance? Email us at{' '}
                  <a href="mailto:support@bestxsoftware.com" className="text-blue-500 hover:underline font-medium">
                    support@bestxsoftware.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductPage;