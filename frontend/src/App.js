import React from "react";
import IndexPage from "./pages";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const App = () => {
  React.useEffect(() => {
      if (!localStorage.getItem('host')){
          fetch("http://app:6060/urlshortener/host")
              .then(res => res.text())
              .then(res => localStorage.setItem('host', res))
              .catch(res => console.log(res));
      }
  }, []) ;
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
