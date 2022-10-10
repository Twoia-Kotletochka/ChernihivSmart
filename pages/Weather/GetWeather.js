import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Alert } from "react-native";
import axios from 'axios'
import Weather from './Weather';

const WEATHER_API_KEY = "384c2107b3553c438c95a12941f30d51";
const BASE_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`;


export default class extends React.Component {

    state = {
        isLoading: true
    }

    getWeather = async () => {
        const { data: { main: { temp }, weather } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=51.5055100&lon=31.2848700&appid=${WEATHER_API_KEY}&units=metric`);
        this.setState({
            isLoading: false,
            temp: temp,
            condition: weather[0].main,
        });
        console.log(weather);
    }

    componentDidMount() {
        this.getWeather();
    }

    render() {
        const { isLoading, temp, condition } = this.state;
        return (
            <Weather temp={Math.round(temp)} condition={condition} />
        );
    }
}