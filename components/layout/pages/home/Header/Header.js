"use client";

import Image from "next/image";
import classes from "./Header.module.scss";
import { join } from "@/utils/helpers";
import HeaderContainer from "@/components/UI/HeaderContainer/HeaderContainer";

const Header = () => {
  return (
    <HeaderContainer className={classes.Header}>
      <Image
        src="/assets/pages/home/header.jpg"
        alt="Header Image"
        style={{ objectFit: "cover" }}
        priority
        loading="eager"
        fill
      />
      <span className={classes.HeaderTint} />
      <h1 className={join("header", "header-page", classes.HeaderTitle)}>
        Canada Technics
      </h1>
    </HeaderContainer>
  );
};

export default Header;
