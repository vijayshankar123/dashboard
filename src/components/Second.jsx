import React, { Fragment } from "react";
import SecondDown from "./SecondDown";

const Second = () => {
  return (
    <Fragment>
      <div style={{ float: "left" }}>
        <h5>Top Errors</h5>
      </div>
      <span style={{ float: "right" }}>
        <small style={{ color: "blue" }}> More</small>
      </span>
      <div className="card container">
        <div>
          <p className="mt-3" style={{ float: "left" }}>
            <strong> Premuim less than zero </strong>{" "}
            <small style={{ borderRadius: "40%", backgroundColor: "red" }}>
              <span className="mr-1 ml-1" style={{ color: "white" }}>
                HIGH
              </span>
            </small>
            <span className="text-muted" style={{ display: "flex" }}>
              MARKETING WORKFLOW 1
            </span>
          </p>
          <div className="mt-4" style={{ float: "right", color: "red" }}>
            <strong> 1500</strong>
          </div>

          <p style={{ float: "left" }}>
            <strong> Sum insured less than zero</strong>{" "}
            <small style={{ borderRadius: "40%", backgroundColor: "red" }}>
              <span className="mr-1 ml-1" style={{ color: "white" }}>
                HIGH
              </span>
            </small>
            <span className="text-muted" style={{ display: "flex" }}>
              MARKETING WORKFLOW 1
            </span>
          </p>
          <div className="mt-2" style={{ float: "right", color: "red" }}>
            <strong> 1500</strong>
          </div>

          <p style={{ float: "left" }}>
            <strong> Incorrect city & address </strong>{" "}
            <small style={{ borderRadius: "40%", backgroundColor: "orange" }}>
              <span className="mr-1 ml-1" style={{ color: "white" }}>
                MEDIUM
              </span>
            </small>
            <span className="text-muted" style={{ display: "flex" }}>
              MARKETING WORKFLOW 1
            </span>
          </p>
          <div className="mt-2" style={{ float: "right", color: "orange" }}>
            <strong> 1500</strong>
          </div>

          <p style={{ float: "left" }}>
            <strong> Wrong telephone numbers </strong>{" "}
            <small style={{ borderRadius: "40%", backgroundColor: "yellow" }}>
              <span className="mr-1 ml-1" style={{ color: "white" }}>
                LOW
              </span>
            </small>
            <span className="text-muted" style={{ display: "flex" }}>
              MARKETING WORKFLOW 1
            </span>
          </p>
          <div className="mt-2" style={{ float: "right", color: "#e2e214" }}>
            <strong> 1500</strong>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <SecondDown />
      </div>
    </Fragment>
  );
};
export default Second;
