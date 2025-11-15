import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import VehicleCards from "./components/sections/VehicleCards";
import FeaturedLaunch from "./components/sections/FeaturedLaunch";
import Technology from "./components/sections/Technology";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <VehicleCards />
        <FeaturedLaunch />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

