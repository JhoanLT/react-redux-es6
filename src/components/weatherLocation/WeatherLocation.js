import React, {Component} from 'react';
import Location from "./Location";
import WeatherData from "./weatherData/WeatherData";
import transformWeather from '../services/TransformWeather';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const key = "51e2c9dc9d1cfecb43a987e8e11facf0";
const url = "http://api.openweathermap.org/data/2.5/weather";
const city = "Buenos aires, ar";

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

class WeatherLocation extends Component {

    constructor(props){
        const {city} = props;
        super(props);
        this.state = {
            city : city,
            data : null,
        }
    }

    componentWillMount(){
        const {city} = this.state;
        const api_weather = `${url}?q=${city}&appid=${key}`;
        console.log(api_weather);
        fetch(api_weather).then((data) => {
            return data.json();
        }).then(weatherData => {
            const data = transformWeather(weatherData);
            this.setState({data});
        });
    }

    render() {
        const {classes, onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? <WeatherData data={data}/> : <CircularProgress className={classes.progress}/>}
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city : PropTypes.string,
    onWeatherLocationClick : PropTypes.func,
};

export default withStyles(styles) (WeatherLocation)