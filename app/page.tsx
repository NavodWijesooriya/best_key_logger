import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Hero />
      <HomePage />
      <Footer />
    </div>
  );
}
