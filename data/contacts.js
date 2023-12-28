import { Mail, Phone } from "lucide-react";

const contacts = [
  {
    type: "email",
    subtitle: "email address",
    title: "Send us a letter",
    text: "Response within 2-3 business days.",
    icon: <Mail />,
    value: "support@canadatechnics.ca",
  },
  {
    type: "phone",
    subtitle: "phone number",
    title: "Give us a call",
    text: "Available 9:00am to 5:00pm.",
    icon: <Phone />,
    value: "647-282-5808",
  },
];

export default contacts;
