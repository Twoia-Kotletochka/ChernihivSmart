// import { StatusBar } from "expo-status-bar";
// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, ActivityIndicator, Alert } from "react-native";
// import axios from 'axios'
// import Weather from './Weather';
// import Loading from "../WaitingPages/SplashLoading";

// const API_KEY = "e2dd77afbdeaa52f8c0f0de45218154f";
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall';

// export const GetWeather = async (lat, lon) => {
//     try {
//       const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   export default GetWeather;