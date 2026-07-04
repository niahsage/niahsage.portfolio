import { useState } from "react";
import "../styles/contact.css";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Please enter a valid email.";
    if (!form.message.trim()) newErrors.message = "Please enter a message.";
    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.main
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <section className="contact-hero">
        <div>
          <p className="eyebrow">Let’s Connect</p>
          <h1>
            Let’s create
            <br />
            something
            <br />
            <em>meaningful.</em>
          </h1>
          <p>
            Whether you’re looking for a designer, front-end developer,
            illustrator, or creative collaborator, I’d love to hear what you’re
            working on.
          </p>
        </div>

        <div className="contact-note">
          <span>☼</span>
          <p>
            Currently open to internships, freelance projects, commissions, and
            creative collaborations.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}

          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">Send Message →</button>

          {submitted && <p className="success-message">Thanks! Your message has been submitted.</p>}
        </form>

        <aside className="contact-side">
          <p className="eyebrow">Find Me Here</p>
          <a href="mailto:niahsage@gmail.com">niahsage@gmail.com</a>
          <a href="https://github.com/niahsage" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/Niah-Sage-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </aside>
      </section>

      <p className="contact-signoff">Niah Sage ♡</p>
    </motion.main>
  );
}

export default Contact;