import React, {Component} from 'react';
import WeatherLocation from "./weatherLocation/WeatherLocation";
import PropTypes from 'prop-types';
import './styles/styles.css';

class LocationList extends Component {

    handleWeatherLocationClick(city){
        const {onSelectLocation} = this.props;
        onSelectLocation(city);
    }

    render() {
        const {cities} = this.props;
        return (
            <div className={"locationList"}>
                {cities.map((city, key) => {
                    return (
                        <WeatherLocation
                            city={city.name}
                            key={`city-name-${key}`}
                            onWeatherLocationClick={() => this.handleWeatherLocationClick(city)}
                            data={city.data}
                        />
                    );
                })}
            </div>
        );
    }

}

LocationList.propTypes = {
    cities : PropTypes.array.isRequired,
    onSelectLocation : PropTypes.func,
};

export default LocationList;