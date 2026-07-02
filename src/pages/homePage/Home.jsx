import React from "react";
import Navbar from "./homeComponents/Navbar";
import HeroSection from "./homeComponents/HeroSection";
import FeaturesSection from "./homeComponents/FeaturesSection";
import HowItWorksSection from "./homeComponents/HowItWorksSection";
import IntegrationsSection from "./homeComponents/IntegrationsSection";
import PricingSection from "./homeComponents/PricingSection";
import FAQSection from "./homeComponents/FAQSection";
import CTASection from "./homeComponents/CTASection";
import Footer from "./homeComponents/Footer";
import "./Home.css"

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Home;
