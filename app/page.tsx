import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MainFeatures from "@/components/MainFeatures";
import WhatCustomersSay from "@/components/WhatCustomersSay";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Hero />
      <Features />
      <MainFeatures />
      <WhatCustomersSay />
      <Footer />
    </div>
  );
}
