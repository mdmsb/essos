import React from "react";

function Section4() {
    
    const maxWidth = {
        'maxWidth': '900px',
       };
  return (
    <section id="Section4">
      <div className="container py-5">
        <div className="mx-auto" style={maxWidth}>
          <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">
            <div className="col mb-4">
              <div className="card bg-primary-light">
                <div className="card-body text-center px-4 py-5 px-md-5">
                  <p className="fw-bold text-primary card-text mb-2">
                    Upcoming Events
                  </p>
                  <h5 className="fw-bold card-title mb-3">
                  Stay in the Game: Explore our calendar of upcoming cricket and football events. Don't miss out on thrilling matches and tournaments.
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
                    Membership Plans
                  </p>
                  <h5 className="fw-bold card-title mb-3">
                    Exclusive Access: Elevate your sports experience with our membership plans. Enjoy priority bookings, discounts, and special perks.
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
                    Facility Rentals
                  </p>
                  <h5 className="fw-bold card-title mb-3">
                    Book Your Playtime: Secure your slot on our premier grounds. Explore flexible booking options for cricket nets, football pitches, and more.
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
