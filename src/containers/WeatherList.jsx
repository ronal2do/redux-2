import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMaps from '../components/GoogleMaps';

class WeatherList extends Component {

  renderWeather(cityData) {
    const id = cityData.city.id;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={id}>
        <td><GoogleMaps lat={lat} lng={lon} /></td>
        <td><Chart data={temps} height={200} color="orange" units="Celsius"/></td>
        <td><Chart data={pressures} height={220} color="black" units="hPa"/></td>
        <td><Chart data={humidities} height={230} color="purple" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
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

// Jogando como component
// const mapStateToProps = (state) => ({
//    weather: state.weather
// });

const mapStateToProps = ({weather}) => ({
   weather
});

export default connect(mapStateToProps)(WeatherList);
