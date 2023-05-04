import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import { Text, View, StatusBar, ScrollView, Animated, ActivityIndicator, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
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
    const [activeButtonId, setActiveButtonId] = useState(null);
    let buttonsData = [];
    const daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
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

    const handleButtonPress = (id) => {
        if (id === activeButtonId) {
            setActiveButtonId(null);
        } else {
            setActiveButtonId(id);
        }
    };

    const go_main = () => {
        navigation.navigate('Main')
    }

    if (!buttonsData) {
        return (
            <View style={{ height: 600 }}>
                <ActivityIndicator color='#4BB5F5' size='large' animating={true} style={{ marginTop: 60 }} />
            </View>
        )
    }

    if (weatherData) {
        const dailyWeatherDatattonsData = weatherData.list.reduce((acc, item) => {
            // extract the date from the timestamp
            const date = item.dt_txt.split(' ')[0];

            // check if there is already a collection of weather data for this date
            if (!acc[date]) {
                // create a new collection for this date
                acc[date] = [item];
            } else {
                // add this weather data to the existing collection for this date
                acc[date].push(item);
            }

            return acc;
        }, {});

        let isFirst = true;
        let i = 0;
        Object.keys(dailyWeatherDatattonsData).forEach(date => {
            if (i < 4) {
                if (isFirst) {
                    isFirst = false;
                    return; // пропустить первый элемент
                }
                //середнє значення
                //іконки
                const freqMap = {};
                let maxCount = 0;
                let mostFrequent;
                const icons = dailyWeatherDatattonsData[date].map(item => item.weather[0].icon);
                icons.forEach(function (item) {
                    freqMap[item] = (freqMap[item] || 0) + 1;
                    if (freqMap[item] > maxCount) {
                        maxCount = freqMap[item];
                        mostFrequent = item;
                    }
                });
                //швидкість вітру
                const windSpeeds = dailyWeatherDatattonsData[date].map(item => item.wind.speed);
                //тиск
                const totalPressure = dailyWeatherDatattonsData[date].reduce((accumulator, current) => accumulator + current.main.pressure, 0);
                //температура
                const temps = dailyWeatherDatattonsData[date].map(item => item.main.temp);
                //вологість
                const humidities = dailyWeatherDatattonsData[date].map(item => item.main.humidity);
                //темп. відчувається
                const feels_like = dailyWeatherDatattonsData[date].map(item => item.main.feels_like);
                //день тижня
                const dayOfWeek = new Date(date).getDay();
                buttonsData.push(
                    {
                        id: date,
                        day: daysOfWeek[dayOfWeek],
                        icon: mostFrequent,
                        feels_like_max: Math.max(...feels_like),
                        feels_like_min: Math.min(...feels_like),
                        temp_min: Math.round(Math.max(...temps)),
                        temp_max: Math.round(Math.min(...temps)),
                        humidity_min: Math.min(...humidities),
                        pressure: Math.round(totalPressure / dailyWeatherDatattonsData[date].length),
                        speed_max: Math.max(...windSpeeds),
                    }
                )
                console.log(feels_like)
            }
            ++i;
        });
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
                        <Text style={{ color: 'white', alignContent: 'space-around', fontSize: 50, }}>{Math.round(weatherData.list[0].main.temp)}°</Text>
                        <Text style={{ color: 'white', alignContent: 'space-around', fontSize: 15, }}>{weatherData.list[0].weather[0].description}</Text>
                    </Animated.View>

                    <View style={{ alignItems: 'center' }}>
                        <Animated.View style={[styles.view_news,
                        { width: animatedNewsHeight, marginTop: 35, }]}>
                            <View style={weather.container1}>
                                <View style={{ flexDirection: 'column', }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            source={{ uri: `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png` }}
                                            style={{ width: 75, height: 75 }}
                                        />
                                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                            <View style={{ width: 250, flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between' }}>
                                                <Text style={{}}>Макс. температура:</Text>
                                                <Text style={{ fontSize: 16 }}>{weatherData.list[0].main.temp_max}°</Text>
                                            </View>
                                            <View style={{ width: 250, flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
                                                <Text style={{}}>Мін. температура:</Text>
                                                <Text style={{ fontSize: 16 }}>{weatherData.list[0].main.temp_min}°</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <View style={{ paddingBottom: 10 }}>
                                                <Text style={{ fontSize: 12 }}>Відчувається</Text>
                                                <Text>{weatherData.list[0].main.feels_like}°C</Text>
                                            </View>
                                            <View style={{ paddingBottom: 10 }}>
                                                <Text style={{ fontSize: 12 }}>Швидкість вітру</Text>
                                                <Text>{weatherData.list[0].wind.speed} м/с</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'column' }}>
                                            <View style={{ paddingBottom: 10 }}>
                                                <Text style={{ fontSize: 12 }}>Вологість</Text>
                                                <Text>{weatherData.list[0].main.humidity}%</Text>
                                            </View>
                                            <View style={{ paddingBottom: 10 }}>
                                                <Text style={{ fontSize: 12 }}>Тиск</Text>
                                                <Text>{weatherData.list[0].main.pressure} hPa</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ alignItems: 'center', padding: 10, paddingTop: -10 }}>
                                <Text style={{ fontSize: 25 }}>Прогноз на тиждень</Text>
                            </View>

                            {buttonsData.map(button => (
                                <TouchableOpacity
                                    key={button.id}
                                    onPress={() => handleButtonPress(button.id)}
                                    style={[styles.button, button.id === activeButtonId && styles.activeButton]}
                                >
                                    <View style={weather.container2}>
                                        <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={styles.icon_board}>
                                                    <Image
                                                        source={{ uri: `https://openweathermap.org/img/w/${button.icon}.png` }}
                                                        style={{ width: 50, height: 50 }}
                                                    />
                                                </View>
                                                <Text style={{ fontSize: 16, paddingTop: 12 }}>
                                                    {button.day}
                                                </Text>
                                            </View>
                                            <Text style={{ paddingTop: 15, paddingBottom: 2, fontSize: 16 }}>
                                                {button.temp_min}/{button.temp_max}
                                            </Text>
                                        </View>
                                    </View>
                                    {button.id === activeButtonId &&
                                        <View style={weather.container3}>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ paddingBottom: 20, paddingTop: 10 }}>
                                                    <Text style={{ fontSize: 12 }}>Відчувається</Text>
                                                    <Text>{button.feels_like_max} / {button.feels_like_min}°C</Text>
                                                </View>
                                                <View style={{ paddingBottom: 10 }}>
                                                    <Text style={{ fontSize: 12 }}>Швидкість вітру</Text>
                                                    <Text>{button.speed_max}м/с</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ paddingBottom: 20, paddingTop: 10 }}>
                                                    <Text style={{ fontSize: 12 }}>Вологість</Text>
                                                    <Text>{button.humidity_min}%</Text>
                                                </View>
                                                <View style={{ paddingBottom: 10 }}>
                                                    <Text style={{ fontSize: 12 }}>Тиск</Text>
                                                    <Text>{button.pressure} hPa</Text>
                                                </View>
                                            </View>
                                        </View>
                                    }
                                </TouchableOpacity>
                            ))}
                        </Animated.View>
                    </View>
                </ScrollView >
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
        </LinearGradient >
    );
}