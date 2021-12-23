import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
   renderWeather(cityData) {
      const name = cityData.city.name;
      const temps = cityData.list.map(item => item.main.temp);
      const humidity = cityData.list.map(item => item.main.humidity);
      const pressure = cityData.list.map(item => item.main.pressure);

      return (
         <tr key={name}>
            <td>{name}</td>
            <td>
               <Chart data={temps} color="orange" units="K" />
            </td>
            <td>
               <Chart data={humidity} color="blue" units="hPa" />
            </td>
            <td>
               <Chart data={pressure} color="green" units="%" />
            </td>
         </tr>
      );
   }

   render() {
      return (
         <table className="table table-hover">
            <thead>
               <tr>
                  <th>City</th>
                  <th>Temperature (K)</th>
                  <th>Pressure (hPa)</th>
                  <th>Humidity (%)</th>
               </tr>
            </thead>
            <tbody>
               {this.props.weather.map(this.renderWeather)}
            </tbody>
         </table>
      );
   }
}

function mapStateToPros(state) {
   return { weather: state.weather };
}

export default connect(mapStateToPros)(WeatherList);