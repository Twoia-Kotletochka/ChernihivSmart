import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar, ScrollView, Animated, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../../styles/main'
import { weather } from '../../styles/weather'
import News from '../../components/News'

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

const animateopacitycard = AnimatedOp.interpolate({
    inputRange: [0, 100 - 0], //ругулятор раньше позже 
    outputRange: [1, 0],
    extrapolate: 'clamp'
});

const animatedNewsHeight = AnimatedOp.interpolate({
    inputRange: [0, 300 - 0],
    outputRange: ['95%', '100%'],
    extrapolate: 'clamp'
});



Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds"]).isRequired,
}


const weatherOptions = {
    Thunderstorm: {
        text: 'Гроза',
    },
    Drizzle: {
        text: 'Дощик',
    },
    Rain: {
        text: 'Дождь',
    },
    Snow: {
        text: 'Сніг',
    },
    Clear: {
        text: 'Сонячно',
    },
    Clouds: {
        text: 'Хмарно',
    },
}


export default function Weather({ temp, condition }) {

    return (
        <LinearGradient
            colors={['#17153C', '#D5BCA8']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >

            <ScrollView
                scrollEventThrottle={16}
                style={styles.scrollview_vertical}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: AnimatedOp } } }],
                    { useNativeDriver: false }
                )}
            >
                <View style={weather.weather_contetn}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 30, }}>{temp}</Text>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>{weatherOptions[condition].text}</Text>

                </View>

                <View style={{ alignItems: 'center' }}>
                    <Animated.View style={[styles.view_news,
                    { width: animatedNewsHeight, marginTop: 35, }]}>
                        <News />
                    </Animated.View>
                </View>
            </ScrollView>

            <Animated.View style={[{ opacity: animateopacityweather }, weather.header_text]}>
                <Text style={{ color: '#EEEEEE', alignSelf: 'center', marginTop: 5, fontSize: 22 }}>Чернігів</Text>
            </Animated.View>


            <View
                style={weather.header}
            >

                <Animated.View
                    style={[{ opacity: animateopacityweather }, {}]}>

                    <View style={[weather.weather]}>
                        <Entypo name="cross" size={27} color="white" />

                    </View>
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