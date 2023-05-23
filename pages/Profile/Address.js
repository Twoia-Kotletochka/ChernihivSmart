import React, { useEffect, useState, useCallback } from 'react'
import { Text, View, StatusBar, TouchableOpacity, ScrollView, Animated, Alert, RefreshControl } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import { firebase } from '../../config'
import { styles } from '../../styles/address';

import Icon_home from '../../assets/icon_cards_svg/icon_home.svg'
import Icon_add from '../../assets/icon_profile/icon_add.svg'
import Icon_adres from '../../assets/icon_profile/adres.svg'
import Icon_basket from '../../assets/icon_profile/basket.svg'

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
    let count = 0;
    const databaseContent = [];
    const navigation = useNavigation()
    const [data, setData] = useState(null);
    const [refreshing, setRefreshing] = useState(false)


    firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if (snapshot.exists) {
                setData(snapshot.data().address);
            }
            else {
                console.log('User does not exist')
            }
        })

    if (data) {
        Object.keys(data).sort().forEach((key) => {
            const value = data[key];
            databaseContent.push(
                <View key={key} style={styles.container2}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.icon_board, { marginRight: 20 }]}>
                            <Icon_adres style={{ width: '80%', height: '80%' }} />
                        </View>
                        <View>
                            <Text style={[styles.title1,{fontSize: 12}]}>Вул. - {value.street}</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.title2}>Дім - {value.house}</Text>
                                <Text style={[styles.title2, { marginLeft: 30 }]}>Кв. - {value.rooms}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{ marginRight: 5 }} onPress={() => delete_address(key)}>
                        <View style={styles.icon_basket}>
                            <Icon_basket style={{ width: '54%', height: '54%' }} />
                        </View>
                    </TouchableOpacity>
                </View >
            );
        })
    }


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setRefreshing(false);
    }, []);

    const go_main = () => {
        navigation.navigate('Profile')
    }

    const delete_address = (key) => {
        console.log(key)
        let temp = "address." + key
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .update({
                [temp]: firebase.firestore.FieldValue.delete(),
            })
            .then(function () {
                showaddress(databaseContent, data)
                console.log("Поле успешно удалено из Map в Firestore!");
            })
            .catch(function (error) {
                showaddress(databaseContent, data)
                console.error("Ошибка при удалении поля в Map Firestore: ", error);
            });


    }

    const go_addaddress = () => {
        if (data) {
            Object.keys(data).forEach((key) => {
                // Цикл по вложенному Map
                Object.keys(data[key]).forEach(() => {
                    count++;
                });
            });
            console.log(`Кількість об'єктів всередині map : ${(count / 3)}`);
            if ((count / 3) >= 5) {
                Alert.alert('Додано максимальну кількість адрес')
            }
            else
                navigation.navigate('AddAddress')
        }
        else {
            navigation.navigate('AddAddress')
        }
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
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
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
                        <TouchableOpacity style={styles.container2_static} onPress={go_addaddress}>
                            <View style={{ marginLeft: 5, paddingTop: 15 }}>
                                <View style={styles.icon_board_static}>
                                    {<Icon_add style={{ width: '80%', height: '80%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Додати адресу</Text>
                                <Text style={styles.title2}>Додайте свою адресу, щоб ми могли сповіщати</Text>
                                <Text style={styles.title2}>вас про те, що відбувається у вас вдома</Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </ScrollView>

            <View style={styles.header}>
                <Animated.View
                    style={[{ opacity: animateopacityweather }, {}]}>
                    <TouchableOpacity onPress={go_main}>
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
