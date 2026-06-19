import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Deployments() {
  const [loadWorldChat, setLoadWorldChat] = useState(false);
  const [loadDroneSim, setLoadDroneSim] = useState(false);
  const worldChatRef = useRef(null);
  const droneSimRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === worldChatRef.current) {
              setLoadWorldChat(true);
            }
            if (entry.target === droneSimRef.current) {
              setLoadDroneSim(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (worldChatRef.current) observer.observe(worldChatRef.current);
    if (droneSimRef.current) observer.observe(droneSimRef.current);

    return () => observer.disconnect();
  }, []);

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
        {/* 1. Full-Width — World Chat */}
        <motion.div 
          className="bento-card bento-full"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="bento-card-image" style={{ height: '500px', overflow: 'hidden', position: 'relative', zIndex: 10 }} ref={worldChatRef}>
            {loadWorldChat ? (
              <iframe 
                src="https://world-chat-zuyy.onrender.com/" 
                title="World Chat Live Website"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--surface)' }}>
                <span className="section-hint">Connecting to World Chat...</span>
              </div>
            )}
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

        {/* 2. Full-Width — Drone Sim (same layout as World Chat) */}
        <motion.div 
          className="bento-card bento-full"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bento-card-image" style={{ height: '500px', overflow: 'hidden', position: 'relative', zIndex: 10 }} ref={droneSimRef}>
            {loadDroneSim ? (
              <iframe
                src="https://drone-sim-901y.onrender.com/static/index.html"
                title="Drone Sim Live Demo"
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--surface)', flexDirection: 'column', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--accent)', animation: 'pulse 2s infinite' }}>flight</span>
                <span className="section-hint">Launching Drone Sim...</span>
              </div>
            )}
          </div>
          <div className="bento-card-content">
            <div className="bento-tags">
              <span className="chip">THREE.JS</span>
              <span className="chip">WEBSOCKET</span>
              <span className="chip">RRT*</span>
            </div>
            <h3 className="bento-title">DRONE_SIM</h3>
            <p className="bento-desc">
              Multi-drone 3D path optimization platform with RRT* pathfinding, B-Spline trajectory smoothing, real-time WebSocket telemetry, and unsupervised learning for flight-path analysis.
            </p>
          </div>
          <a href="https://github.com/katkarpranav2004/drone-sim" target="_blank" rel="noopener noreferrer" className="bento-link-overlay" aria-label="View Drone Sim on GitHub" />
          <div className="bento-card-hover-line" />
        </motion.div>

        {/* 3a. Half-Width Compact — GridSync */}
        <motion.div 
          className="bento-card bento-half bento-compact"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bento-compact-image">
            <img src="/stitch_project1_image.jpg" alt="GridSync AI-Powered Resource Tracking" loading="lazy" />
          </div>
          <div className="bento-compact-body">
            <div className="bento-compact-content">
              <h3 className="bento-title">GRIDSYNC</h3>
              <p className="bento-desc">
                AI-powered resource tracking with AI-driven insights, interactive charts, and visual dashboards.
              </p>
            </div>
            <div className="bento-card-footer">
              <span className="bento-tech">NODE.JS · REACT</span>
              <span className="material-symbols-outlined bento-arrow">arrow_forward</span>
            </div>
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

        {/* 3b. Half-Width Compact — AI Debt Manager */}
        <motion.div 
          className="bento-card bento-half bento-compact bento-inverted"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bento-compact-icon-area">
            <span className="material-symbols-outlined bento-icon">account_balance</span>
          </div>
          <div className="bento-compact-body">
            <div className="bento-compact-content">
              <h3 className="bento-title">AI_DEBT_MANAGER</h3>
              <p className="bento-desc">
                AI-driven platform for optimizing debt repayment with personalized financial strategies.
              </p>
            </div>
            <div className="bento-card-footer">
              <span className="bento-tech">AI · FINANCE</span>
              <span className="material-symbols-outlined bento-arrow">arrow_forward</span>
            </div>
          </div>
          <a href="https://github.com/katkarpranav2004/Ai-debt-management-" target="_blank" rel="noopener noreferrer" className="bento-link-overlay" aria-label="View AI Debt Management on GitHub" />
          <div className="bento-card-hover-line" />
        </motion.div>
      </div>
    </section>
  );
}
