import { Link } from "react-router-dom";

const skills = ["HTML5", "CSS3", "Flexbox & Grid", "JavaScript", "TypeScript", "React", "Git & GitHub", "Responsive design"];

const path = [
  { title: "HTML & CSS", text: "Layouts, navigation, and responsive pages." },
  { title: "JavaScript", text: "DOM, events, and interactive features." },
  { title: "TypeScript & React", text: "Typed code and component-based apps." },
  { title: "Node.js & databases", text: "Next step toward full stack development.", next: true },
];

export default function About() {
  return (
    <>
      <h1>About me</h1>
      <div className="two">
        <div>
          <p>
            I'm Martin, a junior front-end developer who is working toward a career
            as a software engineer. I like building things people can see and use,
            and I care about layouts that look good on both phones and desktops.
          </p>
          <p>
            I started with HTML and CSS, then moved to JavaScript, TypeScript, and
            React. Right now I'm improving my code quality, accessibility, and
            problem-solving so I can grow into a full stack role.
          </p>
          <div className="actions">
            <Link className="btn" to="/contact">Work with me</Link>
          </div>
        </div>
        <div>
          <h2>Skills</h2>
          <ul className="tags">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>

      <section className="section">
        <h2>My learning path</h2>
        <ol className="steps">
          {path.map((p) => (
            <li key={p.title} className={p.next ? "next" : ""}>
              <strong>{p.title}</strong><br />{p.text}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}