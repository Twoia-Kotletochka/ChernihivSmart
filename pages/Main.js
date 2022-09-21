import { Text, View, StatusBar, Animated, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { styles } from '../styles/main'
import News from '../components/News'

export default function Main() {
    let AnimatedHeaderValue = new Animated.Value(0);

    const Header_Max_Height = 250;
    const Header_Min_Height = 50;

    const Card_Max_Height = 130;
    const Card_Min_Height = 0;

    const color = 'blue'

    const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [color, 'yellow'],
        extrapolate: 'clamp'
    });

    const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp'
    });

    const animatedCardHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, Card_Max_Height - Card_Min_Height],
        outputRange: [Card_Max_Height, Card_Min_Height],
        extrapolate: 'clamp'
    });
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{ paddingTop: 250, overflow: "hidden", borderRadius: 20, backgroundColor: '#FFFFFF' }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
                    { useNativeDriver: false }
                )}
            >
                <News />
                <View style={{ paddingBottom: 250 }}></View>
            </ScrollView>
            <Animated.View
                style={[
                    styles.header,
                    {
                        height: animatedHeaderHeight
                    }
                ]}
            >

                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignContent: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'red',
                            width: 50,
                            height: 45,
                            marginLeft: 20
                        }}
                    ></View>

                    <View
                        style={{
                            backgroundColor: 'gray',
                            width: 50,
                            height: 45,
                            marginRight: 20
                        }}
                    ></View>
                </View>

                <ScrollView
                    horizontal={true}

                >
                    <Animated.View style={{
                        backgroundColor: '#FFFFFF',
                        height: animatedCardHeight,
                        width: 100,
                        margin: 20
                    }}></Animated.View>

                    <Animated.View style={{
                        backgroundColor: '#FFFFFF',
                        height: animatedCardHeight,
                        width: 100,
                        margin: 20
                    }}></Animated.View>

                    <Animated.View style={{
                        backgroundColor: '#FFFFFF',
                        height: animatedCardHeight,
                        width: 100,
                        margin: 20
                    }}></Animated.View>

                    <Animated.View style={{
                        backgroundColor: '#FFFFFF',
                        height: animatedCardHeight,
                        width: 100,
                        margin: 20
                    }}></Animated.View>
                </ScrollView>
            </Animated.View>
            <StatusBar
                animated={true}
                barStyle={'light-content'}
                backgroundColor="#4BB5F5"
            />
        </SafeAreaView>

    );
}
