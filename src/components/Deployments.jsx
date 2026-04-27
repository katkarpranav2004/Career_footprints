import { motion } from 'framer-motion';

export default function Deployments() {
  const revealProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" }
  };

  return (
    <section className="section deployments" id="work">
      <motion.h2 
        className="section-title"
        {...revealProps}
        transition={{ duration: 0.8 }}
      >
        PROJECTS
      </motion.h2>

      <div className="bento-grid">
        {/* Large Feature Card — World Chat */}
        <motion.div 
          className="bento-card bento-large"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="bento-card-image" style={{ height: '500px', overflow: 'hidden', position: 'relative', zIndex: 10 }}>
            <iframe 
              src="https://world-chat-zuyy.onrender.com/" 
              title="World Chat Live Website"
              style={{ width: '100%', height: '100%', border: 'none' }}
              loading="lazy"
            />
          </div>
          <div className="bento-card-content">
            <div className="bento-tags">
              <span className="chip">REACT</span>
              <span className="chip">FIREBASE</span>
            </div>
            <h3 className="bento-title">WORLD_CHAT</h3>
            <p className="bento-desc">
              Real-time global chat application with live messaging, geolocation-based interaction, auto-scroll, and RTT latency tracking.
            </p>
          </div>
          <a
            href="https://github.com/katkarpranav2004/World-Chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bento-link-overlay"
            aria-label="View World Chat on GitHub"
          />
          <div className="bento-card-hover-line" />
        </motion.div>

        {/* Small Card 1 — GridSync */}
        <motion.div 
          className="bento-card bento-small"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bento-card-image" style={{ height: '200px', borderBottom: '0.5px solid var(--outline-variant)' }}>
            <img src="/stitch_project1_image.jpg" alt="GridSync AI-Powered Resource Tracking" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="bento-card-content">
            <span className="material-symbols-outlined bento-icon" style={{ marginTop: '16px' }}>analytics</span>
            <h3 className="bento-title">GRIDSYNC</h3>
            <p className="bento-desc">
              AI-powered resource tracking system — tracks daily water & electricity usage with AI-driven insights, interactive charts, and visual dashboards for data-driven optimization.
            </p>
          </div>
          <div className="bento-card-footer">
            <span className="bento-tech">NODE.JS · REACT</span>
            <span className="material-symbols-outlined bento-arrow">arrow_forward</span>
          </div>
          <a
            href="https://github.com/katkarpranav2004/Water-and-Electricity-Tracking-application"
            target="_blank"
            rel="noopener noreferrer"
            className="bento-link-overlay"
            aria-label="View GridSync on GitHub"
          />
          <div className="bento-card-hover-line" />
        </motion.div>

        {/* Small Card 2 (Inverted) — AI Debt Management */}
        <motion.div 
          className="bento-card bento-small bento-inverted"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bento-card-content">
            <span className="material-symbols-outlined bento-icon">account_balance</span>
            <h3 className="bento-title">AI_DEBT_MANAGER</h3>
            <p className="bento-desc">
              AI-driven platform for optimizing debt repayment, offering personalized financial strategies and insights to achieve financial freedom.
            </p>
          </div>
          <div className="bento-card-footer">
            <span className="bento-tech">AI · FINANCE</span>
            <span className="material-symbols-outlined bento-arrow">arrow_forward</span>
          </div>
          <a href="https://github.com/katkarpranav2004/Ai-debt-management-" target="_blank" rel="noopener noreferrer" className="bento-link-overlay" aria-label="View AI Debt Management on GitHub" />
          <div className="bento-card-hover-line" />
        </motion.div>

        {/* Medium Feature Card — Digital Marketing */}
        <motion.div 
          className="bento-card bento-medium"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bento-medium-text">
            <div className="bento-tags">
              <span className="chip">REACT</span>
              <span className="chip">NODE.JS</span>
              <span className="chip">MONGODB</span>
            </div>
            <h3 className="bento-title">DIGITAL_MARKETING</h3>
            <p className="bento-desc">
              A modern MERN stack implementation of a Digital Marketing agency website, completely migrating from a traditional multi-page PHP site to a fast, scalable Single Page Application.
            </p>
          </div>
          <div className="bento-medium-image">
            <img
              src="/stitch_project2_image.jpg"
              alt="Digital Marketing MERN SPA"
              loading="lazy"
            />
          </div>
          <a href="https://github.com/katkarpranav2004/DigitalMarketing" target="_blank" rel="noopener noreferrer" className="bento-link-overlay" aria-label="View Digital Marketing on GitHub" />
          <div className="bento-card-hover-line" />
        </motion.div>
      </div>
    </section>
  );
}
