import React from 'react'
import { Text, View, StatusBar, ScrollView, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles/main'
import News from './components/News'
//header
import Icon_profile from './assets/icon_profile.svg'
//cards
import Icon_card from './assets/icon_cards_svg/icon_card.svg'
import Icon_home from './assets/icon_cards_svg/icon_home.svg'
import Icon_location from './assets/icon_cards_svg/icon_location.svg'
import Icon_parking from './assets/icon_cards_svg/icon_parking.svg'
//weather
import Icon_weather from './assets/icon_weather/cloud.svg'

let AnimatedOp = new Animated.Value(0);

const animateopacityprofil = AnimatedOp.interpolate({
  inputRange: [0, 200 - 0], //ругулятор раньше позже 
  outputRange: [1, 0],
  extrapolate: 'clamp'
});

const animateopacityweather = AnimatedOp.interpolate({
  inputRange: [0, 200 - 0], //ругулятор раньше позже 
  outputRange: [1, 0],
  extrapolate: 'clamp'
});

const animateopacitycard = AnimatedOp.interpolate({
  inputRange: [0, 100 - 0], //ругулятор раньше позже 
  outputRange: [1, 0],
  extrapolate: 'clamp'
});

const animatedNewsHeight = AnimatedOp.interpolate({
  inputRange: [0, 300 - 0],
  outputRange: ['95%', '100%'],
  extrapolate: 'clamp'
});

export default function Main() {

  return (
    <LinearGradient
      colors={['#17153C', '#D5BCA8']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >

      <ScrollView
        scrollEventThrottle={16}
        style={styles.scrollview_vertical}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: AnimatedOp } } }],
          { useNativeDriver: false }
        )}
      >

        <ScrollView
          horizontal={true}
          style={styles.scrollview_horizontal}
          showsHorizontalScrollIndicator={false}
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

        <View style={{ alignItems: 'center' }}>
          <Animated.View style={[styles.view_news,
          { width: animatedNewsHeight, }]}>
            <News />
          </Animated.View>
        </View>
      </ScrollView>

      <View
        style={styles.header}
      >
        <Animated.View style={[styles.profile, { opacity: animateopacityprofil }]}>
          <Icon_profile style={{ width: '60%', height: '60%' }} />
        </Animated.View>

        <Animated.View
          style={[{ opacity: animateopacityweather },
          { flexDirection: 'row', alignItems: "center" }]}>

          <Text style={styles.degrees_text}>15°</Text>

          <View style={[styles.weather]}>
            <Icon_weather style={{ width: '60%', height: '60%' }} />
          </View>
        </Animated.View>
      </View>

      <StatusBar
        animated={true}
        barStyle={'light-content'}
        backgroundColor="#17153C"
      />
    </LinearGradient>
  );
}

