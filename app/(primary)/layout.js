import Footer from "@/components/layout/Footer/Footer";
import Nav from "@/components/layout/Nav/Nav";
import Providers from "./providers";

export default function PrimaryLayout({ children }) {
  return (
    <Providers>
      <Nav />
      <main className="main">{children}</main>
      <Footer />
    </Providers>
  );
}
