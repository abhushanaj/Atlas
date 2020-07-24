import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer u-container">
        <p className="footer__line">
          Made with{" "}
          <span role="img" aria-label="Heart Emoji">
            ❤️
          </span>
          by{" "}
          <a
            href="https://github.com/abhu-A-J/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            abhu-A-J
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
