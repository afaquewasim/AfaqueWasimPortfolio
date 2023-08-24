// App.js
import React from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Projects from './Project';
import Contact from './Contact';
import Footer from './Footer'

function Home() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
