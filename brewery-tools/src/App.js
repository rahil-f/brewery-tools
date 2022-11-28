import React from 'react';
import './App.css';
import RecipeReviewCard from './views/cardTemplate';

function App() {
  return (
    <div className="App">
      <RecipeReviewCard intro="intro info" compoName="TauxAlc"/>
    </div>
  );
}

export default App;
