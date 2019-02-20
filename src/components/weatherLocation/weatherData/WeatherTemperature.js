import React, {Component} from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import "../../styles/styles.css";
import {
    CLOUD,
    CLOUDY,
    SUN,
    SNOW,
    RAIN,
    WINDY,
    THUNDER,
    DRIZZLE
}
from '../../constants/Weathers'

class WeatherTemperature extends Component{

    drawState() {
        const {weatherState} = this.props;
        switch (weatherState){
            case CLOUD :
                return "cloud";
            case CLOUDY :
                return "cloudy";
            case SUN :
                return "day-sunny";
            case RAIN :
                return "rain";
            case SNOW :
                return "snow";
            case WINDY :
                return "windy";
            case THUNDER :
                return "day-thunderstorm";
            case DRIZZLE :
                return "day-showers";
            default:
                return "day-sunny";
        }
    }

    render(){
        const {temperature} = this.props;
        return(
            <div className="weatherTemperatureCont">
                <WeatherIcons name={this.drawState()} size="4x" className="wicon"/>
                <span className="temperature">{`${temperature}`}</span>
                <span className="temperatureType">C°</span>
            </div>
        );
    }
}

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string,
};

export default WeatherTemperature