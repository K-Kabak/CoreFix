import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Home;
