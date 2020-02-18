import React from "react";

const ThirdDown = () => {
  return (
    <div>
      <div style={{ float: "left" }} className="mb-1 mt-2">
        <h5>Activity Stream</h5>
      </div>
      <span className="mt-2" style={{ float: "right" }}>
        <small style={{ color: "blue" }}> More</small>
      </span>
      <div className=" mt-1 card container">
        <div className="mt-3">
          <span style={{ float: "left" }}>
            <i style={{ color: "#2949fa" }} className="fas fa-share-alt" />{" "}
            <strong>Workflow Marketing data-1</strong>
          </span>

          <span className="text-muted" style={{ float: "right" }}>
            Today
          </span>
        </div>
        <p>
          <span style={{ float: "left" }}>
            <small className="text-muted">
              Finished Running and 10000 errors are detected
            </small>
          </span>
        </p>

        <div>
          <span style={{ float: "left" }}>
            <i style={{ color: "#2949fa" }} className="fas fa-database" />{" "}
            <strong>Data Library-ErathQuake.csv added </strong>
          </span>

          <span className="text-muted" style={{ float: "right" }}>
            Today
          </span>
        </div>
        <p>
          <span style={{ float: "left" }}>
            <small className="text-muted">
              Finished Running and 10000 errors are detected
            </small>
          </span>
        </p>

        <div>
          <span style={{ float: "left" }}>
            <i
              style={{ color: "#2949fa" }}
              className="fas fa-comment-dots"
            />{" "}
            <strong>@Dileeps tagged you in a comment</strong>
          </span>

          <span className="text-muted" style={{ float: "right" }}>
            Today
          </span>
        </div>
        <p>
          <span style={{ float: "left" }}>
            <small className="text-muted">Have a look at this dataset</small>
          </span>
        </p>

        <div>
          <span style={{ float: "left" }}>
            <i style={{ color: "#2949fa" }} className="fas fa-bug" />{" "}
            <strong>Error - 10000 Errors detected</strong>
          </span>

          <span className="text-muted" style={{ float: "right" }}>
            Today
          </span>
        </div>
        <p>
          <span style={{ float: "left" }}>
            <small className="text-muted">
              New errors detected in marketing data-1
            </small>
          </span>
        </p>
      </div>
    </div>
  );
};
export default ThirdDown;
