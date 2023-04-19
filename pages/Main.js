import React, { useCallback, useState } from 'react'
import { Text, View, StatusBar, ScrollView, Animated, TouchableOpacity, RefreshControl } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../styles/main'
import News from '../components/News'
import Cards from '../components/Cards'
import { firebase } from '../config'


import { useNavigation } from '@react-navigation/core'
//header
import Icon_profile from '../assets/icon_profile.svg'
//weather
import Icon_weather from '../assets/icon_weather/cloud.svg'

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

export default function Main() {
    const navigation = useNavigation()
    const [refreshing, setRefreshing] = useState(false);
    const [counter, setCounter] = useState(0);

    const go_profile = () => {
        //firebase.auth().signOut()
        navigation.navigate('Profile')
    }

    const go_weather = () => {
        firebase.auth().signOut()
        navigation.navigate('Weather')
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        //

        setRefreshing(false);
    }, []);


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
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Cards animateopacitycard={animateopacitycard} />

                <View style={{ alignItems: 'center' }}>
                    <Animated.View style={[styles.view_news,
                    { width: animatedNewsHeight, }]}>
                        <News />
                    </Animated.View>
                </View>
            </ScrollView>

            <View
                style={styles.header}
            >
                <TouchableOpacity
                    onPress={go_profile}>
                    <Animated.View style={[styles.profile, { opacity: animateopacityprofil }]}>
                        <Icon_profile style={{ width: '60%', height: '60%' }} />
                    </Animated.View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={go_weather}>
                    <Animated.View
                        style={[{ opacity: animateopacityweather },
                        { flexDirection: 'row', alignItems: "center" }]}>

                        <Text style={styles.degrees_text}>15°</Text>

                        <View style={[styles.weather]}>
                            <Icon_weather style={{ width: '60%', height: '60%' }} />
                        </View>
                    </Animated.View>
                </TouchableOpacity>
            </View>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </LinearGradient>
    );
}