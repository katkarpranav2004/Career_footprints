import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import Chronology from './components/Chronology';
import Deployments from './components/Deployments';
import About from './components/About';
import Marquee from './components/Marquee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <CursorFollower />
      <div className="noise-overlay" />
      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
      />
      <MobileMenu open={menuOpen} onClose={closeMenu} />

      <main className="main-content">
        <Hero />
        <Chronology />
        <Deployments />
        <About />
        <Marquee />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
