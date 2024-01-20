import React from "react";

import av2 from'../images/team/avatar2.jpg';
import av4 from'../images/team/avatar4.jpg';
import av5 from'../images/team/avatar5.jpg';

function Section5() {
  return (
    <section className="py-5 mt-5">
    <div className="container py-5">
        <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <p className="fw-bold text-success mb-2">Testimonials</p>
                <h2 className="fw-bold"><strong>What People Say About us</strong></h2>
                <p className="text-muted">No matter the project, our team can handle it. </p>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
            <div className="col mb-4">
                <div className="d-flex flex-column align-items-center align-items-sm-start">
                    <p className="bg-dark border rounded border-dark p-4">Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit className dapibus, aliquet morbi.</p>
                    <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" alt="" src={av2} />
                        <div>
                            <p className="fw-bold text-primary mb-0">John Smith</p>
                            <p className="text-muted mb-0">Erat netus</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="d-flex flex-column align-items-center align-items-sm-start">
                    <p className="bg-dark border rounded border-dark p-4">Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit className dapibus, aliquet morbi.</p>
                    <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" alt="" src={av4} />
                        <div>
                            <p className="fw-bold text-primary mb-0">John Smith</p>
                            <p className="text-muted mb-0">Erat netus</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="d-flex flex-column align-items-center align-items-sm-start">
                    <p className="bg-dark border rounded border-dark p-4">Nisi sit justo faucibus nec ornare amet, tortor torquent. Blandit className dapibus, aliquet morbi.</p>
                    <div className="d-flex"><img className="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" alt="" src={av5} />
                        <div>
                            <p className="fw-bold text-primary mb-0">John Smith</p>
                            <p className="text-muted mb-0">Erat netus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default Section5;
