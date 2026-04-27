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

            <h2>1. Enable email sending</h2>
            <p>1.1. Go to Settings by clicking the button on the toolbar.</p>
            <img src="/assets/blog/email/best-free-keylogger-toolbar-click-settings (1).png" alt="Enable email sending" className="rounded-lg border border-slate-200" />

            <p>1.2. Click Report Delivery on Settings Window.</p>
            <img src="/assets/blog/email/best-free-keylogger-settings-click-report-delivery.png" alt="Click Report Delivery" className="rounded-lg border border-slate-200" />

            <p>1.3. Go to Email tab, and click Enable Email Sending switch.</p>
            <img src="/assets/blog/email/best-free-keylogger-settings-report-delivery-email-enable-email-sending.png" alt="Enable Email Sending" className="rounded-lg border border-slate-200" />

            <p>2. Enter SMTP server details</p>

            <p>Email sending on Best Free Keylogger comes pre-packed with a set of Presets for the most common mailbox providers, such as gmail or yahoo. So, you can click “Presets” to enter SMTP details automatically, (or you can manually type in the SMTP server and port later).</p>
            <img src="/assets/blog/email/best-free-keylogger-settings-report-delivery-email-presets (1).png" alt="Email Presets" className="rounded-lg border border-slate-200" />

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                SMTP host and port reference
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                If you wish to enter SMTP server details manually, you need to know the SMTP host
                and SMTP port. The following table contains SMTP host and port information of some
                popular mailbox providers.
              </p>

              <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
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
              <p>Click Test. If everything is working fine, you should receive a test email to your inbox.

                If the test returns successful, you’re good to go.</p>
            </div>

            <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-amber-900 sm:text-xl">Common issues</h2>
              <p className="mt-2 text-sm leading-7 text-amber-900 sm:text-base">
                If you run into any errors while configuring these settings, the following section
                will be of help.
              </p>

              <div className="mt-5 space-y-5 rounded-xl bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm sm:text-base">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Email Server Authentication Error</h3>
                  <p className="mt-2">
                    This error could occur due to either of these two reasons:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Wrong username or password</li>
                    <li>Two-factor Authentication</li>
                  </ul>
                  <p className="mt-2">
                    If you have two-factor authentication switched on, you may have to create an
                    app password, and enter that as the password on BFK Email configuration instead
                    of entering your regular email password.
                  </p>
                  <p className="mt-2">
                    Important: In some cases, the error may continue to occur. In such an event,
                    you will have to enable “Allow less secure apps” (Give temporary access to
                    third-party apps) on your email account. Here’s how to do so:
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900">Invalid SMTP Server or Connection Drop</h3>
                  <p className="mt-2">
                    Check that the SMTP host is correct and that your network connection is stable.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-slate-900">Invalid SMTP Port</h3>
                  <p className="mt-2">
                    Make sure the SMTP port matches the provider requirements listed above.
                  </p>
                  <Link
                    href="https://knowledge.workspace.google.com/admin/apps/control-access-to-less-secure-apps?hl=en&visit_id=639128551802519389-1673994516&rd=1"
                    className="mt-2 inline-flex rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Gmail
                  </Link>

                  <Link
                    href="https://mail.google.com/"
                    className="mt-2 inline-flex rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yahoo Mail
                  </Link>

                  <Link
                    href="https://help.yahoo.com/kb/SLN27791.html?guccounter=1&guce_referrer=aHR0cHM6Ly9iZXN0eHNvZnR3YXJlLmNvbS8&guce_referrer_sig=AQAAAGWcovXZuVW2OH1cvIvFKeIaR_XW-XmT_c86n8zKvwEvGjdd46rZKYA7yhp_KAq1PmfBAqaqgjcIrATA4pYk3PFq33bd1eP9DzJjr-y1z3DDLG_TOSb-KVNB0JNePjsqO9KSDrJE9j-lp1fI1VhKWK8Bb7l2QUVjARFz_lvtGEI9"
                    className="mt-2 inline-flex rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AOL Mail
                  </Link>
                </div>
                <h2>Invalid SMTP Server or Connection Drop</h2>
                <p>This error could occur when the SMTP Server name is mistyped or the connection is down. It is recommended that you use a preset whenever possible if your mailbox provider is listed on BFK. If this error continues to occur, please check whether the process is being interrupted by an antivirus program or firewall.</p>

                <h2>Invalid SMTP Port</h2>
                <p>This error could occur when SMTP port is mistyped. It is recommended that you use a preset whenever possible if your mailbox provider is listed on BFK. At the event of this error, please recheck the SMTP port and try again.</p>

                <p>Please do not hesitate to contact our support team if you need assistance setting up email delivery -- we are ready to help!</p>

                <a
                  href="https://support.bestfreekeylogger.com/hc/en-us/requests/new"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Support
                </a>



              </div>
            </section>
          </div>

        </article >
      </main >

      <Footer />
    </>
  )
}

export default Page