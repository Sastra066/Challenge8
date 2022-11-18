import * as React from 'react';
import Nav from '../navbar';
import MainSection from '../MainSection';
import OurServiceSection from '../OurServiceSection';
import WhyUsSection from '../WhyUsSection';
import TestimonialSection from '../TestimonialSection';
import GettingStartSection from '../GettingStartSection';
import FAQSection from '../FAQSection';
import Footer from '../Footer';

function LandingPage() {
  return (
    <div>
      <Nav />
      <MainSection/>
      <OurServiceSection/>
      <WhyUsSection/>
      <TestimonialSection/>
      <GettingStartSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}

export default LandingPage;