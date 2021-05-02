import React from 'react';
import Blog from './Blog';
import Footer from './Footer';
import Header from './Header';
import MyWorks from './MyWorks';
import SayHello from './SayHello';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <MyWorks />
            <Blog />
            <SayHello />
            <Footer />
        </div>
    );
};

export default Home;