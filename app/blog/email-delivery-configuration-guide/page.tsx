import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-sky-50/40 py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.14),transparent_62%)]" />

        <article className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm sm:p-10">
            <header className="border-b border-slate-200 pb-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sky-800">Report Delivery</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">Email Configuration</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Best Free Keylogger Report Delivery Email Configuration Guide
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="rounded-md bg-slate-100 px-3 py-1">
                  By <strong className="font-semibold text-slate-800">Shane Pearson</strong>
                </span>
                <span className="rounded-md bg-slate-100 px-3 py-1">2019-09-09</span>
              </div>
            </header>

            <section className="mt-7 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Best Free Keylogger is a powerful keylogging tool that also provides monitoring,
                web filtering, and parental controls.
              </p>

              <p>
                One of its most useful features is the ability to deliver reports (logs) through
                Email, LAN, FTP, or USB. If setting up email delivery feels overwhelming, this
                guide simplifies the process so you can configure it quickly and correctly.
              </p>
            </section>

            <section className="mt-8 rounded-2xl border border-sky-200 bg-sky-50/80 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-sky-900 sm:text-xl">Before You Begin</h2>
              <p className="mt-2 text-sm leading-7 text-sky-900 sm:text-base">
                Enable <strong>Email</strong> as the delivery option in the Best Free Keylogger
                interface. Open the main window using the Unhide HotKey (default:
                <strong> Ctrl + Alt + Shift + K</strong>) or the Unhide Keyword (default:
                <strong> unhide</strong> in the Run dialog).
              </p>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Configuration Steps</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                Follow these instructions in order to complete email report delivery setup:
              </p>

              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>Enable email sending.</li>
                <li>Enter SMTP details.</li>
                <li>Enter email details.</li>
                <li>Read about common issues and how to solve them.</li>
              </ol>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}

export default Page