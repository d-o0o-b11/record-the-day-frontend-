import React from "react";
import { Pc, Mobile } from "../Media/MediaQuery";
import PhoneMain from "./PhoneMain";
import Main from "./Main";

const Maincheck = () => {
  return (
    <>
      <Pc>
        <Main />
      </Pc>

      <Mobile>
        <PhoneMain />
      </Mobile>
    </>
  );
};

export default Maincheck;
