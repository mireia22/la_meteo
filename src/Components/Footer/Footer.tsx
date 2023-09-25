import { FooterWrp, AncoreWrp } from "./Footer-styles";
const Footer = () => {
  return (
    <FooterWrp>
      <p>Created by Mire</p>
      <AncoreWrp>
        <a
          href="https://github.com/mireia22"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src="/assets/icons/github.png" alt="github" loading="lazy" />
        </a>
        <a
          href="https://www.linkedin.com/in/mireia-garcia-ferrer-40381b255/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img src="/assets/icons/linkedin.png" alt="linkedin" loading="lazy" />
        </a>
      </AncoreWrp>
    </FooterWrp>
  );
};

export default Footer;
