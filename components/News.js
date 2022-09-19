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
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const News = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#EEEEEE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        fontSize: 16,
    },
});

export default News;