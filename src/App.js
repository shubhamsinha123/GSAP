import React from "react";
import HomeAll from "components/HomeAll";
import { Switch, Route } from "react-router-dom";
import EnhancedTable from "components/NewPage";
import Welcome from "components/Welcome";
function App() {
  return (
    <>
      <Switch>
        <Route path="/GSAP">
          <HomeAll />
        </Route>
        <Route path="/new-page">
          <Welcome />
        </Route>
        <Route path="/table">
          <EnhancedTable />
        </Route>
      </Switch>
    </>
  );
}

export default App;
