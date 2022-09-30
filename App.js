import React, { useRef, useState } from 'react';
import { Text, View, StatusBar, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Alert } from 'react-native';
//import auth from '@react-native-firebase/auth';
import SignUp from './pages/SignUp';
import { getAuth } from "firebase/auth";

import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from './config';
import firebase from 'firebase/compat/app';
import { SignUp_LoginPassword } from './styles/SignUp_LoginPassword';
export default function App() {
  const loadScenePassword = () => {
    //navigation.navigate('LoginPassword');
    navigation.navigate('Main');
  }

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
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
      .then(() => {
        setCode('');
        //loadScenePassword();
      })
      .catch((error) => {
        //show an alert in case of error
        alert(error);
      })

    //раньше  loadScenePassword(); было тут!
    Alert.alert('Welcom')
  }


  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    return (
      <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center' }}>
        <Text>Welcome {user.uid}</Text>
      </View>
    );

  } else {
    return (
      <KeyboardAvoidingView style={SignUp_LoginPassword.container}>

        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />

        <Image source={require("./assets/logo.png")} style={SignUp_LoginPassword.img} />

        <View style={SignUp_LoginPassword.box}>
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

        <TouchableOpacity style={[SignUp_LoginPassword.button, { width: 50 }]} onPress={loadScenePassword}>
          <Text style={{ color: 'white', fontSize: 10 }}>Main</Text>
        </TouchableOpacity>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          backgroundColor="#4BB5F5"
        />
      </KeyboardAvoidingView >

    );
  }
}

