import Button from "@/components/UI/Button/Button";
import classes from "./FieldsSection.module.scss";
import Image from "next/image";

const FieldCard = ({ name, slug, image }) => {
  return (
    <article className={classes.FieldCard}>
      <h3 className="header header-card">{name}</h3>
      <div className={classes.FieldCardImage}>
        <Image
          src={image}
          alt={`${name} field`}
          style={{ objectFit: "contain" }}
          fill
        />
      </div>
      <Button className={classes.FieldCardLink} href={`/fields/${slug}`} isLink>
        learn more
      </Button>
    </article>
  );
};

export default FieldCard;
