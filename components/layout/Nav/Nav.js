"use client";

import Button from "@/components/UI/Button/Button";
import classes from "./Nav.module.scss";
import Image from "next/image";

import { useContext } from "react";
import { NavContext } from "@/store/navContext";
import { join } from "@/utils/helpers";

const Nav = () => {
  const { isActive } = useContext(NavContext);

  return (
    <nav className={join(classes.Nav, isActive ? classes.active : null)}>
      <div className={classes.NavContainer}>
        <div className={classes.NavLogo}>
          <Image
            src={`/assets/logo-${isActive ? 1 : 2}.svg`}
            alt="canada technics logo"
            style={{ objectFit: "contain" }}
            fill
          />
        </div>
        <ul className={classes.NavList}>
          <li className={classes.NavListItem}>
            <Button href="/" buttonType="nav" isLink isActive={isActive}>
              Home
            </Button>
          </li>
          <li className={classes.NavListItem}>
            <Button href="/contact" buttonType="nav" isLink isActive={isActive}>
              Contact
            </Button>
          </li>
          <li className={classes.NavListItem}>
            <Button
              href="/#section-features"
              buttonType="nav"
              isHashLink
              isActive={isActive}
            >
              Features
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
