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

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <HeroSection/>
            <ServicesSection/>
            <StatsSection/>
            <DRBRAAni/>
            <MSCOverview/>
            <DonateSection/>
            <LeaderSection/>
            <VideoSection/>
            <BlogSection/>
        </div>
    );
};

export default Home;