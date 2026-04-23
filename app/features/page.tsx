import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/Footer'
import {
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

const highlights = [
  {
    title: '"Smart Read" Filter',
    image: '/assets/images/smart-read.png',
    alt: 'Smart Read feature',
    description:
      '"Smart-Read" improves readability of keystroke reports by filtering unimportant keystrokes such as backspace and delete to show only the final string of characters. It can be switched on or off with just one click.',
  },
  {
    title: 'Advanced Filtering',
    image: '/assets/images/advanced-filtering.png',
    alt: 'Advanced Filtering feature',
    description:
      'The report viewer includes filters for user, date, text content, application, URL, and more, making it easier to find what you need without scanning the whole report.',
  },
]

const dashboardSections = [
  {
    title: 'Keystroke Records',
    icon: Monitor,
    image: '/assets/images/keystroke-records.png',
    alt: 'Keystroke Records dashboard',
    reverse: false,
    description:
      'Best Free Keylogger lets you see what was typed in each application by recording keystrokes, tracking the user, the location of the input, and the date and time of each record.',
  },
  {
    title: 'Clipboard Records',
    icon: ClipboardList,
    image: '/assets/images/best-free-keylogger-applications (3).png',
    alt: 'Clipboard Records dashboard',
    reverse: true,
    description:
      'The clipboard monitor records copied or cut content and identifies whether the content is text or files.',
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

        <section className="mb-20 grid gap-8 md:grid-cols-2 md:gap-10">
          {highlights.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg sm:p-8"
            >
              <h2 className="text-center text-2xl font-bold text-slate-900">{feature.title}</h2>
              <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                <img src={feature.image} alt={feature.alt} className="w-full" />
              </div>
              <p className="mt-6 text-center text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section className="space-y-8">
          {dashboardSections.map((section) => {
            const Icon = section.icon

            return (
              <div
                key={section.title}
                className={`flex flex-col items-center gap-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8 ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="flex-1">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="w-full rounded-xl border border-slate-200 shadow-sm transition-shadow hover:shadow-lg"
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

        <p className="mt-12 text-center text-sm text-slate-500">
          Advanced features for professional monitoring environments.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default FeaturesPage