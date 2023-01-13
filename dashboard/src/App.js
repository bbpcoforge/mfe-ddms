import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Typography from "@mui/material/Typography";

import Landing from "./components/Landing";
function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © ${new Date().getFullYear()} ADCB. All rights reserved. Dashboard version ${
        packageJson.version
      }`}
    </Typography>
  );
}
export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/dashboard" component={Landing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
};