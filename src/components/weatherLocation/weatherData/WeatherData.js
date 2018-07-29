import React, {Component} from 'react';
import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";
import '../../styles/styles.css';
import {
    SNOW
} from '../../constants/Weathers'

class WeatherData extends Component{

    render() {
        return (
            <div className="weatherDataCont">
                <WeatherTemperature temperature={20} weatherState={SNOW}/>
                <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
            </div>
        );
    }

}

export default WeatherData