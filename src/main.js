const baseUrl = import.meta.env?.BASE_URL || '/Spidey-portfolio/'
const assetPrefix = import.meta.env?.BASE_URL ? baseUrl : `${baseUrl}public/`
const assetUrl = (fileName) => `${assetPrefix}${fileName}`
const basePath = baseUrl.replace(/\/$/, '')
const routeLink = (path) => `${basePath}${path === '/' ? '/' : path}`

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <nav class="nav" aria-label="Primary navigation">
      <a class="wordmark" href="${routeLink('/')}" ><span>MS</span> Meet Shah</a>
      <div class="nav-center"><a href="#story">Story</a><a href="${routeLink('/projects')}">Projects</a><a href="${routeLink('/resume')}">Resume</a><a href="${routeLink('/about')}">About</a><a href="${routeLink('/contact')}">Contact</a></div>
      <a class="nav-status" href="mailto:meetshah1785@gmail.com"><i></i> Available for a new mission</a>
    </nav>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-topline"><span>Portfolio / 2026</span><span>Mumbai, India <b>↗</b></span></div>
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="micro-label">Full stack developer <b>+</b> AI engineer</p>
            <h1 id="hero-title">Meet<br /><em>Shah</em><sup>01</sup></h1>
            <p class="hero-intro">I build intelligent products with a sharp eye for detail and a soft spot for the impossible.</p>
            <div class="hero-ctas"><a class="circle-cta" href="#work" aria-label="Explore selected work">↘</a><span>Scroll to<br />explore</span><a class="underline-link" href="https://github.com/meet1785" target="_blank" rel="noreferrer">Github ↗</a></div>
          </div>

          <div class="portrait-stage">
            <div class="stage-stamp">SPIDER<br /><strong>VERSE</strong></div>
            <div class="burst burst-a"></div><div class="burst burst-b"></div>
            <div class="identity-card" tabindex="0" aria-label="Hover or focus to reveal Meet Shah's portrait">
              <img src="${assetUrl('meet1785.jpg')}" alt="Meet Shah in a black blazer" class="back-photo" loading="eager" />
              <img src="${assetUrl('spiderman-profile.jpg')}" alt="Spider-Man illustration" class="spider-profile" loading="eager" />
              <div class="portrait-caption"><span>Identity file / 001</span><b>Hover mask to reveal</b></div>
            </div>
            <img class="spider-emblem" src="${assetUrl('spiderman-emblem.svg')}" alt="Spider emblem" />
            <p class="stage-note">Great power<br /><em>needs great code.</em></p>
          </div>
        </div>
        <div class="hero-footer"><span>Scroll down</span><div class="scroll-line"></div><span>01 — 04</span></div>
      </section>

      <section class="story section-frame" id="story">
        <div class="section-marker"><span>01</span><span>Origin story</span></div>
        <div class="story-grid"><h2>Curiosity is<br /><em>my superpower.</em></h2><div class="story-copy"><p class="lead">Computer Engineering student at Thakur College of Engineering and Technology with expertise in full-stack development, AI/ML, and cloud technologies.</p><p>Passionate about creating innovative digital solutions, with 300+ DSA problems solved and multiple certifications in cutting-edge technologies.</p><a class="underline-link" href="mailto:meetshah1785@gmail.com">Let's work together ↗</a></div></div>
        <div class="timeline"><div><span>June 2026—Present / Mumbai</span><strong>AI Engineer Intern</strong><small>Zycus</small><p>Building and supporting AI/ML and Generative AI solutions for enterprise applications.</p></div><div><span>2024—25 / Remote</span><strong>AI Prompt Engineering Intern</strong><small>VaultOfCodes</small><p>Fine-tuned prompts for NLP accuracy and explored generative AI tools for behavior modeling.</p></div><div><span>Expected 2026</span><strong>B.E. Computer Engineering</strong><small>TCET / Mumbai, Maharashtra / GPA 9.4/10.0</small><p>Higher Secondary Certificate: 82% (2022). Secondary School Certificate: 94.8% (2020).</p></div></div>
      </section>

      <section class="work section-frame" id="work">
        <div class="section-marker"><span>02</span><span>Selected missions</span></div>
        <div class="work-heading"><h2>Things I have<br /><em>built in the wild.</em></h2><p>From computer vision to enterprise workflows, I turn complex systems into clear experiences.</p></div>
        <div class="project-list">
          <a class="project project-main" href="https://github.com/meet1785/authenticity-core" target="_blank" rel="noreferrer"><span class="project-index">01 / 03</span><div><p>AI / Computer vision</p><h3>AuthenticityNet</h3><span class="project-detail">Built an ensemble system with CNN, EfficientNet, and VGG16 for image authenticity verification. GradCAM explanations, intelligent caching with ~99% faster repeated predictions, React analytics, FastAPI, and 15+ REST endpoints.</span><div class="project-tags">Python / TensorFlow / OpenCV / FastAPI / React</div></div><b>↗</b></a>
          <a class="project" href="https://github.com/meet1785/smart-assistant" target="_blank" rel="noreferrer"><span class="project-index">02 / 03</span><div><p>Browser / AI</p><h3>Smart Assistant</h3><span class="project-detail">Chrome extension with LeetCode problem analysis, code review, debugging assistance, Gemini-powered mock interviews, YouTube summaries, quizzes, gamified XP, and learning paths.</span><div class="project-tags">JavaScript / Chrome APIs / Google Gemini API / React</div></div><b>↗</b></a>
          <a class="project" href="https://github.com/meet1785/budgetbuddy-erp" target="_blank" rel="noreferrer"><span class="project-index">03 / 03</span><div><p>Product / Full stack</p><h3>BudgetBuddy ERP</h3><span class="project-detail">Enterprise ERP with 23+ granular permissions across five categories, role-based access, Recharts analytics, themes, CRUD workflows, MongoDB, Express, and JWT authentication.</span><div class="project-tags">React / TypeScript / Node.js / MongoDB / Express</div></div><b>↗</b></a>
        </div>
      </section>

      <section class="capabilities section-frame"><div class="section-marker"><span>03</span><span>My utility belt</span></div><div class="capability-grid"><h2>Tools for<br /><em>the climb.</em></h2><div class="skills"><span>Python</span><span>TypeScript</span><span>JavaScript</span><span>Java</span><span>C++</span><span>Bash</span><span>SQL</span><span>React</span><span>Next.js</span><span>Tailwind CSS</span><span>HTML5</span><span>CSS3</span><span>Framer Motion</span><span>Node.js</span><span>Express</span><span>FastAPI</span><span>REST APIs</span><span>JWT</span><span>TensorFlow</span><span>Scikit-learn</span><span>OpenCV</span><span>OpenAI API</span><span>Google Gemini API</span><span>MongoDB</span><span>PostgreSQL</span><span>MySQL</span><span>Firebase</span><span>Git</span><span>GitHub Actions</span><span>Docker</span><span>VS Code</span><span>Linux</span><span>Postman</span><span>npm</span></div></div><div class="honors"><div><span>Certification</span><strong>Google Cybersecurity Specialization</strong><small>Coursera / Jan 2024 / Cybersecurity, Network Security, Risk Management</small></div><div><span>Achievements</span><strong>SMART INDIA HACKATHON — Team Lead</strong><small>Led end-to-end project planning during national-level hackathon events (2023–2024).</small></div><div><span>Competitive programming</span><strong>TCS CodeVita 2024 — Round 2 Qualifier</strong><small>Advanced to Round 2 in the TCS CodeVita contest. 300+ DSA problems solved across LeetCode, GeeksforGeeks, and CodeChef.</small></div></div></section>
    </main>

    <footer class="contact section-frame" id="contact"><div class="section-marker"><span>04</span><span>Make contact</span></div><div class="contact-grid"><h2>Have a challenge?<br /><em>Send it my way.</em></h2><div class="contact-links"><a class="big-link" href="mailto:meetshah1785@gmail.com">meetshah1785<br /><em>@gmail.com</em> ↗</a><a href="https://www.linkedin.com/in/meetshah1708" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/meet1785" target="_blank" rel="noreferrer">Github ↗</a></div></div><div class="footer-line"><span>© 2026 Meet Shah</span><span>With great code comes great responsibility.</span><span>Mumbai / India</span></div></footer>
  </div>
`

const pageNav = `<nav class="route-nav"><a class="wordmark" href="${routeLink('/')}" ><span>MS</span> Meet Shah</a><div><a href="${routeLink('/projects')}">Projects</a><a href="${routeLink('/resume')}">Resume</a><a href="${routeLink('/about')}">About</a><a href="${routeLink('/contact')}">Contact</a></div></nav>`

const projects = [
  ['AuthenticityNet', 'AI / Computer vision', 'AI-powered deepfake detection with CNN, VGG16, EfficientNet, GradCAM, FastAPI, and React.', 'authenticity-core'],
  ['Smart Assistant', 'AI / Chrome extension', 'AI learning companion with LeetCode analysis, code review, Gemini mock interviews, quizzes, XP, and learning paths.', 'smart-assistant'],
  ['YouTube Clone', 'React / Vite / Live demo', 'Modern YouTube-style video streaming interface built with React and Vite, with a deployed live experience.', 'youtube', 'https://youtube-meet.vercel.app/'],
  ['ShortClips', 'AI / Video pipeline', 'End-to-end pipeline for turning long videos into short clips with Whisper, Gemini Pro, MoviePy, captions, zoom effects, and 9:16 formatting.', 'shortclips'],
  ['FinanceGPT', 'AI / Fintech', 'Personal finance platform with Gemini chat, expense tracking, budget planning, portfolio management, and an investment calculator.', 'gemini-money'],
  ['BudgetBuddy ERP', 'Full stack / Product', 'Enterprise ERP with 23+ permissions, role-based access, analytics, themes, CRUD workflows, MongoDB, Express, and JWT.', 'budgetbuddy-erp'],
  ['ProcureIQ', 'Python / Operations', 'Procurement-focused product work from the public GitHub portfolio, built for clearer operational workflows.', 'ProcureIQ'],
  ['GrowthLens', 'TypeScript / Analytics', 'A growth and insight-oriented product experiment from the public project archive.', 'GrowthLens'],
  ['WasteTracker', 'TypeScript / Civic tech', 'A practical tracking experience focused on waste and environmental workflows.', 'wastetracker'],
  ['GHexplainer', 'TypeScript / Developer tools', 'A developer-focused experiment for making GitHub workflows and code easier to understand.', 'ghexplainer'],
]

const projectCards = projects.map(([name, type, description, repo, liveUrl], index) => `<article class="route-project"><span>${String(index + 1).padStart(2, '0')}</span><div><small>${type}</small><h3>${name}</h3><p>${description}</p><div class="route-project-links"><a href="https://github.com/meet1785/${repo}" target="_blank" rel="noreferrer">GitHub ↗</a>${liveUrl ? `<a href="${liveUrl}" target="_blank" rel="noreferrer">Live demo ↗</a>` : ''}</div></div><b>↗</b></article>`).join('')

const route = window.location.pathname.replace(new RegExp(`^${basePath}`), '').replace(/\/$/, '') || '/'
if (route === '/projects' || route === '/works') {
  document.querySelector('#app').innerHTML = `${pageNav}<main class="route-page"><p class="micro-label">Project archive / GitHub verified</p><h1>Selected<br /><em>work.</em></h1><p class="route-lead">The strongest builds from Meet Shah's public project archive, from AI systems and video pipelines to full-stack products.</p><div class="route-projects">${projectCards}</div></main>`
} else if (route === '/resume') {
  document.querySelector('#app').innerHTML = `${pageNav}<main class="route-page resume-page"><p class="micro-label">Curriculum vitae / 2026</p><h1>Meet<br /><em>Shah.</em></h1><p class="route-lead">Full Stack Developer &amp; AI Engineer · Mumbai, Maharashtra, India · meetshah1785@gmail.com</p><section class="resume-block"><h2>Summary</h2><p>Computer Engineering student at Thakur College of Engineering and Technology with expertise in full-stack development, AI/ML, and cloud technologies. Passionate about creating innovative digital solutions with 300+ DSA problems solved and multiple certifications in cutting-edge technologies.</p></section><section class="resume-block"><h2>Experience</h2><h3>Business Analyst Intern</h3><p>Neoprism Consultancy And Services · Remote · 2024—2025</p><ul><li>Authored 20+ white papers for SMEs, driving data-informed digital marketing strategies.</li><li>Collaborated with cross-functional teams to analyze KPIs and recommend growth solutions.</li></ul><h3>AI Prompt Engineering Intern</h3><p>VaultOfCodes · Remote · 2024—2025</p><ul><li>Designed and fine-tuned prompts for LLMs to improve NLP model accuracy in text generation tasks.</li><li>Explored generative AI tools for behavior modeling and iterative prompt optimization.</li></ul></section><section class="resume-block"><h2>Education</h2><p><strong>Bachelor of Engineering, Computer Engineering</strong><br />Thakur College of Engineering and Technology · Mumbai · 9.4/10.0 · Expected 2026</p><p><strong>H.S.C.</strong><br />Maharashtra State Board · 82% · 2022</p><p><strong>S.S.C.</strong><br />Maharashtra State Board · 94.8% · 2020</p></section><section class="resume-block"><h2>Certification &amp; achievements</h2><p>Google Cybersecurity Specialization · Coursera · Jan 2024</p><p>SMART INDIA HACKATHON — Team Lead · 2023–2024</p><p>TCS CodeVita 2024 — Round 2 Qualifier</p><p>300+ DSA problems solved on LeetCode, GeeksforGeeks, and CodeChef.</p></section></main>`
} else if (route === '/about') {
  document.querySelector('#app').innerHTML = `${pageNav}<main class="route-page about-page"><p class="micro-label">Origin story / Meet Shah</p><h1>Built for<br /><em>the climb.</em></h1><p class="route-lead">I build intelligent digital solutions across the full stack, combining product thinking, AI/ML, and careful interfaces.</p><div class="about-columns"><p>My playground spans React, TypeScript, Python, APIs, computer vision, cloud tooling, and the small details that make software dependable.</p><p>Outside the code, I have solved 300+ DSA problems, led a Smart India Hackathon team, and kept learning through hands-on experiments across AI, developer tools, operations, and product systems.</p></div></main>`
} else if (route === '/contact') {
  document.querySelector('#app').innerHTML = `${pageNav}<main class="route-page contact-page"><p class="micro-label">Open channel / Mumbai, India</p><h1>Let's make<br /><em>something.</em></h1><p class="route-lead">Have a product, system, or ambitious problem in mind? Send it my way.</p><div class="contact-route-links"><a href="mailto:meetshah1785@gmail.com">meetshah1785@gmail.com ↗</a><a href="https://www.linkedin.com/in/meetshah1708" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/meet1785" target="_blank" rel="noreferrer">GitHub ↗</a></div></main>`
}

if (route === '/resume') {
  const experienceBlock = document.querySelectorAll('.resume-block')[1]
  experienceBlock.innerHTML = '<h2>Experience</h2><h3>AI Engineer Intern</h3><p>Zycus · Mumbai · June 2026—Present</p><ul><li>Design, develop, test, deploy, and maintain AI/ML and Generative AI solutions using LLMs, NLP, and modern AI frameworks.</li><li>Perform data preprocessing, feature engineering, model training, optimization, and performance tuning for accurate and reliable AI solutions.</li><li>Integrate AI models and services with enterprise applications through APIs and support intelligent business workflows.</li><li>Support AI-powered enterprise applications through troubleshooting, root-cause analysis, incident management, testing, monitoring, and quality assurance.</li><li>Collaborate with Product Management, Engineering, QA, Customer Success, and Technical Account Management teams.</li></ul><h3>AI Prompt Engineering Intern</h3><p>VaultOfCodes · Remote · 2024—2025</p><ul><li>Designed and fine-tuned prompts for LLMs to improve NLP model accuracy in text generation tasks.</li><li>Explored generative AI tools for behavior modeling and iterative prompt optimization.</li></ul>'
}
