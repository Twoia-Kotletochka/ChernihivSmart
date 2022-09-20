import { Text, View, StatusBar, Animated, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import News from '../components/News'

const App = () => {
    const dummyDATA = [
        'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1',
        'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1', 'Item1'
    ];
    // const AnimatedHeaderValue = useRef(new Animated.Value(0)).current
    let AnimatedHeaderValue = new Animated.Value(0);

    const Header_Max_Height = 250; //Max
    const Header_Min_Height = 50;

    const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: ['blue', 'red'],
        extrapolate: 'clamp'
    });

    const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp'
    });

    return (
        <SafeAreaView style={styles.container}>
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

            <ScrollView
                style={{ paddingTop: 250 }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
                    { useNativeDriver: false }
                )}
            >
                <News />
            </ScrollView>
        </SafeAreaView>

    );
};

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
    }
});

export default App;