import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Layers,
  Sparkles,
} from 'lucide-react';
import './_group.css';
import { skillCategories } from './data';

const categoryIcons = [
  Code2,
  Layers,
  Database,
  BrainCircuit,
  Cloud,
  Sparkles,
];

const skillMarks: Record<string, string> = {
  'C++': 'C++',
  Python: 'Py',
  'JavaScript (ES6+)': 'JS',
  TypeScript: 'TS',
  SQL: 'SQL',
  HTML5: 'HTML',
  CSS3: 'CSS',
  'React.js': 'R',
  'Next.js': 'N',
  'Node.js': 'N',
  'Express.js': 'Ex',
  FastAPI: 'API',
  'Tailwind CSS': 'TW',
  MongoDB: 'M',
  MySQL: 'SQL',
  PostgreSQL: 'PG',
  'Gemini API': 'G',
  'Groq APIs': 'GQ',
  RAG: 'RAG',
  'LLM Applications': 'LLM',
  'Prompt Engineering': 'PE',
  'LLM Integration': 'LLM',
  Git: 'Git',
  GitHub: 'GH',
  Linux: 'Lx',
  Docker: 'D',
  AWS: 'AWS',
  'CI/CD': 'CI',
  'VS Code': 'VS',
  'Data Structures & Algorithms': 'DSA',
  'Operating Systems': 'OS',
  DBMS: 'DB',
  'Computer Networks': 'NET',
  OOPS: 'OOP',
};

function categoryLabel(title: string) {
  return title === 'Languages' ? 'Programming languages' : title;
}

export function Premium() {
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
          <div className="premium-skills-grid">
            {skillCategories.map((category, index) => {
              const CategoryIcon = categoryIcons[index];

              return (
                <article
                  className="premium-skill-card"
                  key={category.title}
                  data-testid={`premium-skill-card-${index + 1}`}
                >
                  <div className="premium-skill-head">
                    <span className="premium-category-icon" aria-hidden="true">
                      <CategoryIcon size={15} strokeWidth={1.7} />
                    </span>
                    <h2>{categoryLabel(category.title)}</h2>
                    <span className="premium-skill-count">
                      {String(category.items.length).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="premium-skill-items">
                    {category.items.map((item) => (
                      <div className="premium-skill-tile" key={item}>
                        <span className="premium-skill-mark" aria-hidden="true">
                          {skillMarks[item] ?? item.slice(0, 2).toUpperCase()}
                        </span>
                        <span className="premium-skill-name">{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
