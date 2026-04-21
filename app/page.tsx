import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Transformations from "@/components/sections/Transformations";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import BookingCTA from "@/components/sections/BookingCTA";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Transformations />
        <HowItWorks />
        <Testimonials />
        <Team />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
