import { type ReactNode, useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { SkillsSection } from '@/components/skills-section';
import {
  achievements,
  education,
  experience,
  personalInfo,
  projects,
} from '@/data/portfolio';

const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
];

// Add your portrait as public/profile.jpg; the initials remain as a fallback.
const profilePhoto = '/profile.jpg';

function ExternalAnchor({
  href,
  children,
  className,
  label,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : 'noreferrer'}
      aria-label={label}
      data-testid={`link-${label.toLowerCase().replaceAll(' ', '-')}`}
    >
      {children}
    </a>
  );
}

function ProjectPreview({ source, title }: { source: string; title: string }) {
  return (
    <div className="project-art project-screenshot">
      <img
        src={source}
        alt={`${title} project screenshot`}
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 16);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-24% 0px -62% 0px', threshold: [0, 0.2, 0.55] },
    );
    [...navigation.map((item) => item.id), 'contact'].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      window.removeEventListener('scroll', updateScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`topbar${scrolled ? ' scrolled' : ''}`}>
        <nav className="nav-inner" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label="Abhinandan Dwivedi, home" data-testid="link-home">
            <span className="brand-mark">AD</span>
            <span>Abhinandan Dwivedi</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-links"
            onClick={() => setMenuOpen((current) => !current)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
          <div className={`nav-links${menuOpen ? ' open' : ''}`} id="primary-links">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
                data-testid={`link-nav-${item.id}`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`nav-contact${activeSection === 'contact' ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
              data-testid="link-nav-contact"
            >
              Contact <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.resume}
              className="nav-contact"
              target="_blank"
              rel="noreferrer"
              data-testid="link-download-resume-nav"
            >
              Resume <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero site-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-layout">
            <div>
              <div className="eyebrow reveal">Computer Science · Full-stack web</div>
              <h1 id="hero-title" className="reveal delay-1">
                Abhinandan
                <span>Dwivedi.</span>
              </h1>
              <p className="hero-summary reveal delay-2">{personalInfo.summary}</p>
              <div className="hero-actions reveal delay-3">
                <a href="#projects" className="button primary" data-testid="link-view-projects">
                  Explore projects <ArrowDownRight size={15} aria-hidden="true" />
                </a>
                <a href="#about" className="button subtle" data-testid="link-about-me">
                  A little about me
                </a>
                <a
                  href={personalInfo.resume}
                  className="button subtle"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-download-resume"
                >
                  View resume <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
            <aside className="hero-side reveal delay-3" aria-label="Professional details and social links">
              <div className="hero-portrait" aria-label="Profile portrait">
                <span className="portrait-monogram" aria-hidden="true">AD</span>
                <img
                  src={profilePhoto}
                  alt="Portrait of Abhinandan Dwivedi"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
                <span className="portrait-tag" aria-hidden="true">PROFILE / 01</span>
              </div>
              <div>
                <span className="side-label">Current chapter</span>
                <p>B.Tech, Computer Science and Engineering<br />IIIT Sonepat · 2023–2027</p>
              </div>
              <div>
                <span className="side-label">Areas of work</span>
                <p>Full-stack web development<br />APIs · Databases · LLM applications</p>
              </div>
              <div className="hero-socials" aria-label="Social profiles">
                <ExternalAnchor href={personalInfo.github} label="GitHub profile"><Github size={15} /></ExternalAnchor>
                <ExternalAnchor href={personalInfo.linkedin} label="LinkedIn profile"><Linkedin size={15} /></ExternalAnchor>
                <ExternalAnchor href={`mailto:${personalInfo.email}`} label="Send email"><Mail size={15} /></ExternalAnchor>
              </div>
            </aside>
          </div>
          <span className="scroll-note">SCROLL TO EXPLORE</span>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="site-shell">
            <div className="section-heading">
              <div className="section-index">01 / Profile</div>
              <div>
                <h2 className="section-title" id="about-title">Engineering with a full-stack view.</h2>
                <p className="section-intro">An undergraduate focused on how the pieces of a web application fit together—from responsive interfaces to APIs, authentication, and data.</p>
              </div>
            </div>
            <div className="about-grid">
              <div className="about-copy">
                <p>I work across frontend, backend, and API layers, with a focus on building responsive applications and integrating third-party services.</p>
                <p>My foundation includes REST APIs, HTTP, authentication, databases, Git, and web application architecture. I also build with LLM integrations and retrieval-augmented generation.</p>
              </div>
              <dl className="about-facts">
                <div className="fact-row"><dt>Education</dt><dd>{education.degree}<br />{education.institution}</dd></div>
                <div className="fact-row"><dt>Focus</dt><dd>Full-stack web development</dd></div>
                <div className="fact-row"><dt>Technologies</dt><dd>JavaScript · React · Next.js · Node.js · SQL</dd></div>
                <div className="fact-row"><dt>Campus</dt><dd>{education.location}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="education-title">
          <div className="site-shell">
            <div className="section-heading">
              <div className="section-index">02 / Education</div>
              <div>
                <h2 className="section-title" id="education-title">A strong computer science foundation.</h2>
                <p className="section-intro">Academic background and current course of study.</p>
              </div>
            </div>
            <article className="edu-card">
              <div className="edu-top">
                <span className="edu-monogram" aria-hidden="true">IIIT</span>
                <div className="edu-meta">
                  <h3>{education.institution}</h3>
                  <p>{education.degree}</p>
                  <p>{education.location}</p>
                </div>
                <span className="edu-years">{education.duration}</span>
              </div>
              <div className="edu-details">
                <div><span className="edu-detail-label">CGPA</span><span className="edu-detail-value">{education.cgpa}</span></div>
                <div><span className="edu-detail-label">Program</span><span className="edu-detail-value">Undergraduate</span></div>
              </div>
            </article>
          </div>
        </section>

        <SkillsSection />

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="site-shell">
            <div className="section-heading">
              <div className="section-index">04 / Selected work</div>
              <div>
                <h2 className="section-title" id="projects-title">Systems built end to end.</h2>
                <p className="section-intro">A closer look at full-stack applications, from authentication and data pipelines to real-time updates and AI-assisted workflows.</p>
              </div>
            </div>
            <div className="projects-list">
              {projects.map((project, index) => (
                <article className="project-card" key={project.name} data-testid={`card-project-${index + 1}`}>
                  <ProjectPreview source={project.image} title={project.name} />
                  <div className="project-content">
                    <div className="project-topline">
                      <span>0{index + 1} / Project</span>
                      {project.period && <span>{project.period}</span>}
                    </div>
                    <h3>{project.name}<span className="project-descriptor"> — {project.descriptor}</span></h3>
                    <p>{project.description}</p>
                    <div className="tech-list" aria-label={`${project.name} technologies`}>
                      {project.technologies.map((technology) => <span className="tech-tag" key={technology}>{technology}</span>)}
                    </div>
                    <div className="project-actions">
                      {project.live && (
                        <ExternalAnchor href={project.live} className="text-link" label={`View ${project.name} live`}>
                          View live <ArrowUpRight size={13} aria-hidden="true" />
                        </ExternalAnchor>
                      )}
                      <ExternalAnchor href={project.github} className="text-link secondary-link" label={`${project.name} GitHub repository`}>
                        GitHub <ArrowUpRight size={13} aria-hidden="true" />
                      </ExternalAnchor>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="site-shell">
            <div className="section-heading">
              <div className="section-index">05 / Experience</div>
              <div>
                <h2 className="section-title" id="experience-title">Learning by shipping.</h2>
                <p className="section-intro">Self-directed software development and open source contributions.</p>
              </div>
            </div>
            <article className="experience-panel">
              <div className="experience-date">{experience.period}<br />{experience.location}</div>
              <div className="experience-body">
                <h3>{experience.company}</h3>
                <p className="experience-role">{experience.role}</p>
                <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="achievements" aria-labelledby="achievements-title">
          <div className="site-shell">
            <div className="section-heading">
              <div className="section-index">06 / Milestones</div>
              <div>
                <h2 className="section-title" id="achievements-title">Selected achievements.</h2>
                <p className="section-intro">A couple of milestones from problem solving and academics.</p>
              </div>
            </div>
            <div className="achievement-list">
              {achievements.map((achievement) => (
                <article className="achievement-row" key={achievement.title}>
                  <div>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                    {achievement.links.length > 0 && (
                      <div className="achievement-links">
                        {achievement.links.map((link) => (
                          <ExternalAnchor key={link.label} href={link.url} label={`${link.label} profile`}>
                            {link.label} <ArrowUpRight size={10} aria-hidden="true" />
                          </ExternalAnchor>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="achievement-value">{achievement.value}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="site-shell">
            <div className="contact-layout">
              <div className="section-index">07 / Contact</div>
              <div className="contact-main">
                <h2 id="contact-title">Have an interesting problem <span>to solve?</span></h2>
                <p>Get in touch about software, engineering opportunities, or a project worth thinking through.</p>
                <div className="contact-options">
                  <a href={`mailto:${personalInfo.email}`} className="contact-option" data-testid="link-contact-email">
                    <Mail size={14} aria-hidden="true" /> {personalInfo.email}
                  </a>
                  <a href={`tel:${personalInfo.phone.replaceAll('-', '')}`} className="contact-option" data-testid="link-contact-phone">
                    <Phone size={14} aria-hidden="true" /> {personalInfo.phone}
                  </a>
                  <ExternalAnchor href={personalInfo.linkedin} className="contact-option" label="LinkedIn profile">
                    <Linkedin size={14} aria-hidden="true" /> LinkedIn
                  </ExternalAnchor>
                  <ExternalAnchor href={personalInfo.github} className="contact-option" label="GitHub profile">
                    <Github size={14} aria-hidden="true" /> GitHub
                  </ExternalAnchor>
                </div>
              </div>
            </div>
            <footer className="footer">
              <span>© {new Date().getFullYear()} Abhinandan Dwivedi</span>
              <span></span>
              <a href="#top" data-testid="link-back-to-top">Back to top ↑</a>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
