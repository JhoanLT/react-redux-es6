import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LocationList from "../components/LocationList";
import {setSelectedCity} from "../actions";
import {connect} from "react-redux";

class LocationListContainer extends Component{

    handleSelectionLocation = (city) =>{
        this.props.setCity(city);
    };

    render(){
        return(
            <LocationList cities={this.props.cities} onSelectLocation={this.handleSelectionLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    setCity : PropTypes.func.isRequired,
    cities : PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
    setCity : value => dispatch(setSelectedCity(value)),
});

export default connect(null, mapDispatchToProps)(LocationListContainer);