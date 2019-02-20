import transformForecast from "../components/services/transformForecast";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type : SET_CITY, payload});
const setForecastData = payload => ({type : SET_FORECAST_DATA, payload});

const key = "51e2c9dc9d1cfecb43a987e8e11facf0";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
  return dispatch => {
      const urlForecast = `${url}?q=${payload}&appid=${key}`;

      //Activar en el estado un indicador de búsqueda de datos
      dispatch(setCity(payload));
      fetch(
          urlForecast
      ).then(
          data => (data.json())
      ).then(
          weatherData => {
              const forecastData = transformForecast(weatherData);

              //Modificar el estado con el resultado de promise (fetch)
              dispatch(setForecastData({city : payload, forecastData}))
          }
      ).catch(() => {
          //ToDo
      });

      return;
  }
};