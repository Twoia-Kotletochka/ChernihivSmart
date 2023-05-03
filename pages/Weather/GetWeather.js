import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Alert } from "react-native";
import axios from 'axios'
//const WEATHER_API_KEY = "384c2107b3553c438c95a12941f30d51"
const WEATHER_API_KEY = "168901ef74a280475a5c7fa2ee329b0a"
export const GetWeather = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=51.5055100&lon=31.2848700&appid=${WEATHER_API_KEY}&units=metric`)
        return response.data;
    } catch (error) {
        console.error(error);
    }
};