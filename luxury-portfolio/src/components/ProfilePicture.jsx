/* ProfilePicture — Self-contained circular avatar with glass frame
   Scoped styles in ../styles/profilePicture.css
   No global style modifications */

import profileImg from "../Assets/2a.png";
import "../styles/profilePicture.css";

export default function ProfilePicture() {
  return (
    /* Glass-framed profile picture section */
    <section className="profile-picture__section">
      <div className="profile-picture__wrapper">
        {/* Circular glass frame with hover glow */}
        <div className="profile-picture__frame">
          <img
            src={profileImg}
            alt="Profile Picture"
            className="profile-picture__image"
          />
        </div>
        {/* Tooltip revealed on hover */}
        <span className="profile-picture__tooltip">
          Hi, I'm Lal Pushpakumara
        </span>
      </div>
    </section>
  );
}
