import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import firebase from '../../config'
import { style } from '../../styles/addaddress';
import { MaterialIcons } from '@expo/vector-icons';

const Edit_name = () => {
    const [name, setName] = useState('')
    const navigation = useNavigation()

    const go_address = () => {
        navigation.navigate('Edit_Prodile')
    }

    const currentUser = firebase.auth().currentUser;
    const uid = currentUser.uid;

    const edit = () => {
        firebase.firestore().collection('users').doc(uid).update({ name: name })
        navigation.navigate('Edit_Prodile')
    }

    return (
        <SafeAreaView style={style.container}>
            <MaterialIcons style={{ marginBottom: 20 }} name="drive-file-rename-outline" size={110} color="#4BB5F5" />
            <View style={[style.box, { height: 190 }]}>
                <View style={style.inputline}>
                    <TextInput
                        style={style.input}
                        placeholder="Ім'я"
                        onChangeText={(name) => setName(name)}
                        autoCorrect={false}
                        maxLength={10}
                    />
                </View>

                <TouchableOpacity
                    style={style.button}
                    onPress={() => edit(name)}>
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

export default Edit_name;