import { Text, View, StatusBar, Animated, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import News from '../components/News'

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

export default function Main() {
    let AnimatedHeaderValue = new Animated.Value(0);

    const Header_Max_Height = 250;
    const Header_Min_Height = 50;

    const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: ['blue', 'yellow'],
        extrapolate: 'clamp'
    });

    const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp'
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{ paddingTop: 250, overflow: "hidden", borderRadius: 20 }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
                    { useNativeDriver: false }
                )}
            >
                {
                    DATA.map((item, index) => (
                        <Text style={styles.item} key={index}>
                            {item.title}
                        </Text>
                    ))
                }
                <View style={{ paddingBottom: 250 }}></View>
            </ScrollView>
            <Animated.View
                style={[
                    styles.header,
                    {
                        height: animatedHeaderHeight,
                        backgroundColor: animateHeaderBackgroundColor
                    }
                ]}
            >
                <Text style={{ fontSize: 18, textAlign: 'center' }}>Headrt card</Text>
            </Animated.View>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        padding: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        left: 0,
        right: 0,
        position: 'absolute'
    },
    item: {
        backgroundColor: '#EEEEEE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,

    }
});
