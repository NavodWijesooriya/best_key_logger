import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer';

type SoftwareEntry = {
  rank: number;
  name: string;
  image: string;
  imageAlt: string;
  website: string;
  websiteLabel: string;
  summary: string;
  bestFor: string;
  highlights: string[];
};

const softwareList: SoftwareEntry[] = [
  {
    rank: 1,
    name: 'Kidlogger',
    image: '/assets/blog/top_10/kidlogger-interface.png',
    imageAlt: 'Kidlogger interface',
    website: 'https://kidlogger.net/',
    websiteLabel: 'Visit Kidlogger',
    summary:
      'Kidlogger offers a free tier with keystroke logs, screenshots, and app tracking. It also supports cloud-based report viewing for quick remote access.',
    bestFor: 'Parents who want straightforward cloud reports with a no-cost starting plan.',
    highlights: ['Keystrokes and screenshots', 'Web portal report access', 'CSV/JSON export options'],
  },
  {
    rank: 2,
    name: 'Best Free Keylogger',
    image: '/assets/blog/top_10/best-free-keylogger-interface.png',
    imageAlt: 'Best Free Keylogger interface',
    website: 'https://bestxsoftware.com/best-free-keylogger',
    websiteLabel: 'Visit Best Free Keylogger',
    summary:
      'Best Free Keylogger combines activity tracking with practical controls such as app restrictions and web filtering, packaged in a user-friendly report viewer.',
    bestFor: 'Users who need both monitoring and lightweight parental control in one app.',
    highlights: ['Smart Read for cleaner logs', 'Filtering by app/date/user/text', 'One-click web and app restrictions'],
  },
  {
    rank: 3,
    name: 'Windows Keylogger',
    image: '/assets/blog/top_10/windows-keylogger-interface.png',
    imageAlt: 'Windows Keylogger interface',
    website: 'https://www.hugedomains.com/domain_profile.cfm?d=winthread.com',
    websiteLabel: 'Visit Winthread Software',
    summary:
      'A Windows-focused option with clear local reporting and a calendar-style activity view. Screenshot and delivery features are mainly available in paid tiers.',
    bestFor: 'Simple local viewing when advanced automation is not required.',
    highlights: ['Clear date-based log navigation', 'Application icons in logs', 'Free local report viewing'],
  },
  {
    rank: 4,
    name: 'Refog Personal Monitor',
    image: '/assets/blog/top_10/refog-personal-monitor-interface.png',
    imageAlt: 'Refog Personal Monitor interface',
    website: 'https://www.refog.com/',
    websiteLabel: 'Visit Refog',
    summary:
      'Refog Personal Monitor includes keystrokes, screenshots, internet activity, and file monitoring with a polished desktop UI.',
    bestFor: 'Users comparing trial-based tools with broad monitoring coverage.',
    highlights: ['Keystrokes and screenshots', 'Internet and app monitoring', 'File activity tracking'],
  },
  {
    rank: 5,
    name: 'All In One Keylogger',
    image: '/assets/blog/top_10/all-in-one-keylogger-interface.png',
    imageAlt: 'All In One Keylogger interface',
    website: 'https://www.tucows.com/preview/405170/All-In-One-Keylogger',
    websiteLabel: 'Download All In One Keylogger',
    summary:
      'All In One Keylogger offers broad functionality and a trial model, but its interface feels older compared with newer tools in this list.',
    bestFor: 'Users prioritizing core logging features over modern UI polish.',
    highlights: ['7-day trial model', 'Chats, web, and screenshot logs', 'Comprehensive baseline monitoring'],
  },
  {
    rank: 6,
    name: 'Iwantsoft Free Keylogger',
    image: '/assets/blog/top_10/iwantsoft-free-keylogger-interface.png',
    imageAlt: 'Iwantsoft Free Keylogger interface',
    website: 'https://www.best-free-keylogger.com/',
    websiteLabel: 'Visit Iwantsoft',
    summary:
      'Iwantsoft includes a custom installer builder and practical restriction controls. Some advanced reporting and screenshot capabilities are gated by paid plans.',
    bestFor: 'Users who value configurable deployment and basic web/app blocking.',
    highlights: ['Custom installer builder', 'Web and app restrictions', 'Solid keystroke and clipboard capture'],
  },
  {
    rank: 7,
    name: 'HomeGuard Activity Monitor',
    image: '/assets/blog/top_10/homeguard-activity-monitor-interface.png',
    imageAlt: 'HomeGuard Activity Monitor interface',
    website: 'https://veridium.net/homeguard-activity-monitor/',
    websiteLabel: 'Visit HomeGuard Activity Monitor',
    summary:
      'HomeGuard focuses on parental control and productivity with web filtering, screenshots, and scheduled restrictions, plus optional remote monitoring tools.',
    bestFor: 'Families and teams that need stronger policy controls in addition to logs.',
    highlights: ['Content and Safe Search filtering', 'Time limits for apps/programs', 'Detailed reports and notifications'],
  },
  {
    rank: 8,
    name: 'Spyrix Free Keylogger',
    image: '/assets/blog/top_10/spyrix-free-keylogger-interface.png',
    imageAlt: 'Spyrix Free Keylogger interface',
    website: 'https://www.spyrix.com/',
    websiteLabel: 'Visit Spyrix',
    summary:
      'Spyrix Free Keylogger provides core capture features and a notable live-view experience through its online account dashboard.',
    bestFor: 'Users who want web-based visibility and are fine with free-tier limits.',
    highlights: ['Live View through web dashboard', 'Keystroke and screenshot tracking', 'Paid upgrade path for delivery features'],
  },
  {
    rank: 9,
    name: 'Real PC Spy',
    image: '/assets/blog/top_10/real-pc-spy-interface.png',
    imageAlt: 'Real PC Spy interface',
    website: 'https://www.realspysoftware.com/',
    websiteLabel: 'Visit Real PC Spy',
    summary:
      'Real PC Spy includes major tracking categories and report delivery with a straightforward interface. Stealth behavior is tied to licensing.',
    bestFor: 'Users who prefer simple operation and table-style report layouts.',
    highlights: ['Covers major monitoring categories', 'Email and FTP report delivery', 'Expandable report records'],
  },
  {
    rank: 10,
    name: 'Actual Keylogger',
    image: '/assets/blog/top_10/actual-keylogger-interface.png',
    imageAlt: 'Actual Keylogger interface',
    website: 'https://www.actualkeylogger.com/',
    websiteLabel: 'Visit Actual Keylogger',
    summary:
      'Actual Keylogger includes keystroke, clipboard, app, and internet tracking with optional website blocking and a paid feature model.',
    bestFor: 'Users evaluating established tools with standard feature coverage.',
    highlights: ['Keystrokes and clipboard logs', 'Internet and app activity capture', 'Website blocking support'],
  },
];

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-emerald-50/40 py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.16),transparent_60%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-10">
            <header className="border-b border-slate-200 pb-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">Software Comparison</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Updated April 2026</span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-800">Windows Monitoring</span>
              </div>

              <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Top 10 Free Keylogger Software in 2026
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                This guide compares ten popular tools based on usability, tracking coverage, and practical value.
                Instead of long raw descriptions, each entry includes a concise summary, who it is best for, and key
                highlights to speed up decision-making.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="rounded-md bg-slate-100 px-3 py-1">
                  By <strong className="font-semibold text-slate-800">James Miller</strong>
                </span>
                <span className="rounded-md bg-slate-100 px-3 py-1">10 tools reviewed</span>
                <span className="rounded-md bg-slate-100 px-3 py-1">Focus: ease of use + feature depth</span>
              </div>
            </header>

            <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 sm:p-6">
              <h2 className="text-xl font-semibold text-emerald-900">Quick Take</h2>
              <p className="mt-3 text-sm leading-7 text-emerald-900 sm:text-base">
                Most free tools capture keystrokes and app activity, but the biggest difference is report quality,
                filtering controls, and whether remote viewing is available in the free plan. If you want a cleaner
                daily workflow, prioritize tools with strong log organization instead of only feature count.
              </p>
            </section>

            <section className="mt-8 grid gap-6">
              {softwareList.map((software) => (
                <section
                  key={software.rank}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors hover:border-emerald-300"
                >
                  <div className="grid gap-0 md:grid-cols-[1.15fr_0.85fr]">
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                          {software.rank}
                        </span>
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">{software.name}</h2>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{software.summary}</p>

                      <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                        <span className="font-semibold text-slate-900">Best for:</span> {software.bestFor}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {software.highlights.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 sm:text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={software.website}
                        className="mt-5 inline-flex items-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
                      >
                        {software.websiteLabel}
                      </Link>
                    </div>

                    <div className="border-t border-slate-200 bg-slate-50 p-4 md:border-t-0 md:border-l">
                      <div className="relative h-56 overflow-hidden rounded-xl border border-slate-200 bg-white sm:h-64 md:h-full md:min-h-64">
                        <Image
                          src={software.image}
                          alt={software.imageAlt}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, 38vw"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </section>

            <section className="mt-8 rounded-2xl border border-emerald-200 bg-linear-to-r from-emerald-50 to-teal-50 p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Explore Best Free Keylogger</p>
              <p className="mt-2 text-sm leading-7 text-emerald-900 sm:text-base">
                Looking for a balance between report readability and practical control settings? Start with Best Free
                Keylogger and compare it side-by-side against the tools in this list.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://bestxsoftware.com/best-free-keylogger"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
                >
                  Visit Best Free Keylogger
                </Link>
                <Link
                  href="https://bestxsoftware.com/best-free-keylogger/download"
                  className="inline-flex items-center justify-center rounded-lg border border-emerald-300 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-800 transition-colors hover:border-emerald-400 hover:bg-emerald-100"
                >
                  Download Best Free Keylogger
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Page 