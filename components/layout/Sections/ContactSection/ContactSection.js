import classes from "./ContactSection.module.scss";
import Section from "../../../UI/Section/Section";
import Button from "@/components/UI/Button/Button";

const ContactSection = () => {
  return (
    <Section className={classes.ContactSection}>
      <div className={classes.Contact}>
        <h2 className="header header-section">Interested?</h2>
        <Button href="/contact" buttonType="light" isLink>
          contact us
        </Button>
      </div>
    </Section>
  );
};

export default ContactSection;
