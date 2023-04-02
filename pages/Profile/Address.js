import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Animated, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import { firebase } from '../../config'
import { styles } from '../../styles/address';

import Icon_home from '../../assets/icon_cards_svg/icon_home.svg'
import Icon_add from '../../assets/icon_profile/icon_add.svg'
import Icon_adres from '../../assets/icon_profile/adres.svg'

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

const animateopacityprofile = AnimatedOp.interpolate({
    inputRange: [0, 100 - 0], //ругулятор раньше позже 
    outputRange: [1, 0],
    extrapolate: 'clamp'
});

const animatedNewsHeight = AnimatedOp.interpolate({
    inputRange: [0, 300 - 0],
    outputRange: ['95%', '100%'],
    extrapolate: 'clamp'
});

const Address = () => {
    const navigation = useNavigation()
    const myMap = new Map();
    const [data, setData] = useState(null);

    const currentUser = firebase.auth().currentUser;
    const uid = currentUser.uid;
    var docRef = firebase.firestore().collection('users').doc(uid);

    // docRef.get().then(function (doc) {
    //     if (doc.exists) {
    //         // Отримання даних з map в середині map
    //         var street = doc.data().address.map1.street;
    //         setStreet(street);
    //         console.log("User's age: ", street);
    //     } else {
    //         console.log("No such document!");
    //     }
    // }).catch(function (error) {
    //     console.log("Error getting document:", error);
    // });

    useEffect(() => {
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid).get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setData(snapshot.data().address);
                }
                else {
                    console.log('User does not exist')
                }
            })
    }, [])

    const go_main = () => {
        navigation.navigate('Profile')
    }

    const go_addaddress = () => {
        navigation.navigate('AddAddress')
    }

    const databaseContent = [];
    if (data) {
        Object.keys(data).reverse().forEach((key) => {
            const value = data[key];
            databaseContent.push(
                <TouchableOpacity style={styles.container2}>
                    <View style={{ marginLeft: 5, paddingTop: 15 }}>
                        <View style={styles.icon_board}>
                            {<Icon_adres style={{ width: '80%', height: '80%' }} />}
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                        <Text style={styles.title1}>Вул. - {value.street}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                            <Text style={styles.title2}>Дім - {value.house}</Text>
                            <Text style={[styles.title2, { marginLeft: 30 }]}>Кв. - {value.rooms}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        })
    }

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
                <Animated.View style={[styles.profile_containe, { opacity: animateopacityprofile, }]}>
                    <View style={styles.profile_container}>
                        <View style={styles.profile_container_card}>
                            <Icon_home style={styles.icon_cards} />
                            <Text style={{ fontSize: 20, marginBottom: 5, marginTop: 5 }}>Мої адреси</Text>
                            <Text>За цими адресами ви будете отримувати</Text>
                            <Text>сповіщення від комунальних служб</Text>
                        </View>
                    </View>
                </Animated.View>

                <View style={{ alignItems: 'center' }}>
                    <Animated.View style={[styles.view_news,
                    { width: animatedNewsHeight, }]}>
                        {/* <Text style={{ fontSize: 24, marginLeft: 20, }}>Налаштування</Text> */}

                        {databaseContent}

                        <TouchableOpacity style={styles.container2} onPress={go_addaddress}>
                            <View style={{ marginLeft: 5, paddingTop: 15 }}>
                                <View style={styles.icon_board}>
                                    {<Icon_add style={{ width: '80%', height: '80%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Адреса</Text>
                                <Text style={styles.title2}>Запишіть свою адресу, щоб ми могли сповіщати</Text>
                                <Text style={styles.title2}>вас про те, що відбувається у вас вдома</Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </ScrollView>

            <View style={styles.header}>
                <Animated.View
                    style={[{ opacity: animateopacityweather }, {}]}>
                    <TouchableOpacity
                        onPress={go_main}
                    >
                        <View style={[styles.button_back]}>
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



export default Address;
