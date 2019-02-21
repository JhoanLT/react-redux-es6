import React, {Component} from 'react';
import Location from "./Location";
import WeatherData from "./weatherData/WeatherData";
import transformWeather from '../services/TransformWeather';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

const WeatherLocation = ({classes, onWeatherLocationClick, city, data}) => {
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? <WeatherData data={data}/> : <CircularProgress className={classes.progress}/>}
            </div>
        );
};

WeatherLocation.propTypes = {
    city : PropTypes.string,
    onWeatherLocationClick : PropTypes.func,
    data : PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity : PropTypes.number.isRequired,
        wind : PropTypes.string.isRequired,
    }),
};

export default withStyles(styles) (WeatherLocation)