import React, {Component} from 'react';
import Location from "./Location";
import WeatherData from "./weatherData/WeatherData";
import {SUN} from "../constants/Weathers";
import convert from 'convert-units';

const data = {
    temperature : 20,
    weatherState : SUN,
    humidity : 10,
    wind : '10 m/s'
};

const location = "Buenos aires, ar";
const key = "51e2c9dc9d1cfecb43a987e8e11facf0";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

class WeatherLocation extends Component {
    state = {
        city : 'Medellín',
        data : data,
    };

    getWeatherState = weather => {
        return SUN
    };

    getTemp = (kelvin) => {
        return convert(kelvin).from('K').to('C').toFixed(2);
    };

    getData = weatherData => {
        const {humidity, temp} = weatherData.main;
        const {speed} = weatherData.wind;
        const {weatherState} = this.getWeatherState(this.weather);
        const temperature = this.getTemp(temp);
        return {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`
        };
    };

    handleUpdateClick = () => {
        fetch(api_weather).then((data) => {
            return data.json();
        }).then(weatherData => {
            const data = this.getData(weatherData);
            this.setState({data});
        });
        // this.setState({
        //     city : "Rio de Janeiro",
        //     data : data2
        // });
    };

    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation