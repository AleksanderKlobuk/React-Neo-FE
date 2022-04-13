import React from 'react';
import '../Styles/App.css';
/*import Cards from '../components/Cards/Cards';*/
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Footer/Footer';

function NonLoggedHome() {
  return (
    <>
      <HeroSection />
      <Footer />
    </>
  );
}

export default NonLoggedHome;
