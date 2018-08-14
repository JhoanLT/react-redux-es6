import React, {Component} from 'react';
import Proptypes from 'prop-types';
import WeatherData from "../weatherLocation/weatherData/WeatherData";

class ForecastItem extends Component{

    render() {
        const {weekDay, hour, data} = this.props;
        return (
            <div>
                <h2>
                    {weekDay} {hour} hs
                </h2>
                <WeatherData data={data}/>
            </div>
        );
    }
}

ForecastItem.propTypes = {
    weekDay : Proptypes.string.isRequired,
    hour : Proptypes.number.isRequired,
    data : Proptypes.object.isRequired
};

export default ForecastItem;