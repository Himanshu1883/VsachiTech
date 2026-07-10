import { SM_FLIP } from "../socialMediaData";
import "../social-media-flip.css";

function BgImage({ src, className = "", step = false }) {
  if (!src && !step) return null;

  return (
    <div
      className={`content__img ${className}`.trim()}
      {...(step ? { "data-step": true } : {})}
      style={src ? { backgroundImage: `url(${src})` } : undefined}
      aria-hidden={step && !src}
    />
  );
}

function SideRailLine({ line, index }) {
  const text = typeof line === "string" ? line : line.text;
  const accent =
    (typeof line === "object" && line.accent) || index % 2 === 1;

  return (
    <span
      className={`sm-flip-side-rail-line ${accent ? "sm-flip-side-rail-line--accent" : ""}`}
    >
      {text}
    </span>
  );
}

function SideRails({ rails, variant = "", theme = "light" }) {
  if (!rails) return null;

  const { left = [], right = [] } = rails;
  if (!left.length && !right.length) return null;

  return (
    <div
      className={`sm-flip-side-rails sm-flip-side-rails--${theme} ${variant}`.trim()}
      aria-hidden
    >
      {left.length > 0 && (
        <div className="sm-flip-side-rail sm-flip-side-rail--left">
          {left.map((line, index) => (
            <SideRailLine
              key={`left-${typeof line === "string" ? line : line.text}-${index}`}
              line={line}
              index={index}
            />
          ))}
        </div>
      )}

      {right.length > 0 && (
        <div className="sm-flip-side-rail sm-flip-side-rail--right">
          {right.map((line, index) => (
            <SideRailLine
              key={`right-${typeof line === "string" ? line : line.text}-${index}`}
              line={line}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SmFlipHero() {
  const { sectionRails } = SM_FLIP;

  return (
    <div className="sm-flip">
      <div className="sm-flip-hero-wrap">
        <section className="content content--initial">
          <div
            className="sm-one"
            style={{ backgroundImage: `url(${SM_FLIP.mainImage})` }}
          />
        </section>

        <div className="sm-flip-intro-ui" aria-hidden={false}>
          <div className="sm-flip-intro-shade" aria-hidden />

          <div className="sm-flip-intro-copy">
            <p className="sm-flip-intro-eyebrow">{SM_FLIP.introOverlay.eyebrow}</p>

            <h1 className="sm-flip-intro-title">
              <span>{SM_FLIP.introOverlay.titleLines[0]}</span>
              <span className="sm-flip-intro-title-accent">
                {SM_FLIP.introOverlay.titleLines[1]}
              </span>
              <span className="sm-flip-intro-title-line">
                {SM_FLIP.introOverlay.accentLine}
              </span>
            </h1>

            <p className="sm-flip-intro-subtitle">{SM_FLIP.introOverlay.subtitle}</p>

            {/* <div className="sm-flip-intro-tags">
              {SM_FLIP.introOverlay.tags.map((tag) => (
                <span key={tag} className="sm-flip-intro-tag">
                  {tag}
                </span>
              ))}
            </div> */}

            <p className="sm-flip-intro-side">{SM_FLIP.introOverlay.sideNote}</p>
          </div>

          <div className="sm-flip-intro-rail sm-flip-intro-rail--right">
            {SM_FLIP.introOverlay.rightRail.map((line, index) => (
              <span
                key={line}
                className={`sm-flip-intro-rail-line ${index % 2 === 0 ? "sm-flip-intro-rail-line--accent" : ""}`}
              >
                {line}
              </span>
            ))}
          </div>

          <p className="sm-flip-intro-watermark" aria-hidden>
            {SM_FLIP.introOverlay.watermark}
          </p>
        </div>
      </div>

      <section className="content content--center content--blend">
        <SideRails rails={sectionRails.center} />
        <BgImage step />
        <h2 className="content__title sm-flip-serif">
          <span>{SM_FLIP.heroTitle.lines[0]}</span>
          <br />
          <span>{SM_FLIP.heroTitle.lines[1]}</span>
        </h2>
      </section>

      <section className="content content--column">
        <SideRails rails={sectionRails.column} variant="sm-flip-side-rails--tall" />
        {SM_FLIP.columnImages.map((src, index) => (
          <BgImage
            key={`col-${index}`}
            src={src}
            step={index === 2}
            className={index === 2 ? "content__img--mid" : ""}
          />
        ))}
      </section>

      <section className="content content--lines">
        <SideRails rails={sectionRails.lines} variant="sm-flip-side-rails--compact" />
        {SM_FLIP.linesSection.map((line) => (
          <h2
            key={line.before}
            className="content__title content__title--medium sm-flip-serif"
          >
            <span>{line.before}</span>{" "}
            {line.step ? (
              <BgImage step className="inline-block" />
            ) : (
              <BgImage src={line.image} className="inline-block" />
            )}{" "}
            <span>{line.after}</span>
          </h2>
        ))}
      </section>

      <section className="content content--sides">
        <SideRails rails={sectionRails.sides} />
        <BgImage step />
        <div className="content__text">
          <p>
            <strong>{SM_FLIP.sideText.lead}</strong> {SM_FLIP.sideText.body}
          </p>
        </div>
      </section>

      <section className="content content--center content--center-tall">
        <SideRails rails={sectionRails.centerTall} variant="sm-flip-side-rails--tall" />
        <BgImage step />
        <div className="content__text content__text--large">
          <p>{SM_FLIP.centerText}</p>
        </div>
      </section>

      <section className="content content--grid">
        <SideRails rails={sectionRails.grid} variant="sm-flip-side-rails--grid" />
        {SM_FLIP.gridImages.map((src, index) => (
          <BgImage key={`grid-${index}`} src={src} step={index === 1} />
        ))}
      </section>
    </div>
  );
}
