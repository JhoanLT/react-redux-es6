import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../../styles/styles.css"

class WeatherExtraInfo extends Component {

    render() {
        const {humidity, wind} = this.props;
        return (
            <div className="weatherExtraInfoCont">
                <span className="extraInfoText">{`Humedad: ${humidity} %`}</span>
                <span className="extraInfoText">{`Vientos: ${wind}`}</span>
            </div>
        );
    }

}

WeatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired
};

export default WeatherExtraInfo