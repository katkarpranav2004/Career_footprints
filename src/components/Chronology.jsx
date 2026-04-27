import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const timelineData = [
  {
    date: 'AUG 2023 — AUG 2027',
    role: 'B.TECH CSE',
    company: 'Lovely Professional University',
    desc: 'Pursuing Bachelor of Technology in Computer Science & Engineering. GPA: 8.0. Active in hackathons and development projects.',
  },
  {
    date: 'JULY 2025',
    role: 'JAVA TRAINING',
    company: 'Lovely Professional University',
    desc: 'Built GUI-based desktop applications using Java AWT/Swing. Developed a Flappy Bird game clone applying OOP principles.',
  },
  {
    date: 'SEP 2025 — NOV 2025',
    role: 'WEB DEV INTERN',
    company: 'VanillaKart',
    desc: 'Completed a 2-month Web Development internship managing client websites and enhancing user experiences.',
  },
  {
    date: 'NOV 2025',
    role: 'WP INTERN',
    company: 'Orbosis Global',
    desc: 'Developed and customized WordPress websites and landing pages, improving UI/UX, responsiveness, and site performance.',
  },
  {
    date: 'FEB 2026',
    role: 'PHP WITH LARAVEL',
    company: 'Udemy',
    desc: 'Completed a comprehensive 43-hour course on PHP with Laravel for beginners, mastering backend development and MVC architecture.',
  }
];

export default function Chronology() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      if (e.deltaY > 0 && el.scrollLeft < maxScrollLeft) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      } else if (e.deltaY < 0 && el.scrollLeft > 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const handleScrollClick = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const revealProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" }
  };

  return (
    <section className="section chronology" id="chronology">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          {...revealProps}
          transition={{ duration: 0.8 }}
        >
          CHRONOLOGY
        </motion.h2>
        <motion.button 
          className="section-hint"
          onClick={handleScrollClick}
          {...revealProps}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
        >
          SCROLL_X &rarr;
        </motion.button>
      </div>
      <div className="timeline-track" ref={scrollRef}>
        {timelineData.map((item, i) => (
          <TimelineCard key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function TimelineCard({ item, index }) {
  const revealProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" }
  };

  return (
    <motion.div
      className="timeline-card"
      {...revealProps}
      transition={{ duration: 0.8, delay: 0.1 + index * 0.12 }}
    >
      <div className="timeline-card-top">
        <div className="timeline-date">{item.date}</div>
        <h3 className="timeline-role">{item.role}</h3>
        <p className="timeline-company">{item.company}</p>
      </div>
      <p className="timeline-desc">{item.desc}</p>
    </motion.div>
  );
}
