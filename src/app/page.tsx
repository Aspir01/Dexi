import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import About from "@/components/sections/about";
import Contacts from "@/components/sections/contacts";
import Doctors from "@/components/sections/doctors";
import Hero from "@/components/sections/hero";
import Reviews from "@/components/sections/reviews";
import Services from "@/components/sections/services";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Doctors />
      <Contacts />
      <Footer />
    </main>
  );
}