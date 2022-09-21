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

        <KeyboardAvoidingView style={registerStyles.registerMainBox}>

            <Image source={require("../assets/logo.png")} style={registerStyles.registrerImg} />


            <View style={registerStyles.registerContainer}>

                <Text style={[registerStyles.registreText, { fontSize: 27 }]}>Створіть пароль</Text>

                <TextInput
                    style={registerStyles.registerInput}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecureEntry}
                    keyboardType='password'
                    placeholder="First Password"
                    value={numberFirstPassword}
                />

                <TextInput
                    style={registerStyles.registerInput}
                    // onChangeText={onChangeText}
                    secureTextEntry={true}
                    keyboardType='password'
                    placeholder="Second Password"

                // value={numberSecondPassword}
                />
                <Text style={[registerStyles.registreText1, { fontSize: 12 }]}>Введіть пароль два рази</Text>
            </View>

            <TouchableOpacity
                style={registerStyles.registerBoxContainer}
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
    registerMainBox: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerBoxContainer: {
        height: 40,
        color: 'red',
        backgroundColor: '#4BB5F5',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width: 300,
    },
    registerContainer: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 200,
        width: '90%',
        borderRadius: 10,
        elevation: 7,
    },
    registrerImg: {
        marginTop: -120,
        marginBottom: 5,
        width: 130,
        height: 130,
    },

    registreText: {
        marginTop: 20,
    },
    registreText1: {
        marginBottom: 20,
    },

    registerInput: {
        alignSelf: 'stretch',
        margin: 20,
        padding: 5,
        backgroundColor: '#EEEEEE',
        borderColor: 'white',
        fontSize: 18,
    }

});
