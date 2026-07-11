import { SM_ZOOM } from "../socialMediaData";
import "../social-media-zoom.css";

export default function SmZoomReveal() {
  return (
    <div className="sm-zoom-wrapper">
      <div className="sm-zoom-content">
        <section
          className="sm-zoom-section sm-zoom-hero"
          style={{ backgroundImage: `url(${SM_ZOOM.heroBg})` }}
        />
      </div>
      <div className="sm-zoom-image-container">
        <img src={SM_ZOOM.foregroundImage} alt="image" loading="lazy" />
      </div>
    </div>
  );
}
