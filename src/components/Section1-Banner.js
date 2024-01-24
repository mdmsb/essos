import React from "react";
import product3 from'../images/ground3.jpeg';
import product2 from'../images/ground2.jpeg';
import product1 from'../images/ground1.jpg';

function Section1() {
    const imagesStyle = (position1, position2) => ({
        "position": "relative",
        "flex": "0 0 45%",
        "transform": `translate3d(${position1}, ${position2}, 0)`,
    });

    const imagesContainer = {"display": "flex","flexWrap": "wrap","justifyContent": "flex-end",};
  return (
    <header className="bg-dark" id="Section1">
      <div className="container pt-4 pt-xl-5">
        <div className="row pt-5">
          <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
            <div className="text-center">
              <p className="fw-bold text-success mb-2">Welcome to ESSOS Cricket and Football Ground</p>
              <h1 className="fw-bold">
                Experience Unrivaled Sporting Excellence
              </h1>
            </div>
          </div>
          <div className="col-12 col-lg-10 mx-auto">
            <div
              className="position-relative"
              style={imagesContainer}
            >
              <div style={imagesStyle("-15%", "35%")}>
                <img
                  className="img-fluid"
                  data-bss-parallax
                  data-bss-parallax-speed="0.8"
                  src={product3}
                  alt=""
                />
              </div>
              <div style={imagesStyle("-5%", "20%")}>
                <img
                  className="img-fluid"
                  data-bss-parallax
                  data-bss-parallax-speed="0.4"
                  src={product2}
                  alt=""
                />
              </div>
              <div style={imagesStyle("0", "0%")}>
                <img
                  className="img-fluid"
                  data-bss-parallax
                  data-bss-parallax-speed="0.25"
                  src={product1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Section1;
