export default function MobileMenu({ open, onClose }) {
  const links = [
    { id: 'chronology', label: 'STORY' },
    { id: 'work', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`}>
      <nav className="mobile-menu-links">
        {links.map((link, i) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="mobile-link"
            onClick={onClose}
            style={{ transitionDelay: open ? `${i * 0.08}s` : '0s' }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/Pranav_Katkar_CV.pdf"
          download="Pranav_Katkar_CV.pdf"
          className="mobile-link mobile-link--cta"
          onClick={onClose}
          style={{ transitionDelay: open ? `${4 * 0.08}s` : '0s' }}
        >
          ↓ DOWNLOAD CV
        </a>
      </nav>
    </div>
  );
}
