export default function Footer() {
  const links = [
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/pranav-katkar-91a627288/' },
    { label: 'GITHUB', href: 'https://github.com/katkarpranav2004' },
    { label: 'EMAIL', href: 'mailto:pranavkatkar8@gmail.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">©2026 PRANAV KATKAR. ALL RIGHTS RESERVED.</div>
        <nav className="footer-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-link"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
