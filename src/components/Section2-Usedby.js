import React from "react";

import brand1 from'../images/brands/google.png';
import brand2 from'../images/brands/microsoft.png';
import brand3 from'../images/brands/apple.png';
import brand4 from'../images/brands/facebook.png';
import brand5 from'../images/brands/twitter.png';

function Section2() {
    const fontSize1 = {
        "fontSize": "1.6rem",
      };
  return (
    <section className="py-5">
      <div className="container text-center py-5">
        <p className="mb-4" style={fontSize1}>
          Used by{" "}
          <span className="text-success">
            <strong>2400+</strong>
          </span>
           of the best companies in the world.
        </p>
        <a href="/">
          <img className="m-3" src={brand1} alt="" />
        </a>
        <a href="/">
          <img className="m-3" src={brand2} alt="" />
        </a>
        <a href="/">
          <img className="m-3" src={brand3} alt="" />
        </a>
        <a href="/">
          <img className="m-3" src={brand4} alt="" />
        </a>
        <a href="/">
          <img className="m-3" src={brand5} alt="" />
        </a>
      </div>
    </section>
  );
}

export default Section2;
