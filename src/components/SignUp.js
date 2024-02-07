import React from "react";

function SignUp() {
//   const maxWidth = {
//     maxWidth: "900px",
//   };
  return (
    <section id="SignUp">
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <div className="card mb-5">
              <div className="card-body p-sm-5">
                <h2 className="text-center mb-4">ESSOS CUP - CRICKET TOURNAMENT</h2>
                <h6 className="text-center mb-4">
                  Join us for the February 2024 tournament!
                </h6>
                <form method="post">
                  <label className="form-label">Team Information</label>
                  <div className="mb-3">
                    <input
                      id="name-2"
                      className="form-control"
                      type="text"
                      name="team_name"
                      placeholder="Team Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="name-3"
                      className="form-control"
                      type="text"
                      name="captain_name"
                      placeholder="Captain Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="tel"
                      name="phone_number"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <label className="form-label mt-3">Address</label>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="city"
                          placeholder="City"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="state_province"
                          placeholder="State/Province"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="postal"
                          placeholder="Zip / Postal Code"
                        />
                      </div>
                    </div>
                  </div>
                  <label className="form-label mt-3">Cricket Experience</label>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="number"
                      name="experience"
                      placeholder="Number of Years Playing Cricket"
                    />
                  </div>
                  <label className="form-label mt-3">Preferred Position</label>
                  <div className="form-check">
                    <input
                      id="formCheck-1"
                      className="form-check-input"
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="formCheck-1">
                      Batsman
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="formCheck-2"
                      className="form-check-input"
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="formCheck-2">
                      Bowler
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="formCheck-3"
                      className="form-check-input"
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="formCheck-3">
                      All-Rounder
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="formCheck-4"
                      className="form-check-input"
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="formCheck-4">
                      Wicket Keeper
                    </label>
                  </div>
                  <label className="form-label mt-3">
                    Have you ever played in a cricket tournament before?
                  </label>
                  <div className="form-check">
                    <input
                      id="formCheck-5"
                      className="form-check-input"
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="formCheck-5">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="formCheck-6"
                      className="form-check-input"
                      type="radio"
                    />
                    <label className="form-check-label" htmlFor="formCheck-6">
                      No
                    </label>
                  </div>
                  <label className="form-label mt-3">Players Information</label>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player1"
                          placeholder="Player 1"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player1_number"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player2"
                          placeholder="Player 2"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player2_number"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player3"
                          placeholder="Player 3"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player3_number"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player4"
                          placeholder="Player 4"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player4_number"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player5"
                          placeholder="Player 5"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player5_number"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player6"
                          placeholder="Player 6"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player6_number"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player7"
                          placeholder="Player 7"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player7_number"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player8"
                          placeholder="Player 8 (Optional)"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player8_number"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player9"
                          placeholder="Player 9 (Optional)"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player9_number"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player10"
                          placeholder="Player 10 (Optional)"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          name="player10_number"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <h4>PAYMENT TERMS:</h4>
                    <p>
                      This registration is binding and non-refundable. ESSOS
                      Sports requires the full payment of the registration fee
                      amount within 2 days from the submission date of the form.
                      The registration fee includes cash prizes and trophies for
                      winners and runner-ups, for 2 days of the tournament.
                    </p>

                    <h4>TOURNAMENT AND MATCH RULES:</h4>

                    <ul>
                      <li>Entry Fee - 2250</li>
                      <li>Winners - Rs.10,000</li>
                      <li>Runner-Up - Rs.4,500</li>
                      <li>
                        Two teams who lose the semifinal will get the
                        registration fee back - Rs.2,250 each
                      </li>
                      <li>Every participating team will get a Momento.</li>
                      <li>
                        Every member of the Final Match Winners and Final
                        Runner-Up team (7-10 players) will get a Medal.
                      </li>
                    </ul>

                    <h5>Rules:</h5>

                    <ol>
                      <li>
                        All the matches will be of 5 overs, and 6 overs of
                        Semi-Finals and Final matches.
                      </li>
                      <li>
                        Only 3 Players can participate as Substitutes or Impact
                        Players.
                      </li>
                      <li>
                        Interested teams should give a minimum of 7, and a
                        maximum of 10 players' names during registrations.
                      </li>
                      <li>No STATE-LEVEL players are allowed.</li>
                      <li>
                        All the teams should be present at the venue 15 minutes
                        before their allocated times.
                      </li>
                      <li>Teams who are arriving late will be disqualified.</li>
                      <li>
                        For every new match, a new Vicky ball will be provided.
                      </li>
                      <li>
                        Umpires decision will be final. Arguments with the
                        Umpire may lead to disqualification from the tournament.
                      </li>
                      <li>No Hammer-Bats or Plastic Bats are allowed.</li>
                    </ol>

                    <h5>Box Cricket Rules:</h5>

                    <ol>
                      <li>
                        At a given time, only 7 players are allowed inside the
                        field (players can be interchanged for batting and
                        bowling).
                      </li>
                      <li>Only Straight boundaries for 4's and 6's.</li>
                      <li>
                        Batsmen will be given out if the ball is caught after
                        touching the top net.
                      </li>
                      <li>Runs will be awarded for Wides and No-Balls.</li>
                      <li>Over-throw runs are allowed.</li>
                      <li>No runs will be given for Byes and Leg Byes.</li>
                      <li>Only CLEAN ARM BOWLING is allowed.</li>
                      <li>Umpires decision will be final.</li>
                      <li>No Free-Hit for No-Balls.</li>
                    </ol>
                  </div>
                  <div>
                    <button className="btn btn-primary d-block w-100" type="submit">
                      Send{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
