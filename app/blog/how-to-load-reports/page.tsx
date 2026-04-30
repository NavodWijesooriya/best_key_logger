import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-sky-50/40 py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.14),transparent_62%)]" />

        <article className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm sm:p-10 lg:p-12">
            <header className="border-b border-slate-200 pb-7">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                How To Load Reports
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="rounded-md bg-slate-100 px-3 py-1">
                  By <strong className="font-semibold text-slate-800">Liam Jones</strong>
                </span>
                <span className="rounded-md bg-slate-100 px-3 py-1">2019-09-09</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800">how to</span>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800">load report</span>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800">import</span>
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800">log files</span>
              </div>
            </header>

            <section className="mt-8 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                You can configure Best Free Keylogger on a remote computer to send you reports via
                Email, FTP, LAN or USB. These log files are usually encrypted with the private key
                you provided, and they have to be decrypted using Best Free Keylogger when you need
                to view the reports. This guide will walk you through the process step by step.
              </p>
            </section>

            <section className="mt-8 rounded-2xl border border-sky-200 bg-sky-50/70 p-5 sm:p-6">
              <ol className="space-y-5 text-base leading-8 text-slate-800 sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-sky-700 shadow-sm ring-1 ring-sky-200">
                    1
                  </span>
                  <p>
                    <strong className="font-semibold text-sky-800">Click Import</strong>
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-sky-700 shadow-sm ring-1 ring-sky-200">
                    2
                  </span>
                  <p>Select the log files to Import</p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-sky-700 shadow-sm ring-1 ring-sky-200">
                    3
                  </span>
                  <p>
                    <span className="font-semibold text-sky-800">Check the Private Key</span>
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-sky-700 shadow-sm ring-1 ring-sky-200">
                    4
                  </span>
                  <p>
                    <strong className="font-semibold text-sky-800">Click Import</strong>
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-sky-700 shadow-sm ring-1 ring-sky-200">
                    5
                  </span>
                  <p>Select the Date of the reports</p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-sky-700 shadow-sm ring-1 ring-sky-200">
                    6
                  </span>
                  <p>
                    <strong className="font-semibold text-sky-800">Click Load Report</strong>
                  </p>
                </li>
              </ol>
            </section>
            <img src="/assets/blog/load_reports/bfk-toolbar-click-import.png" alt="How To Load Reports" className="mx-auto mt-10 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" />
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}

export default page
