import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur xl:p-10">
      <div className="mb-10 border-b border-slate-200 pb-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          Privacy Policy
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Bestxsoftware Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">Effective April 23, 2026</p>
      </div>

      <div className="space-y-6 text-base leading-7 text-slate-600">
        <p>
          Bestxsoftware (hereafter referred to as “we”, “us”, or “our”) gives the utmost value to protecting the privacy of those who use our software and/or visit our website at <a href="http://bestxsoftware.com">bestxsoftware.com</a>. This document contains our Privacy Policy that is currently in effect. The terms and conditions in this document may be subject to changes from time to time, and our clients are notified if or when any major changes are made by updating this document.
        </p>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">What we collect and why we collect it</h2>
          <p>
            We do not collect any data other than those that are willingly provided by our clients or submitted by visitors to our website. Such information may contain (but not be limited to) their name, email address and the like. The sole purpose of collecting these pieces of information is to improve the quality of our services to you and to contact you if or when necessary.
          </p>
        </div>

        <p>
          Any data pertaining to your financial or confidential personal information are not collected by our site, and you are thoroughly advised not to expose such information on any page on our site. All payments and purchases of our software are handled by MyCommerce, who has their own <a href="#">privacy policy</a>, which you are recommended to read and understand.
        </p>

        <p>
          We may collect anonymous data regarding the pages that are accessed by visitors to our website. Information regarding the web browser such as version, language; information regarding region, country; and information regarding the device, such as device type, operating system are considered (but not limited to) anonymous usage data that are collected in order to analyse and improve the quality and user experience on our website.
        </p>
      </div>
    </article>
  );
};

export default PrivacyPolicy;