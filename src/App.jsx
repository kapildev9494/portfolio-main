import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-[#050414] relative overflow-x-hidden">
      {/* Enhanced blur blobs with better positioning */}
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <BlurBlob position={{ top: '70%', right: '15%' }} size={{ width: '25%', height: '30%' }} />

      {/* Grid background with better mask */}
      <div 
        className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_50%,transparent_100%)]"
        aria-hidden="true"
      />
      
      {/* Main content wrapper */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-16 md:pt-20 lg:pt-24">
          <About />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default App;