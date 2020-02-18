import React from "react";
import Second from "./Second";
import Third from "./Third";
import LineGraph from "./LineGraph";

const Home = () => {
  return (
    <div>
      <div>
        <LineGraph />
      </div>
      <div className="row mr-2 mt-4">
        <div className=" col-lg-4 col-md-6 col-sm-6">1st</div>
        <div className=" col-lg-4 col-md-6 col-sm-6">
          <Second />
        </div>
        <div className=" col-lg-4 col-md-6 col-sm-12">
          <Third />
        </div>
      </div>
    </div>
  );
};
export default Home;
