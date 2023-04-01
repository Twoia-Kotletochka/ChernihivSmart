import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { firebase } from '../../config'
import { style } from '../../styles/addaddress';

import { Ionicons } from '@expo/vector-icons';

const AddAddress = () => {
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [rooms, setRooms] = useState('')

    const navigation = useNavigation()

    const currentUser = firebase.auth().currentUser;
    const uid = currentUser.uid;
    const userDoc = firebase.firestore().collection('users').doc(uid);
    const go_main = () => {
        navigation.navigate('Address')
    }

    const add = () => {
        userDoc.update({
            street: street,
            house: house,
            rooms: rooms
        })
            .then(() => {
                console.log('Адресу успішно додано!');
                Alert.alert('Адресу успішно додано!')
                navigation.navigate('Address')
            })
            .catch((error) => {
                console.error('Error adding address: ', error);
                Alert.alert('Відбулась помилка!', error)
            });

    }

    return (
        <SafeAreaView style={style.container}>
            <Ionicons style={{ marginBottom: 20 }} name="md-home" size={110} color='#4BB5F5' />

            <View style={style.box}>
                <View style={style.inputline}>
                    <TextInput
                        style={style.input}
                        placeholder="Вулиця"
                        onChangeText={(street) => setStreet(street)}
                        autoCorrect={false}
                    //maxLength={10}
                    />
                </View>

                <View style={style.inputline}>
                    <TextInput
                        style={style.input}
                        placeholder="Будинок"
                        onChangeText={(house) => setHouse(house)}
                        //keyboardType='phone-pad'
                        autoCorrect={false}
                        maxLength={13}
                    />
                </View>
                <View style={style.inputline}>
                    <TextInput
                        style={style.input}
                        placeholder="Квартира"
                        onChangeText={(rooms) => setRooms(rooms)}
                        keyboardType='phone-pad'
                        autoCorrect={false}
                        maxLength={55}
                    />
                </View>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => add(street, house, rooms)}>
                    <Text style={{ color: 'white', fontSize: 22 }}>Додати</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.button}
                    onPress={go_main}>
                    <Text style={{ color: 'white', fontSize: 22 }}>Назад</Text>
                </TouchableOpacity>
            </View>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </SafeAreaView>
    );
}

export default AddAddress;
