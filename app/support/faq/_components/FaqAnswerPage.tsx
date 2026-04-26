import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer';

type FaqAnswerPageProps = {
  title: string;
  question: string;
  answer: string[];
  relatedArticles?: Array<{
    category: 'Blog' | 'FAQ' | 'Documentation';
    title: string;
    href: string;
  }>;
};

const FaqAnswerPage = ({ title, question, answer, relatedArticles }: FaqAnswerPageProps) => {
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
          <h1 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">{title}</h1>

          <div className="mb-6 rounded-md bg-gray-50 p-4">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Question</p>
            <p className="text-gray-700">{question}</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Answer</p>
            {answer.map((paragraph, index) => (
              <p key={index} className="leading-7 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          {relatedArticles && relatedArticles.length > 0 && (
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="mb-4 text-lg font-semibold text-gray-800">Related articles</h2>
              <ul className="space-y-3">
                {relatedArticles.map((article) => (
                  <li key={`${article.category}-${article.title}`}>
                    <Link href={article.href} className="text-blue-600 hover:underline">
                      <span className="mr-1 font-medium">{article.category}</span>
                      <span>{article.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FaqAnswerPage;
