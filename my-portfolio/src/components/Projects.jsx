
const projects = [
  {
    number: "01",
    title: "BiteBox",
    description:
      "A food delivery website featuring food categories, menu pages, deals, and cart functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/yash05122002-afk/BiteBox"
  },
  {
    number: "02",
    title: "React Portfolio",
    description:
      "A personal portfolio showcasing my technical skills, projects, resume, and contact information.",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://github.com/"
  }
  
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">WHAT I'VE BUILT</p>
      <h2>Featured <span>Projects</span></h2>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-icon">↗</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
