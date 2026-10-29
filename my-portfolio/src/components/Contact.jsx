
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section">
      <p className="eyebrow">GET IN TOUCH</p>
      <h2>Let's Work <span>Together</span></h2>

      <p className="section-description">
        Have a project idea or an opportunity? Send me a message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
          />
        </label>

        <button className="btn" type="submit">
          Send Message →
        </button>

        {submitted && (
          <p role="status" className="form-status">
            Form validated successfully. Connect an email service
            to deliver your message.
          </p>
        )}
      </form>
    </section>
  );
}
