import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ExternalLinks from "./components/ExternalLinks";
import ProfilePicture from "./components/ProfilePicture";
import Starfield from "./components/Starfield";

export default function App() {
  return (
    <div className="isolate min-h-screen bg-[#0a0a0f] font-inter text-text-primary antialiased">
      <Starfield />
      <Navbar />
      <main>
        <Hero />
        <ProfilePicture />
        <Expertise />
        <Projects />
        <CTA />
      </main>
      <ExternalLinks />
      <Footer />
    </div>
  );
}
