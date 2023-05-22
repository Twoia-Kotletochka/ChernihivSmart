import React, { useEffect, useState, useCallback } from 'react'
import { Text, View, StatusBar, TouchableOpacity, ScrollView, Animated, Alert, RefreshControl } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import { firebase } from '../../config'
import { styles } from '../../styles/edit_profile';

import Icon_home from '../../assets/icon_cards_svg/icon_home.svg'
import Icon_add from '../../assets/icon_profile/icon_add.svg'
import Icon_basket from '../../assets/icon_profile/basket.svg'
import Icon_adres from '../../assets/icon_profile/adres.svg'
import Icon_card from '../../assets/icon_profile/card.svg'
import Icon_notification from '../../assets/icon_profile/notification.svg'
import Icon_lock from '../../assets/icon_profile/lock.svg'
import Icon_question from '../../assets/icon_profile/question.svg'
import Icon_profile from '../../assets/icon_profile/profile_white.svg'
import Icon_edit from '../../assets/icon_profile/edit.svg'

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

const Edit_Prodile = () => {
    const navigation = useNavigation()
    const [refreshing, setRefreshing] = useState(false);
    const [name, setName] = useState('')

    useEffect(() => {
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid).get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setName(snapshot.data())
                }
                else {
                    console.log('User does not exist')
                }
            })
    }, [])

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setRefreshing(false);
    }, []);

    const go_main = () => {
        navigation.navigate('Profile')
    }
    const go_edit_name = () => {
        navigation.navigate('Edit_name')
    }
    const go_edit_tel = () => {
        navigation.navigate('Edit_tel')
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
                <Animated.View style={[styles.profile_container, { opacity: animateopacityprofile, }]}>
                    <View style={styles.profile_container}>
                        <View style={styles.profile_container_card}>
                            <View style={styles.profile_container_circle}>
                                <Icon_profile style={{ width: '50%', height: '50%', }} />
                            </View>
                            <Text style={{ fontSize: 20, marginBottom: 5, marginTop: 5 }}>{name.name}</Text>
                            <Text>Тут ви можете змінити данні</Text>
                            <Text>свого профілю</Text>
                        </View>
                    </View>
                </Animated.View>

                <View style={{ alignItems: 'center' }}>
                    <Animated.View style={[styles.view_news,
                    { width: animatedNewsHeight, }]}>
                        <TouchableOpacity style={styles.container2}>
                            <View style={styles.container2_icon}>
                                <View style={styles.icon_board}>
                                    {<Icon_card style={{ width: '75%', height: '75%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Змінити фото</Text>
                                <Text style={styles.title2}>Фото буде відображатися у профілі</Text>
                                <Text style={styles.title2}></Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container2} onPress={go_edit_name}>
                            <View style={styles.container2_icon}>
                                <View style={styles.icon_board}>
                                    {<Icon_add style={{ width: '75%', height: '75%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Змінити ім'я</Text>
                                <Text style={styles.title2}>На це ім'я будуть надходити</Text>
                                <Text style={styles.title2}>повідомлення</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container2} onPress={go_edit_tel}>
                            <View style={styles.container2_icon}>
                                <View style={styles.icon_board}>
                                    {<Icon_edit style={{ width: '80%', height: '80%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Змінити номер</Text>
                                <Text style={styles.title2}>Змінити номер телефону якщо з старим</Text>
                                <Text style={styles.title2}>номером виникли проблеми</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container2}>
                            <View style={styles.container2_icon}>
                                <View style={styles.icon_board}>
                                    {<Icon_basket style={{ width: '70%', height: '70%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Видалити акаунт</Text>
                                <Text style={styles.title2}>Після видалення облікового запису всі</Text>
                                <Text style={styles.title2}>ваші дані будуть видалені</Text>
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



export default Edit_Prodile;
