import React from "react";
import Layout from "@/components/UI/Layout/Layout";
import content from "@/data/home";

const PerformanceSection = () => {
  const { performance } = content;

  return <Layout type="double" content={performance} />;
};

export default PerformanceSection;
