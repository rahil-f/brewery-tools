import React, { useState } from "react";
import InputAdornments from "../../utils/input"

export default function CorrectionTemperatureDensite(props){

    return(
        <div>
            <InputAdornments id="standard-adornment-weight" label="Densité initial" adornment="DI" inputProps="'aria-label': 'weight'" reduxValue ="DI"/>
            <InputAdornments id="standard-adornment-weight" label="Temperature" adornment="°C" inputProps="'aria-label': 'weight'" reduxValue ="Temperature"/>
            <p>+(DI+ 0.00352871 * Math.pow((20 - temperature),2) + 0.225225 * (20 - temperature)).toFixed(2)</p>
        </div>
            )
}