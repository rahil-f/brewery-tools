import React from 'react';
import './App.css';
import RecipeReviewCard from './views/cardTemplate';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

function App() {

  var calcName = [{compoName: 'TauxAlc', intro: 'intro Taux'}, {compoName: 'CorrectionTemperatureDensite', intro: 'intro corec'},{compoName: 'TauxAlc', intro: 'intro Taux'}, {compoName: 'CorrectionTemperatureDensite', intro: 'intro corec'},{compoName: 'TauxAlc', intro: 'intro Taux'}, {compoName: 'CorrectionTemperatureDensite', intro: 'intro corec'},{compoName: 'TauxAlc', intro: 'intro Taux'}, {compoName: 'CorrectionTemperatureDensite', intro: 'intro corec'},]

  return (
    <div className="App">
      <Box sx={{ width: '60%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
        {calcName.map((calc, index) => (
          <Grid sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} key={index}>
            <RecipeReviewCard intro={calc.intro} compoName={calc.compoName}/>
          </Grid>
        ))}
    </Box>
    </div>
  );
}

export default App;
