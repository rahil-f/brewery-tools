import React, { useState } from "react";
import InputAdornments from "../../utils/input"

export default function TauxAlc(props){

    return(
        <div>
            <InputAdornments id="standard-adornment-weight" label="Densité initial" adornment="g/L" inputProps="'aria-label': 'weight'" reduxValue ="DI"/>
            <InputAdornments id="standard-adornment-weight" label="Densité final" adornment="g/L" inputProps="'aria-label': 'weight'" reduxValue ="DF"/>
            <p>+((DI-DF)/7.6).toFixed(2)</p>
        </div>
            )
}