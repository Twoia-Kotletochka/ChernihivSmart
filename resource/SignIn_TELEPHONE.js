import React, { useRef, useState } from 'react'
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';
import { useNavigation } from '@react-navigation/core'
import { SignInStyle } from '../styles/signin';

const SignIn = () => {
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
        <KeyboardAvoidingView style={SignInStyle.container}>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
            />

            <Image source={require("../assets/logo.png")} style={SignInStyle.img} />

            <View style={SignInStyle.box}>
                <View style={[SignInStyle.phonebox, { display: `${phoneWindow}` }]}>
                    <TextInput
                        style={SignInStyle.input}
                        onChangeText={setPhoneNumber}
                        keyboardType='phone-pad'
                        autoComplete='tel'
                        maxLength={13}
                    />

                    <Text style={{ color: '#343436', fontSize: 12 }}>Введіть номер телефону для авторизації</Text>

                    <TouchableOpacity style={SignInStyle.button} onPress={sendVerification}>
                        <Text style={{ color: 'white', fontSize: 22 }}>Надіслати код</Text>
                    </TouchableOpacity>
                </View>

                <View style={[SignInStyle.phonebox, { display: `${codeWindow}` }]}>
                    <TextInput
                        style={[SignInStyle.input, { width: 100, }]}
                        onChangeText={setCode}
                        keyboardType='number-pad'
                    />
                    <Text style={{ color: '#343436', fontSize: 12 }}>Введіть код з смс</Text>

                    <TouchableOpacity style={SignInStyle.button} onPress={confirmCode}>
                        <Text style={{ color: 'white', fontSize: 22 }}>Підтвердити код</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View
                style={[SignInStyle.loadwindowscreen, { display: `${loadWindow}` }]}>
                <View style={SignInStyle.loadwindowmodal}>
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

export default SignIn;