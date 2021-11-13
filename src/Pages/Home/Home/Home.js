import React from 'react';
import AboutUs from '../../../Aboutus/AboutUs';
import Footer from '../../../Footer/Footer';
import Banner from '../Banner/Banner';
import Reviews from '../Review/Reviews';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
          <Reviews></Reviews>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;