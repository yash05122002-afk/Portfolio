
const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"]
  },
  {
    title: "Backend & Programming",
    skills: ["Java", "REST API fundamentals"]
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Responsive Design"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="eyebrow">MY TOOLKIT</p>
      <h2>Skills & <span>Technologies</span></h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="tech-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
