import { SM_WORK } from "../socialMediaData";
import "../social-media-work.css";

function getItemStrip(item) {
  if (item.strip?.length) return item.strip;
  return (item.videos ?? []).map((video) => ({ type: "video", ...video }));
}

function StripMedia({ media }) {
  if (media.type === "image") {
    return (
      <img
        src={media.src}
        alt=""
        className="work_strip-image"
        loading="lazy"
      />
    );
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={media.poster}
      style={
        media.poster
          ? { backgroundImage: `url("${media.poster}")` }
          : undefined
      }
    >
      <source src={media.src} type="video/mp4" />
    </video>
  );
}
function TitleLine({ line }) {
  return (
    <div className="line-wrapper">
      <div className="line" data-line>
        {line.accent ? (
          <>
            <span className={line.accentClass}>{line.accent}</span>
            {line.text.slice(line.accent.length)}
          </>
        ) : (
          line.text
        )}
      </div>
    </div>
  );
}

function WorkItem({ item }) {
  const strip = getItemStrip(item);

  return (    <div className="work_item" data-work="item">
      <div className="work_image-wrapper">
        <img
          src={item.image}
          alt=""
          className="work_image"
          data-work="image"
          loading="lazy"
        />
      </div>

      <div className="work_item-wrapper">
        <div className="work_video-wrapper">
          {strip.map((media, mediaIndex) => (
            <div
              key={`${item.id}-strip-${mediaIndex}`}
              className="work_video-container"
              data-work="video"
            >
              <div className="work_video">
                <StripMedia media={media} />
              </div>
            </div>
          ))}
        </div>
        <div className="work_text">
          <div className="work_text-title">
            {item.titleLines.map((line) => (
              <TitleLine key={`${item.id}-${line.text}`} line={line} />
            ))}
          </div>

          <div className="work-text-subtitle">
            {item.subtitles.map((subtitle) => (
              <div key={`${item.id}-${subtitle}`} className="line-wrapper">
                <div className="line" data-line>
                  {subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="work_item-overlay" data-work="item-overlay" />
    </div>
  );
}

export default function SmWorkScroll() {
  const { hero, footer, items } = SM_WORK;

  return (
    <div className="sm-work">
      <section className="hero_section sticky">
        <div className="hero_container">
          <div className="footer_image-wrapper">
            <img
              src={hero.image}
              alt=""
              className="hero_image"
              loading="lazy"
            />
          </div>
          <div className="hero_text">
            <div>
              {hero.line1}
              <br />
              <span className="color-0">{hero.accent}</span>
              {hero.line2}
            </div>
          </div>
        </div>
      </section>

      <section className="work_section" data-work="section">
        <div className="work_container">
          {items.map((item) => (
            <WorkItem key={item.id} item={item} />
          ))}
        </div>

        <div className="ghost_work-container" aria-hidden="true">
          {items.map((item) => (
            <div key={item.id} className="ghost_work-item" />
          ))}
        </div>
      </section>

      <section className="footer_section">
        <div className="footer_container">
          <div className="footer_image-wrapper">
            <img
              src={footer.image}
              alt=""
              className="footer_image"
              loading="lazy"
            />
          </div>
          <div className="footer_text">
            <div>
              {footer.line1}
              <br />
              <span className="color-0">{footer.accent}</span>
              {footer.line2}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
