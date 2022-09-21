import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'Нема гарячої води',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '24'
    },
    {
        id: '2',
        title: 'ВИмкнули світло',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '25'
    },
    {
        id: '3',
        title: 'Розбито вікна',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '24'
    },
    {
        id: '4',
        title: 'Торнадо',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '24'
    },
    {
        id: '4',
        title: 'Війна',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '24'
    },
    {
        id: '4',
        title: 'Потоп',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '26'
    },
    {
        id: '4',
        title: 'Авіаудар',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '25'
    },
    {
        id: '4',
        title: 'Авіаудар',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '25'
    },

    {
        id: '4',
        title: 'Авіаудар',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '25'
    },
    {
        id: '4',
        title: 'Авіаудар',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '25'
    },
    {
        id: '4',
        title: 'Авіаудар',
        discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '25'
    }
];

const News = () => {
    return (
        DATA.map((item, index) => (
            <Text style={styles.item} key={index}>
                {item.title}
            </Text>
        ))
    );
}
export const styles = StyleSheet.create({
    item: {
        backgroundColor: '#EEEEEE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    }
})

export default News;