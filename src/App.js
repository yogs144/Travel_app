import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import 'assets/scss/style.scss';
import LandingPages from 'pages/LandingPages';
import DetailsPage from 'pages/DetailsPage';
import Example from 'pages/Example';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path ="/" component ={LandingPages}></Route>
        <Route exact path ="/properties/:id" component ={DetailsPage}></Route>
        <Route path ="/example" component ={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
