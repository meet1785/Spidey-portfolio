import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="page-wrap">
    <header class="hero" id="home">
      <p class="eyebrow">Friendly Neighborhood Developer</p>
      <h1>Meet Rajat</h1>
      <p class="intro">
        I build high-performance web experiences with clean code, thoughtful UX, and scalable architecture.
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="#projects">View Projects</a>
        <a class="btn btn-secondary" href="#contact">Contact Me</a>
      </div>
      <div class="identity-card" aria-label="Spider-Man themed profile card">
        <div class="mask-face" aria-hidden="true">
          <span class="eye eye-left"></span>
          <span class="eye eye-right"></span>
          <span class="web web-v"></span>
          <span class="web web-h"></span>
        </div>
        <img src="/meet1785.jpg" alt="Meet Rajat" class="real-face" loading="lazy" />
        <p class="hover-hint">Hover to reveal the real hero</p>
      </div>
    </header>

    <main>
      <section class="panel" id="about">
        <h2>About</h2>
        <p>
          I specialize in modern JavaScript ecosystems, frontend architecture, and production-ready interfaces.
          My approach combines creative design direction with reliable engineering execution.
        </p>
      </section>

      <section class="panel" id="skills">
        <h2>Core Skills</h2>
        <ul class="skill-grid">
          <li>React & TypeScript</li>
          <li>Node.js APIs</li>
          <li>UI System Design</li>
          <li>Performance Optimization</li>
          <li>Testing & Debugging</li>
          <li>Cloud Deployment</li>
        </ul>
      </section>

      <section class="panel" id="projects">
        <h2>Featured Work</h2>
        <div class="project-grid">
          <article>
            <h3>Portfolio Experience</h3>
            <p>High-conversion personal branding website with dynamic visuals and responsive layout.</p>
          </article>
          <article>
            <h3>Interactive UI Toolkit</h3>
            <p>Reusable component suite focused on accessibility, speed, and cross-device consistency.</p>
          </article>
          <article>
            <h3>Automation Dashboard</h3>
            <p>Data-rich dashboard for monitoring workflows, KPIs, and real-time project status.</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="panel" id="contact">
      <h2>Let’s Build Something Amazing</h2>
      <p>Open to freelance, full-time roles, and collaborations.</p>
      <a class="btn btn-primary" href="mailto:hello@meetrajat.dev">hello@meetrajat.dev</a>
    </footer>
  </div>
`
