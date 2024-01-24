import React from "react";


function Section7() {
  return (
    <section className="py-5" id="Section7">
    <div className="container">
        <div className="bg-dark border rounded border-dark d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5">
            <div className="text-center text-lg-start py-3 py-lg-1">
                <h2 className="fw-bold mb-2">Subscribe to Stay Updated</h2>
                <p className="mb-0">Receive Exclusive Offers and Event Updates.</p>
            </div>
            <form className="d-flex justify-content-center flex-wrap flex-lg-nowrap" method="post">
                <div className="my-2"><input className="border rounded-pill shadow-sm form-control" type="email" name="email" placeholder="Your Email" /></div>
                <div className="my-2"><button className="btn btn-primary shadow ms-2" type="submit">Subscribe </button></div>
            </form>
        </div>
    </div>
</section>
  );
}

export default Section7;
