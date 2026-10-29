
function Resume() {
  return (
    <section id="resume" className="section">
      <h2>My Resume</h2>

      <p>
        Download my resume to learn more about my
        education, technical skills and projects.
      </p>

      <a
        href="/images/resume.pdf"
        className="resume-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume PDF
      </a>

      <a
        href="/images/resume.pdf"
        className="resume-button"
        download="Yash-Meher-Resume.pdf"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
