import React from 'react';
import PropTypes from 'prop-types';
import './styles/styles.css';
import ForecastItem from "./ForecastItem/ForecastItem";

const key = "51e2c9dc9d1cfecb43a987e8e11facf0";
const url = "http://api.openweathermap.org/data/2.5/forecast";

const renderForecastItemDays = (forecastData) => {
    return forecastData.map((forecast, key) => (
            <ForecastItem
                key={`firecast-item-${key}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}/>
        )
    )
};

const renderProgress = () => {
    return <h3>Cargando pronostico estendido!</h3>
};

const ForecastExtended = ({city, forecastData}) => (
    <div>
        <h2 className="forecast-title">{`Pronostico extendido de ${city}`}</h2>
        {forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgress()
        }
    </div>
);

ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
    forecastData : PropTypes.array,
};

export default ForecastExtended