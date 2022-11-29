import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { useSelector, useDispatch } from 'react-redux'
import { setDI, setDF, setTemperature} from "../features/calc/calcSlice"

const mapDispatch = new Map();
mapDispatch.set("DI", setDI);
mapDispatch.set("DF", setDF);
mapDispatch.set("Temperature", setTemperature);

export default function TextInputCustom(props) {
  
  const method = mapDispatch.get(props.reduxValue);
  var reduxState
  const reduxDI = useSelector(state => state.calc.DI);
  const reduxDF = useSelector(state => state.calc.DF);
  const reduxTemperature = useSelector(state => state.calc.Temperature);
  switch(props.reduxValue){
    case 'DI':
      reduxState = reduxDI;
      break;
    case 'DF':
      reduxState = reduxDF;
      break;
    case 'Temperature':
      reduxState = reduxTemperature;
      break;
    default:
      reduxState = null;
  }
  //const reduxState = useSelector(state => state.calc.${props.reduxValue})
  const dispatch = useDispatch()


  const handleChange = () => (event) => {
    dispatch(method(event.target.value))
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
        <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
          <Input
            id={props.id}
            value={reduxState}
            onChange={handleChange()}
            endAdornment={<InputAdornment position="end">{props.adornment}</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={props.inputProps}
            
          />
        </FormControl>
      </div>
    </Box>
  );
}