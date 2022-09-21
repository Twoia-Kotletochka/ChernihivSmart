import { Text, View, StyleSheet, StatusBar, TextInput, Icon, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, icon } from 'react-native'
import { signupStyle } from '../styles/signup'
import { useState } from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default function RegistrPassword() {
    const [numberFirstPassword, numberSecondPassword, onChangeText] = useState("");
    const [isSecureEntry, SetIsSecureEntry] = useState(true);


    return (

        <KeyboardAvoidingView style={registerStyles.registerMainBox}>

            <View>
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
                        onChangeText={onChangeText}
                        secureTextEntry={true}
                        keyboardType='password'
                        placeholder="Second Password"

                        value={numberSecondPassword}
                    />

                    <Text style={[registerStyles.registreText1, { fontSize: 12 }]}>Введіть пароль два рази</Text>


                </View>



            </View>
            <TouchableOpacity
                style={registerStyles.registerBoxContainer}>
                <Text style={{ color: 'white', fontSize: 22 }}>Далі</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    );

}

const registerStyles = StyleSheet.create({
    registerMainBox: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 40,

    },
    registerBoxContainer: {
        height: 40,
        color: 'red',
        backgroundColor: '#4BB5F5',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 7,
        width: 300,
    },
    registerContainer: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 250,
        borderRadius: 10,
        elevation: 7,
    },
    registrerImg: {
        marginBottom: 5,
        alignSelf: 'center',
        width: 70,
        height: 70,
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



/**<KeyboardAvoidingView>


            <View>

                <TextInput
                    style={signupStyle.input}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecureEntry}

                    icon={
                        <TouchableOpacity onPress={() => {
                            SetIsSecureEntry((prev) => prev);
                        }}>
                            <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                    }
                    iconPosition="Right"
                    keyboardType='password'
                    value={number}
                />

                <TextInput
                    style={signupStyle.input}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecureEntry}
                    icon={
                        <TouchableOpacity onPress={() => {
                            SetIsSecureEntry((prev) => prev);
                        }}>
                            <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                    }
                    keyboardType='password'
                    value={number}
                />

                <Text style={[signupStyle.text, { fontSize: 12 }]}>Введіть пароль два рази</Text>
            </View>
            <TouchableOpacity
                style={signupStyle.button}>
                <Text style={{ color: 'white', fontSize: 22 }}>Далі</Text>
            </TouchableOpacity>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </KeyboardAvoidingView > */