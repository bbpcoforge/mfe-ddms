import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeProvider from "../../shared/theme";
import Balance from "./components/Balance";
import Activity from "./components/Activity";
import Nav from "../../shared/nav";
import { navConfig } from "./navConfig";

function Copyright() {
  const packageJson = require("../package.json");
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      sx={{ mt: 2 }}
    >
      {`Copyright © ${new Date().getFullYear()} ADCB. All rights reserved. Account version ${
        packageJson.version
      }`}
    </Typography>
  );
}
export default ({ history, userDetails, userPemission }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ marginTop: 64 }}>
      <ThemeProvider>
        <Box
          sx={{
            flexGrow: 1,
            direction: "rtl",
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setOpen(true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Router history={history}>
          <Nav
            openNav={open}
            onCloseNav={() => setOpen(false)}
            navConfig={navConfig}
            userDetails={userDetails}
            userPemission={userPemission}
          />
          <Switch>
            <Route exact path="/account/balance">
              <Balance userDetails={userDetails} />
            </Route>
            <Route exact path="/account/balance/:accno">
              <Balance userDetails={userDetails} />
            </Route>
            <Route path="/account/activity">
              <Activity userDetails={userDetails} />
            </Route>

            <Route path="/account">
              <Redirect to={"/account/balance"} />
            </Route>
            <Route path="/">
              <Balance userDetails={userDetails} />
            </Route>
          </Switch>
        </Router>
        <Copyright />
      </ThemeProvider>
    </div>
  );
};
