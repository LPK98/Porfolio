/* ProfilePicture — Circular portrait shown as a planet in the starfield,
   with a soft atmosphere glow and a slow orbiting moon.
   Scoped styles in ../styles/profilePicture.css
   No global style modifications */

import portraitImg from "../Assets/profile-portrait.webp";
import "../styles/profilePicture.css";

export default function ProfilePicture() {
  return (
    <section className="profile-picture__section">
      <figure className="profile-picture__wrapper">
        <div className="profile-picture__stage">
          {/* Orbit ring with a fading trail, and the moon that leads it */}
          <div className="profile-picture__orbit" aria-hidden="true" />
          <div className="profile-picture__moon-track" aria-hidden="true">
            <span className="profile-picture__moon" />
          </div>

          <div className="profile-picture__planet">
            <img
              src={portraitImg}
              alt="Lal Pushpakumara working on a laptop"
              width="720"
              height="720"
              loading="lazy"
              decoding="async"
              className="profile-picture__image"
            />
          </div>
        </div>

        <figcaption className="profile-picture__caption">
          Hi, I'm Lal Pushpakumara
        </figcaption>
      </figure>
    </section>
  );
}
