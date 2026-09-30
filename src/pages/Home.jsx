import { Link } from "react-router-dom";

const code = `const martin = {
  role: "Junior Front-End Developer",
  skills: ["HTML", "CSS", "JavaScript",
           "TypeScript", "React"],
  goal: "Software Engineer",
  openToWork: true
};`;

const highlights = [
  { title: "HTML & CSS", text: "Semantic markup and responsive layouts with Flexbox and Grid." },
  { title: "JavaScript & TypeScript", text: "Interactive features, DOM work, and typed code that is easier to maintain." },
  { title: "React", text: "Reusable components and state-driven interfaces." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>I build clean, responsive websites.</h1>
          <p className="lead">
            Hi, I'm Martin, a junior front-end developer working toward becoming a
            software engineer. I turn designs into fast, accessible web pages with
            HTML, CSS, JavaScript, TypeScript, and React.
          </p>
          <div className="actions">
            <Link className="btn" to="/portfolio">View my work</Link>
            <Link className="btn alt" to="/contact">Contact me</Link>
          </div>
        </div>
        <pre className="code" aria-label="Summary of Martin's skills as code">{code}</pre>
      </section>

      <section className="section">
        <h2>What I work with</h2>
        <div className="grid">
          {highlights.map((h) => (
            <article className="card" key={h.title}>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}