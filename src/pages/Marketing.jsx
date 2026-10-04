import MarketingShowcase from "../components/MarketingShowcase";
import InnerPageFooter from "../components/InnerPageFooter";
import petPost from "../assets/marketing/pet-paradise-thanksgiving.jpg";
import techPost from "../assets/marketing/vgt-website-called.jpg";
import yogaPost from "../assets/marketing/yoga-skip-studio.jpg";
import "../styles/inner-pages-upgrade.css";

const jumpLinks = [
  { label: "Pet Paradise", selector: ".mk-pet" },
  { label: "VGlobalTech", selector: ".mk-vgt" },
  { label: "Yoga2Me", selector: ".mk-yoga" },
  { label: "Campaign folders", selector: ".mk-archive" },
  { label: "Email campaign", selector: ".niah-email-case" },
];

function jumpTo(selector) {
  const target = document.querySelector(`.niah-marketing-page ${selector}`);
  if (!target) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.setAttribute("tabindex", "-1");
  target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  target.focus({ preventScroll: true });
}

export default function Marketing() {
  return (
    <main id="main-content" className="niah-marketing-page niah-dossier">
      <section className="niah-marketing-cover" aria-labelledby="niah-marketing-cover-title">
        <div className="niah-marketing-cover__copy">
          <span className="niah-dossier__index">CAMPAIGN FILE 02 / REAL BRAND WORK</span>
          <h1 id="niah-marketing-cover-title">Different brands<br /><em>with unique stories.</em></h1>
          <p>Social content, brand messaging, short form videos, and one email campaign. Pull a file and see how a different audience shapes the design.</p>
          <div className="niah-marketing-cover__jump" role="group" aria-label="Jump to a marketing section">
            {jumpLinks.map(({ label, selector }) => (
              <button type="button" key={label} onClick={() => jumpTo(selector)}>{label} <span aria-hidden="true">↘</span></button>
            ))}
          </div>
        </div>
        <div className="niah-marketing-cover__collage" aria-hidden="true">
          <div className="niah-marketing-cover__photo niah-marketing-cover__photo--first"><img src={petPost} alt="" /></div>
          <div className="niah-marketing-cover__photo niah-marketing-cover__photo--second"><img src={techPost} alt="" /></div>
          <div className="niah-marketing-cover__photo niah-marketing-cover__photo--third"><img src={yogaPost} alt="" /></div>
          <span className="niah-marketing-cover__handnote">made for real people ♡</span>
        </div>
      </section>
      <MarketingShowcase />
      <InnerPageFooter current="/marketing" />
    </main>
  );
}
