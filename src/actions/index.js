import transformForecast from "../components/services/transformForecast";
import transformWeather from "../components/services/TransformWeather";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({type : SET_CITY, payload});
const setForecastData = payload => ({type : SET_FORECAST_DATA, payload});
const getWeatherCity = payload => ({type : GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type : SET_WEATHER_CITY, payload});


const key = "51e2c9dc9d1cfecb43a987e8e11facf0";
const url = "http://api.openweathermap.org/data/2.5/forecast";
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

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

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));

            const api_weather = `${url}?q=${city}&appid=${key}`;
            fetch(api_weather).then((data) => {
                return data.json();
            }).then(weatherData => {
                const weather = transformWeather(weatherData);
                dispatch(setWeatherCity({city, weather}));
            });
        })
    }
};