import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-sky-50/40 py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.14),transparent_62%)]" />

        <article className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm sm:p-10 lg:p-12">
            <header className="border-b border-slate-200 pb-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800">Getting Started</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">View Report</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Best Free Keylogger Getting Started: View Report
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="rounded-md bg-slate-100 px-3 py-1">
                  By <strong className="font-semibold text-slate-800">Shane Pearson</strong>
                </span>
                <span className="rounded-md bg-slate-100 px-3 py-1">2019-09-05</span>
              </div>
            </header>

            <section className="mt-7 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Best Free Keylogger is a PC monitoring tool you can use to monitor keystrokes,
                clipboard, internet activity, and application usage on your computer.
              </p>

              <p>
                You can view records of each day by simply selecting the relevant date and
                clicking &quot;Load Report&quot;. For more information, please have a look at the
                following guide.
              </p>
            </section>

            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-7">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                How To View Reports
              </h2>

              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
                <div className="rounded-xl border border-slate-300 bg-white p-3 shadow-sm sm:p-4">
                  <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <img
                      src="/assets/blog/getting-started/calendar.png"
                      alt="Select the report date in calendar"
                      className="mx-auto w-full max-w-sm rounded-md border border-slate-200 bg-white object-contain p-2"
                    />
                    <img
                      src="/assets/blog/getting-started/load-report.png"
                      alt="Use the Load Report button to open records"
                      className="mx-auto w-full max-w-sm rounded-md border border-slate-200 bg-white object-contain p-2"
                    />
                  </div>
                </div>

                <div className="space-y-4 text-base leading-7 text-slate-700 sm:text-lg">
                  <div className="flex items-start gap-3 rounded-xl border border-sky-200 bg-white p-4 shadow-sm">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                      -&gt;
                    </span>
                    <p>
                      First, select the date of the report you want to view.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-sky-200 bg-white p-4 shadow-sm">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                      -&gt;
                    </span>
                    <p>
                      Then, click <strong className="font-semibold text-slate-900">Load Report</strong> to
                      view the report.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-sky-200 bg-white p-4 shadow-sm">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                      -&gt;
                    </span>
                    <p>
                      These numbers show the number of records available in each category:
                      keystrokes, clipboard, screenshots, internet, and applications.
                    </p>
                  </div>

                </div>

              </div>


            </section>

            <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                After Loading the Report
              </h2>

              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
                <div className="rounded-xl border border-slate-300 bg-slate-50 p-3 shadow-sm sm:p-4">
                  <img
                    src="/assets/blog/getting-started/sections.png"
                    alt="Loaded report with category record counts"
                    className="w-full rounded-md border border-slate-200 bg-white object-contain p-2"
                  />
                </div>

                <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 shadow-sm sm:p-5">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                      >
                        <path d="M5 12h14" />
                        <path d="m11 6-6 6 6 6" />
                      </svg>
                    </span>
                    <p className="text-base leading-7 text-slate-700 sm:text-lg">
                      These numbers show the number of records in the loaded report for
                      keystrokes, clipboard, screenshots, internet, and applications.
                    </p>
                  </div>
                </div>

              </div>

            </section>
            <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-7">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                How to Filter Records
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
                After loading a report, use the filter bar at the top of the viewer to find
                what you need faster.
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
                <div className="rounded-xl border border-slate-300 bg-white p-3 shadow-sm sm:p-4">
                  <img
                    src="/assets/basic-filters-keystrokes.png"
                    alt="Filter records in the report viewer"
                    className="w-full rounded-md border border-slate-200 bg-white object-contain p-2"
                  />
                </div>

                <div className="rounded-xl border border-emerald-200 bg-white p-4 shadow-sm sm:p-6">
                  <ol className="space-y-5 text-base leading-7 text-slate-800 sm:text-lg">
                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-xl font-bold text-slate-800">
                        1
                      </span>
                      <p>
                        <strong className="font-bold">Sort</strong> records in
                        <strong className="font-bold"> Chronological order</strong>{' '}
                        <em>(Latest First or Earliest First)</em>
                      </p>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-xl font-bold text-slate-800">
                        2
                      </span>
                      <p>
                        <strong className="font-bold">Filter</strong> records by
                        <strong className="font-bold"> User</strong>
                      </p>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-xl font-bold text-slate-800">
                        3
                      </span>
                      <p>
                        <strong className="font-bold">Filter</strong> records by
                        <strong className="font-bold"> Application</strong>
                      </p>
                    </li>

                    <li className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-xl font-bold text-slate-800">
                        4
                      </span>
                      <p>
                        Enable <strong className="font-bold">Smart Read</strong> filter
                      </p>
                    </li>
                  </ol>

                  <p className="mt-6 text-xl font-semibold italic tracking-wide text-slate-900 sm:text-2xl">
                    Smart Read <span className="font-normal">makes reports easier to read.</span>
                  </p>

                </div>
              </div>
            </section>
            <img src="/assets/smart-read.png" alt="Smart Read filter example" className="mx-auto max-w-2xl rounded-md border border-slate-200 bg-white object-contain p-2" />
          </div>

        </article>
      </main>

      <Footer />
    </>
  )
}

export default page
