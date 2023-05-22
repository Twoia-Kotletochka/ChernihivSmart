import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import { Text, View, StatusBar, ScrollView, Animated, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../../styles/main'
import { weather } from '../../styles/weather'
import { useNavigation } from '@react-navigation/core'
import { GetWeather } from './GetWeather';
//weather
import Icon_sun from '../../assets/icon_cloud_svg/sun.svg'
import Icon_clouds from '../../assets/icon_cloud_svg/сlouds.svg'
import Icon_fog from '../../assets/icon_cloud_svg/fog.svg'
import Icon_rain from '../../assets/icon_cloud_svg/rain.svg'
import Icon_snow from '../../assets/icon_cloud_svg/snow.svg'
import Icon_thunderstorm from '../../assets/icon_cloud_svg/thunderstorm.svg'

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

    function getWeatherIcon(code) {
        if (code === '01d') {
            return <Icon_sun />
        } else if (code === '02d') {
            return <Icon_sun />
        } else if (code === '03d' || code === '04d') {
            return <Icon_clouds />
        } else if (code === '09d' || code === '10d') {
            return <Icon_rain />
        } else if (code === '11d' || code === '11n') {
            return <Icon_thunderstorm />
        } else if (code === '13d' || code === '13n') {
            return <Icon_snow />
        } else if (code === '50d' || code === '50n') {
            return <Icon_fog />
        } else {
            return <Icon_sun />
        }
    }

    function setUkrainianDescription(englishDescription) {
        let description = null;
        switch (englishDescription.toLowerCase()) {
            case "clear sky":
                description = "Ясно";
                break;
            case "few clouds":
                description = "Малохмарно";
                break;
            case "scattered clouds":
                description = "Місцями хмарно";
                break;
            case "broken clouds":
                description = "Похмуро";
                break;
            case "overcast clouds":
                description = "Хмарно";
                break;
            case "shower rain":
                description = "Дощ з проясненнями";
                break;
            case "rain":
                description = "Дощ";
                break;
            case "light rain":
                description = "Слабкий дощ";
                break;
            case "moderate rain":
                description = "Помірний дощ";
                break;
            case "heavy intensity rain":
                description = "Сильний дощ";
                break;
            case "very heavy rain":
                description = "Дуже сильний дощ";
                break;
            case "extreme rain":
                description = "Надзвичайно сильний дощ";
                break;
            case "freezing rain":
                description = "Ожеледиця";
                break;
            case "light intensity shower rain":
                description = "Слабкий дощ з проясненнями";
                break;
            case "heavy intensity shower rain":
                description = "Сильний дощ з проясненнями";
                break;
            case "thunderstorm":
                description = "Гроза";
                break;
            case "thunderstorm with light rain":
                description = "Гроза з легким дощем";
                break;
            case "thunderstorm with rain":
                description = "Гроза з дощем";
                break;
            case "thunderstorm with heavy rain":
                description = "Гроза з сильним дощем";
                break;
            case "light thunderstorm":
                description = "Легка гроза";
                break;
            case "heavy thunderstorm":
                description = "Сильна гроза";
                break;
            case "ragged thunderstorm":
                description = "Локальна гроза";
                break;
            case "thunderstorm with light drizzle":
                description = "Гроза з мінливою мрякою";
                break;
            case "thunderstorm with drizzle":
                description = "Гроза з мрякою";
                break;
            case "thunderstorm with heavy drizzle":
                description = "Гроза із сильною мрякою";
                break;
            case "snow":
                description = "Сніг";
                break;
            case "light snow":
                description = "Слабкий сніг";
                break;
            case "heavy snow":
                description = "Сильний сніг";
                break;
            case "sleet":
                description = "Дощ зі снігом";
                break;
            case "shower sleet":
                description = "Мокрий сніг";
                break;
            case "light rain and snow":
                description = "Слабкий дощ зі снігом";
                break;
            case "rain and snow":
                description = "Дощ із снігом";
                break;
            case "light shower snow":
                description = "Слабкий снігопад";
                break;
            case "shower snow":
                description = "Снігопад";
                break;
            case "heavy shower snow":
                description = "Сильний снігопад";
                break;
            case "mist":
                description = "Туман";
                break;
            case "smoke":
                description = "Дим";
                break;
            case "haze":
                description = "Легкий туман";
                break;
            case "sand, dust whirls":
                description = "Пісок, пилові вихори";
                break;
            case "fog":
                description = "Туман";
                break;
            case "sand":
                description = "Пісок";
                break;
            case "dust":
                description = "Пил";
                break;
            case "volcanic ash":
                description = "Вулканічний попіл";
                break;
            case "squalls":
                description = "Шквали";
                break;
            case "tornado":
                description = "Торнадо";
                break;
            default:
                description = englishDescription;
        }
        return description;
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

        Object.keys(dailyWeatherDatattonsData).forEach(date => {
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
                    temp_max: Math.round(Math.max(...temps)),
                    temp_min: Math.round(Math.min(...temps)),
                    humidity_min: Math.min(...humidities),
                    pressure: Math.round(totalPressure / dailyWeatherDatattonsData[date].length),
                    speed_max: Math.max(...windSpeeds),
                }
            )
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
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, }}>{setUkrainianDescription(weatherData.list[0].weather[0].description)}</Text>
                    </Animated.View>
                    <View style={{ alignItems: 'center' }}>
                        <Animated.View style={[styles.view_news,
                        { width: animatedNewsHeight, marginTop: 35, }]}>
                            <View style={weather.container1}>
                                <View style={{ flexDirection: 'column', }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ height: 80, width: 80, margin:10 }}>{getWeatherIcon(weatherData.list[0].weather[0].icon)}</View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                            <View style={{ width: 200, flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between' }}>
                                                <Text style={{}}>Макс. температура:</Text>
                                                <Text style={{ fontSize: 16 }}>{buttonsData[0].temp_max}°</Text>
                                            </View>
                                            <View style={{ width: 200, flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
                                                <Text style={{}}>Мін. температура:</Text>
                                                <Text style={{ fontSize: 16 }}>{buttonsData[0].temp_min}°</Text>
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

                            {buttonsData.slice(1).map(button => (
                                <TouchableOpacity
                                    key={button.id}
                                    onPress={() => handleButtonPress(button.id)}
                                    style={[styles.button, button.id === activeButtonId && styles.activeButton]}
                                >
                                    <View style={weather.container2}>
                                        <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>

                                                <View style={styles.icon_board}>
                                                    <View style={{ width: 40, height: 40 }}>{getWeatherIcon(button.icon)}</View>
                                                </View>
                                                <Text style={{ fontSize: 16, paddingTop: 12 }}>
                                                    {button.day}
                                                </Text>
                                            </View>
                                            <Text style={{ paddingTop: 15, paddingBottom: 2, fontSize: 16 }}>
                                                {button.temp_max}/{button.temp_min}
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