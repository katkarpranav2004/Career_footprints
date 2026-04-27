const techs = [
  'HTML', 'CSS', 'JAVASCRIPT', 'REACT.JS', 'NODE.JS',
  'EXPRESS.JS', 'JAVA', 'C++', 'PYTHON', 'MONGODB',
  'MYSQL', 'FIREBASE', 'GIT', 'GITHUB', 'WORDPRESS',
  'THREE.JS', 'REST APIs', 'TAILWIND CSS',
];

export default function Marquee() {
  const content = techs.map((t, i) => (
    <span key={i}>
      <span>{t}</span>
      <span className="marquee-dot">·</span>
    </span>
  ));

  return (
    <section className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-content">{content}</div>
        <div className="marquee-content" aria-hidden="true">{content}</div>
      </div>
    </section>
  );
}
