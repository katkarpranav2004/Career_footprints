import { motion } from 'framer-motion';
import GithubProfile from './GithubProfile';

export default function Hero() {
  const revealProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" }
  };

  return (
    <section className="hero" id="home">
      {/* Tag */}
      <div className="hero-tag">
        <motion.span 
          className="chip"
          {...revealProps}
          transition={{ duration: 0.8 }}
        >
          B.Tech CSE · LPU
        </motion.span>
        <motion.span 
          className="chip chip-status"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="status-dot" />
          OPEN TO WORK
        </motion.span>
      </div>

      {/* Title */}
      <h1 className="hero-title">
        <motion.span 
          className="title-line"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          PRANAV
        </motion.span>
        <motion.span 
          className="title-line"
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          KATKAR<span className="title-dot">.</span>
        </motion.span>
      </h1>

      {/* Description */}
      <motion.p 
        className="hero-description"
        {...revealProps}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Full-stack developer building real-time applications, AI-powered systems, and responsive web experiences with the MERN stack.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        className="hero-cta"
        {...revealProps}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a href="#contact" className="btn-primary">
          <span className="btn-text">GET IN TOUCH</span>
          <span className="material-symbols-outlined btn-icon">arrow_forward</span>
        </a>
        <a href="/Pranav_Katkar_CV.pdf" download="Pranav_Katkar_CV.pdf" className="btn-secondary">
          <span className="material-symbols-outlined btn-icon">download</span>
          <span className="btn-text">DOWNLOAD CV</span>
        </a>
      </motion.div>

      {/* Hero Image / GitHub Embed */}
      <motion.div 
        className="hero-image"
        {...revealProps}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <GithubProfile />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        {...revealProps}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <span className="material-symbols-outlined scroll-arrow">arrow_downward</span>
        <span className="scroll-text">SCROLL</span>
      </motion.div>
    </section>
  );
}
