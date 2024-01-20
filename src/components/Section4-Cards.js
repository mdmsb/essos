import React from "react";

function Section4() {
    
    const maxWidth = {
        'maxWidth': '900px',
       };
  return (
    <section>
      <div className="container py-5">
        <div className="mx-auto" style={maxWidth}>
          <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">
            <div className="col mb-4">
              <div className="card bg-primary-light">
                <div className="card-body text-center px-4 py-5 px-md-5">
                  <p className="fw-bold text-primary card-text mb-2">
                    Fully Managed
                  </p>
                  <h5 className="fw-bold card-title mb-3">
                    Lorem ipsum dolor sit nullam et quis ad cras porttitor
                  </h5>
                  <button className="btn btn-primary btn-sm" type="button">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card bg-secondary-light">
                <div className="card-body text-center px-4 py-5 px-md-5">
                  <p className="fw-bold text-secondary card-text mb-2">
                    Fully Managed
                  </p>
                  <h5 className="fw-bold card-title mb-3">
                    Lorem ipsum dolor sit nullam et quis ad cras porttitor
                  </h5>
                  <button className="btn btn-secondary btn-sm" type="button">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card bg-info-light">
                <div className="card-body text-center px-4 py-5 px-md-5">
                  <p className="fw-bold text-info card-text mb-2">
                    Fully Managed
                  </p>
                  <h5 className="fw-bold card-title mb-3">
                    Lorem ipsum dolor sit nullam et quis ad cras porttitor
                  </h5>
                  <button className="btn btn-info btn-sm" type="button">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
