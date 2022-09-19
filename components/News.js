import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'Нема гарячої води',
    },
    {
        id: '2',
        title: 'ВИмкнули світло',
    },
    {
        id: '3',
        title: 'Розбито вікна',
    },
    {
        id: '4',
        title: 'Торнадо',
    },
    {
        id: '4',
        title: 'Війна',
    },
    {
        id: '4',
        title: 'Потом',
    },
    {
        id: '4',
        title: 'Авіаудар',
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
        fontSize: 15,
    },
});

export default News;