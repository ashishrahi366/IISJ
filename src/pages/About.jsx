import React from "react";
import AboutHero from "../component/ui/about-us/AboutHero";
import AboutusPrimary from "../component/ui/about-us/AboutusPrimary";
import AboutusAward from "../component/ui/about-us/AboutusAward";
import MSCAboutPreview from "../component/ui/about-us/MSCAboutPreview";
import AvarnaPreview from "../component/ui/about-us/AvarnaPreview";
import IISJPreview from "../component/ui/about-us/IISJPreview";
import OurStorySection from "../component/ui/about-us/OurStorySection";
import FounderSpotlightSection from "../component/ui/about-us/FounderSpotlightSection";
import VideoSection from "../component/ui/about-us/VideoSection";
import MissionVisionValuesSection from "../component/ui/about-us/MissionVisionValuesSection";
import WhatWeDoSection from "../component/ui/about-us/WhatWeDoSection";
import GalleryPreviewSection from "../component/ui/about-us/GalleryPreviewSection";
import VolunteerSupportCTA from "../component/ui/about-us/VolunteerSupportCTA";

const About = () => {
  return (
    <div>
      <OurStorySection />
      <MissionVisionValuesSection />
      <WhatWeDoSection />
      <AboutusPrimary />
      <AboutHero />
      <MSCAboutPreview />
      <AvarnaPreview />
      <IISJPreview />
      <AboutusAward />
      <FounderSpotlightSection />
      <VideoSection />
      <GalleryPreviewSection />
      <VolunteerSupportCTA />
    </div>
  );
};

export default About;
