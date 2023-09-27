import { FOOTER_LINKS } from "../../Constants/Constants";
import { FooterWrp, AnchorWrp } from "./Footer-styles";

const Footer = () => (
  <FooterWrp>
    <p>Created by Mire</p>
    <AnchorWrp>
      {FOOTER_LINKS.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src={icon} alt={name} />
        </a>
      ))}
    </AnchorWrp>
  </FooterWrp>
);

export default Footer;
