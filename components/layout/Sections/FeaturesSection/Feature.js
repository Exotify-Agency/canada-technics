import { join } from "@/utils/helpers";
import classes from "./FeaturesSection.module.scss";
import Link from "next/link";

const Feature = ({ data }) => {
  return (
    <article className={classes.Feature}>
      <Link href={data.href} className={classes.FeatureContainer}>
        <div className={classes.FeatureIcon}>{data.icon}</div>
        <div className={classes.FeatureContent}>
          <h3 className={join("header", classes.FeatureName)}>{data.name}</h3>
          <p className="paragraph">{data.description}</p>
        </div>
      </Link>
    </article>
  );
};

export default Feature;
