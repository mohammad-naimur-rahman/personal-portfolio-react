import {
  faCodepen,
  faFacebook,
  faGithub,
  faInstagramSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const footerLinks = [
  {
    id: 1,
    icon: faFacebook,
    link: "https://www.facebook.com/yourNaimur/",
  },
  {
    id: 2,
    icon: faInstagramSquare,
    link: "https://www.instagram.com/your_naimur/",
  },
  {
    id: 3,
    icon: faTwitter,
    link: "https://twitter.com/your_naimur/",
  },
  {
    id: 4,
    icon: faGithub,
    link: "https://github.com/mohammad-naimur-rahman/",
  },
  {
    id: 5,
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/mohammad-naimur-rahman/",
  },
  {
    id: 6,
    icon: faCodepen,
    link: "https://codepen.io/naimur-rahman-fullstack",
  },
];

const Footer = () => {
  return (
    <footer className="p-2 p-md-5 text-center">
      <div>
        {footerLinks.map((link, i) => (
          <a
            key={i}
            href={link.link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--color-primary)",
              fontSize: "24px",
              display: "inline-block",
              padding: "10px 10px 20px 10px",
            }}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
      <p className="secondary-color-text">
        All right reserved &copy; <cite>Naimur Rahman</cite> - {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
