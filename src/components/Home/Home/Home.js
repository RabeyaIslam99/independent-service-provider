import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Header from '../../Shared/Header/Header'
import Expert from '../Expert/Expert';
const Home = () => {
    return (
        <div>
             <Header></Header>
             <Banner></Banner>
            <Services></Services>
            <div style={{marginTop:'100px' , marginBottom:'50px'}}><h1>Our Best Photographer</h1></div>
            <Expert></Expert>
            <Footer></Footer>
        </div>
    );
};

export default Home;