import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import "../styles/contact-letter.css";
import "../styles/inner-pages-upgrade.css";
import InnerPageFooter from "../components/InnerPageFooter";

const CONTACT_EMAIL = "niahsage@gmail.com";

function buildEmailLink({ name, email, subject, message }) {
  const body = [
    `Hi Niah,`,
    "",
    message.trim(),
    "",
    `From: ${name.trim()}`,
    `Reply to: ${email.trim()}`,
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("A little hello from your portfolio ♡");
  const [message, setMessage] = useState("");
  const openButton = useRef(null);
  const nameInput = useRef(null);
  const hasOpened = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (isOpen) {
      hasOpened.current = true;
      nameInput.current?.focus();
    } else if (hasOpened.current) {
      openButton.current?.focus();
    }
  }, [isOpen]);

  function followPointer(event) {
    if (reduceMotion || isOpen || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--mail-tilt-y", `${(x * 8).toFixed(2)}deg`);
    event.currentTarget.style.setProperty("--mail-tilt-x", `${(-y * 7).toFixed(2)}deg`);
  }

  function resetPointer(event) {
    event.currentTarget.style.setProperty("--mail-tilt-y", "0deg");
    event.currentTarget.style.setProperty("--mail-tilt-x", "0deg");
  }

  function prepareEmail(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    // A mailto link opens a visitor's email app; it does NOT send a message.
    window.location.href = buildEmailLink({ name, email, subject, message });
  }

  return (
    <main id="main-content" className="mail-page">
      <div className="mail-wrap">
        <header className="mail-intro">
          <p className="mail-eyebrow"><span aria-hidden="true">✳ </span>POSTCARD NO. 05 / SAY HELLO</p>
          <h1>Let’s make<br /><em>something lovely.</em></h1>
          <p>
            Send a note, an idea, or just a hello. I love hearing about
            thoughtful projects that bring art, design, and technology together.
          </p>
          <div className="niah-contact-starters" role="group" aria-label="Choose a reason to get in touch">
            <span>Pick a starting point:</span>
            {[
              ["A website idea", "A web or UI/UX project"],
              ["A creative campaign", "A marketing or branding idea"],
              ["Art & illustration", "An art or illustration project"],
              ["Just saying hi ♡", "A little hello from your portfolio ♡"],
            ].map(([label, topic]) => (
              <button type="button" key={label} onClick={() => {setSubject(topic);setIsOpen(true);}}>
                {label} <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </header>

        <div className="mail-layout">
          <section className="mail-station" aria-label="Write a letter to Niah">
            <button
              ref={openButton}
              type="button"
              className={`mail-envelope-scene${isOpen ? " is-open" : ""}`}
              onClick={() => setIsOpen((previous) => !previous)}
              onPointerMove={followPointer}
              onPointerLeave={resetPointer}
              aria-label={isOpen ? "Fold the letter away" : "Open the envelope and write a note"}
              aria-expanded={isOpen}
              aria-controls={isOpen ? "mail-writing-area" : undefined}
            >
              <span className="mail-flower mail-flower-one" aria-hidden="true">✿</span>
              <span className="mail-flower mail-flower-two" aria-hidden="true">✳</span>
              <div className="mail-envelope" aria-hidden="true">
                <div className="mail-envelope-back" />
                <div className="mail-envelope-paper">
                  <span>dear you,</span>
                  <strong>let’s create<br />something ♡</strong>
                </div>
                <div className="mail-envelope-front" />
                <div className="mail-envelope-flap" />
                <div className="mail-wax" aria-hidden="true">✿</div>
              </div>
            </button>
            <p className="mail-envelope-hint">{isOpen ? "Click the envelope again to fold your letter away." : "Click or tap the envelope to break the seal and write a note ♡"}</p>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id="mail-writing-area"
                  className="mail-writing-area"
                  key="letter"
                  initial={reduceMotion ? false : { opacity: 0, y: -24, rotate: -1.5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={{ duration: reduceMotion ? 0 : 0.42, ease: "easeOut" }}
                >
                  <div className="mail-washi" aria-hidden="true" />
                  <div className="mail-sheet-heading">
                    <span className="mail-script">Dear Niah,</span>
                    <span className="mail-date-mark" aria-hidden="true">a note for you ♡</span>
                  </div>
                  <form onSubmit={prepareEmail} className="mail-form">
                    <div className="mail-field-row">
                      <label>
                        Your name <span aria-hidden="true">*</span>
                        <input ref={nameInput} autoComplete="name" name="name" required maxLength={100} value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
                      </label>
                      <label>
                        Your email <span aria-hidden="true">*</span>
                        <input autoComplete="email" type="email" name="email" required maxLength={150} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
                      </label>
                    </div>
                    <label>
                      Subject <span aria-hidden="true">*</span>
                      <input name="subject" required maxLength={150} value={subject} onChange={(event) => setSubject(event.target.value)} />
                    </label>
                    <label>
                      Your note <span aria-hidden="true">*</span>
                      <textarea name="message" required rows={5} maxLength={5000} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell me what you're dreaming up..." />
                    </label>
                    <button type="submit" className="mail-send-button">Open email to send <span aria-hidden="true">↗</span></button>
                    <p className="mail-form-disclaimer">
                      This opens your email app with your note filled in. You'll review it and press Send there. Nothing is sent automatically from this page.
                    </p>
                  </form>
                  <span className="mail-signoff">with love, Niah ♡</span>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          <aside className="mail-aside" aria-labelledby="mail-aside-heading">
            <span className="mail-aside-illustration" aria-hidden="true">☼</span>
            <p className="mail-eyebrow">A LITTLE SOMETHING ABOUT ME</p>
            <h2 id="mail-aside-heading">It starts<br />at <em>hello.</em></h2>
            <p>
              I'm in my last semester studying Digital Media at UCF and enjoy bringing visual design,
              development, and illustration into the same creative space.
            </p>
            <div className="mail-stamp" aria-hidden="true"><span>MADE<br />WITH<br />INTENTION ♡</span></div>
            <p className="mail-aside-label">Or say hello directly</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mail-direct-link">{CONTACT_EMAIL} <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/niahsage" target="_blank" rel="noopener noreferrer" className="mail-small-link">See what I'm building on GitHub ↗</a>
          </aside>
        </div>
      </div>
      <InnerPageFooter current="/contact" />
    </main>
  );
}
