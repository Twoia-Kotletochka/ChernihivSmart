import React from 'react'
import { Text, View, StyleSheet, StatusBar, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react'

export default function RegistrPassword({ navigation }) {
    const [numberFirstPassword, numberSecondPassword, onChangeText] = useState("");
    const [isSecureEntry, SetIsSecureEntry] = useState(true);

    const loadScenePassword = () => {
        navigation.navigate('Main');
    }
    return (
        <KeyboardAvoidingView style={registerStyles.container}>

            <Image source={require("../assets/logo.png")} style={registerStyles.img} />

            <View style={registerStyles.box}>
                <Text style={{ fontSize: 27 }}>Створіть пароль</Text>

                <TextInput
                    style={registerStyles.input}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecureEntry}
                    keyboardType='password'
                    placeholder="Введіть пароль"
                    value={numberFirstPassword}
                />

                <TextInput
                    style={registerStyles.input}
                    // onChangeText={onChangeText}
                    secureTextEntry={true}
                    keyboardType='password'
                    placeholder="Повторіть пароль"

                // value={numberSecondPassword}
                />
                <Text style={{ margin: 5, fontSize: 12 }}>Введіть пароль два рази</Text>
            </View>

            <TouchableOpacity
                style={registerStyles.button}
                onPress={loadScenePassword}
            >
                <Text style={{ color: 'white', fontSize: 22 }}>Далі</Text>
            </TouchableOpacity>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </KeyboardAvoidingView>
    );
}

const registerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 40,
        width: '70%',
        color: 'red',
        backgroundColor: '#4BB5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    box: {
        margin: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '90%',
        height: 170,
        borderRadius: 10,
        elevation: 9,
        marginBottom: 20,
        justifyContent: 'space-evenly'
    },
    img: {
        marginTop: -120,
        marginBottom: 5,
        width: 130,
        height: 130
    },
    input: {
        height: '30%',
        borderWidth: 1,
        width: '62%',
        borderColor: 'white',
        backgroundColor: 'white',
        borderBottomColor: 'rgb(204, 204, 204)',
        fontSize: 20
    }
});
