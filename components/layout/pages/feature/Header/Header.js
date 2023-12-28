import HeaderContainer from "@/components/UI/HeaderContainer/HeaderContainer";
import classes from "./Header.module.scss";
import { join } from "@/utils/helpers";
import Image from "next/image";

const Header = ({ feature }) => {
  return (
    <HeaderContainer className={classes.Header}>
      <Image
        src={`/assets/pages/features/headers/${feature.slug}.jpg`}
        alt={`Image of ${feature.name}`}
        style={{ objectFit: "cover" }}
        loading="eager"
        priority
        fill
      />
      <span className={classes.HeaderTint} />
      <h1 className={join("header", "header-page", classes.HeaderTitle)}>
        {feature.name}
      </h1>
    </HeaderContainer>
  );
};

export default Header;
