import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer';

const Page = () => {
  const relatedArticles = [
    {
      label: 'Documentation',
      href: '/support/documentation',
    },
    {
      label: 'How to uninstall Best Free Keylogger',
      href: '/support/faq/how_to_uninstall_best_free_keylogger',
    },
    {
      label: 'Blog: How to install Best Free Keylogger',
      href: '/blog',
    },
    {
      label: 'FAQ: How to retrieve a lost license key',
      href: '/support/faq/how-to-retrieve-a-lost-licence-key',
    },
    {
      label: 'Blog: How to activate Pro version',
      href: '/blog',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-4 pb-12 pt-24 md:px-8 md:pt-28">
        <div className="mb-6">
          <Link href="/support/faq" className="text-sm font-medium text-blue-600 hover:underline">
            Back to FAQ
          </Link>
        </div>

        <section className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <h1 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">
            Can I use the same product key on a different computer?
          </h1>

          <div className="mb-6 rounded-md bg-gray-50 p-4">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Question</p>
            <p className="text-gray-700">Can I move my license to another computer?</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Answer</p>
            <p className="leading-7 text-gray-700">
              Generally, Best Free Keylogger license keys are limited to one computer.
            </p>
            <p className="leading-7 text-gray-700">
              If you have already purchased a license for Best Free Keylogger, and you wish to move your software to a
              new computer, you will have to uninstall Best Free Keylogger from the first computer.
            </p>
            <p className="leading-7 text-gray-700">
              If you purchased Best Free Keylogger for multiple computers, you are issued a license key with a quota
              that depletes as the number of computers using that particular license key increases. You can use the same
              license key as long as the quota relevant to your key is not exceeded.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">Related articles</h2>
            <ul className="space-y-3">
              {relatedArticles.map((article) => (
                <li key={article.label}>
                  <Link href={article.href} className="text-blue-600 hover:underline">
                    {article.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
