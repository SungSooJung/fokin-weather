import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY="29abb3ca8a46bf3e797430d06828bf9f";

export default class extends React.Component{
  state = {
    isLoading:true
  }
  getWeather = async(latitude,longitude) => {
    const req_str=`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    const { data: {main: {temp},weather }}  = await axios.get(req_str);
    //const { data } = await axios.get(req_str);
    console.log(weather[0].main)
    this.setState(
      {
        isLoading: false,
        condition: weather[0].main,
        temp        
      });
  //console.log(data);
  }
  getLocation = async () =>{
    try{
      await Location.requestPermissionsAsync()
      const { coords: {latitude,longitude} } = await Location.getCurrentPositionAsync()
      // Send to API and get Weather
      //console.log(latitude,longitude)
      this.getWeather(latitude,longitude)
    }catch(error){
      Alert.alert("Can't find  you","So bad");
    }

  };
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const { isLoading,temp,condition } = this.state;

    return isLoading?<Loading/>:<Weather temp={Math.round(temp)} condition={condition}/>;
  } 
}

