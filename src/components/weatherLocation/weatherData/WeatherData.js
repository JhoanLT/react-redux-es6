import React, {Component} from 'react';
import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";
import '../../styles/styles.css';
import PropTypes from "prop-types";

class WeatherData extends Component{

    render() {
        const {data} = this.props;
        const {temperature, weatherState, humidity, wind} = data;
        return (
            <div className="weatherDataCont">
                <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
                <WeatherExtraInfo humidity={humidity} wind={wind}/>
            </div>
        );
    }

}

WeatherData.proptypes = {
    data : PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        weatherState : PropTypes.number.isRequired,
        humidity : PropTypes.number.isRequired,
        wind : PropTypes.number.isRequired,
    })
};

export default WeatherData