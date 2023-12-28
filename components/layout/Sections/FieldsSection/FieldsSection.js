import classes from "./FieldsSection.module.scss";
import Section from "../../../UI/Section/Section";
import { fields } from "@/data/fields";
import FieldCard from "./FieldCard";

const FieldsSection = () => {
  // Group fields into and array of arrays of 3 fields
  let fieldRows = [];
  for (let i = 0; i < fields.length; i++) {
    if (i / 3 === Math.floor(i / 3)) fieldRows.push([fields[i]]);
    else fieldRows[Math.floor(i / 3)].push(fields[i]);
  }

  return (
    <Section className={classes.FieldsSection}>
      <h2 className="header header-section">What we offer</h2>
      <div className={classes.Fields}>
        {fieldRows.map((row, i) => (
          <div key={i} className={classes.FieldsRow}>
            {row.map((field) => (
              <FieldCard key={field.slug} {...field} />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FieldsSection;
