import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  }

  return (
    <>
      <h1>Contact</h1>
      <div className="two">
        <div>
          <p>
            Have a project, an opportunity, or a question? Send me a message and
            I'll reply as soon as I can.
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:youremail@example.com">youremail@example.com</a><br />
            <strong>GitHub:</strong> <a href="https://github.com/your-username">github.com/your-username</a><br />
            <strong>Facebook:</strong> <a href="https://facebook.com/your-profile">facebook.com/your-profile</a>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Name <input type="text" name="name" required autoComplete="name" /></label>
          <label>Email <input type="email" name="email" required autoComplete="email" /></label>
          <label>Message <textarea name="message" required /></label>
          <button className="btn" type="submit">Send message</button>
          {sent && (
            <p className="ok show" role="status">
              Message ready! This demo form has no back-end yet, so nothing was sent.
            </p>
          )}
        </form>
      </div>
    </>
  );
}