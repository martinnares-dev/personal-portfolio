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
            Do you have a question? Send me a message and I will answer it as soon as possible.
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:martinnares2027@gmail.com">martinnares2027@gmail.com</a><br />
            <strong>GitHub:</strong> <a href="https://www.github.com/martinnares-dev">github.com/martinnares-dev</a><br />
            <strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61592316135584">facebook.com/martinlinollantosnares</a>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Name <input type="text" name="name" required autoComplete="name" /></label>
          <label>Email <input type="email" name="email" required autoComplete="email" /></label>
          <label>Message <textarea name="message" required /></label>
          <button className="btn" type="submit">Send message</button>
          {sent && (
            <p className="ok show" role="status">
              Sorry! This demo form doesn't have a back-end yet, so nothing was sent.
            </p>
          )}
        </form>
      </div>
    </>
  );
}