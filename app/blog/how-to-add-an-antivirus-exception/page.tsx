import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'

type AntivirusEntry = {
  name: string
  iconText: string
  iconClassName: string
  href: string
  cardClassName?: string
}

const antivirusList: AntivirusEntry[] = [
  {
    name: 'Avast',
    iconText: 'A',
    iconClassName: 'bg-orange-100 text-orange-600',
    href: 'https://www.avast.com/faq.php?article=AVKB229',
    cardClassName: 'bg-white',
  },
  {
    name: 'AVG',
    iconText: 'AVG',
    iconClassName: 'bg-blue-100 text-blue-800',
    href: 'https://support.avg.com/SupportArticleView?l=en&urlName=AVG-Antivirus-scan-exclusions',
  },
  {
    name: 'Avira',
    iconText: 'R',
    iconClassName: 'bg-red-100 text-red-700',
    href: 'https://support.avira.com/hc/en-us/articles/360003162153-How-do-I-add-exceptions-to-Avira-Antivirus',
  },
  {
    name: 'BitDefender',
    iconText: 'B',
    iconClassName: 'bg-red-100 text-red-700',
    href: 'https://www.bitdefender.com/consumer/support/answer/13427/',
  },
  {
    name: 'ESET nod32',
    iconText: 'E',
    iconClassName: 'bg-teal-100 text-teal-700',
    href: 'https://support.eset.com/en/kb2788-add-or-edit-detections-exclusions-in-eset-windows-home-products',
  },
  {
    name: 'F-Secure',
    iconText: 'F',
    iconClassName: 'bg-sky-100 text-sky-700',
    href: 'https://www.f-secure.com/en/support/articles/how-do-i-exclude-a-file-or-folder-from-scanning',
  },
  {
    name: 'Kaspersky',
    iconText: 'K',
    iconClassName: 'bg-rose-100 text-rose-700',
    href: 'https://support.kaspersky.com/common/diagnostics/7858',
  },
  {
    name: 'Norton',
    iconText: 'N',
    iconClassName: 'bg-amber-100 text-amber-700',
    href: 'https://support.norton.com/sp/en/us/home/current/solutions/v3672136',
  },
  {
    name: 'Panda Dome',
    iconText: 'P',
    iconClassName: 'bg-indigo-100 text-indigo-700',
    href: 'https://support.pandasecurity.com/forum/viewtopic.php?t=5375',
  },
  {
    name: 'Sophos',
    iconText: 'S',
    iconClassName: 'bg-slate-200 text-slate-700',
    href: 'https://support.sophos.com/support/s/article/KB-000035949',
  },
  {
    name: 'Trend Micro',
    iconText: 'T',
    iconClassName: 'bg-red-100 text-red-700',
    href: 'https://helpcenter.trendmicro.com/en-us/article/tmka-20043',
  },
  {
    name: 'Webroot',
    iconText: 'W',
    iconClassName: 'bg-lime-100 text-lime-700',
    href: 'https://answers.webroot.com/Webroot/ukp.aspx?pid=17&app=vw&vw=1&solutionid=1632',
  },
  {
    name: 'Windows Security',
    iconText: 'WS',
    iconClassName: 'bg-blue-100 text-blue-700',
    href: 'https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26',
  },
]

const page = () => {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-cyan-50/40 py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.14),transparent_62%)]" />

        <article className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm sm:p-10">
            <header className="border-b border-slate-200 pb-7">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-cyan-800">Security Guide</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">False Positive</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                How to Add an Antivirus Exception (False Positive)
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="rounded-md bg-slate-100 px-3 py-1">
                  By <strong className="font-semibold text-slate-800">Liam Jones</strong>
                </span>
                <span className="rounded-md bg-slate-100 px-3 py-1">2019-10-16</span>
              </div>
            </header>

            <section className="mt-7 space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                Different antivirus programs have different user interfaces and component names.
                Therefore, adding exceptions/exclusions to different antivirus programs can involve
                different methods with varying steps.
              </p>

              <p>
                Here&apos;s how you can add an exception/exclusion to some popular antivirus software.
              </p>
            </section>

            <section className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50/80 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-cyan-900 sm:text-xl">Before You Start</h2>
              <p className="mt-2 text-sm leading-7 text-cyan-900 sm:text-base">
                Add exclusions only for files you trust. Review the exact file path and source before
                creating an exception in your antivirus settings.
              </p>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Popular Antivirus Software</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                Select your antivirus from the list below and follow its exclusion steps in the settings panel.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {antivirusList.map((antivirus) => (
                  <Link
                    key={antivirus.name}
                    href={antivirus.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-3xl border border-slate-200 px-4 py-3 shadow-[0_2px_10px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${antivirus.cardClassName ?? 'bg-blue-100/70'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl px-2 text-xs font-bold tracking-wide ${antivirus.iconClassName}`}
                        aria-hidden="true"
                      >
                        {antivirus.iconText}
                      </span>
                      <p className="text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl">
                        {antivirus.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default page