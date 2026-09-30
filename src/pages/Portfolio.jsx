const projects = [
  { title: "Personal Portfolio", text: "This multi-page, responsive site, deployed on Vercel.", tags: ["React", "CSS", "Vite"] },
  { title: "Task Tracker", text: "Add, complete, and filter tasks with React state and hooks.", tags: ["React", "TypeScript", "CSS"] },
  { title: "Weather App", text: "Search a city and see the current forecast using a public API.", tags: ["JavaScript", "REST API", "CSS"] },
  { title: "Login Page Clone", text: "A responsive login page built to practice layout.", tags: ["HTML", "CSS", "Flexbox"] },
  { title: "Landing Page", text: "A mobile-first marketing page with a responsive grid and sticky nav.", tags: ["HTML", "CSS Grid", "JavaScript"] },
  { title: "Quiz App", text: "A timed multiple-choice quiz with score tracking.", tags: ["React", "TypeScript"] },
];

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <p>A few of the projects I've built while growing as a front-end developer.</p>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <ul className="tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="links">
              <a href="#">Live demo</a>
              <a href="#">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}