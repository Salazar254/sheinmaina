import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Foundation from "@/sections/Foundation";
import Pageants from "@/sections/Pageants";
import ContentCreation from "@/sections/ContentCreation";
import Contact from "@/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-pink-100 selection:text-pink-600 font-sans leading-relaxed">
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Foundation />
        <Pageants />
        <ContentCreation />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </div>
  )
}

export default App;
