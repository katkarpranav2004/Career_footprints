import { useState, useEffect } from 'react';

export default function GithubProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/katkarpranav2004')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Error fetching GitHub profile:', err));
  }, []);

  return (
    <a href="https://github.com/katkarpranav2004" target="_blank" rel="noopener noreferrer" className="gh-mockup">
      {/* Top Header Mockup */}
      <div className="gh-mockup-header">
        <div className="gh-header-left">
          <svg height="32" viewBox="0 0 16 16" width="32" className="gh-logo"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          <span className="gh-mockup-username">katkarpranav2004</span>
        </div>
        <div className="gh-header-right">
          <span className="material-symbols-outlined gh-icon-small">search</span>
          <span className="material-symbols-outlined gh-icon-small">add</span>
          <img src={profile?.avatar_url || "https://avatars.githubusercontent.com/u/74038190?v=4"} className="gh-header-avatar" alt="" />
        </div>
      </div>
      
      <div className="gh-mockup-body">
        {/* Sidebar */}
        <div className="gh-sidebar">
          <div className="gh-avatar-container">
            <img src={profile?.avatar_url || "https://avatars.githubusercontent.com/u/74038190?v=4"} alt="Avatar" className="gh-avatar" />
            <div className="gh-status-circle">
              <span className="material-symbols-outlined gh-status-icon">sentiment_satisfied</span>
            </div>
          </div>
          <h2 className="gh-name">{profile?.name || "Pranav katkar"}</h2>
          <span className="gh-username">{profile?.login || "katkarpranav2004"}</span>
          
          <p className="gh-bio">
            💻 Developer crafting web & AI projects<br/>
            🚀 Exploring Cloud, DevOps & scalable systems<br/>
            ⚡ Turning ideas into working products
          </p>
          
          <div className="gh-edit-btn">Edit profile</div>
          
          <div className="gh-followers">
            <span className="material-symbols-outlined gh-group-icon">group</span>
            <span className="gh-count">{profile?.followers || 3}</span> followers · <span className="gh-count">{profile?.following || 3}</span> following
          </div>
        </div>
        
        {/* Main Content */}
        <div className="gh-main">
          <div className="gh-readme-card">
            <div className="gh-readme-header-small">
              <span className="gh-readme-title">katkarpranav2004 / README.md</span>
              <span className="material-symbols-outlined gh-edit-icon">edit</span>
            </div>
            <div className="gh-readme-content">
              <h3 className="gh-readme-heading">🎮 Dev Mode</h3>
              <img src="https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif" alt="Pixel Art Room" className="gh-pixel-art" />
              <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" alt="Rainbow Line" className="gh-rainbow" />
              
              <h3 className="gh-about-heading">💫 About Me:</h3>
              <p className="gh-about-text">
                🚀 Building cool things on the web and exploring the world of AI<br/><br/>
                💻 Turning ideas into code with <strong>Java, JavaScript, and modern frontend tech</strong><br/>
                🤝 Open to collaborating on <strong>web, AI, and open-source projects</strong><br/>
                🌱 Currently learning <strong>Cloud Computing, DevOps, and scalable systems</strong><br/>
                💬 Ask me about <strong>Frontend Development, Java, Node.js, or GitHub projects</strong><br/>
                ⚡ Fun fact: I enjoy experimenting with tech until a random idea becomes a real project
              </p>

              <h3 className="gh-about-heading">📊 GitHub Stats:</h3>
              <div className="gh-stats-grid">
                <img src="https://github-readme-stats.vercel.app/api?username=katkarpranav2004&theme=dark&hide_border=false&include_all_commits=false&count_private=false" alt="GitHub Stats" className="gh-stat-img" />
                <img src="https://nirzak-streak-stats.vercel.app/?user=katkarpranav2004&theme=dark&hide_border=false" alt="Streak Stats" className="gh-stat-img" />
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=katkarpranav2004&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="Top Langs" className="gh-stat-img" />
              </div>

              <h3 className="gh-about-heading">✍️ Random Dev Quote</h3>
              <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Quote" className="gh-quote" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
