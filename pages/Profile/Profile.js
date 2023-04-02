import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import { firebase } from '../../config'
import { styles } from '../../styles/profile'

import { EvilIcons } from '@expo/vector-icons';
import Icon_profile from '../../assets/icon_profile.svg'
import Icon_adres from '../../assets/icon_profile/adres.svg'
import Icon_card from '../../assets/icon_profile/card.svg'
import Icon_notification from '../../assets/icon_profile/notification.svg'
import Icon_lock from '../../assets/icon_profile/lock.svg'
import Icon_question from '../../assets/icon_profile/question.svg'
import Icon_support from '../../assets/icon_profile/support.svg'

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

const Profile = () => {
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const navigation = useNavigation()

    useEffect(() => {
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid).get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setName(snapshot.data())
                    setTel(snapshot.data())
                }
                else {
                    console.log('User does not exist')
                }
            })
    }, [])

    const go_main = () => { navigation.navigate('Main') }
    const signout = () => { firebase.auth().signOut(); navigation.replace('Load'); }
    const go_address = () => { navigation.navigate('Address'); }

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
                        <View style={styles.profile_container_circle}>
                            <Icon_profile style={{ width: '60%', height: '60%' }} />
                        </View>
                        <Text style={styles.text_name}>{name.name}</Text>
                        <Text style={styles.text_tel}>{tel.tel}</Text>
                    </View>
                </Animated.View>

                <View style={{ alignItems: 'center' }}>
                    <Animated.View style={[styles.view_news,
                    { width: animatedNewsHeight, }]}>
                        <Text style={{ fontSize: 24, marginLeft: 20, }}>Налаштування</Text>
                        <TouchableOpacity style={styles.container2} onPress={go_address}>
                            <View style={{ marginLeft: 5, paddingTop: 15 }}>
                                <View style={styles.icon_board}>
                                    {<Icon_adres style={{ width: '80%', height: '80%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Адреса</Text>
                                <Text style={styles.title2}>Запишіть адресу, щоб ми могли сповіщати</Text>
                                <Text style={styles.title2}>вас про те, що відбувається у вас вдома</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container2}>
                            <View style={{ marginLeft: 5, paddingTop: 15 }}>
                                <View style={styles.icon_board}>
                                    {<Icon_card style={{ width: '75%', height: '75%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Картка</Text>
                                <Text style={styles.title2}>Вкажіть свою картку, щоб здійснювати</Text>
                                <Text style={styles.title2}>миттєву оплату в сервісі</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container2}>
                            <View style={{ marginLeft: 5, paddingTop: 15 }}>
                                <View style={styles.icon_board}>
                                    {<Icon_notification style={{ width: '80%', height: '80%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Сповіщення</Text>
                                <Text style={styles.title2}>Налаштуйте повідомлення як вам зручно</Text>
                                <Text style={styles.title2}></Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container2}>
                            <View style={{ marginLeft: 5, paddingTop: 15 }}>
                                <View style={styles.icon_board}>
                                    {<Icon_lock style={{ width: '70%', height: '70%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Безпека</Text>
                                <Text style={styles.title2}>Створіть пароль для безпечного</Text>
                                <Text style={styles.title2}>користування програмою</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 24, marginLeft: 20, }}>FAQ</Text>

                        <TouchableOpacity style={styles.container2}>
                            <View style={{ marginLeft: 5, paddingTop: 15 }}>
                                <View style={styles.icon_board}>
                                    {<Icon_question style={{ width: '70%', height: '70%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Часті запитання</Text>
                                <Text style={styles.title2}>Тут відповіді на запитання, які</Text>
                                <Text style={styles.title2}>найчастіше виникають у користувачів</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.container2}>
                            <View style={{ marginLeft: 5, paddingTop: 15 }}>
                                <View style={styles.icon_board}>
                                    {<Icon_support style={{ width: '70%', height: '70%' }} />}
                                </View>
                            </View>
                            <View style={{ flexDirection: 'column', paddingTop: 5, paddingBottom: 15 }}>
                                <Text style={styles.title1}>Підтримка</Text>
                                <Text style={styles.title2}>Зв'яжіться з нами, якщо виникла проблема</Text>
                                <Text style={styles.title2}></Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.container2, { justifyContent: 'center', alignContent: 'center', marginTop: 25 }]}
                            onPress={signout}>
                            <View style={{ paddingTop: 10, paddingBottom: 10, }}>
                                <Text style={{ fontSize: 18 }}>Вихід</Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </ScrollView>

            <View style={styles.header}>
                <TouchableOpacity
                //onPress={go_profile}
                >
                    <Animated.View style={[styles.editor, { opacity: animateopacityprofil }]}>
                        <EvilIcons name="pencil" size={42} color="white" />
                    </Animated.View>
                </TouchableOpacity>

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

export default Profile;
