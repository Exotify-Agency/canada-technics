import Footer from "@/components/layout/Footer/Footer";
import Nav from "@/components/layout/Nav/Nav";
import Providers from "./providers";

import { metadata as rootMetaData } from "../layout";

export const metadata = {
  title: "Canada Technics",
  description: "All you technical and digital needs in one place!",
  icons: rootMetaData.icons,
};

export default function PrimaryLayout({ children }) {
  return (
    <Providers>
      <Nav />
      <main className="main">{children}</main>
      <Footer />
    </Providers>
  );
}
