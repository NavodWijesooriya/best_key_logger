import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'
import {
  Download,
  Keyboard,
  Clipboard,
  Camera,
  Globe,
  Layout,
  Search,
  Filter,
  FileCode,
  Users,
  Clock,
  Lock,
  Shield,
  Mail,
  Database,
  Trash2,
  EyeOff,
  Power,
  UserCheck,
  ShieldAlert,
  Hourglass,
  GlobeLock,
  Ban,
  LucideIcon,
  Monitor,
  ClipboardList,
  Eye,
} from 'lucide-react'

type FeatureItemProps = {
  icon: LucideIcon
  text: string
}

const FeatureItem = ({ icon: Icon, text }: FeatureItemProps) => (
  <div className="group flex cursor-default items-center gap-4 rounded-2xl p-3.5 transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
    <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-100 bg-slate-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500">
      <Icon className="h-5 w-5 text-slate-600 transition-colors duration-300 group-hover:text-white" />
    </div>
    <span className="text-[15px] font-semibold text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
      {text}
    </span>
  </div>
)

const sectionData = [
  {
    title: 'Capture',
    items: [
      { icon: Keyboard, text: 'Keystroke Records' },
      { icon: Clipboard, text: 'Clipboard Records' },
      { icon: Camera, text: 'Screenshots' },
      { icon: Globe, text: 'Internet Activity' },
      { icon: Layout, text: 'Application Usage' },
      { icon: Search, text: '"Smart Read" Filter' },
      { icon: Filter, text: 'Advanced Filtering' },
      { icon: FileCode, text: 'HTML Reports' },
    ],
  },
  {
    title: 'Management',
    items: [
      { icon: Users, text: 'Limit by User/Application' },
      { icon: Clock, text: 'Scheduled Monitoring' },
      { icon: Lock, text: 'Encrypted Log Files' },
      { icon: Shield, text: 'Password Protection' },
      { icon: Mail, text: 'Delivery via Email & FTP' },
      { icon: Database, text: 'Back Up Old Logs' },
      { icon: Trash2, text: 'Automatic Log Clearance' },
    ],
  },
  {
    title: 'Security',
    items: [
      { icon: EyeOff, text: 'Invisible Mode' },
      { icon: Power, text: 'Auto Uninstallation' },
      { icon: UserCheck, text: 'Parental Controls' },
      { icon: ShieldAlert, text: 'Web Filtering' },
      { icon: Hourglass, text: 'Time Limiting' },
      { icon: GlobeLock, text: 'Internet Blocking' },
      { icon: Ban, text: 'Application Blocking' },
    ],
  },
]



const dashboardSections = [
  {
    title: 'Keystroke Records',
    icon: Monitor,
    image: '/assets/features/best-free-keylogger-features-keystroke.png',
    alt: 'Keystroke Records dashboard',
    reverse: false,
    description:
      'Best Free Keylogger lets you see what was typed in each application by recording keystrokes, tracking the user, the location of the input, and the date and time of each record.',
  },
  {
    title: 'Clipboard Records',
    icon: ClipboardList,
    image: '/assets/features/best-free-keylogger-features-clipboard.png',
    alt: 'Clipboard Records dashboard',
    reverse: true,
    description:
      'The clipboard monitor records copied or cut content and identifies whether the content is text or files.',
  },

  {
    title: 'Screenshots',
    icon: Monitor,
    image: '/assets/features/best-free-keylogger-features-screenshots.png',
    alt: 'Screenshots dashboard',
    reverse: false,
    description:
      'With Best Free Keylogger, screenshots of ongoing activities can be captured automatically at set intervals. These screenshots are stored along with other records, and they can be included in reports and backups.',
  },

  {
    title: 'Internet Activity',
    icon: ClipboardList,
    image: '/assets/features/best-free-keylogger-features-internet-activity.png',
    alt: 'Clipboard Records dashboard',
    reverse: true,
    description:
      'You can get information regarding websites that were visited using the web-browser on the computer using Best Free Keylogger. The URL, user, date and time are recorded for each internet activity. This feature on Best Free Keylogger works with all major web browsers.',
  },

  {
    title: 'Application Usage',
    icon: Monitor,
    image: '/assets/features/best-free-keylogger-features-applications.png',
    alt: 'Keystroke Records dashboard',
    reverse: false,
    description:
      'You can get records about all the applications used on the computer using application monitoring on Best Free Keylogger. This gives you information about the user, when the application was launched and closed etc.',
  },


]


const highlights = [
  {
    title: '"Smart Read" Filter',
    image: '/assets/images/best-free-keylogger-features-smart-read.png',
    alt: 'Smart Read feature',
    description:
      '"Smart-Read" improves readability of keystroke reports by filtering unimportant keystrokes such as backspace and delete to show only the final string of characters. It can be switched on or off with just one click.',
  },
  {
    title: 'Advanced Filtering',
    image: '/assets/images/best-free-keylogger-features-filter.png',
    alt: 'Advanced Filtering feature',
    description:
      'The report viewer includes filters for user, date, text content, application, URL, and more, making it easier to find what you need without scanning the whole report.',
  },
]

const html = [
  {
    title: '"HTML Reports"',
    image: '/assets/images/best-free-keylogger-features-html-report.png',
    alt: 'HTML Reports feature',
    description:
      '"With Best Free Keylogger, you can create reports as portable HTML files, which can be viewed in the web browser without having to install any other additional software.',
  },

]


const limit = [
  {
    title: '"Limit by User/Application',
    image: '/assets/images/best-free-keylogger-features-limit-by-user.png',
    alt: 'Limit By User/Application',
    description:
      '"Sometimes you do not need to monitor all the users or all the applications.Monitoring features on Best Free Keylogger can be configured to enable monitoring only specific users or applications.',
  },

  {
    title: 'Encrypted Log Files',
    image: '/assets/images/best-free-keylogger-features-encrypted.png',
    alt: 'Encrypted Log Files',
    description:
      'You can configure Best Free Keylogger reports to be encrypted with a secure private key of your choice. Then the private key has to be given every time those reports are imported to the report viewer. This prevents any unwanted parties from being able to exploit your records.',
  },

  {
    title: 'Password Protection',
    image: '/assets/images/best-free-keylogger-features-password.png',
    alt: 'Password Protection',
    description:
      'Best Free Keylogger is protected using a login password which can be configured at installation. This password can be changed only by using the interface. Every time the interface is called to unhide using the hotkey or the keyword, the login password is requested, and you cannot proceed without proper authentication.',
  },
]


const delivary = [
  {
    title: '"Delivery via Email, FTP, LAN, USB"',
    image: '/assets/images/best-free-keylogger-features-report-delivery.png',
    alt: 'Delivery via Email, FTP, LAN, USB',
    description:
      '"Reports generated by Best Free Keylogger can be delivered via multiple delivery methods. You can configure Best Free Keylogger to send you the reports to your email or upload them to an FTP server. It is also possible to copy the reports from your computer to another computer on the same LAN at given intervals or to a USB drive when plugged-in automatically.',
  },

]

const extraFeatures = [
  {
    icon: Download,
    title: 'Back Up Old Logs',
    description:
      'You can back up old log files created by Best Free Keylogger as encrypted files or HTML reports. When you export old logs as encrypted files, they can be imported and viewed on the report viewer at a later time.',
  },
  {
    icon: Trash2,
    title: 'Automatic Log Clearance',
    description:
      'Best Free Keylogger can be configured to get rid of old and redundant logs automatically either when total size of old logs reaches a user-specific limit or after they have been delivered. This saves you the effort of manually removing old logs.',
  },
  {
    icon: Eye,
    title: 'Invisible Mode',
    description:
      'Once Best Free Keylogger is installed on the computer, it starts running in the background. It does not create a desktop shortcut or start menu icon; its interface can be called only using the hotkey or the keyword configured by the administrator.',
  },
  {
    icon: Power,
    title: 'Automatic Uninstallation',
    description:
      'You can schedule Best Free Keylogger to uninstall itself automatically on a particular date. When configured, the software will be automatically uninstalled from the computer without being detected by the current user.',
  },
]

const parental = [
  {
    title: '"Parental Controls"',
    image: '/assets/images/best-free-keylogger-parental-features.png',
    alt: 'Parental Controls',
    description:
      '"Parents concerned about their children’s online safety are offered several Parental control features by Best Free Keylogger.',
  },

]

const web = [
  {
    title: 'Web Filtering',
    icon: Monitor,
    image: '/assets/images/best-free-keylogger-parental-features-web-filtering.png',
    alt: 'Web Filtering',
    reverse: false,
    description:
      'Best Free Keylogger is web-filtering feature can block or allow access to websites based on the textual content on those sites. There are content-specific filters to filter out websites with inappropriate content such as pornography, weapons, violence, drugs, alcohol, tobacco, gambling and profanity. It is also possible to block social-networking sites and video-sharing sites using Best Free Keylogger if they do not align with your views or company policies.',
  },
  {
    title: 'Time Limiting Internet Access',
    icon: ClipboardList,
    image: '/assets/images/best-free-keylogger-parental-features-time-limiting.png',
    alt: 'Time Limiting Internet Access',
    reverse: true,
    description:
      'Parental controls on Best Free Keylogger can be configured to run only during specific hours. This setting helps you to schedule parental controls to run from a particular time until a defined time on certain days of the week.',
  },
]


const internet = [
  {
    title: '"Internet Blocking',
    image: '/assets/images/best-free-keylogger-parental-features-internet-blocking (1).png',
    alt: 'Internet Blocking',
    description:
      '"Blocking specific websites or allowing only a defined list of websites is straightforward with Best Free Keylogger. You can add a list of websites to the block list if you wish to block in order to prevent users from visiting them, and in the same way, you can add a list of websites if you wish to allow access only to those websites.',
  },
  {
    title: 'Application Blocking',
    image: '/assets/images/best-free-keylogger-parental-features-application-blocking.png',
    alt: 'Application Blocking',
    description:
      'You can prevent your children from using certain applications installed on your computer by configuring "Application blocking" on Best Free Keylogger. When configured, users will not be able to run any of the applications listed in the list.',
  },
]


const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pt-24">
        <section className="mb-12 text-center sm:mb-16">
          <div className="mb-5 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600">
            Security Features
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Powerful Keylogger Capabilities
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            A combined overview of capture, management, and security tools, plus the most useful
            report-viewing features in one page.
          </p>
        </section>

        <section className="mb-20 rounded-3xl border border-white/80 bg-white/70 p-6 shadow-lg backdrop-blur-2xl sm:p-8 lg:p-12">
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {sectionData.map((column) => (
              <div key={column.title} className="space-y-2">
                <h2 className="mb-6 px-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                  {column.title}
                </h2>
                <div className="space-y-1">
                  {column.items.map((item) => (
                    <FeatureItem key={item.text} icon={item.icon} text={item.text} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 space-y-8">
          {dashboardSections.map((section) => {
            const Icon = section.icon

            return (
              <div
                key={section.title}
                className={`flex flex-col items-center gap-12 rounded-3xl   lg:p-8 ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="flex flex-1 justify-center">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="w-full max-w-md rounded-xl border "
                  />
                </div>

                <div className="flex-1 max-w-md">
                  <div className="mb-4 flex items-center gap-2">
                    <Icon className="text-emerald-600" size={24} />
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                      {section.title}
                    </h2>
                  </div>
                  <p className="leading-relaxed text-slate-600">{section.description}</p>
                </div>
              </div>
            )
          })}
        </section>

        <section className="mb-30 grid gap-12 md:grid-cols-2 md:gap-18 m-12 p-12">
          {highlights.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col rounded-3xl "
            >
              <h2 className="text-center text-2xl font-bold text-slate-900">{feature.title}</h2>
              <div className="mx-auto mt-6 w-full max-w-xs overflow-hidden rounded-xl">
                <img src={feature.image} alt={feature.alt} className="w-full" />
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section className='center-'>
          {html.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col rounded-3xl "
            >
              <h2 className="text-center text-2xl font-bold text-slate-900">{feature.title}</h2>
              <div className="mx-auto mt-6 w-full max-w-lg overflow-hidden rounded-xl">
                <img src={feature.image} alt={feature.alt} className="w-full" />
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </section>


        <section className="mb-30 grid gap-12 md:grid-cols-2 md:gap-18 m-12 p-12">
          {limit.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col rounded-3xl "
            >
              <h2 className="text-center text-2xl font-bold text-slate-900">{feature.title}</h2>
              <div className="mx-auto mt-6 w-full max-w-xs overflow-hidden rounded-xl">
                <img src={feature.image} alt={feature.alt} className="w-full" />
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section className='center-'>
          {delivary.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col rounded-3xl "
            >
              <h2 className="text-center text-2xl font-bold text-slate-900">{feature.title}</h2>
              <div className="mx-auto mt-6 w-full max-w-lg overflow-hidden rounded-xl">
                <img src={feature.image} alt={feature.alt} className="w-full" />
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section
          className="mb-20 rounded-3xl  sm:p-8 lg:p-10 m-12 p-12"
          aria-labelledby="additional-features-heading"
          id="additional-features"
        >
          <h2 id="additional-features-heading" className="sr-only">
            Additional Features
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {extraFeatures.map((feature) => {
              const Icon = feature.icon

              return (
                <div key={feature.title} className="flex flex-col items-center text-center p-6">
                  <div className="mb-6 rounded-full  p-4 shadow-sm ring-1 ring-slate-200">
                    <Icon className="h-12 w-12 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="max-w-lg leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <section className='center-'>
          {parental.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col rounded-3xl "
            >
              <h2 className="text-center text-2xl font-bold text-slate-900">{feature.title}</h2>
              <div className="mx-auto mt-6 w-full max-w-lg overflow-hidden rounded-xl">
                <img src={feature.image} alt={feature.alt} className="w-full" />
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-20 space-y-8">
          {web.map((section) => {
            const Icon = section.icon

            return (
              <div
                key={section.title}
                className={`flex flex-col items-center gap-12 rounded-3xl   lg:p-8 ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="flex flex-1 justify-center">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="w-full max-w-md rounded-xl border "
                  />
                </div>

                <div className="flex-1 max-w-md">
                  <div className="mb-4 flex items-center gap-2">
                    <Icon className="text-emerald-600" size={24} />
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                      {section.title}
                    </h2>
                  </div>
                  <p className="leading-relaxed text-slate-600">{section.description}</p>
                </div>
              </div>
            )
          })}
        </section>

        <section className="mb-30 grid gap-12 md:grid-cols-2 md:gap-18 m-12 p-12">
          {internet.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col rounded-3xl "
            >
              <h2 className="text-center text-2xl font-bold text-slate-900">{feature.title}</h2>
              <div className="mx-auto mt-6 w-full max-w-xs overflow-hidden rounded-xl">
                <img src={feature.image} alt={feature.alt} className="w-full" />
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default FeaturesPage