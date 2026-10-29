
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Navbar />

      <main>

<section id="home" className="hero">
  <div className="hero-content">
    <p className="eyebrow">REACT DEVELOPER PORTFOLIO</p>

    <h1>
      Hi, I'm Yash.
      <br />
      I build <span>for the web.</span>
    </h1>

    <p className="hero-description">
      I create responsive websites using React,
      JavaScript, HTML, and CSS.
    </p>

    <a href="#projects" className="btn">
      Explore My Work
    </a>
  </div>

  <div className="profile-wrapper">
    <img
      src="/images/profile.jpg"
      alt="My profile"
      className="profile-image"
      fetchPriority="high"
      decoding="async"
      width="350"
      height="350"
    />
  </div>
</section>

        <Suspense
          fallback={
            <div className="loading" role="status">
              Loading portfolio sections...
            </div>
          }
        >
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </Suspense>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">YM<span>.</span></a>
        <p>Designed and built with React.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
