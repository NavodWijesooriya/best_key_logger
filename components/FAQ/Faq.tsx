import React from 'react';
import { HelpCircle, ArrowRightCircle } from 'lucide-react';

const FAQPage = () => {
  const productFAQs = [
    "How to reset the login password",
    "How to set up Email Delivery",
    "How to set up FTP Delivery",
    "How to unhide Best Free Keylogger",
    "How to import and view logs",
    "How to uninstall Best Free Keylogger",
    "Can I reuse the same product key?",
    "What are the compatible Windows versions?",
    "Can I install Best Free Keylogger on a remote computer?",
    "Is Best Free Keylogger completely undetectable?",
    "Does Best Free Keylogger collect user information?",
    "Does BFK work with applications other than web browsers?",
    "Can I use information recorded with BFK as legal evidence?",
    "I cannot find Best Free Keylogger on my computer"
  ];

  const orderingFAQs = [
    "How to retrieve a lost license key",
    "How to buy Best Free Keylogger",
    "How to get the license key",
    "How to buy for multiple computers",
    "Are there any recurring charges?"
  ];

  const blogPosts = [
    "How to install Best Free Keylogger",
    "Getting Started Guide",
    "How to Load Reports",
    "Email Delivery Configuration Guide",
    "How to activate Pro version",
    "What are False Malware Alarms",
    "How to add an Antivirus Exception",
    "Top 10 free keylogger software"
  ];

  const totalFaqs = productFAQs.length + orderingFAQs.length;

  return (

    <div className="min-h-screen bg-gray-100 font-sans px-4 pb-8 pt-24 md:px-8 md:pb-10 md:pt-28">

      {/* Main Content Area */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-8">

        {/* FAQ Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8 xl:col-span-8">
          <h1 className="mb-8 border-b border-gray-200 pb-4 text-2xl font-bold text-gray-700 md:text-3xl">
            Frequently Asked Questions
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-0">
            {/* Product FAQ Column */}
            <section>
              <h2 className="font-bold text-gray-800 tracking-wider mb-4 uppercase text-sm">Product FAQ</h2>
              <ul className="space-y-3.5">
                {productFAQs.map((item, idx) => (
                  <li key={idx} className="flex items-start group cursor-pointer">
                    <HelpCircle size={18} className="mr-2 mt-0.5 shrink-0 text-blue-500" />
                    <span className="text-sm leading-relaxed text-blue-600 transition-colors group-hover:text-blue-700 group-hover:underline">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Ordering FAQ Column */}
            <section className="mt-2 rounded-md bg-gray-50 p-4 md:mt-0 md:p-5">
              <h2 className="font-bold text-gray-800 tracking-wider mb-4 uppercase text-sm">Ordering FAQ</h2>
              <ul className="space-y-3.5">
                {orderingFAQs.map((item, idx) => (
                  <li key={idx} className="flex items-start group cursor-pointer">
                    <HelpCircle size={18} className="mr-2 mt-0.5 shrink-0 text-blue-500" />
                    <span className="text-sm leading-relaxed text-blue-600 transition-colors group-hover:text-blue-700 group-hover:underline">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="xl:col-span-4">
          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm md:p-6 xl:sticky xl:top-6">
            <div className="inline-block bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded mb-4">
              Read more on our Blog
            </div>
            <ul className="space-y-3">
              {blogPosts.map((post, idx) => (
                <li key={idx} className="flex items-start group cursor-pointer">
                  <ArrowRightCircle size={18} className="mr-2 mt-0.5 shrink-0 text-blue-500" />
                  <span className="text-xs font-medium leading-snug text-blue-600 transition-colors group-hover:text-blue-700 group-hover:underline">{post}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-200 pt-5">
              <div className="rounded-md bg-gray-50 p-3 text-center">
                <p className="text-xl font-bold text-gray-800">{totalFaqs}</p>
                <p className="text-[11px] uppercase tracking-wide text-gray-500">FAQ Topics</p>
              </div>
              <div className="rounded-md bg-gray-50 p-3 text-center">
                <p className="text-xl font-bold text-gray-800">{blogPosts.length}</p>
                <p className="text-[11px] uppercase tracking-wide text-gray-500">Guides</p>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default FAQPage;