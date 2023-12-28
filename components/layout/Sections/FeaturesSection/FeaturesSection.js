import classes from "./FeaturesSection.module.scss";
import Section from "../../../UI/Section/Section";

import features from "@/data/features";
import Feature from "./Feature";

const FeaturesSection = () => {
  return (
    <Section className={classes.FeaturesSection} name="features">
      <div className={classes.FeaturesSectionContainer}>
        <div className={classes.FeaturesSectionColumn}>
          <div className={classes.Titlebar}>
            <p className="subtitle">features</p>
            <h2 className="header header-section">
              gear your business with the best tools
            </h2>
          </div>
        </div>
        <div className={classes.FeaturesSectionColumn}>
          <div className={classes.Features}>
            {features.map((data) => (
              <Feature key={data.name} data={data} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturesSection;
