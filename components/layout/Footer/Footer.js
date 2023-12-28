import { join } from "@/utils/helpers";
import classes from "./Footer.module.scss";
import Image from "next/image";
import Button from "@/components/UI/Button/Button";
import features from "@/data/features";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContainer}>
        <div className={classes.FooterLogo}>
          <Image
            src="/assets/logo-1.svg"
            alt="canada technics logo"
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
        <ul className={classes.FooterMenu}>
          <li className={classes.FooterMenuItem}>
            <ul className={classes.FooterList}>
              <li className={classes.FooterListItem}>
                <h2 className={join("header", classes.FooterMenuTitle)}>
                  Navigation
                </h2>
              </li>
              <li className={classes.FooterListItem}>
                <Button buttonType="text" href="/" isLink>
                  Home
                </Button>
              </li>
              <li className={classes.FooterListItem}>
                <Button buttonType="text" href="/#section-features" isLink>
                  Features
                </Button>
              </li>
              <li className={classes.FooterListItem}>
                <Button buttonType="text" href="/contact" isLink>
                  Contact
                </Button>
              </li>
            </ul>
          </li>
          <li className={classes.FooterMenuItem}>
            <ul
              className={join(classes.FooterList, classes.FooterListFeatures)}
            >
              <li className={classes.FooterListItem}>
                <h2 className={join("header", classes.FooterMenuTitle)}>
                  Features
                </h2>
              </li>
              {features.map((data) => (
                <li key={data.slug} className={classes.FooterListItem}>
                  <Button buttonType="text" href={data.href} isLink>
                    {data.name}
                  </Button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <div className={classes.FooterAttributions}>
          Website developed by{" "}
          <Button href="https://exotify.ca/" buttonType="link" isLink>
            exotify.ca
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
