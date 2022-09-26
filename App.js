import React from 'react'
import { Text, Image, View, StatusBar, ScrollView, StyleSheet, SafeAreaView, Animated } from 'react-native'
import News from './components/News'

export default function Main() {
  let AnimatedOp = new Animated.Value(0);

  const Max = 100;
  const Min = 10;

  const animateopacityheader = AnimatedOp.interpolate({
    inputRange: [0, Max - Min],
    outputRange: ['gray', 'transparent'],
    extrapolate: 'clamp'
  });

  const animateopacityprofil = AnimatedOp.interpolate({
    inputRange: [0, Max - Min],
    outputRange: ['red', 'transparent'],
    extrapolate: 'clamp'
  });

  const animateopacityweather = AnimatedOp.interpolate({
    inputRange: [0, Max - Min],
    outputRange: ['black', 'transparent'],
    extrapolate: 'clamp'
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ position: 'absolute', width: '100%', height: '60%' }}>
        <Image
          source={require("./assets/svg/grad1.png")}
          style={{ width: '100%', height: '100%' }} />
      </View>

      <ScrollView
        scrollEventThrottle={16}
        style={styles.scrollview_vertical}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: AnimatedOp } } }],
          { useNativeDriver: false }
        )}
      >

        <ScrollView
          horizontal={true}
          style={styles.scrollview_horizontal}
        >
          <Animated.View style={[styles.card, {
            backgroundColor: animateopacityheader
          }]}>

            <Text>sadasd</Text>
          </Animated.View>

          <View style={styles.card}></View>

          <View style={styles.card}></View>

          <View style={styles.card}></View>

          <View style={styles.card}></View>
        </ScrollView>

        <View style={styles.view_news}>
          <News />
        </View>
      </ScrollView>

      <Animated.View
        style={[{
          width: '90%',
          height: 50,
          marginTop: 5,
          position: 'absolute',
          backgroundColor: 'gray',
          opacity: 0.8,
          borderRadius: 50,
        },
        { backgroundColor: animateopacityheader }]}>

      </Animated.View>

      <View
        style={{
          width: '90%',
          marginTop: 5,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          position: 'absolute',
        }}
      >
        <Animated.View
          style={[{
            backgroundColor: 'red',
            width: 50,
            height: 50,
            marginLeft: 5,
            borderRadius: 100,
          }, { backgroundColor: animateopacityprofil }]}
        ></Animated.View>

        <Animated.View
          style={[{
            backgroundColor: 'black',
            width: 50,
            height: 50,
            marginRight: 5,
            borderRadius: 100,
          }, { backgroundColor: animateopacityweather }]}
        ></Animated.View>
      </View>


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
    alignItems: 'center'
  },
  view_news: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    paddingBottom: 500
  },
  scrollview_horizontal: {
    height: '100%',
    width: '100%',
    marginTop: 150,
  },
  scrollview_vertical: {

    width: '100%',
    height: '100%',

  },
  card: {
    height: 155,
    width: 135,
    marginLeft: 20,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 17,
  }
})