import React from 'react';

import './App.css';
import SearchPage from "./SearchPage"


import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            {/*Search Page */}
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
