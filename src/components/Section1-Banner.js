import React from "react";
import product3 from'../images/products/3.jpg';
import product2 from'../images/products/2.jpg';
import product1 from'../images/products/1.jpg';

function Section1() {
    const imagesStyle = (position1, position2) => ({
        "position": "relative",
        "flex": "0 0 45%",
        "transform": `translate3d(${position1}, ${position2}, 0)`,
    });

    const imagesContainer = {"display": "flex","flexWrap": "wrap","justifyContent": "flex-end",};
  return (
    <header className="bg-dark">
      <div className="container pt-4 pt-xl-5">
        <div className="row pt-5">
          <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
            <div className="text-center">
              <p className="fw-bold text-success mb-2">Voted #1 Worldwide</p>
              <h1 className="fw-bold">
                The best solution for you and your customers
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
