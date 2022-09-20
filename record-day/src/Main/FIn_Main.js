import React from "react";
import PC_Header from "./Header/Header"
import Mobile_Header from "./Header/MoHeader"
import {Mobile, Pc} from "../Media/MediaQuery"

const Fin_Main = ()=>{

    return(
        <>
        <Pc>
            <PC_Header/>
        </Pc>

        <Mobile>
            <Mobile_Header/>
        </Mobile>
        </>
    )
}

export default Fin_Main