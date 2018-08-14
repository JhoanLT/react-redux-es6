import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles/styles.css';
import ForecastItem from "./ForecastItem/ForecastItem";
import transformForecast from "./services/transformForecast";

const key = "51e2c9dc9d1cfecb43a987e8e11facf0";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{

    constructor(props){
        super(props);
        this.state = {
            forecastData : null,
        };
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(props){
        if(props.city !== this.props.city){
            this.setState({
                forecastData : null
            });
            this.updateCity(props.city);
        }
    }

    updateCity(city){
        const urlForecast = `${url}?q=${city}&appid=${key}`;

        fetch(
            urlForecast
        ).then(
            data => (data.json())
        ).then(
            weatherData => {
                const forecastData = transformForecast(weatherData);
                this.setState({
                    forecastData
                });
            }
        ).catch(() => {
            //ToDo
        });
    }

    renderForecastItemDays(forecastData){
        return forecastData.map((forecast, key) => (
            <ForecastItem
                key={`firecast-item-${key}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}/>
            )
        )
    }

    renderProgress(){
        return <h3>Cargando pronostico estendido!</h3>
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;

        return (
            <div>
                <h2 className="forecast-title">{`Pronostico extendido de ${city}`}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
};

export default ForecastExtended