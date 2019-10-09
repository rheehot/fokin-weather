import React from 'react';
import {Alert} from 'react-native';
// import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "016911238201326f8a2ae268da9efcc0";

export default class extends React.Component  {

  state ={
    isLoading : true
  };

  getWeather = async(latitude, longitude) =>{
    const { data }  = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
    // console.log(data);
    this.setState({isLoading: false, temp: data.main.temp})
  };
  getLocation = async() => {
    try {
      // const response = await Location.requestPermissionsAsync();
      // console.log(response);
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync()
      // console.log(coords.latitude, coords.longitude);
      //Send to API and get weather
      this.getWeather(latitude, longitude)
      // this.setState({ isLoading : false});
    
    } catch (error) {
      Alert.alert("Can't find you.","So Sad");
    }
    
    
  };

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp}  = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
  }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   yellowView: {
//     flex: 1,
//     backgroundColor: "yellow"
//   },
//   buleView: {
//     flex: 1,
//     backgroundColor: "blue"
//   }
// });
