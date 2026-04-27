import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    title: 'Top 10 free keylogger software',
    image: '/assets/blog/top-10-free-keylogger-software.png',
    tag: 'Roundup',
    summary: 'A quick comparison of free options, strengths, and trade-offs.',
    path: '/blog/top-10-free-keylogger-software',
  },
  {
    title: 'How to add an Antivirus Exception',
    image: '/assets/blog/how-to-add-an-antivirus-exception.png',
    tag: 'Tutorial',
    summary: 'Step-by-step instructions to reduce false positives safely.',
    path: '/blog/how-to-add-an-antivirus-exception',
  },
  {
    title: 'Email Delivery Configuration Guide',
    image: '/assets/blog/email-delivery-configuration-guide.png',
    tag: 'Setup',
    summary: 'Configure email reports correctly and verify they arrive on time.',
    path: '/blog/email-delivery-configuration-guide',
  },

  {
    title: 'Email Delivery Configuration Guide',
    image: '/assets/blog/getting-started-guide.png',
    tag: 'Setup',
    summary: 'Configure email reports correctly and verify they arrive on time.',
    path: '/blog/getting-start-guide',
  },

  {
    title: 'How To Load Reports',
    image: '/assets/blog/how-to-load-reports.png',
    tag: 'Setup',
    summary: 'Configure email reports correctly and verify they arrive on time.',
    path: '/blog/how-to-load-reports',
  },

  {
    title: 'Email Delivery Configuration Guide',
    image: '/assets/blog/email-delivery-configuration-guide.png',
    tag: 'Setup',
    summary: 'Configure email reports correctly and verify they arrive on time.',
    path: '/blog/how-to-activate-pro-version.png',
  },

  {
    title: 'How To Install Best Free Keylogger',
    image: '/assets/blog/how-to-install-best-free-keylogger.png',
    tag: 'Setup',
    summary: 'Configure email reports correctly and verify they arrive on time.',
    path: '/blog/how-to-install-best-free-keylogger',
  },
];

const BestxsoftwareBlog = () => {
  const featuredPosts = posts.slice(0, 3);
  const popularPosts = posts.slice(3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80"
          alt="Modern workspace"
          className="h-full w-full object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-50/60 via-slate-50/85 to-slate-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Fresh Reads
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Welcome to Bestxsoftware Blog!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Pick a post to learn setup tips, troubleshooting tricks, and practical walkthroughs.
          </p>
        </div>

        <section>
          <h2 className="mb-6 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-2xl font-bold text-slate-900 sm:text-3xl">
            Featured Posts
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <Link
                key={`featured-${post.title}-${index}`}
                href={post.path}
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <div className="relative overflow-hidden bg-linear-to-br from-slate-100 via-white to-blue-50 p-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full rounded-2xl border border-white bg-white object-contain p-2 transition duration-500"
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700 backdrop-blur">
                    {post.tag}
                  </span>
                </div>


                <div className="space-y-4 p-5">
                  <h3 className="font-['Trebuchet_MS','Segoe_UI',sans-serif] text-lg font-bold leading-snug text-slate-900">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">{post.summary}</p>
                  <span className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-emerald-400">
                    Read Post
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="mb-6 mt-12 font-['Trebuchet_MS','Segoe_UI',sans-serif] text-2xl font-bold text-slate-900 sm:text-3xl">
            Popular Posts
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularPosts.map((post, index) => (
              <Link
                key={`popular-${post.title}-${index}`}
                href={post.path}
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <div className="relative overflow-hidden bg-linear-to-br from-slate-100 via-white to-blue-50 p-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full rounded-2xl border border-white bg-white object-contain p-2 transition duration-500"
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700 backdrop-blur">
                    {post.tag}
                  </span>
                </div>

                <div className="space-y-4 p-5">
                  <h3 className="font-['Trebuchet_MS','Segoe_UI',sans-serif] text-lg font-bold leading-snug text-slate-900">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">{post.summary}</p>
                  <span className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-emerald-400">
                    Read Post
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default BestxsoftwareBlog;