import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading_frame">
      {/* <div class="loader"></div> */}
      <div className="loading_body">
        <h1 data-text="LOADING">LOADING</h1>
      </div>
    </div>
  );
};

export default Loading;
