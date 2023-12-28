import React from "react";
import Layout from "@/components/UI/Layout/Layout";

import content from "@/data/home";

const SecuritySection = () => {
  const { security } = content;

  return <Layout type="double" variant="reversed" content={security} />;
};

export default SecuritySection;
