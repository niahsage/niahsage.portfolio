import "../styles/marketing-showcase.css";
import "../styles/marketing-archive.css";
import "../styles/marketing-social-links.css";
import { marketingSocialLinks } from "../data/marketing-social-links";
import MailchimpCaseStudy from "./MailchimpCaseStudy";

import PetParadiseThanksgiving from "../assets/marketing/pet-paradise-thanksgiving.jpg";
import { useEffect, useRef, useState } from "react";
import PetParadiseFurFelonies from "../assets/marketing/pet-paradise-fur-felonies.mp4";
import PetParadiseJustWorkHere from "../assets/marketing/pet-paradise-we-just-work-here.mp4";
import PetParadiseBlindfolded from "../assets/marketing/pet-paradise-blindfolded.mp4";
import FurFeloniesPoster from "../assets/marketing/pet-paradise-fur-felonies-poster.jpg";
import JustWorkHerePoster from "../assets/marketing/pet-paradise-we-just-work-here-poster.jpg";
import BlindfoldedPoster from "../assets/marketing/pet-paradise-blindfolded-poster.jpg";
import VgtWebsiteCalled from "../assets/marketing/vgt-website-called.jpg";
import VgtBetterPresence from "../assets/marketing/vgt-better-presence.jpg";
import VgtAccessibility from "../assets/marketing/vgt-accessibility.jpg";
import VgtPrettyIsntEnough from "../assets/marketing/vgt-pretty-isnt-enough.jpg";
import VgtPci from "../assets/marketing/vgt-pci.jpg";
import YogaSkipStudio from "../assets/marketing/yoga-skip-studio.jpg";
import YogaBodyNeeds from "../assets/marketing/yoga-body-needs.jpg";
import YogaTreePose from "../assets/marketing/yoga-tree-pose.jpg";
import YogaFivePoses from "../assets/marketing/yoga-five-poses.jpg";
import YogaStartWhereYouAre from "../assets/marketing/yoga-start-where-you-are.jpg";

const campaignImages = {
  petParadiseSecond: PetParadiseThanksgiving,
  vglobaltech: VgtWebsiteCalled,
  yoga2me: YogaSkipStudio,
};

// These are Niah's actual pieces. Keep labels factual, not invented metrics.
const extraCampaigns = [
  {
    id: "vgt",
    name: "VGlobalTech",
    category: "Digital marketing",
    description:
      "Website, accessibility, and security messaging translated into clear branded graphics.",
    items: [
      {
        image: VgtBetterPresence,
        title: "Build a better online presence",
        detail: "Service-focused promotion / visual hierarchy and a clear message",
      },
      {
        image: VgtAccessibility,
        title: "Website accessibility",
        detail: "Accessibility messaging / service communication",
      },
      {
        image: VgtPrettyIsntEnough,
        title: "Pretty isn't enough",
        detail: "Web design messaging / editorial campaign layout",
      },
      {
        image: VgtPci,
        title: "PCI security announcement",
        detail: "Security and trust messaging / branded social graphic",
      },
    ],
  },
  {
    id: "yoga",
    name: "Yoga2Me",
    category: "Social content",
    description:
      "Friendly yoga education and promotional posts made for a personal, virtual practice.",
    items: [
      {
        image: YogaBodyNeeds,
        title: "What does your body need today?",
        detail: "Audience first idea / welcoming visual design",
      },
      {
        image: YogaTreePose,
        title: "Tree pose",
        detail: "Pose education / approachable wellness messaging",
      },
      {
        image: YogaFivePoses,
        title: "Five yoga poses",
        detail: "Educational carousel style design / clarity and pacing",
      },
      {
        image: YogaStartWhereYouAre,
        title: "Start where you are",
        detail: "Encouraging brand messaging / consistent visual identity",
      },
    ],
  },
];


/* Public profiles are supporting evidence, not a claim that every post is ours. */
function BrandInstagramLink({ brand }) {
  const profileUrl = marketingSocialLinks[brand];
  if (!profileUrl) return null;

  return (
    <a
      className="mk-social-link"
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${brand === "petParadise" ? "Pet Paradise Naples" : brand === "vglobaltech" ? "VGlobalTech" : "Yoga2Me"} on Instagram (opens in a new tab)`}
    >
      <span className="mk-social-link__icon" aria-hidden="true">✳</span>
      View brand Instagram
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function CampaignImage({ src, alt, name }) {
  if (!src) {
    return (
      <div className="mk-image-placeholder">
        <span aria-hidden="true">✳</span>
        <p>{name}</p>
        <small>Original campaign artwork here</small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="mk-real-image"
    />
  );
}

// Reels play silently when visible. Reduced-motion users start with a paused
// video and can choose Play using the native controls.
function LoopingReel({ src, poster, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (motion.matches || !entry.isIntersecting) {
          video.pause();
        } else {
          const playPromise = video.play();
          if (playPromise?.catch) playPromise.catch(() => {});
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    const updateMotion = () => {
      if (motion.matches) video.pause();
      else if (video.getBoundingClientRect().top < window.innerHeight &&
        video.getBoundingClientRect().bottom > 0) {
        video.play().catch(() => {});
      }
    };
    motion.addEventListener?.("change", updateMotion);
    return () => {
      observer.disconnect();
      motion.removeEventListener?.("change", updateMotion);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="mk-reel-video"
      src={src}
      poster={poster}
      title={title}
      aria-label={title}
      muted
      loop
      playsInline
      controls
      preload="metadata"
    />
  );
}

/* Open the folder and choose a proof. No autoplay, no popups, no external UI library. */
function CampaignArchive() {
  const [brandIndex, setBrandIndex] = useState(0);
  const [proofIndex, setProofIndex] = useState(0);
  const group = extraCampaigns[brandIndex];
  const item = group.items[proofIndex];

  function changeBrand(nextIndex) {
    setBrandIndex(nextIndex);
    setProofIndex(0);
  }

  function turnPage(step) {
    setProofIndex((index) =>
      (index + step + group.items.length) % group.items.length
    );
  }

  return (
    <section className="mk-archive" aria-labelledby="mk-archive-title">
      <header className="mk-archive-heading">
        <div>
          <p className="mk-label">PULL A FILE TO EXPLORE THE WORK</p>
          <h3 id="mk-archive-title">A small <em>archive.</em></h3>
        </div>

      </header>

      <div className="mk-archive-shell">
        <div className="mk-archive-tabs" role="group" aria-label="Choose a campaign folder">
          {extraCampaigns.map((brand, index) => (
            <button
              key={brand.id}
              type="button"
              className={`mk-archive-tab mk-archive-tab--${brand.id}${brandIndex === index ? " is-current" : ""}`}
              aria-pressed={brandIndex === index}
              onClick={() => changeBrand(index)}
            >
              <span className="mk-archive-tab-mark" aria-hidden="true">✳</span>
              {brand.name}
            </button>
          ))}
        </div>

        <div className="mk-archive-folder">
          <div className="mk-archive-stamp" aria-hidden="true">NIAH'S FILES / {String(brandIndex + 1).padStart(2, "0")}</div>

          <div className="mk-archive-main">
            <div className="mk-archive-print" key={`${group.id}-${proofIndex}`}>
              <div className="mk-archive-image-wrap">
                <img src={item.image} alt={`${group.name}: ${item.title} campaign graphic`} loading="lazy" />
              </div>
              <span className="mk-archive-print-caption">made with intention ♡</span>
            </div>

            <div className="mk-archive-details" aria-live="polite" aria-atomic="true">
              <span className="mk-archive-count">{String(proofIndex + 1).padStart(2, "0")} / {String(group.items.length).padStart(2, "0")} · {group.category}</span>
              <h4>{item.title}</h4>
              <p>{group.description}</p>
              <div className="mk-archive-note">
                <span aria-hidden="true">✿</span>
                <span>{item.detail}</span>
              </div>

              <div className="mk-archive-actions">
                <button type="button" onClick={() => turnPage(-1)} aria-label="Previous design">← <span>Previous</span></button>
                <button type="button" onClick={() => turnPage(1)} aria-label="Next design"><span>Next</span> →</button>
              </div>

              <a className="mk-archive-original" href={item.image} target="_blank" rel="noopener noreferrer">
                View original image <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="mk-archive-thumbnails" role="group" aria-label={`Choose a ${group.name} design`}>
            {group.items.map((proof, index) => (
              <button
                className={`mk-archive-thumb${proofIndex === index ? " is-current" : ""}`}
                type="button"
                key={proof.title}
                aria-label={`Show ${proof.title}`}
                aria-pressed={proofIndex === index}
                onClick={() => setProofIndex(index)}
              >
                <img src={proof.image} alt="" loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MarketingShowcase() {
  return (
    <section
      id="marketing"
      className="mk-showcase"
      aria-labelledby="mk-title"
    >
      <div className="mk-container">
        <header className="mk-heading">
          <div>
            <p className="mk-eyebrow">
              FROM MY IPAD / 02
            </p>

            <h2 id="mk-title">
              Social media
              <br />
              <em>marketing</em>
            </h2>
          </div>

          <div className="mk-intro-note">
            <span aria-hidden="true">✿</span>

            <p>
              A collection of social content,
              marketing campaigns, and creative
              ideas made for real brands.
            </p>
          </div>
        </header>

        {/* PET PARADISE */}

        <article className="mk-feature mk-pet">
          <div className="mk-pet-visual">
            <div className="mk-phone">
              <div className="mk-phone-top" aria-hidden="true" />

              <div className="mk-phone-screen">
                <LoopingReel
                  src={PetParadiseFurFelonies}
                  poster={FurFeloniesPoster}
                  title="Pet Paradise reel: Fur Felonies, playful dogs at daycare"
                />
              </div>
            </div>

            <div className="mk-pet-print">
              <div className="mk-print-media">
                <CampaignImage
                  src={campaignImages.petParadiseSecond}
                  alt="Additional Pet Paradise social media design"
                  name="Second social design"
                />
              </div>

              <span className="mk-print-caption">
                moments worth sharing ♡
              </span>
            </div>

            <span className="mk-visual-sparkle" aria-hidden="true">
              ✳
            </span>
          </div>

          <div className="mk-copy mk-pet-copy">
            <span className="mk-label">
              FILE NO. 01 / SOCIAL MEDIA
            </span>

            <h3>Pet Paradise</h3>

            <p>
              Creating social media content
              centered around pets, personality,
              and the everyday experiences
              that connect people with the brand.
            </p>

            <div className="mk-tags" aria-label="Project disciplines">
              <span>Social Content</span>
              <span>Visual Design</span>
              <span>Brand Communication</span>
            </div>

            <div className="mk-social-proof">
              <BrandInstagramLink brand="petParadise" />
              <p className="mk-social-proof__dates">
                Selected content from my time with Pet Paradise Naples
                (Nov 2025 – Aug 2026). The brand account also includes work by others.
              </p>
            </div>

            <span className="mk-handwritten" aria-hidden="true">
              Give your pages personality ☀︎
            </span>
          </div>
        </article>

        {/* Original Pet Paradise videos — not still image stand-ins. */}
        <section className="mk-reels-section" aria-labelledby="mk-reels-title">
          <div className="mk-reels-heading">
            <h3 id="mk-reels-title">More from the instagram <span aria-hidden="true">❀</span></h3>
            <p>Pet Paradise / short form video</p>
          </div>
          <div className="mk-reels-grid">
            <figure className="mk-reel-card">
              <LoopingReel
                src={PetParadiseJustWorkHere}
                poster={JustWorkHerePoster}
                title="Pet Paradise reel: Not our dog, we just work here"
              />
              <figcaption>Not our dog, we just work here ♡</figcaption>
            </figure>
            <figure className="mk-reel-card">
              <LoopingReel
                src={PetParadiseBlindfolded}
                poster={BlindfoldedPoster}
                title="Pet Paradise reel: Blindfolded dog recognition challenge"
              />
              <figcaption>Recognizing the pups by heart</figcaption>
            </figure>
          </div>
        </section>

        {/* VGLOBALTECH */}

        <article className="mk-feature mk-vgt">
          <div className="mk-copy mk-vgt-copy">
            <span className="mk-label">
              FILE NO. 02 / DIGITAL MARKETING
            </span>

            <h3>VGlobalTech</h3>

            <p>
              Campaign graphics, promotional
              content, and email marketing
              highlighting web development,
              accessibility, and digital services.
            </p>

            <div className="mk-tags" aria-label="Project disciplines">
              <span>Campaign Design</span>
              <span>Email Marketing</span>
              <span>Social Media</span>
            </div>

            <div className="mk-social-proof">
              <BrandInstagramLink brand="vglobaltech" />
              <p className="mk-social-proof__dates">Selected social designs shown here are pieces I worked on. The full brand account may include other creators' posts.</p>
            </div>
          </div>

          <div className="mk-vgt-visual">
            <div className="mk-campaign-board">
              <div className="mk-campaign-board-top">
                <span aria-hidden="true">✳</span>
               
              </div>

              <div className="mk-campaign-content">
                <CampaignImage
                  src={campaignImages.vglobaltech}
                  alt="VGlobalTech digital marketing campaign graphic"
                  name="VGlobalTech campaign design"
                />
              </div>

              <div className="mk-campaign-board-bottom">
                <span>DESIGN / STRATEGY / ACCESSIBILITY</span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>

            <span className="mk-vgt-sticker" aria-hidden="true">
              made for media
            </span>
          </div>
        </article>

        {/* YOGA2ME */}

        <article className="mk-feature mk-yoga">
          <div className="mk-yoga-visual">
            <div className="mk-tablet">
              <div className="mk-tablet-screen">
                <CampaignImage
                  src={campaignImages.yoga2me}
                  alt="Yoga2Me social media graphic designed by Niah"
                  name="Yoga2Me social graphic"
                />
              </div>

              <span className="mk-tablet-camera" aria-hidden="true" />
            </div>

            <span className="mk-yoga-flower" aria-hidden="true">
              ✿
            </span>
          </div>

          <div className="mk-copy mk-yoga-copy">
            <span className="mk-label">
              FILE NO. 03 / SOCIAL CONTENT
            </span>

            <h3>Yoga2Me</h3>

            <p>
              Social media graphics and messaging
              for personalized virtual yoga,
              combining approachable wellness
              communication with consistent
              visual branding.
            </p>

            <div className="mk-tags" aria-label="Project disciplines">
              <span>Content Design</span>
              <span>Social Graphics</span>
              <span>Copywriting</span>
            </div>

            <div className="mk-social-proof">
              <BrandInstagramLink brand="yoga2me" />
              <p className="mk-social-proof__dates">Selected social designs shown here are pieces I worked on. The full brand account may include other creators' posts.</p>
            </div>
          </div>
        </article>

        {/* Browse real campaign pieces without leaving the page. */}
        <CampaignArchive />

        {/* One real Mailchimp CDD outreach campaign, presented as a labeled layout reconstruction. */}
        <MailchimpCaseStudy />

        <p className="mk-closing-note">
          Different brands and different audiences
          give so much room to get creative. ♡
        </p>
      </div>
    </section>
  );
}
