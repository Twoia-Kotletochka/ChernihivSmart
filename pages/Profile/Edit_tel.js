import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import firebase from '../../config'
import { style } from '../../styles/addaddress';
import { MaterialIcons } from '@expo/vector-icons';

const Edit_tel = () => {
    const [tel, setTel] = useState('')
    const navigation = useNavigation()

    const go_address = () => {
        navigation.navigate('Edit_Prodile')
    }

    const currentUser = firebase.auth().currentUser;
    const uid = currentUser.uid;

    const edit = () => {
        if (tel.length === 12 || tel.length === 13) {
            firebase.firestore().collection('users').doc(uid).update({ tel: tel })
            navigation.navigate('Edit_Prodile')
        }
        else {
            Alert.alert('Не коректний ввід',
                'Введіть номер телефону за прикладом\n380685554433 або +380685554433.')
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <MaterialIcons style={{ marginBottom: 20 }} name="drive-file-rename-outline" size={110} color="#4BB5F5" />
            <View style={[style.box, { height: 190 }]}>
                <View style={style.inputline}>
                    <TextInput
                        style={style.input}
                        placeholder="Номер телефону"
                        onChangeText={(tel) => setTel(tel)}
                        autoCorrect={false}
                        maxLength={13}
                        keyboardType='phone-pad'
                    />
                </View>

                <TouchableOpacity
                    style={style.button}
                    onPress={() => edit(tel)}>
                    <Text style={{ color: 'white', fontSize: 22 }}>Змінити</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.button}
                    onPress={go_address}>
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

export default Edit_tel;