import React from 'react';
import HeroCarousel from '../component/ui/HeroCarousel';
import HeroSection from '../component/ui/HeroSection';
import ServicesSection from '../component/ui/ServicesSection';
import MSCOverview from '../component/ui/MSCOverview';
import DonateSection from '../component/ui/DonateSection';
import DRBRAAni from '../component/ui/DRBRAAni';

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <HeroSection/>
            <ServicesSection/>
            <DRBRAAni/>
            <MSCOverview/>
            <DonateSection/>
        </div>
    );
};

export default Home;