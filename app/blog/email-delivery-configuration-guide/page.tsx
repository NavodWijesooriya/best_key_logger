import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-sky-50/40 py-10 sm:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.14),transparent_62%)]" />

        <article className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm backdrop-blur-sm sm:p-10 lg:p-12">
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

            <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Before You Begin</h2>
                <div className="mt-3 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
                  <p>
                    Best Free Keylogger can deliver reports by Email, LAN, FTP, or USB. This page
                    focuses on email delivery so the setup is easier to follow and verify.
                  </p>
                  <p>
                    Open the main window with the Unhide HotKey (default:
                    <strong className="font-semibold text-slate-900"> Ctrl + Alt + Shift + K</strong>)
                    or the Unhide Keyword (default:
                    <strong className="font-semibold text-slate-900"> unhide</strong> in the Run dialog).
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-sky-50/80 p-5 sm:p-6">
                <h2 className="text-lg font-semibold text-sky-900 sm:text-xl">Configuration at a glance</h2>
                <ol className="mt-4 space-y-3 text-sm leading-7 text-sky-900 sm:text-base">
                  <li className="rounded-xl bg-white/80 px-4 py-3 shadow-sm">1. Enable email sending.</li>
                  <li className="rounded-xl bg-white/80 px-4 py-3 shadow-sm">2. Choose a preset or enter SMTP details manually.</li>
                  <li className="rounded-xl bg-white/80 px-4 py-3 shadow-sm">3. Test the configuration before leaving the page.</li>
                </ol>
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
                <div className="order-2 space-y-4 lg:order-1">
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                      1. Enable email sending
                    </h2>
                    <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg">
                      Start in Settings, open Report Delivery, then switch Email delivery on.
                    </p>
                  </div>

                  <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-4 text-sm leading-7 text-slate-700 sm:text-base">
                    <p className="font-medium text-slate-900">Steps</p>
                    <ol className="mt-2 list-decimal space-y-2 pl-5">
                      <li>Go to Settings from the toolbar.</li>
                      <li>Click Report Delivery.</li>
                      <li>Open the Email tab and enable Email Sending.</li>
                    </ol>
                  </div>
                </div>

                <div className="order-1 rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm lg:order-2">
                  <div className="grid gap-3">
                    <img
                      src="/assets/blog/email/best-free-keylogger-toolbar-click-settings (1).png"
                      alt="Go to Settings from the toolbar"
                      className="w-full rounded-md border border-slate-200 bg-white object-contain p-2"
                    />
                    <img
                      src="/assets/blog/email/best-free-keylogger-settings-click-report-delivery.png"
                      alt="Open Report Delivery in Settings"
                      className="w-full rounded-md border border-slate-200 bg-white object-contain p-2"
                    />
                    <img
                      src="/assets/blog/email/best-free-keylogger-settings-report-delivery-email-enable-email-sending.png"
                      alt="Enable Email Sending in the Email tab"
                      className="w-full rounded-md border border-slate-200 bg-white object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    2. Enter SMTP server details
                  </h2>
                  <p className="text-base leading-7 text-slate-700 sm:text-lg">
                    Best Free Keylogger includes presets for common mailbox providers. Use a preset
                    when available, or enter the SMTP host and port manually.
                  </p>

                  <div className="rounded-xl border border-emerald-200 bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                      Recommended approach
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                      Click <strong className="font-semibold text-slate-900">Presets</strong> first.
                      If the provider is not listed, copy the SMTP values from the table below.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                  <img
                    src="/assets/blog/email/best-free-keylogger-settings-report-delivery-email-presets (1).png"
                    alt="Email presets for SMTP setup"
                    className="w-full rounded-md border border-slate-200 bg-white object-contain p-2"
                  />
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 px-4 py-3">
                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                    SMTP host and port reference
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-sm sm:text-base">
                    <thead className="bg-slate-50 text-slate-900">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Mailbox Provider</th>
                        <th className="px-4 py-3 font-semibold">SMTP host</th>
                        <th className="px-4 py-3 font-semibold">Port</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Gmail</td>
                        <td className="px-4 py-3">smtp.gmail.com</td>
                        <td className="px-4 py-3">587</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Yahoo Mail</td>
                        <td className="px-4 py-3">smtp.mail.yahoo.com</td>
                        <td className="px-4 py-3">587 or 465</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Outlook</td>
                        <td className="px-4 py-3">smtp.office365.com</td>
                        <td className="px-4 py-3">587</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">Live (Hotmail)</td>
                        <td className="px-4 py-3">smtp.live.com</td>
                        <td className="px-4 py-3">587</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">AOL</td>
                        <td className="px-4 py-3">smtp.aol.com</td>
                        <td className="px-4 py-3">587</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-900">iCloud</td>
                        <td className="px-4 py-3">smtp.mail.me.com</td>
                        <td className="px-4 py-3">587</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
                After entering the values, click <strong className="font-semibold text-slate-900">Test</strong>.
                A successful test should send a message to your inbox.
              </p>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-8">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  3. Enter email account details
                </h2>
                <p className="mt-4 max-w-5xl text-base leading-7 text-slate-700 sm:text-lg">
                  Enter your email account details correctly in the input fields. These details are
                  stored on the software itself, and they are never sent to our servers or
                  elsewhere. So, your information is safe.
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-5">
                  <div className="rounded-xl border border-slate-300 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-sm text-slate-700">
                      <span className="inline-flex items-center rounded-sm bg-emerald-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        ON
                      </span>
                      <span className="font-medium text-slate-900">Enable Email Sending</span>
                    </div>

                    <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
                      <div className="space-y-4">
                        {[
                          ['Email Address', 'johndoe1.bfk@gmail.com'],
                          ['SMTP Server', 'smtp.gmail.com'],
                          ['User Name', 'johndoe1.bfk'],
                          ['Password', '••••••••••'],
                          ['Mail Subject', 'BFK Logs'],
                        ].map(([label, value]) => (
                          <div key={label} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                            <label className="w-28 text-right text-sm font-medium text-slate-900 sm:text-base">
                              {label}:
                            </label>
                            <div className="flex min-h-8 items-center rounded-none border border-slate-400 bg-white px-2 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:text-base">
                              {value}
                            </div>
                          </div>
                        ))}

                        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                          <label className="w-28 text-right text-sm font-medium text-slate-900 sm:text-base">
                            Port:
                          </label>
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex h-8 w-20 items-center border border-slate-400 bg-white px-2 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:text-base">
                              587
                            </div>
                            <button className="inline-flex h-8 items-center justify-center rounded-none bg-slate-400 px-8 text-sm font-medium text-white shadow-sm">
                              Test
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <p className="mb-1 text-sm font-medium text-slate-900">Presets:</p>
                          <div className="flex h-8 w-full items-center justify-between border border-slate-400 bg-white px-2 text-sm text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                            <span>Gmail (Google Mail)</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="h-4 w-4 text-slate-500"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 pt-10">
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 text-xs font-bold text-white">
                            i
                          </span>
                          <div className="h-8 w-8 rounded-full bg-slate-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-8 max-w-4xl space-y-4 text-base leading-7 text-slate-700 sm:text-lg">
                  <p>
                    Click <strong className="font-semibold text-slate-900">Test</strong>. If
                    everything is working fine, you should receive a test email to your inbox.
                  </p>
                  <p>If the test returns successful, you&rsquo;re good to go.</p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6 lg:p-8">
              <h2 className="text-lg font-semibold text-amber-900 sm:text-xl">Common issues</h2>
              <p className="mt-2 text-sm leading-7 text-amber-900 sm:text-base">
                If the test fails, use the troubleshooting cards below to narrow down the cause.
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Authentication error</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Check the username and password first. If the account uses two-factor
                    authentication, create and use an app password instead of the regular one.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">SMTP server or connection drop</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Verify the SMTP host, confirm the internet connection, and try a preset if the
                    provider is supported.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Invalid SMTP port</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    Recheck the port number against the provider requirements in the table above.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://support.bestfreekeylogger.com/hc/en-us/requests/new"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Support
                </Link>

                <Link
                  href="https://knowledge.workspace.google.com/admin/apps/control-access-to-less-secure-apps?hl=en&visit_id=639128551802519389-1673994516&rd=1"
                  className="inline-flex items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gmail reference
                </Link>

                <Link
                  href="https://help.yahoo.com/kb/SLN27791.html?guccounter=1&guce_referrer=aHR0cHM6Ly9iZXN0eHNvZnR3YXJlLmNvbS8&guce_referrer_sig=AQAAAGWcovXZuVW2OH1cvIvFKeIaR_XW-XmT_c86n8zKvwEvGjdd46rZKYA7yhp_KAq1PmfBAqaqgjcIrATA4pYk3PFq33bd1eP9DzJjr-y1z3DDLG_TOSb-KVNB0JNePjsqO9KSDrJE9j-lp1fI1VhKWK8Bb7l2QUVjARFz_lvtGEI9"
                  className="inline-flex items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yahoo Mail reference
                </Link>
              </div>
            </section>
          </div>

        </article>
      </main>

      <Footer />
    </>
  )
}

export default Page