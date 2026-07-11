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

function SectionSideFill({ leftImage, rightImage }) {
  if (!leftImage && !rightImage) return null;

  return (
    <div className="sm-flip-side-fill" aria-hidden>
      {leftImage && (
        <div
          className="sm-flip-side-fill__panel sm-flip-side-fill__panel--left"
          style={{ backgroundImage: `url(${leftImage})` }}
        />
      )}
      {rightImage && (
        <div
          className="sm-flip-side-fill__panel sm-flip-side-fill__panel--right"
          style={{ backgroundImage: `url(${rightImage})` }}
        />
      )}
    </div>
  );
}

function SectionEyebrow({ label }) {
  if (!label) return null;

  return <p className="sm-flip-section-eyebrow">{label}</p>;
}

function SectionBackdrop({ image, tint }) {
  if (!image) return null;

  return (
    <div className="sm-flip-section-bg" aria-hidden>
      <div
        className="sm-flip-section-bg__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      {tint && (
        <div
          className="sm-flip-section-bg__tint"
          style={{ background: tint }}
        />
      )}
    </div>
  );
}

function ColumnCard({ item, index }) {
  const src = typeof item === "string" ? item : item.src;
  const label = typeof item === "object" ? item.label : null;
  const isStep = index === 2;

  return (
    <div className="sm-flip-column-card">
      <BgImage
        src={src}
        step={isStep}
        className={isStep ? "content__img--mid" : ""}
      />
      {label && <span className="sm-flip-column-label">{label}</span>}
    </div>
  );
}

function PhilosophyCopy({ section }) {
  if (!section) return null;

  return (
    <div className="sm-flip-philosophy-copy">
      <h2 className="sm-flip-philosophy-headline">
        <span className="sm-flip-philosophy-headline-line">{section.headline}</span>
        <span className="sm-flip-philosophy-headline-line sm-flip-philosophy-headline-accent">
          {section.accent}
        </span>
      </h2>

      <p className="sm-flip-philosophy-body">
        {section.body.map((part, index) => (
          <span
            key={`${part.text}-${index}`}
            className={part.accent ? "sm-flip-philosophy-accent" : undefined}
          >
            {part.text}
          </span>
        ))}
      </p>

      {section.tags?.length > 0 && (
        <ul className="sm-flip-philosophy-tags">
          {section.tags.map((tag, index) => (
            <li
              key={tag}
              className={
                index % 2 === 0
                  ? "sm-flip-philosophy-tag sm-flip-philosophy-tag--dark"
                  : "sm-flip-philosophy-tag sm-flip-philosophy-tag--accent"
              }
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function CraftMarqueeRow({ items, direction = "forward", speed = 38, placement = "" }) {
  if (!items?.length) return null;

  const doubled = [...items, ...items];

  return (
    <div
      className={`sm-flip-craft-marquee ${placement ? `sm-flip-craft-marquee--${placement}` : ""}`.trim()}
      aria-hidden
    >
      <div
        className="sm-flip-craft-marquee__track"
        data-direction={direction}
        style={{ "--sm-marquee-duration": `${speed}s` }}
      >
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`sm-flip-craft-marquee__item ${index % 3 === 0 ? "sm-flip-craft-marquee__item--accent" : ""}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ColumnTypeGrid({ rails, section }) {
  const { left = [], right = [] } = rails;
  if (!left.length && !right.length && !section) return null;

  return (
    <div className="sm-flip-column-type">
      <div className="sm-flip-column-type-grid">
        <div className="sm-flip-column-type-side sm-flip-column-type-side--left">
          {left.map((word, index) => (
            <span
              key={word}
              className={`sm-flip-column-type-word ${index % 2 === 1 ? "sm-flip-column-type-word--accent" : ""}`}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="sm-flip-column-type-center">
          <h2 className="sm-flip-column-headline">
            <span className="sm-flip-column-headline-line">
              {section.headline}
            </span>
            <span className="sm-flip-column-headline-line sm-flip-column-headline-accent">
              {section.accent}
            </span>
          </h2>
          <p className="sm-flip-column-tagline">{section.tagline}</p>
        </div>

        <div className="sm-flip-column-type-side sm-flip-column-type-side--right">
          {right.map((word, index) => (
            <span
              key={word}
              className={`sm-flip-column-type-word ${index % 2 === 1 ? "sm-flip-column-type-word--accent" : ""}`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SmFlipHero() {
  const {
    sectionRails,
    sectionFills,
    sectionEyebrows,
    columnSection,
    philosophySection,
    introOverlay,
  } = SM_FLIP;

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

          <p className="sm-flip-intro-watermark sm-flip-intro-watermark--right" aria-hidden>
            {introOverlay.watermark}
          </p>

          <p className="sm-flip-intro-watermark sm-flip-intro-watermark--left" aria-hidden>
            {introOverlay.leftWatermark}
          </p>

          <div className="sm-flip-intro-rail sm-flip-intro-rail--left">
            {introOverlay.leftRail.map((line, index) => (
              <span
                key={line}
                className={`sm-flip-intro-rail-line ${index % 2 === 1 ? "sm-flip-intro-rail-line--accent" : ""}`}
              >
                {line}
              </span>
            ))}
          </div>

          <div className="sm-flip-intro-rail sm-flip-intro-rail--right">
            {introOverlay.rightRail.map((line, index) => (
              <span
                key={line}
                className={`sm-flip-intro-rail-line ${index % 2 === 0 ? "sm-flip-intro-rail-line--accent" : ""}`}
              >
                {line}
              </span>
            ))}
          </div>

          <p className="sm-flip-intro-corner-stat" aria-hidden>
            {introOverlay.cornerStat}
          </p>

          <div className="sm-flip-intro-copy">
            <p className="sm-flip-intro-eyebrow">{introOverlay.eyebrow}</p>

            <h1 className="sm-flip-intro-title">
              <span>{introOverlay.titleLines[0]}</span>
              <span className="sm-flip-intro-title-accent">
                {introOverlay.titleLines[1]}
              </span>
              <span className="sm-flip-intro-title-line">
                {introOverlay.accentLine}
              </span>
            </h1>

            <p className="sm-flip-intro-subtitle">{introOverlay.subtitle}</p>

            <div className="sm-flip-intro-tags">
              {introOverlay.tags.map((tag) => (
                <span key={tag} className="sm-flip-intro-tag">
                  {tag}
                </span>
              ))}
            </div>

            <p className="sm-flip-intro-side">{introOverlay.sideNote}</p>
          </div>
        </div>
      </div>

      <div className="sm-flip-sticky-bg" aria-hidden>
        <div
          className="sm-flip-sticky-bg__image"
          style={{ backgroundImage: `url(${SM_FLIP.stickyBackground.image})` }}
        />
        <div
          className="sm-flip-sticky-bg__tint"
          style={{ background: SM_FLIP.stickyBackground.tint }}
        />
      </div>

      <section className="content content--center content--blend">
        <SectionSideFill {...sectionFills.center} />
        <SideRails rails={sectionRails.center} />
        <SectionEyebrow label={sectionEyebrows.center} />
        <BgImage step />
        <h2 className="content__title sm-flip-serif">
          <span>{SM_FLIP.heroTitle.lines[0]}</span>
          <br />
          <span>{SM_FLIP.heroTitle.lines[1]}</span>
        </h2>
      </section>

      <section className="content content--column">
        {/* <SectionBackdrop {...sectionBackgrounds.column} /> */}
        <SectionSideFill {...sectionFills.column} />
        <SectionEyebrow label={sectionEyebrows.column} />
        <ColumnTypeGrid
          rails={sectionRails.column}
          section={columnSection}
        />
        {SM_FLIP.columnImages.map((item, index) => (
          <ColumnCard key={`col-${index}`} item={item} index={index} />
        ))}
      </section>

      <section className="content content--lines">
        <SectionSideFill {...sectionFills.lines} />
        <SideRails rails={sectionRails.lines} variant="sm-flip-side-rails--compact" />
        <SectionEyebrow label={sectionEyebrows.lines} />
        <CraftMarqueeRow
          items={SM_FLIP.craftMarquee.top}
          direction="forward"
          speed={42}
          placement="top"
        />
        <div className="sm-flip-lines-body">
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
        </div>
        <CraftMarqueeRow
          items={SM_FLIP.craftMarquee.bottom}
          direction="reverse"
          speed={34}
          placement="bottom"
        />
      </section>

      <section className="content content--philosophy">
        <SectionSideFill {...sectionFills.sides} />
        <SectionEyebrow label={sectionEyebrows.sides} />
        <ColumnTypeGrid
          rails={sectionRails.sides}
          section={philosophySection.typeIntro}
        />
        <div className="sm-flip-philosophy-layout">
          <div className="sm-flip-philosophy-visual">
            <BgImage step />
          </div>
          <PhilosophyCopy section={philosophySection} />
        </div>
      </section>

      <section className="content content--center content--center-tall">
        <SectionSideFill {...sectionFills.centerTall} />
        <SideRails
          rails={sectionRails.centerTall}
          variant="sm-flip-side-rails--tall"
        />
        <SectionEyebrow label={sectionEyebrows.centerTall} />
        <BgImage step />
        <div className="content__text content__text--large">
          <p>{SM_FLIP.centerText}</p>
        </div>
      </section>

      <section className="content content--grid">
        <SectionSideFill {...sectionFills.grid} />
        <SideRails rails={sectionRails.grid} variant="sm-flip-side-rails--grid" />
        <SectionEyebrow label={sectionEyebrows.grid} />
        {SM_FLIP.gridImages.map((src, index) => (
          <BgImage key={`grid-${index}`} src={src} step={index === 1} />
        ))}
      </section>
    </div>
  );
}
