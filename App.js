import React from 'react'
import { Image, View, StatusBar, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import News from './components/News'

export default function Main() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ position: 'absolute', width: '100%', height: '60%' }}>
        <Image
          source={require("./assets/svg/grad1.png")}
          style={{ width: '100%', height: '100%' }} />
      </View>

      <ScrollView
        scrollEventThrottle={16}
        style={{ paddingTop: 150 }}
      >
        <ScrollView
          horizontal={true}
          style={styles.scrollview_horizontal}
        >
          <View style={styles.card}></View>

          <View style={styles.card}></View>

          <View style={styles.card}></View>

          <View style={styles.card}></View>

          <View style={styles.card}></View>
        </ScrollView>

        <View style={styles.view_news}>
          <News />
        </View>

      </ScrollView>

      <View
        style={{
          width: '100%',
          height: '6%',
          marginTop: '2%',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
          position: 'absolute'
        }}
      >
        <View
          style={{
            backgroundColor: 'red',
            width: 50,
            height: 50,
            marginLeft: 20,
            borderRadius: 100
          }}
        ></View>

        <View
          style={{
            backgroundColor: 'gray',
            width: 50,
            height: 50,
            marginRight: 20,
            borderRadius: 100
          }}
        ></View>
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
    alignContent: 'center'
  },
  view_news: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    paddingBottom: 80
  },
  scrollview_horizontal: {

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