import React, { Component, Fragment } from 'react';
import './App.css';
import {
    Grid,
    Row,
    Col
} from 'react-flexbox-grid';
import {
    Paper,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {
    Menu,
} from '@material-ui/icons';
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";

const cities = [
    "Buenos aires,ar",
    "washington,dc,us",
    "Bogotá,col",
    "Medellín,col"
];

const styles = (theme) => ({
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    flex: {
        flexGrow: 1,
    },
});

class App extends Component {

  render() {
      const {classes} = this.props;
    return (
        <Fragment>
          <Grid>
              <Row>
                  <Col xs={12}>
                      <AppBar position="static">
                          <Toolbar>
                              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                  <Menu />
                              </IconButton>
                              <Typography variant="title" color="inherit" className={classes.flex}>
                                  Weather App
                              </Typography>
                              <Button color="inherit">Login</Button>
                          </Toolbar>
                      </AppBar>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={6}>
                    <LocationListContainer cities={cities}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Paper zdepth={4}>
                          <div className={"detail"}>
                              <ForecastExtendedContainer/>
                          </div>
                      </Paper>
                  </Col>
              </Row>
          </Grid>
        </Fragment>
    );
  }
}

export default withStyles(styles)(App);