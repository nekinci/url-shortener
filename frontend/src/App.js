import React from "react";
import IndexPage from "./pages";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <IndexPage/>
          </Route>
          <Route exact path="/404">
              <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '100vh', fontSize: '24px'}}>404 - Not Found</div>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
