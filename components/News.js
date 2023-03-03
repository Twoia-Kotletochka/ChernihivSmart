import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icon_water from '../assets/icon_news_svg/water.svg'
import Icon_arrow from '../assets/icon_news_svg/arrow.svg'

import { firebase } from '../config'
import { Component } from 'react/cjs/react.development';

const DATA = [
    {
        id: '1',
        icon: 'light',
        title1: 'Нема гарячої води',
        title2: 'Не панікуйте',
        title3: 'Дякуємо за очікування',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: 'годину тому'
    },
    {
        id: '2',
        icon: 'light',
        title1: 'Нема гарячої води',
        title2: 'Не панікуйте',
        title3: 'Дякуємо за очікування',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: 'годину тому'
    },
    {
        id: '3',
        icon: 'light',
        title1: 'Нема гарячої води',
        title2: 'Не панікуйте',
        title3: 'Дякуємо за очікування',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: 'годину тому'
    },
    {
        id: '4',
        icon: 'light',
        title1: 'Нема гарячої води',
        title2: 'Не панікуйте',
        title3: 'Дякуємо за очікування',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: 'годину тому'
    },
    {
        id: '5',
        icon: 'light',
        title1: 'Нема гарячої води',
        title2: 'Не панікуйте',
        title3: 'Дякуємо за очікування',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: 'годину тому'
    },
    {
        id: '6',
        icon: 'light',
        title1: 'Нема гарячої води',
        title2: 'Не панікуйте',
        title3: 'Дякуємо за очікування',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: 'годину тому'
    },
    {
        id: '7',
        icon: 'light',
        title1: 'Нема гарячої води',
        title2: 'Не панікуйте',
        title3: 'Дякуємо за очікування',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: 'годину тому'
    },
    {
        id: '8',
        icon: 'light',
        title1: 'Нема гарячої води',
        title2: 'Не панікуйте',
        title3: 'Дякуємо за очікування',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: 'годину тому'
    },
    {
        id: '9',
        icon: 'light',
        title1: 'Нема гарячої води',
        title2: 'Не панікуйте',
        title3: 'Дякуємо за очікування',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: 'годину тому'
    },
    {
        id: '10',
        icon: 'light',
        title1: 'Нема світла',
        title2: 'Панікуйте',
        title3: 'Дякуємо за очікування',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: 'годину тому'
    },
];

const database = firebase.database();

const News = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const ref = database.ref('news/');
        const listener = ref.on('value', (snapshot) => {
            setData(snapshot.val());
        });

        return () => {
            ref.off('value', listener);
        };
    }, []);

    if (!data) {
        return <View><Text>Loading...</Text></View>;
    }

    const databaseContent = [];
    Object.keys(data).forEach((key) => {
        const value = data[key];
        databaseContent.push(
            <Text key={key}>
                id: {value.id}, name: {value.name}
            </Text>
        );
    });

    return (
        <View>{databaseContent}</View>
    );
}

// return (Object.keys(items).map((key) => (
//     <View style={styles.container} key={key}>
//         <View style={{ marginLeft: 5, paddingTop: 15 }}>
//             <View style={styles.icon_board}>
//                 <Icon_water style={{ width: '80%', height: '80%' }} />
//             </View>
//             <Text style={{ fontSize: 10, paddingTop: 15, paddingBottom: 2 }}>
//                 {items[key].name}
//             </Text>
//         </View>
//         {/* <View style={{ flexDirection: 'column', paddingTop: 5 }}>
//             <Text style={styles.title1}>
//                 {item.title1}
//             </Text>
//             <Text style={styles.title2}>
//                 {item.title2}
//             </Text>
//             <Text style={styles.title3}>
//                 {item.title3}
//             </Text>
//         </View> */}
//     </View>
// )));

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
    },
    title1: {
        fontSize: 20,
    },
    title2: {
        fontSize: 15,
    },
    title3: {
        fontSize: 10,
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