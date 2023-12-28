import { Inter } from "next/font/google";
import "@/sass/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Canada Technics",
  description: "All you technical and digital needs in one place!",
  icons: {
    icon: "/assets/logo-1.svg",
    apple: "/assets/logo-1.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
