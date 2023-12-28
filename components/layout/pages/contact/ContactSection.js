"use client";

import classes from "./ContactSection.module.scss";
import { useRouter } from "next/navigation";
import contacts from "@/data/contacts";

import Section from "@/components/UI/Section/Section";
import Button from "@/components/UI/Button/Button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

const ContactSection = () => {
  const router = useRouter();

  return (
    <Section className={classes.ContactSection}>
      <div className={classes.ContactSectionColumn}>
        <header className={classes.Header}>
          <Image
            src="/assets/pages/contact/header.jpg"
            style={{ objectFit: "cover" }}
            alt="handshake"
            fill
          />
          <span className={classes.HeaderTint} />
          <div className={classes.HeaderTitlebar}>
            <Button buttonType="circleLight" onClick={() => router.back()}>
              <ArrowLeft />
            </Button>
            <h1 className="header header-section">Contact page</h1>
          </div>
        </header>
      </div>
      <div className={classes.ContactSectionColumn}>
        <div className={classes.Contacts}>
          <ul className={classes.ContactsList}>
            {contacts.map((contact) => (
              <li key={contact.type} className={classes.ContactsListItem}>
                <div className={classes.Contact}>
                  <div className={classes.ContactIcon}>{contact.icon}</div>
                  <div className={classes.ContactContent}>
                    <div className={classes.Titlebar}>
                      <p className="subtitle">{contact.subtitle}</p>
                      <h2 className="header">{contact.title}</h2>
                    </div>
                    <p className="paragraph">{contact.text}</p>
                    <Button
                      href={`tel:${contact.value}`}
                      buttonType="link"
                      aria-label={`Call ${contact.value}`}
                      isLink
                    >
                      {contact.value}
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
