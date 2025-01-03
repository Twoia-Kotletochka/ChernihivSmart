import React, { useCallback, useState, useEffect } from 'react'
import { Text, View, StatusBar, ScrollView, Animated, TouchableOpacity, RefreshControl, ActivityIndicator, Modal, Pressable, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../styles/main'
import { styles_modal } from '../styles/modalMain'
import Cards from '../components/Cards'
import { GetWeather } from './Weather/GetWeather';
import firebase from '../config'

import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import Icon_water from '../assets/icon_news_svg/water.svg'
import Icon_gas from '../assets/icon_news_svg/gas.svg'
import Icon_light from '../assets/icon_news_svg/light.svg'
import Icon_hot_water from '../assets/icon_news_svg/hot_water'
import Icon_news from '../assets/icon_news_svg/news'
import Icon_achtung from '../assets/icon_news_svg/achtung'

import { useNavigation } from '@react-navigation/core'
//header
import Icon_profile from '../assets/icon_profile.svg'
//weather
import Icon_sun from '../assets/icon_cloud_white_svg/sun.svg'
import Icon_clouds from '../assets/icon_cloud_white_svg/сlouds.svg'
import Icon_fog from '../assets/icon_cloud_white_svg/fog.svg'
import Icon_rain from '../assets/icon_cloud_white_svg/rain.svg'
import Icon_snow from '../assets/icon_cloud_white_svg/snow.svg'
import Icon_thunderstorm from '../assets/icon_cloud_white_svg/thunderstorm.svg'

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
    const database = firebase.database()
    const navigation = useNavigation()
    const [refreshing, setRefreshing] = useState(false)
    const [kkey, setKkey] = useState(1)
    const [weatherData, setWeatherData] = useState(null);
    const data_uidArr = []
    const databaseContent = []
    const [data, setData] = useState(null)
    const [data_uid, setData_uid] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        const ref = database.ref('news/');
        const listener = ref.on('value', (snapshot) => {
            setData(snapshot.val());
        });
        return () => {
            ref.off('value', listener);
        };
    }, []);

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

    const go_profile = () => {
        navigation.navigate('Profile')
    }

    const go_weather = () => {
        navigation.navigate('Weather')
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        //
        setRefreshing(false);
    }, []);

    const showModal = (key) => {
        setKkey(key);
        setModalVisible(true);
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

    const iconfunc = (icon) => {
        if (icon === "light") {
            return <Icon_light style={{ width: '80%', height: '80%' }} />
        }
        else if (icon === "gas") {
            return <Icon_gas style={{ width: '80%', height: '80%' }} />
        }
        else if (icon === "water") {
            return <Icon_water style={{ width: '80%', height: '80%' }} />
        }
        else if (icon === "hot_water") {
            return <Icon_hot_water style={{ width: '80%', height: '80%' }} />
        }
        else if (icon === "news") {
            return <Icon_news style={{ width: '80%', height: '80%' }} />
        }
        else if (icon === "achtung") {
            return <Icon_achtung style={{ width: '100%', height: '100%' }} />
        }
    }

    if (data_uid) {
        Object.keys(data_uid).reverse().forEach((key) => {
            data_uidArr.push(data_uid[key].street)
        })
    }

    if (!data) {
        return (
            <View style={{ height: 600 }}>
                <ActivityIndicator color='#4BB5F5' size='large' animating={true} style={{ marginTop: 60 }} />
            </View>
        )
    }

    Object.keys(data).reverse().forEach((key) => {
        const value = data[key];
        if (value.street !== undefined) {
            if (data_uidArr.some(element => element === data[key].street)) {
                databaseContent.push(
                    <TouchableOpacity key={key} style={styles.container2} onPress={() => showModal(key)}>
                        <View style={{ flexDirection: 'row', paddingTop: 5, alignItems: 'center', paddingLeft: 7 }}>
                            <View style={styles.icon_board}>
                                {iconfunc(value.icon)}
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: RFValue(18) }}>
                                    {value.title}
                                </Text>
                                <Text style={{ fontSize: RFValue(12) }}>
                                    {value.subtext}
                                </Text>
                                <Text style={{ fontSize: RFValue(11) }}>
                                    {value.subtext_mini}
                                </Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 10, paddingTop: 5, paddingBottom: 5, paddingLeft: 5 }}>
                            {value.datefull + "   вул." + value.street + " " + value.house}  {value.rooms !== '' ? 'кв.' + value.rooms : ''}
                        </Text>
                    </TouchableOpacity>
                )
            }
        }
        else if (value.street === undefined) {
            databaseContent.push(
                <TouchableOpacity key={key} style={styles.container1} onPress={() => showModal(key)}>
                    <View style={{ flexDirection: 'row', paddingTop: 5, alignItems: 'center', paddingLeft: 7 }}>
                        <View style={styles.icon_board}>
                            {iconfunc(value.icon)}
                        </View>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: RFValue(18) }}>
                                {value.title}
                            </Text>
                            <Text style={{ fontSize: RFValue(12) }}>
                                {value.subtext}
                            </Text>
                            <Text style={{ fontSize: RFValue(11) }}>
                                {value.subtext_mini}
                            </Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 10, paddingTop: 5, paddingBottom: 5, paddingLeft: 5 }}>
                        {value.datefull}
                    </Text>
                </TouchableOpacity>
            );
        }
    });

    setTimeout(() => {
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid).get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setData_uid(snapshot.data().address);

                }
                else {
                    console.log('User does not exist')
                }
            })
    }, 8000);

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
                }>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles_modal.centeredView}>
                        <View style={styles_modal.modalView}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                            >
                                <Text style={styles_modal.modalText}>{data[kkey].discription}</Text>
                            </ScrollView>
                            <Pressable
                                style={[styles_modal.button, styles_modal.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles_modal.textStyle}>Закрити</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <Cards animateopacitycard={animateopacitycard} />

                <View style={{ alignItems: 'center' }}>
                    <Animated.View style={[styles.view_news,
                    { width: animatedNewsHeight, }]}>
                        <View>{databaseContent}</View>
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
                {weatherData && (
                    <TouchableOpacity
                        onPress={go_weather}>
                        <Animated.View
                            style={[{ opacity: animateopacityweather },
                            { flexDirection: 'row', alignItems: "center" }]}>

                            <Text style={styles.degrees_text}>{Math.round(weatherData.list[0].main.temp)}°</Text>

                            <View style={[styles.weather]}>
                                <View style={{ height: 30, width: 30 }}>{getWeatherIcon(weatherData.list[0].weather[0].icon)}</View>
                            </View>

                        </Animated.View>
                    </TouchableOpacity>
                )}
            </View>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#17153C"
            />
        </LinearGradient>
    );
}