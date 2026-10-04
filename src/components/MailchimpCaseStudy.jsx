import { useState } from "react";
import "../styles/mailchimp-case-study.css";
import accessibilityGraphic from "../assets/marketing/vgt-mailchimp-cdd.png";

/** Show Niah's original VGlobalTech CDD Mailchimp email screenshot. */
export default function MailchimpCaseStudy() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="niah-email-case" aria-labelledby="niah-email-title">
      <div className="niah-email-case__intro">
        <p className="niah-email-case__eyebrow">FILE NO. 04 / EMAIL MARKETING</p>
        <h3 id="niah-email-title">An email with <em>intention.</em></h3>
        <p>
          First Mailchimp outreach campaign for VGlobalTech, introducing website
          accessibility, design, and digital services to Florida Community
          Development Districts (CDDs).
        </p>
        <div className="niah-email-case__chips" aria-label="Project focus">
          <span>Mailchimp</span><span>CDD outreach</span><span>Campaign design</span>
        </div>
      </div>

      <div className="niah-email-case__workspace">
        <div className="niah-email-case__window">
          <div className="niah-email-case__windowbar">
            <div className="niah-email-case__dots" aria-hidden="true"><i /><i /><i /></div>
            <span>{opened ? "opened message" : "inbox / a little something for you"}</span>
            <span className="niah-email-case__windowmark" aria-hidden="true">✳</span>
          </div>

          {!opened ? (
            <div className="niah-email-case__inbox">
              <p className="niah-email-case__instruction">You have a message — open it ✉</p>
              <button
                type="button"
                className="niah-email-case__message"
                onClick={() => setOpened(true)}
                aria-label="Open VGlobalTech Mailchimp campaign preview"
              >
                <span className="niah-email-case__unread" aria-hidden="true" />
                <span className="niah-email-case__sender">VGlobalTech</span>
                <span className="niah-email-case__subject">
                  Accessible websites for your CDD
                  <small>Web design, ADA &amp; WCAG support, and digital services…</small>
                </span>
                <span className="niah-email-case__openarrow" aria-hidden="true">↗</span>
              </button>
              <div className="niah-email-case__side-note" aria-hidden="true">
                a recent campaign ♡
              </div>
            </div>
          ) : (
            <div className="niah-email-case__opened">
              <div className="niah-email-case__toolbar">
                <button type="button" className="niah-email-case__back" onClick={() => setOpened(false)}>
                  <span aria-hidden="true">←</span> Back to inbox
                </button>
              </div>

              <div className="niah-email-case__canvas">
                <article
                  className="niah-email-case__email"
                  aria-label="Original VGlobalTech CDD Mailchimp email campaign"
                >
                  <img
                    src={accessibilityGraphic}
                    alt="Full-length VGlobalTech CDD outreach email. It promotes accessible community district websites, web design, ADA and WCAG support, organized district information, ongoing website management, and a Contact Us call to action."
                    className="niah-email-case__hero"
                    loading="lazy"
                  />
                </article>
              </div>
              <a
                className="niah-email-case__full-link"
                href={accessibilityGraphic}
                target="_blank"
                rel="noopener noreferrer"
              >
                View the original email full size <span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
        </div>

        <aside className="niah-email-case__notes" aria-label="Campaign project notes">
          <span className="niah-email-case__tape" aria-hidden="true" />
          <p className="niah-email-case__notes-title">behind the scenes ✿</p>
          <p><strong>Audience</strong><br />Florida Community Development Districts</p>
          <p><strong>My work</strong><br />Campaign layout, content organization, supporting graphics, and calls to action.</p>
          <p><strong>Purpose</strong><br />Introduce VGlobalTech's accessibility and digital services in a concise, readable format.</p>
          <small>Original VGlobalTech CDD outreach email design, presented as part of my marketing portfolio.</small>
        </aside>
      </div>
    </section>
  );
}
