import { useState, useEffect } from 'react';

export default function Navbar({ activeSection, menuOpen, onToggleMenu }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'chronology', label: 'STORY' },
    { id: 'work', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand">
          <span className="brand-bracket">&lt;</span>
          <span className="brand-name">Pranav</span>
          <span className="brand-accent">.dev</span>
          <span className="brand-slash"> /&gt;</span>
        </a>
        <nav className="navbar-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link${activeSection === link.id ? ' active' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Pranav_Katkar_CV.pdf"
            download="Pranav_Katkar_CV.pdf"
            className="nav-link nav-link--cta"
          >
            RÉSUMÉ ↓
          </a>
        </nav>
        <button
          className="menu-toggle"
          onClick={onToggleMenu}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
    </header>
  );
}
