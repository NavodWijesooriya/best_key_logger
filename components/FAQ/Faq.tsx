import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRightCircle } from 'lucide-react';

const FAQPage = () => {
  const productFAQs = [
    { title: "How to reset the login password", path: "/support/faq/how_to_reset_the_login_password" },
    { title: "How to set up Email Delivery", path: "/support/faq/how_to_set_up_email_delivery" },
    { title: "How to set up FTP Delivery", path: "/support/faq/how-to-set-up-ftp-delivery" },
    { title: "How to unhide Best Free Keylogger", path: "/support/faq/how_to_unhide_best_free_keylogger" },
    { title: "How to uninstall Best Free Keylogger", path: "/support/faq/how_to_uninstall_best_free_keylogger" },
    { title: "How to import and view logs", path: "/support/faq/how_toimport_and_view_logs" },
    { title: "How to load reports", path: "/support/faq/how-to-load-reports" },
    { title: "Can I reuse the same product key?", path: "/support/faq/can-i-use-the-same-product-key-on-a-different-computer" },
    { title: "What are the compatible Windows versions?", path: "/support/faq/what-are-the-compatible-windows-versions" },
    { title: "Can I install Best Free Keylogger on a remote computer?", path: "/support/faq/can-i-install-on-a-remote-computer" },
    { title: "Is Best Free Keylogger completely undetectable?", path: "/support/faq/is-best-free-keylogger-undetectable" },
    { title: "Does Best Free Keylogger collect user information?", path: "/support/faq/does-best-free-keylogger-collect-user-information" },
    { title: "Does BFK work with applications other than web browsers?", path: "/support/faq/does-best-free-keylogger-work-with-applications-other-than-web-browsers" },
    { title: "Can I use information recorded with BFK as legal evidence?", path: "/support/faq/can-i-use-best-free-keylogger-data-as-legal-evidence" },
    { title: "I cannot find Best Free Keylogger on my computer", path: "/support/faq/i-cannot-find-best-free-keylogger" }
  ];

  // const orderingFAQs = [
  //   { title: "How to retrieve a lost license key", path: "/support/faq/how-to-retrieve-a-lost-licence-key" },
  //   { title: "How to buy Best Free Keylogger", path: "/support/faq/how-to-buy-best-free-keylogger" },
  //   { title: "How to get the license key", path: "/support/faq/how-to-get-the-license-key" },
  //   { title: "How to buy for multiple computers", path: "/support/faq/how-to-buy-best-free-keylogger-for-multiple-computers" },
  //   { title: "Are there any recurring charges?", path: "/support/faq/are-there-any-recurring-charges-to-use-best-free-keylogger" }
  // ];

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

  // const totalFaqs = productFAQs.length + orderingFAQs.length;

  return (

    <div className="min-h-screen bg-slate-50 font-sans px-4 pb-8 pt-24 md:px-8 md:pb-10 md:pt-28">

      {/* Main Content Area */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-8">

        {/* FAQ Section */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 xl:col-span-8">
          <h1 className="mb-8 border-b border-slate-200 pb-4 text-2xl font-bold text-slate-900 md:text-3xl">
            Frequently Asked Questions
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-0">
            {/* Product FAQ Column */}
            <section>
              <h2 className="font-bold text-slate-800 tracking-wider mb-4 uppercase text-sm">Product FAQ</h2>
              <ul className="space-y-3.5">
                {productFAQs.map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <HelpCircle size={18} className="mr-2 mt-0.5 shrink-0 text-emerald-500" />
                    <Link
                      href={item.path}
                      className="text-sm leading-relaxed text-emerald-600 transition-colors group-hover:text-emerald-700 group-hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Ordering FAQ Column */}
            {/* <section className="mt-2 rounded-md bg-slate-50 p-4 md:mt-0 md:p-5">
              <h2 className="font-bold text-slate-800 tracking-wider mb-4 uppercase text-sm">Ordering FAQ</h2>
              <ul className="space-y-3.5">
                {orderingFAQs.map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <HelpCircle size={18} className="mr-2 mt-0.5 shrink-0 text-emerald-500" />
                    <Link
                      href={item.path}
                      className="text-sm leading-relaxed text-emerald-600 transition-colors group-hover:text-emerald-700 group-hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section> */}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="xl:col-span-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6 xl:sticky xl:top-6">
            <div className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-lg mb-4">
              Read more on our Blog
            </div>
            <ul className="space-y-3">
              {blogPosts.map((post, idx) => (
                <li key={idx} className="flex items-start group cursor-pointer">
                  <ArrowRightCircle size={18} className="mr-2 mt-0.5 shrink-0 text-emerald-500" />
                  <span className="text-xs font-medium leading-snug text-emerald-600 transition-colors group-hover:text-emerald-700 group-hover:underline">{post}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-200 pt-5">
              <div className="rounded-lg bg-slate-50 p-3 text-center">
                {/* <p className="text-xl font-bold text-slate-900">{totalFaqs}</p> */}
                <p className="text-[11px] uppercase tracking-wide text-slate-500">FAQ Topics</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 text-center">
                <p className="text-xl font-bold text-slate-900">{blogPosts.length}</p>
                <p className="text-[11px] uppercase tracking-wide text-slate-500">Guides</p>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default FAQPage;