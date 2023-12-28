import Layout from "@/components/UI/Layout/Layout";
import ContactSection from "@/components/layout/Sections/ContactSection/ContactSection";
import Header from "@/components/layout/pages/feature/Header/Header";
import features from "@/data/features";
import { redirect } from "next/navigation";

const getFeature = (slug) => {
  return features.find((data) => data.slug === slug);
};

export async function generateMetadata({ params }) {
  const feature = getFeature(params.feature);

  return {
    title: `Canada Technics - ${feature.name}`,
    description: feature.description,
  };
}

export function generateStaticParams() {
  return features.map((data) => ({ slug: data.slug }));
}

const FeaturePage = ({ params }) => {
  const feature = getFeature(params.feature);

  // Redirect to homepage if not a part of the array
  if (!feature) redirect("/");

  return (
    <>
      <Header feature={feature} />
      {feature.sections.map((section, i) => (
        <Layout
          key={i}
          type={section.type}
          variant={section.variant}
          content={section.content}
        />
      ))}
      <ContactSection />
    </>
  );
};

export default FeaturePage;
