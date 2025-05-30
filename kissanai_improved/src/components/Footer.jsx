import "../assets/styles.css";
import copyrightIcon from "/images/5img.png";

const Footer = () => {
  return (
    <div className="fourthsection">
      <div className="left">
        <a className="ubuntu-medium" href="https://kissan.ai/chat">
          Chat
        </a>
        <a className="ubuntu-medium" href="https://kissan.ai/news">
          News
        </a>
        <a className="ubuntu-medium" href="https://kissan.ai/about">
          About
        </a>
      </div>
      <div className="right">
        <div className="rightimg">
          <img src={copyrightIcon} alt="copyright symbol" />
        </div>
        <div className="righttext">
          <span className="ubuntu-medium">KissanAI, 2025. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
