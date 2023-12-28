import classes from "./Section.module.scss";

const Section = ({ name, children, className, ...otherProps }) => {
  return (
    <section
      className={[classes.Section, className].join(" ")}
      id={name ? `section-${name}` : undefined}
      {...otherProps}
    >
      {children}
    </section>
  );
};

export default Section;
