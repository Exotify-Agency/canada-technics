import Header from "@/components/layout/pages/home/Header/Header";
import ContactSection from "@/components/layout/Sections/ContactSection/ContactSection";
import FeaturesSection from "@/components/layout/Sections/FeaturesSection/FeaturesSection";
import PerformanceSection from "@/components/layout/Sections/PerformanceSection/PerformanceSection";
import ReliabilitySection from "@/components/layout/Sections/ReliabilitySection/ReliabilitySection";
import SecuritySection from "@/components/layout/Sections/SecuritySection/SecuritySection";

export const metadata = {
  title: "Canada Technics - Home",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <FeaturesSection />
      <SecuritySection />
      <ReliabilitySection />
      <PerformanceSection />
      <ContactSection />
    </>
  );
}
