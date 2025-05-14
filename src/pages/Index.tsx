
import { useState } from "react";
import Hero from "@/components/home/Hero";
import ValueTiles from "@/components/home/ValueTiles";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import TechLogos from "@/components/home/TechLogos";
import Newsletter from "@/components/home/Newsletter";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ValueTiles />
      <HowItWorks />
      <Testimonials />
      <TechLogos />
      <Newsletter />
    </Layout>
  );
};

export default Index;
