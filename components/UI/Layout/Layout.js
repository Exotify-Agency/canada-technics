import classes from "./Layout.module.scss";
import Section from "../Section/Section";
import { join } from "@/utils/helpers";
import Image from "next/image";
import Button from "../Button/Button";

const Layout = ({ type, variant, content }) => {
  // Reusable card
  const Card = ({ data }) => (
    <div
      className={join(
        classes.Card,
        variant === "filled" ? classes.filled : null
      )}
    >
      <div className={classes.CardIcon}>{data.icon}</div>
      <div className={classes.CardContent}>
        <h3 className="header">{data.title}</h3>
        <p className="paragraph">{data.summary}</p>
      </div>
    </div>
  );

  // TYPES
  if (!type || type === "double") {
    if (!content)
      content = {
        title: "[expressive title for the current topic]",
        subtitle: "[current section's topic]",
        paragraphs: ["[paragraph describing topic]"],
        image: {
          src: "/assets/database/database-1.svg",
          alt: "[text describing image]",
        },
      };

    return (
      <Section className={classes.LayoutSection}>
        <div
          className={join(
            classes.LayoutSectionContainer,
            classes.Double,
            variant === "reversed" ? classes.reversed : null
          )}
        >
          <div className={classes.DoubleColumn}>
            <div className={classes.Titlebar}>
              <p className="subtitle">{content.subtitle}</p>
              <h2 className="header header-section">{content.title}</h2>
            </div>
            {content.paragraphs.map((text, i) => (
              <p key={i} className="paragraph">
                {text}
              </p>
            ))}
          </div>
          <div className={classes.DoubleColumn}>
            <div className={classes.DoubleImage}>
              <Image
                src={content.image.src}
                alt={content.image.alt}
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
          </div>
        </div>
      </Section>
    );
  }

  if (type === "triple") {
    if (!content)
      content = {
        subtitle: "[current section's topic]",
        title: "[expressive title about the topic]",
        cards: [
          {
            title: "[title of the subtopic of this card]",
            icon: "[icon for this card]",
            summary: "[short paragraph of this card]",
          },
          {
            title: "[title of the subtopic of this card]",
            icon: "[icon for this card]",
            summary: "[short paragraph of this card]",
          },
          {
            title: "[title of the subtopic of this card]",
            icon: "[icon for this card]",
            summary: "[short paragraph of this card]",
          },
        ],
      };

    return (
      <Section className={classes.LayoutSection}>
        <div className={join(classes.LayoutSectionContainer, classes.Triple)}>
          <div className={classes.Titlebar}>
            <p className="subtitle">{content.subtitle}</p>
            <h2 className="header header-section">{content.title}</h2>
          </div>
          <div className={classes.Cards}>
            {content.cards.map((data) => (
              <Card key={data.title} data={data} />
            ))}
          </div>
        </div>
      </Section>
    );
  }

  if (type === "grid") {
    if (!content)
      content = {
        subtitle: "[section's topic]",
        title: "[expressive title that describes topic]",
        image: {
          src: "[src of main image]",
          alt: "[alt value describing image]",
        },
        cards: [
          {
            title: "[title of the subtopic of this box]",
            icon: "[icon for this box]",
            summary: "[short summary of this box]",
          },
          {
            title: "[title of the subtopic of this box]",
            icon: "[icon for this box]",
            summary: "[short summary of this box]",
          },
          {
            title: "[title of the subtopic of this box]",
            icon: "[icon for this box]",
            summary: "[short summary of this box]",
          },
          {
            title: "[title of the subtopic of this box]",
            icon: "[icon for this box]",
            summary: "[short summary of this box]",
          },
        ],
      };

    return (
      <Section className={classes.LayoutSection}>
        <div
          className={join(
            classes.LayoutSectionContainer,
            classes.Grid,
            variant === "reverse" ? classes.reversed : null
          )}
        >
          <div className={classes.Titlebar}>
            <p className="subtitle">{content.subtitle}</p>
            <h2 className="header header-section">{content.title}</h2>
          </div>
          <div className={classes.Cards}>
            {content.cards.map((data) => (
              <Card key={data.title} data={data} />
            ))}
          </div>
          <div className={classes.GridImage}>
            <Image
              src={content.image.src}
              alt={content.image.alt}
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
        </div>
      </Section>
    );
  }

  if (type === "gallery") {
    if (!content)
      content = {
        title: "[expressive title for section]",
        subtitle: "[section topic]",
        boxes: [
          {
            paragraph: "[paragraph around 3-4 lines describing the section]",
            image: {
              src: "/assets/database/database-1.svg",
              alt: "[text describing the image]",
            },
            button: {
              text: "[text inside a call to action button]",
              href: "/",
            },
          },
          {
            title: "[subtopic of the section's topic]",
            summary: "[short summary sentence of this subtopic]",
            image: {
              src: "/assets/database/database-2.svg",
              alt: "[text describing the image]",
            },
          },
          {
            title: "[another subtopic of the section's topic]",
            summary: "[short summary sentence of this subtopic]",
          },
          {
            image: {
              src: "/assets/database/database-3.svg",
              alt: "[text describing the image]",
            },
          },
        ],
      };

    return (
      <Section className={classes.LayoutSection}>
        <div className={join(classes.LayoutSectionContainer, classes.Gallery)}>
          <div className={join(classes.Box, classes.BoxLarge)}>
            <div className={classes.Titlebar}>
              <p className="subtitle">{content.subtitle}</p>
              <h2 className="header header-section">{content.title}</h2>
            </div>
            <p className="paragraph">{content.boxes[0].paragraph}</p>
            <Button href={content.boxes[0].button.href} isLink>
              {content.boxes[0].button.text}
            </Button>
            <div className={classes.Image}>
              <div className={classes.ImageContainer}>
                <Image
                  src={content.boxes[0].image.src}
                  alt={content.boxes[0].image.alt}
                  style={{ objectFit: "contain" }}
                  fill
                />
              </div>
            </div>
          </div>
          <div className={join(classes.Box, classes.BoxMedium)}>
            <h3 className={join("header", classes.BoxTitle)}>
              {content.boxes[1].title}
            </h3>
            <p className="paragraph">{content.boxes[1].summary}</p>
            <div className={classes.Image}>
              <div className={classes.ImageContainer}>
                <Image
                  src={content.boxes[1].image.src}
                  alt={content.boxes[1].image.alt}
                  style={{ objectFit: "contain" }}
                  fill
                />
              </div>
            </div>
          </div>
          <div className={join(classes.Box, classes.BoxSmall)}>
            <h3 className={join("header", classes.BoxTitle)}>
              {content.boxes[2].title}
            </h3>
            <p className="paragraph">{content.boxes[2].summary}</p>
          </div>
          <div className={join(classes.Box, classes.BoxSmall)}>
            <div className={classes.Image}>
              <Image
                src={content.boxes[3].image.src}
                alt={content.boxes[3].image.alt}
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
          </div>
        </div>
      </Section>
    );
  }

  if (type === "") {
  }
};

export default Layout;
