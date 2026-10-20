import './_group.css';
import { skillCategories } from './data';

export function Current() {
  return (
    <main className="portfolio-skills-mockup">
      <section className="skills-section">
        <div className="site-shell">
          <div className="section-heading">
            <div className="section-index">03 / Toolkit</div>
            <div>
              <h1 className="section-title">Tools I work with.</h1>
              <p className="section-intro">
                A practical toolkit across application development, data, AI
                integrations, and computer science fundamentals.
              </p>
            </div>
          </div>
          <div className="current-skills-grid">
            {skillCategories.map((category, index) => (
              <article className="current-skill-card" key={category.title}>
                <div className="current-skill-head">
                  <span className="current-skill-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2>{category.title}</h2>
                </div>
                <div className="current-skill-items">
                  {category.items.map((item) => (
                    <span className="current-skill-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
