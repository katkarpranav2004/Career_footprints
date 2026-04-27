import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const revealProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" }
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <motion.div 
          className="contact-left"
          {...revealProps}
          transition={{ duration: 0.8 }}
        >
          <span className="chip">PING_ME</span>
          <h2 className="section-title">
            LET'S<br />CONNECT<span className="title-dot">.</span>
          </h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? I'm always open to exciting opportunities.
          </p>
          <div className="contact-info">
            <div className="contact-info-item">
              <span className="material-symbols-outlined contact-info-icon">mail</span>
              <a href="mailto:pranavkatkar8@gmail.com">pranavkatkar8@gmail.com</a>
            </div>
            <div className="contact-info-item">
              <span className="material-symbols-outlined contact-info-icon">phone</span>
              <a href="tel:+919005301061">+91-9005301061</a>
            </div>
            <div className="contact-info-item">
              <span className="material-symbols-outlined contact-info-icon">location_on</span>
              <span>Phagwara, Punjab</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="contact-right"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contactName" className="form-label">NAME</label>
              <input type="text" id="contactName" className="form-input" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="contactEmail" className="form-label">EMAIL</label>
              <input type="email" id="contactEmail" className="form-input" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="contactMessage" className="form-label">MESSAGE</label>
              <textarea
                id="contactMessage"
                className="form-input form-textarea"
                placeholder="Tell me about your project..."
                rows="5"
                required
              />
            </div>
            <button type="submit" className={`btn-primary${submitted ? ' btn-success' : ''}`}>
              <span className="btn-text">{submitted ? 'TRANSMITTED ✓' : 'TRANSMIT'}</span>
              {!submitted && (
                <span className="material-symbols-outlined btn-icon">arrow_forward</span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
