import React from "react";
import Layout from "@/components/UI/Layout/Layout";
import content from "@/data/home";

const ReliabilitySection = () => {
  const { reliability } = content;

  return <Layout type="gallery" content={reliability} />;
};

export default ReliabilitySection;
