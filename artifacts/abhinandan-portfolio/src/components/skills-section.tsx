import {
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Layers,
} from 'lucide-react';
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVscodium,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import { skillCategories } from '@/data/portfolio';

const technologyIcons: Record<string, IconType> = {
  'C++': SiCplusplus,
  Python: SiPython,
  'JavaScript (ES6+)': SiJavascript,
  TypeScript: SiTypescript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  FastAPI: SiFastapi,
  'Tailwind CSS': SiTailwindcss,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  'Gemini API': SiGooglegemini,
  Git: SiGit,
  GitHub: SiGithub,
  Linux: SiLinux,
  Docker: SiDocker,
  'VS Code': SiVscodium,
};

const technologyMarks: Record<string, string> = {
  SQL: 'SQL',
  'Groq APIs': 'GQ',
  RAG: 'RAG',
  'LLM Applications': 'LLM',
  'Prompt Engineering': 'PE',
  'LLM Integration': 'LLM',
  AWS: 'AWS',
  'CI/CD': 'CI',
  'Data Structures & Algorithms': 'DSA',
  'Operating Systems': 'OS',
  DBMS: 'DB',
  'Computer Networks': 'NET',
  OOPS: 'OOP',
};

const categoryIcons = [
  Code2,
  Layers,
  Database,
  BrainCircuit,
  Cloud,
  Cpu,
];

function categoryLabel(title: string) {
  return title === 'Languages' ? 'Programming languages' : title;
}

export function SkillsSection() {
  return (
    <section
      className="section"
      id="skills"
      aria-labelledby="skills-title"
      data-testid="section-skills"
    >
      <div className="site-shell">
        <div className="section-heading">
          <div className="section-index">03 / Toolkit</div>
          <div>
            <h2 className="section-title" id="skills-title">
              Tools I work with.
            </h2>
            <p className="section-intro">
              A practical toolkit across application development, data, AI
              integrations, and computer science fundamentals.
            </p>
          </div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const CategoryIcon = categoryIcons[index] ?? Code2;

            return (
              <article
                className="skill-card"
                key={category.title}
                data-testid={`card-skill-${index + 1}`}
              >
                <div className="skill-card-head">
                  <span className="skill-category-icon" aria-hidden="true">
                    <CategoryIcon size={16} strokeWidth={1.8} />
                  </span>
                  <div className="skill-category-copy">
                    <span className="skill-number">
                      {String(index + 1).padStart(2, '0')} / 06
                    </span>
                    <h3>{categoryLabel(category.title)}</h3>
                  </div>
                  <span className="skill-card-count" aria-label={`${category.items.length} technologies`}>
                    {String(category.items.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="skill-items">
                  {category.items.map((item) => {
                    const TechnologyIcon = technologyIcons[item];
                    const testId = item
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/^-|-$/g, '');

                    return (
                      <div
                        className="skill-tile"
                        key={item}
                        data-testid={`tech-${testId}`}
                      >
                        <span className="skill-icon" aria-hidden="true">
                          {TechnologyIcon ? (
                            <TechnologyIcon size={19} />
                          ) : (
                            <span className="skill-monogram">
                              {technologyMarks[item] ?? item.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </span>
                        <span className="skill-name">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
