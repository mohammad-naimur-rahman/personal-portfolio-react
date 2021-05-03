import React, { useEffect } from 'react';
import Blog from './Blog';
import Footer from './Footer';
import Header from './Header';
import MyWorks from './MyWorks';
import SayHello from './SayHello';
import Services from './Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';


const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 400, offset: 100 });
    }, [])

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Header />
            <Services />
            <MyWorks />
            <Blog />
            <SayHello />
            <Footer />
        </motion.main>
    );
};

export default Home;