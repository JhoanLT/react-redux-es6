import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../../styles/styles.css"

class WeatherExtraInfo extends Component {

    render() {
        const {humidity, wind} = this.props;
        return (
            <div className="weatherExtraInfoCont">
                <span>{`${humidity} % -`}</span>
                <span>{`${wind} Viento`}</span>
            </div>
        );
    }

}

WeatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired
};

export default WeatherExtraInfo