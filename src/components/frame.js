import React from "react";
import Sidenav from "./sidenav";
import Content from "./content";

const Frame = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3">
           <Sidenav />
          </div>
          <div className="col-xl-6">
            <Content />
          </div>
          <div className="col-xl-3"></div>
        </div>
      </div>
    </>
  );
};

export default Frame;
