import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => {
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'var(--accent)';
    };
    const onLeaveInteractive = () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.borderColor = 'var(--primary)';
    };

    window.addEventListener('mousemove', onMove);
    animate();

    const interactives = document.querySelectorAll('a, button, .bento-card');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });

    // Re-bind after DOM updates
    const rebindTimer = setTimeout(() => {
      const updated = document.querySelectorAll('a, button, .bento-card');
      updated.forEach((el) => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    }, 2000);

    return () => {
      window.removeEventListener('mousemove', onMove);
      clearTimeout(rebindTimer);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
