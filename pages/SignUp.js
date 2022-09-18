import { SafeAreaView, Text, View, StatusBar, TextInput, KeyboardAvoidingView } from 'react-native'
import { signupStyle } from '../styles/signup'
import { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function SignUp() {
    const [number, onChangeText] = useState("+380");
    return (
        <KeyboardAvoidingView
            style={signupStyle.container}
        >


            <View style={signupStyle.box}>
                <Text style={[signupStyle.text, { fontSize: 35 }]}>Ваш номер</Text>

                <TextInput
                    style={signupStyle.input}
                    onChangeText={onChangeText}
                    keyboardType='phone-pad'
                    value={number}
                />

                <Text style={[signupStyle.text, { fontSize: 12 }]}>Введіть номер телефону для авторизації</Text>
            </View>

            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </KeyboardAvoidingView>
    );
}