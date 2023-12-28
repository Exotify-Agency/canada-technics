import { join, toCap } from "@/utils/helpers";
import classes from "./Button.module.scss";
import Link from "next/link";

const Button = ({
  className,
  children,
  buttonType,
  isLink,
  isHashLink,
  isActive,
  isDisabled,
  ...otherProps
}) => {
  const props = {
    className: join(
      classes.Button,
      buttonType ? classes[`Button${toCap(buttonType)}`] : null,
      isActive ? classes.active : null,
      isDisabled ? classes.disabled : null,
      className
    ),
    ...otherProps,
  };

  if (isLink || isHashLink) {
    return (
      <Link
        replace={isHashLink ? true : otherProps.replace}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button disabled={isDisabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
