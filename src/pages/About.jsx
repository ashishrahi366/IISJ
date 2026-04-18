import React from "react";
import AboutHero from "../component/ui/about-us/AboutHero";
import AboutusPrimary from "../component/ui/about-us/AboutusPrimary";
import AboutusAward from "../component/ui/about-us/AboutusAward";
import MSCAboutPreview from "../component/ui/about-us/MSCAboutPreview";
import AvarnaPreview from "../component/ui/about-us/AvarnaPreview";
import IISJPreview from "../component/ui/about-us/IISJPreview";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutusPrimary />
      <AboutusAward />
      <MSCAboutPreview />
      <AvarnaPreview />
      <IISJPreview />
    </div>
  );
};

export default About;
