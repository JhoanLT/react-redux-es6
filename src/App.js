import React, { Component, Fragment } from 'react';
import './App.css';
import LocationList from "./components/LocationList";
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
import ForecastExtended from "./components/ForecastExtended";

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

    state = {
        city : null
    };

    handleSelectionLocation = (city) =>{
        this.setState({
            city
        })
    };

  render() {
      const {classes} = this.props;
      const {city} = this.state;
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
                    <LocationList cities={cities} onSelectLocation={this.handleSelectionLocation}/>
                  </Col>
                  <Col xs={12} md={6}>
                      <Paper zdepth={4}>
                          <div className={"detail"}>
                              {city && <ForecastExtended city={city}/>}
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
