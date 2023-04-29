import React from "react";
import HomeAll from "components/HomeAll";
import { Switch, Route } from "react-router-dom";
import EnhancedTable from "components/NewPage";
function App() {
  return (
    <>
      <Switch>
        <Route path="/GSAP">
          <HomeAll />
        </Route>
        <Route path="/demo">
          <EnhancedTable />
        </Route>
      </Switch>
    </>
  );
}

export default App;
