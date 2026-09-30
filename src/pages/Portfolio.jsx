const projects = [
  {
    title: "Facebook Login Page Clone",
    text: "My own version of the login page to practice layout and responsive design.",
    tags: ["HTML", "CSS", "Completed"],
    demo: "",
    github: "",
  },
  {
    title: "Personal Portfolio",
    text: "This website is built with React and deployed on Vercel.",
    tags: ["React", "CSS", "Completed"],
    demo: "",
    github: "",
  },
  {
    title: "Task Tracker",
    text: "App to add, check, and delete tasks using React state.",
    tags: ["React", "JavaScript", "In progress"],
    demo: "",
    github: "",
  },
  {
    title: "Weather App",
    text: "Search for a city and display the weather using the public API.",
    tags: ["JavaScript", "API", "In progress"],
    demo: "",
    github: "",
  },
  {
    title: "Quiz App",
    text: "Multiple-choice quiz with score and timer.",
    tags: ["React", "Planned"],
    demo: "",
    github: "",
  },
];

export default function Portfolio() {
  return (
    <>
      <h1>Portfolio</h1>
      <p>Projects I've done and am doing while studying front-end development.</p>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <ul className="tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            {(p.demo || p.github) && (
              <div className="links">
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
                {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
}