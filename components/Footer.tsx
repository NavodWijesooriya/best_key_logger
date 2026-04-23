import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">

        {/* Explore Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="transition hover:text-white">Home</Link></li>
            <li><Link href="/features" className="transition hover:text-white">Features</Link></li>
            <li><Link href="/buy_now" className="transition hover:text-white">Buy now</Link></li>
            <li><Link href="/support" className="transition hover:text-white">Support</Link></li>
            <li><Link href="/download" className="transition hover:text-white">Download</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/support/faq" className="transition hover:text-white">FAQs</Link></li>
            <li><Link href="/support/documentation" className="transition hover:text-white">Documentation</Link></li>
            <li><Link href="/support" className="transition hover:text-white">Contact Us</Link></li>
            <li><Link href="/blog" className="transition hover:text-white">Blog</Link></li>
          </ul>
        </div>

        {/* Branding & Socials */}
        <div className="space-y-3 md:justify-self-end md:text-right">
          <div className="mb-1 flex items-center gap-2 md:justify-end">
            <div className="h-8 w-8 rounded bg-linear-to-br from-emerald-500 to-cyan-500"></div>
            <h2 className="text-2xl font-bold">Bestxsoftware</h2>
          </div>
          <p className="text-sm text-gray-400">© 2012 - 2026 All Rights Reserved</p>
          <Link href="/support" className="block text-sm text-gray-400 transition hover:text-white">Privacy Policy</Link>

          <div className="flex gap-4 text-sm text-slate-300 md:justify-end">
            <a href="#" className="transition hover:text-cyan-300">Vimeo</a>
            <a href="#" className="transition hover:text-cyan-300">Twitter</a>
            <a href="#" className="transition hover:text-cyan-300">Facebook</a>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 px-6 py-4">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between text-xs text-slate-400">
          <p>Built for monitored and authorized use only.</p>
          <a href="#top" className="rounded-full border border-slate-700 px-3 py-1 transition hover:border-slate-500 hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;