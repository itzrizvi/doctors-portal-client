import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointMentBanner from '../AppointMentBanner/AppointMentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AppointMentBanner></AppointMentBanner>
        </>
    );
};

export default Home;