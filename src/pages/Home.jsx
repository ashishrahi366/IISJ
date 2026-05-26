import React from 'react';
import HeroCarousel from '../component/ui/HeroCarousel';
import HeroSection from '../component/ui/HeroSection';
import ServicesSection from '../component/ui/ServicesSection';
import MSCOverview from '../component/ui/MSCOverview';
import DonateSection from '../component/ui/DonateSection';
import DRBRAAni from '../component/ui/DRBRAAni';
import StatsSection from '../component/ui/StatsSection';
import LeaderSection from '../component/ui/LeaderSection';
import VideoSection from '../component/ui/VideoSection';
import BlogSection from '../component/ui/BlogSection';
import HomeRecentNews from '../component/ui/HomeRecentNews';
import HomeGallery from '../component/ui/HomeGallery';
import HomeQuickAccess from '../component/ui/HomeQuickAccess';
import MediaCoverageSection from '../component/ui/MediaCoverageSection';
import HomeHeroSection from '../component/ui/HomeHeroSection';
import MartinLutherKingQuote from '../component/ui/MartinLutherKingQuote';

const Home = () => {
    return (
        <div>
            <HomeHeroSection/>
            <HeroCarousel/>
            <MSCOverview/>
            <HomeQuickAccess/>
            <HeroSection/>  
            <MediaCoverageSection/>
            <ServicesSection/>
            <DRBRAAni/>
            <StatsSection/>
            <DonateSection/>
            <LeaderSection/>
            <VideoSection/>
            <HomeRecentNews/>
            <BlogSection/>
            <MartinLutherKingQuote/>
            <HomeGallery/>
        </div>
    );
};

export default Home;