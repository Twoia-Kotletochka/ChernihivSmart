import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { firebase } from '../../config'
import { style } from '../../styles/addaddress';

import { Ionicons } from '@expo/vector-icons';

const AddAddress = () => {
    let count = 0;
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [rooms, setRooms] = useState('')

    const navigation = useNavigation()

    const go_main = () => {
        navigation.navigate('Profile')
    }

    const currentUser = firebase.auth().currentUser;
    const uid = currentUser.uid;
    const userDoc = firebase.firestore().collection('users').doc(uid);
    var map = ""

    userDoc.get()
        .then((doc) => {
            if (doc.exists) {
                const addressObject = doc.data().address;
                // Цикл по первому Map
                Object.keys(addressObject).forEach((key) => {
                    // Цикл по вложенному Map
                    Object.keys(addressObject[key]).forEach(() => {
                        count++;
                    });
                });

                console.log(`Кількість об'єктів всередині map : ${(count / 3)}`);
            } else {
                console.log('Документ не знайдено');
            }
        })
        .catch((error) => {
            console.error('Помилка отримання документа:', error);
        });

    const add = () => {
        map = "map" + ((count / 3) + 1)
        console.log(map);

        userDoc.set({
            address: { [map]: { street: street, house: house, rooms: rooms } }
        }, { merge: true })
            .then(() => {
                console.log('Адресу успішно додано!');

            })
            .catch((error) => {
                console.error('Error adding address: ', error);
                Alert.alert('Відбулась помилка!', error)
            });

        navigation.navigate('Address')
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