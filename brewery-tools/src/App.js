import React from 'react';
import './App.css';
import RecipeReviewCard from './views/cardTemplate';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MenuApp from './views/menu';

import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { light } from '@mui/material/styles/createPalette';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          mode: 'light',
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#dbf4ff",
          },
          divider: "#004282",
          background: {
            default: "#000e21",
            paper: "#000e21",
          },
          text: {
            primary: "#fff",
            secondary: "#71717a",
          },
        }),
  },
});

function App() {
  //theme
  const [mode, setMode] = useState("light");
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  var calcName = [{id: 'tauxAlc', title: "Taux d\'alcool", compoName: 'TauxAlc', intro: 'intro Taux'}, {id: 'ctd', title: "Correction de temperature",compoName: 'CorrectionTemperatureDensite', intro: 'intro corec'},{id: 'tauxAlc', title: "Taux d\'alcool", compoName: 'TauxAlc', intro: 'intro Taux'}, {id: 'ctd', title: "Correction de temperature",compoName: 'CorrectionTemperatureDensite', intro: 'intro corec'},{id: 'tauxAlc', title: "Taux d\'alcool", compoName: 'TauxAlc', intro: 'intro Taux'}, {id: 'ctd', title: "Correction de temperature",compoName: 'CorrectionTemperatureDensite', intro: 'intro corec'},{id: 'tauxAlc', title: "Taux d\'alcool", compoName: 'TauxAlc', intro: 'intro Taux'}, {id: 'ctd', title: "Correction de temperature",compoName: 'CorrectionTemperatureDensite', intro: 'intro corec'},]
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MenuApp menu={calcName}/>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-around'}}>
          
          <Box sx={{ width: '10%', display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'center' }}/>
          <Box sx={{ width: '60%', display: 'flex', flexGrow: '60%', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            {calcName.map((calc, index) => (
              <Grid sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }} key={index}>
                <RecipeReviewCard info={calc}/>
              </Grid>
            ))}
          </Box>
          <Box sx={{ width: '10%', display: 'flex', alignItems: 'start', flexDirection: 'column', justifyContent: 'center' }}/>
        </Box>
      </ThemeProvider>

    </div>
  );
}

export default App;
