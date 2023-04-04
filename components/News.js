import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon_arrow from '../assets/icon_news_svg/arrow.svg'

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


import Icon_water from '../assets/icon_news_svg/water.svg'
import Icon_gas from '../assets/icon_news_svg/gas.svg'
import Icon_light from '../assets/icon_news_svg/light.svg'
import Icon_hot_water from '../assets/icon_news_svg/hot_water'

import { firebase } from '../config'

const database = firebase.database();

const News = () => {
    //в майбутньому додати в плашку новини годну тому або 5 хв тому й так далі
    //ця функція вказує поточний час на тлф
    // const [time, setTime] = useState(new Date());

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTime(new Date());
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);


    const [data, setData] = useState(null);
    const [data_uid, setData_uid] = useState(null);

    useEffect(() => {
        const ref = database.ref('news/');
        const listener = ref.on('value', (snapshot) => {
            setData(snapshot.val());
        });

        return () => {
            ref.off('value', listener);
        };
    }, []);

    useEffect(() => {
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid).get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setData_uid(snapshot.data().address);
                }
                else {
                    console.log('User does not exist')
                }
            })
    }, [])


    if (!data) {
        return (
            <View style={{ height: 600 }}>
                <ActivityIndicator color='#4BB5F5' size='large' animating={true} style={{ marginTop: 60 }} />
            </View>
        )
    }

    const iconfunc = (icon) => {
        if (icon === "light") {
            return <Icon_light style={{ width: '80%', height: '80%' }} />
        }
        else if (icon === "gas") {
            return <Icon_gas style={{ width: '80%', height: '80%' }} />
        }
        else if (icon === "water") {
            return <Icon_water style={{ width: '80%', height: '80%' }} />
        }
        else if (icon === "hot_water") {
            return <Icon_hot_water style={{ width: '80%', height: '80%' }} />
        }
    }

    const databaseContent = [];
    Object.keys(data).reverse().forEach((key) => {
        const value = data[key];
        console.log(value.street)
        if (value.street !== undefined) {
            databaseContent.push(
                <TouchableOpacity key={key} style={styles.container}>
                    <View style={{ marginLeft: 5, paddingTop: 15 }}>
                        <View style={styles.icon_board}>
                            {iconfunc(value.icon)}
                        </View>
                        <Text style={{ fontSize: 10, paddingTop: 15, paddingBottom: 2 }}>
                            {value.datefull}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column', paddingTop: 5 }}>
                        <Text style={{ fontSize: RFValue(18) }}>
                            {value.title}
                        </Text>
                        <Text style={{ fontSize: RFValue(12) }}>
                            {value.subtext}
                        </Text>
                        <Text style={{ fontSize: RFValue(11) }}>
                            {value.subtext_mini}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }
        else if (value.street === undefined) {
            databaseContent.push(
                <TouchableOpacity key={key} style={styles.container}>
                    <View style={{ marginLeft: 5, paddingTop: 15 }}>
                        <View style={styles.icon_board}>
                            {iconfunc(value.icon)}
                        </View>
                        <Text style={{ fontSize: 10, paddingTop: 15, paddingBottom: 2 }}>
                            {value.datefull}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column', paddingTop: 5 }}>
                        <Text style={{ fontSize: RFValue(18) }}>
                            {value.title}
                        </Text>
                        <Text style={{ fontSize: RFValue(12) }}>
                            {value.subtext}
                        </Text>
                        <Text style={{ fontSize: RFValue(11) }}>
                            {value.subtext_mini}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }
    });

    return (
        <View>{databaseContent}</View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
    },
    icon_board: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,

    }
})

export default News;