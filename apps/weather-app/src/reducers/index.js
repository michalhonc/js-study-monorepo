import { combineReducers } from 'redux';
import WeatherReducer from './redurec_weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
