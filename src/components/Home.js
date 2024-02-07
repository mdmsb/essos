import React from "react";

import Section1 from './Section1-Banner.js';
import Section2 from './Section2-Usedby.js';
import Section3 from './Section3-Services.js';
import Section4 from './Section4-Cards.js';
import Section5 from './Section5-Test.js';
import Section6 from './Section6-Contact.js';
import Section7 from './Section7-Subscribe.js';
import Header from "./Header";
import Footer from "./Footer";


function Home() {
  return (
    <div className="content">
      {/* <p>{APPLICATION_CONSTANTS.AboutUs}</p> */}
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
    </div>
  );
}

export default Home;
