"use client";

import { useContext, useEffect } from "react";
import { NavContext } from "@/store/navContext";
import { useInView } from "react-intersection-observer";

const HeaderContainer = ({ children, ...otherProps }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setIsActive } = useContext(NavContext);

  useEffect(() => {
    setIsActive(!inView);
  }, [inView, setIsActive]);

  return (
    <header {...otherProps} ref={ref}>
      {children}
    </header>
  );
};

export default HeaderContainer;
