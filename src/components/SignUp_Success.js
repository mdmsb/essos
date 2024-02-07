import React from "react";

function SignUpSuccess() {
  return (
    <section id="SignUpSuccess">
      <div class="container">
        <div class="bg-dark border rounded border-dark d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5">
          <div class="text-center text-lg-start py-3 py-lg-1">
            <h2 class="fw-bold mb-2">Success!</h2>
            <p class="mb-0">We will get back to you shortly.</p>
          </div>
            <div class="my-2">
              <button class="btn btn-primary shadow ms-2" type="submit">
                Home{" "}
              </button>
            </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpSuccess;
