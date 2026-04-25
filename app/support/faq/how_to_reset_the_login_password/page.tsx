import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer'

const PasswordResetHelp: React.FC = () => {
  const quickLinks = [
    {
      title: 'How to reset the login password',
      path: '/support/faq/how_to_reset_the_login_password',
    },
    {
      title: 'How to set up Email Delivery',
      path: '/support/faq/how_to_set_up_email_delivery',
    },
    {
      title: 'How to import and view logs',
      path: '/support/faq/how_toimport_and_view_logs',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <div className="px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-12 font-sans">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-8 lg:gap-10 items-start">

          {/* Main Content Area */}
          <main className="min-w-0">
            <h1 className="text-4xl font-bold mb-6 text-gray-700">How to reset the login password</h1>

            <div className="bg-white p-6 border border-gray-200 rounded-md shadow-sm mb-8">
              <p className="font-bold mb-2">Question:</p>
              <p className="text-gray-600">
                I installed Best Free Keylogger on my computer a few weeks ago. Today I tried to view the logs, but I have forgotten my login password to open the interface. I need to reset my password to login to Best Free Keylogger.
              </p>
            </div>

            <section className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Answer: How to reset the login password on the Lite (Free) version</h2>
                <ol className="list-decimal list-inside space-y-4">
                  <li>
                    Use the hotkey or the keyword to unhide Best Free Keylogger.
                    <div className="mt-2 ml-6 space-x-2">
                      <span className="font-semibold">Default Hotkey:</span>
                      {['Ctrl', 'Alt', 'Shift', 'K'].map((key) => (
                        <kbd key={key} className="px-2 py-1 bg-gray-200 rounded border border-gray-300 text-sm">{key}</kbd>
                      ))}
                    </div>
                    <div className="mt-2 ml-6">
                      <span className="font-semibold">Default Keyword:</span>
                      <code className="ml-2 px-2 py-1 bg-gray-100 border rounded text-gray-700">unhide</code>
                    </div>
                  </li>
                  <li>
                    Use <code className="px-2 py-1 bg-gray-100 border rounded font-bold">BFKLVMASTER</code> as the password to login to the Best Free Keylogger interface.
                  </li>
                  <li>
                    Go to <span className="px-2 py-1 bg-gray-100 border rounded font-semibold text-sm">Settings &gt; Security</span>, and set a new password.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Answer: How to reset the login password on the Pro version</h2>
                <div className="space-y-4 text-gray-700 leading-7">
                  <p>Contact our support team via email to request a password reset.</p>
                  <p>
                    Please use the email address you provided at the time the software was purchased.
                  </p>
                  <p>
                    You will receive a temporary password to login to the interface.
                  </p>
                  <p>
                    Unhide Best Free Keylogger and use the temporary password to login to the interface.
                  </p>
                  <p>
                    Go to <span className="px-2 py-1 bg-gray-100 border rounded font-semibold text-sm">Settings &gt; Security</span>, and set a new password.
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 space-y-6">
            <div className="bg-white p-5 border border-gray-200 rounded-md shadow-sm">
              <h3 className="text-teal-600 font-bold mb-4 bg-teal-100 inline-block px-2 py-1 rounded text-sm uppercase">FAQ Quick Links</h3>
              <ul className="space-y-3 text-blue-700 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="hover:underline">
                      ? {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PasswordResetHelp;