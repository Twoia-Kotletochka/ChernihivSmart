import React from 'react'
import { Text, Image, View, StatusBar, ScrollView, StyleSheet, SafeAreaView, Animated } from 'react-native'
import News from './components/News'
import Icon_card from './assets/svg/icon_card.svg'
import Icon_home from './assets/svg/icon_home.svg'
import Icon_location from './assets/svg/icon_location.svg'
import Icon_parking from './assets/svg/icon_parking.svg'

export default function Main() {
  let AnimatedOp = new Animated.Value(0);

  const animateopacityprofil = AnimatedOp.interpolate({
    inputRange: [0, 300 - 0], //ругулятор раньше позже 
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  const animateopacityweather = AnimatedOp.interpolate({
    inputRange: [0, 300 - 0], //ругулятор раньше позже 
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });


  const animateopacitycard = AnimatedOp.interpolate({
    inputRange: [0, 100 - 0], //ругулятор раньше позже 
    outputRange: [1, 0],
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
            opacity: animateopacitycard,
          }]}>
            <Icon_home style={styles.icon_cards} />
            <Text style={styles.text_card}>Домівка</Text>
          </Animated.View>

          <Animated.View style={[styles.card, {
            opacity: animateopacitycard,
          }]}>
            <Icon_card style={[styles.icon_cards, { transform: [{ scale: 1.3 }], top: 2 }]} />
            <Text style={styles.text_card}>Транспортна{"\n"}карта</Text>
          </Animated.View>

          <Animated.View style={[styles.card, {
            opacity: animateopacitycard,
          }]}>
            <Icon_location style={styles.icon_cards} />
            <Text style={styles.text_card}>Мапа{"\n"}транспорту</Text>
          </Animated.View>

          <Animated.View style={[styles.card, {
            opacity: animateopacitycard,
          }]}>
            <Icon_parking style={styles.icon_cards} />
            <Text style={styles.text_card}>Паркування</Text>
          </Animated.View>
        </ScrollView>

        <View style={styles.view_news}>
          <News />
        </View>
      </ScrollView>

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
          }, { opacity: animateopacityprofil }]}
        ></Animated.View>

        <Animated.View
          style={[{
            backgroundColor: 'black',
            width: 50,
            height: 50,
            marginRight: 5,
            borderRadius: 100,
          }, { opacity: animateopacityweather }]}
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
    paddingBottom: 50
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
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 17,
  },
  text_card: {
    textAlign: 'center'
  },
  icon_cards: {
    width: '40%', height: '40%'
  }
})