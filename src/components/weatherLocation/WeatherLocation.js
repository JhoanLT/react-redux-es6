import React, {Component} from 'react';
import Location from "./Location";
import WeatherData from "./weatherData/WeatherData";

class WeatherLocation extends Component {

    render() {
        return (
            <div>
                <Location city={'Medellín'}/>
                <WeatherData/>
            </div>
        );
    }
}

export default WeatherLocation