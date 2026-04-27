import { useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [lightboxImg, setLightboxImg] = useState(null);

  const revealProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" }
  };

  const stats = [
    { count: 3, label: 'YEARS CODING' },
    { count: 5, label: 'PROJECTS' },
    { count: 8, suffix: '.0', label: 'GPA' },
  ];

  const certs = [
    { name: 'PHP with Laravel – Udemy', image: '/cert_udemy_php.png' },
    { name: 'Full Stack Development – Cisco thingQbator', image: '/cert_fullstack.png' },
    { name: 'Oracle Certified Foundations Associate', image: '/cert_oracle.png' },
    { name: 'Cloud Computing – NPTEL', image: '/cert_nptel_cloud.png' },
    { name: 'Java Advanced App Dev – LPU', image: '/cert_java_advanced.png' },
    { name: 'Web Development Internship – VanillaKart', image: '/cert_vanillakart.png' },
    { name: 'HackerRank 5★ Java', image: null },
  ];

  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <motion.div 
          className="about-left"
          {...revealProps}
          transition={{ duration: 0.8 }}
        >
          <span className="chip">ABOUT_ME</span>
          <h2 className="section-title">
            THE<br />DEVELOPER.
          </h2>
        </motion.div>
        <motion.div 
          className="about-right"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="about-text">
            I'm Pranav Katkar — a B.Tech CSE student at Lovely Professional University with a passion for building production-grade web applications. I specialize in the MERN stack and love turning complex problems into clean, functional interfaces.
          </p>
          <p className="about-text">
            From AI-powered resource trackers to real-time chat systems, I build things that work at scale. I've interned with VanillaKart and Orbosis Global, and I'm always hunting for the next challenging project.
          </p>
          <div className="about-stats">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-value">
                  <span className="stat-number">
                    {s.count}
                  </span>
                  <span className="stat-suffix">{s.suffix || '+'}</span>
                </div>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div 
        className="certs-section"
        {...revealProps}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="certs-title">CERTIFICATIONS</h3>
        <p className="section-hint" style={{ marginBottom: '24px', textAlign: 'center' }}>HOVER TO EXPAND DECK</p>
        
        <motion.div 
          className="cert-deck"
          initial="initial"
          whileHover="hover"
        >
          {certs.map((cert, i) => {
            const offset = i - Math.floor(certs.length / 2);
            
            const cardVariants = {
              initial: { 
                x: offset * 12,
                y: offset * -4,
                rotate: offset * 3,
                scale: 1 - Math.abs(offset) * 0.02,
                zIndex: i,
                opacity: 0.9
              },
              hover: {
                x: offset * 90, // Tighter spread since we have 7 cards now
                y: Math.abs(offset) * 15 - 20, 
                rotate: offset * 5, // Slightly gentler rotation
                scale: 1,
                zIndex: i,
                opacity: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 250, 
                  damping: 20, 
                  mass: 0.8 
                }
              }
            };

            return (
              <motion.div
                className={`cert-card${cert.image ? ' cert-card--clickable' : ' cert-card--fallback'}`}
                key={i}
                variants={cardVariants}
                onClick={cert.image ? () => setLightboxImg(cert.image) : undefined}
                role={cert.image ? 'button' : undefined}
                tabIndex={cert.image ? 0 : undefined}
                onKeyDown={cert.image ? (e) => e.key === 'Enter' && setLightboxImg(cert.image) : undefined}
                whileTap={{ scale: 0.95 }}
              >
                {cert.image ? (
                  <div className="cert-card-inner">
                    <img src={cert.image} alt={cert.name} loading="lazy" />
                    <div className="cert-card-overlay">
                      <span className="material-symbols-outlined">visibility</span>
                    </div>
                  </div>
                ) : (
                  <div className="cert-card-inner fallback-inner">
                    <span className="material-symbols-outlined fallback-icon">workspace_premium</span>
                    <h4>{cert.name}</h4>
                    <p className="section-hint">VERIFIED</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Achievements */}
      <motion.div 
        className="certs-section"
        {...revealProps}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        <h3 className="certs-title">ACHIEVEMENTS</h3>
        <div className="achievement-item achievement-link" onClick={() => setLightboxImg('/hacksmart_certificate.jpg')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setLightboxImg('/hacksmart_certificate.jpg')}>
          <span className="material-symbols-outlined cert-icon" style={{ color: 'var(--accent)' }}>emoji_events</span>
          <span>Hack Smart Hackathon — <strong>Top 10</strong> (Battery Smart, Feb 2026)</span>
          <span className="material-symbols-outlined cert-link-icon">open_in_new</span>
        </div>
      </motion.div>

      {/* Certificate Lightbox */}
      {lightboxImg && (
        <div className="cert-lightbox" onClick={() => setLightboxImg(null)}>
          <button className="cert-lightbox-close" onClick={() => setLightboxImg(null)} aria-label="Close certificate">
            <span className="material-symbols-outlined">close</span>
          </button>
          <img
            src={lightboxImg}
            alt="Certificate – Pranav Katkar"
            className="cert-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
