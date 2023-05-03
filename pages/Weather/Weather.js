import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import { Text, View, StatusBar, ScrollView, Animated, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../../styles/main'
import { weather } from '../../styles/weather'
import { useNavigation } from '@react-navigation/core'
import { GetWeather } from './GetWeather';

let AnimatedOp = new Animated.Value(0);

const animateopacityprofil = AnimatedOp.interpolate({
    inputRange: [0, 200 - 0], //ругулятор раньше позже 
    outputRange: [1, 0],
    extrapolate: 'clamp'
});

const animateopacityweather = AnimatedOp.interpolate({
    inputRange: [0, 200 - 0], //ругулятор раньше позже 
    outputRange: [1, 0],
    extrapolate: 'clamp'
});

const animateopacitytemp = AnimatedOp.interpolate({
    inputRange: [0, 100 - 0], //ругулятор раньше позже 
    outputRange: [1, 0],
    extrapolate: 'clamp'
});

const animatedNewsHeight = AnimatedOp.interpolate({
    inputRange: [0, 300 - 0],
    outputRange: ['95%', '100%'],
    extrapolate: 'clamp'
});

export default function Weather() {
    const navigation = useNavigation()
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await GetWeather();
                setWeatherData(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const go_main = () => {
        navigation.navigate('Main')
    }

    return (
        <LinearGradient
            colors={['#17153C', '#D5BCA8']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            {weatherData && (
                <ScrollView
                    scrollEventThrottle={16}
                    style={styles.scrollview_vertical}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: AnimatedOp } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <Animated.View style={[weather.weather_contetn, { opacity: animateopacitytemp, }]}>
                        <Text style={{ color: 'white', alignContent: 'space-around', fontSize: 50, }}>{parseInt(weatherData.list[0].main.temp) + "°"}</Text>
                        <Image
                            source={{ uri: `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png` }}
                            style={weather.weatherIcon}
                        />
                    </Animated.View>

                    <View style={{ alignItems: 'center' }}>
                        <Animated.View style={[styles.view_news,
                        { width: animatedNewsHeight, marginTop: 35, }]}>
                            {weatherData.list.slice(1, 6).map((day) => (
                                <View key={day.dt} style={styles.dayContainer}>
                                    {/* <Text style={styles.dayTitle}>{new Date(day.dt * 1000).toLocaleDateString()}</Text> */}
                                    <Image
                                        source={{ uri: `https://openweathermap.org/img/w/${day.weather[0].icon}.png` }}
                                        style={styles.weatherIcon}
                                    />
                                     <Text>{day.weather[0].description}</Text>
                                    <View style={styles.dayDetails}>
                                        <Text>Мін: {day.main.temp_min}°C</Text>
                                        {/* <Text>День: {day.main.temp.day}°C</Text>
                                        <Text>Вечер: {day.main.temp.eve}°C</Text>
                                        <Text>Ночь: {day.main.temp.night}°C</Text> */}
                                    </View>
                                    {/* <View style={styles.dayDetails}>
                                        <Text>Влажность: {day.humidity}%</Text>
                                        <Text>Скорость ветра: {day.wind_speed} м/с</Text>
                                    </View> */}
                                </View>
                            ))}
                        </Animated.View>
                    </View>
                </ScrollView>
            )}
            <Animated.View style={[{ opacity: animateopacityweather }, weather.header_text]}>
                <Text style={{ color: '#EEEEEE', alignSelf: 'center', marginTop: 5, fontSize: 22 }}>Чернігів</Text>
            </Animated.View>

            <View style={weather.header}>
                <Animated.View
                    style={[{ opacity: animateopacityweather }, {}]}>
                    <TouchableOpacity
                        // пофикситы
                        onPress={go_main}>
                        <View style={[weather.weather]}>
                            <Entypo name="cross" size={27} color="white" />
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </LinearGradient>
    );
}