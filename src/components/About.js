import React, { useState } from "react";

export default function About() {
  // using useState for button , accordaian and bock
  
  const [mystyl, setmystyl] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [bttext, setbttext] = useState("Dark Mode");

  const toggle = () => {
    if (bttext === "Dark Mode") {
      setmystyl({
        color: "white",
        backgroundColor: "black",
      });

      setbttext("Light Mode");

      setbloc({
        color: "white",
        backgroundColor: "black",
        height: "100vh",
      });
    } else {
      setmystyl({
        color: "black",
        backgroundColor: "white",
      });

      setbttext("Dark Mode");

      setbloc({
        color: "black",
        backgroundColor: "white",
        height: "100vh",
      });
    }
  };

  const [bloc, setbloc] = useState({
    color: "black",
    backgroundColor: "white",
    height: "100vh",
  });

  return (
    <div className="block1" style={bloc}>
      <div className="w-75 p-3 container">
        <h1 className="my-3">About Me</h1>

        <div className="accord ion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyl}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyl}>
                <strong>This is the first item's accordion body.</strong> It is
                These classes control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyl}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyl}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyl}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse style={mystyl}"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyl}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="btn btn-success mt-4" onClick={toggle}>
          {bttext}
        </button>
      </div>
    </div>
  );
}

