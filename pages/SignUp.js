import React, { useRef, useEffect, useState } from 'react'
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';
import { useNavigation } from '@react-navigation/core'
import { SignUp_LoginPassword } from '../styles/SignUp_LoginPassword';

const SignUp = () => {
    const [loadWindow, setloadWindow] = useState('none');
    const [codeWindow, setcodeWindow] = useState('none');
    const [phoneWindow, setphoneWindow] = useState('flex');

    const navigation = useNavigation()

    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVeridicationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const sendVerification = () => {


        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVeridicationId);
        setPhoneNumber('');
        setphoneWindow('none')
        setcodeWindow('flex')
    };

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCode('');
                navigation.replace('Main')
            })
            .catch((error) => {
                alert(error);
                setloadWindow('none')
                setphoneWindow('flex')
                setcodeWindow('none')
            })
        setloadWindow('flex')
    }


    return (
        <KeyboardAvoidingView style={SignUp_LoginPassword.container}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />

            <Image source={require("../assets/logo.png")} style={SignUp_LoginPassword.img} />

            <View style={SignUp_LoginPassword.box}>
                <View style={[SignUp_LoginPassword.phonebox, { display: `${phoneWindow}` }]}>
                    <TextInput
                        style={SignUp_LoginPassword.input}
                        onChangeText={setPhoneNumber}
                        keyboardType='phone-pad'
                        autoComplete='tel'
                        maxLength={13}
                    />

                    <Text style={{ color: '#343436', fontSize: 12 }}>Введіть номер телефону для авторизації</Text>

                    <TouchableOpacity style={SignUp_LoginPassword.button} onPress={sendVerification}>
                        <Text style={{ color: 'white', fontSize: 22 }}>Надіслати код</Text>
                    </TouchableOpacity>
                </View>

                <View style={[SignUp_LoginPassword.phonebox, { display: `${codeWindow}` }]}>

                    <TextInput
                        style={[SignUp_LoginPassword.input, { width: 100, }]}
                        onChangeText={setCode}
                        keyboardType='number-pad'
                    />
                    <Text style={{ color: '#343436', fontSize: 12 }}>Введіть код з смс</Text>

                    <TouchableOpacity style={SignUp_LoginPassword.button} onPress={confirmCode}>
                        <Text style={{ color: 'white', fontSize: 22 }}>Підтвердити код</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View
                style={{
                    width: '95%',
                    height: '97%',
                    position: 'absolute',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(237, 231, 225, 0.4)',
                    borderRadius: 10,
                    display: `${loadWindow}`
                }}>
                <View style={{
                    backgroundColor: 'rgba(108, 122, 137, 0.7)',
                    width: 70,
                    height: 70,
                    justifyContent: 'center',
                    alignContent: 'center',
                    borderRadius: 10
                }}>
                    <ActivityIndicator color='white' size='large' animating={true} />
                </View>
            </View>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </KeyboardAvoidingView >
    );
}

export default SignUp;