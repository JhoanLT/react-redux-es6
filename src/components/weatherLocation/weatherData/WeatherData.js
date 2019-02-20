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

WeatherData.propTypes = {
    data : PropTypes.shape({
        temperature : PropTypes.number.isRequired,
        weatherState : PropTypes.string.isRequired,
        humidity : PropTypes.number.isRequired,
        wind : PropTypes.string.isRequired,
    })
};

export default WeatherData