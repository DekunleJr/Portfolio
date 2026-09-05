import Reveal from './Reveal';
import skillGroups from '../data/skills';
import './Skills.css';

const Skills = () => (
  <section id="skills" className="skills section">
    <div className="container">
      <Reveal className="section-head center">
        <p className="section-label mono">Technology</p>
        <h2 className="section-title">Tools I build with.</h2>
        <p className="section-lead">
          Organized by what they do — emphasizing the technologies most relevant to my
          professional work.
        </p>
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} className="skill-group card" delay={Math.min(i * 60, 240)}>
            <h3 className="skill-group-title">{group.title}</h3>
            <div className="skill-chips">
              {group.items.map((item) => (
                <span key={item} className="tech-chip">{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
