import React, { useEffect, useState } from 'react'
import { Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Animated, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import { firebase } from '../../config'
import { style } from '../../styles/addaddress';

import { Ionicons } from '@expo/vector-icons';


const Address = () => {
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [rooms, setRooms] = useState('')

    const navigation = useNavigation()

    const go_main = () => {
        navigation.navigate('Profile')
    }

    return (

    );
}

export default Address;
