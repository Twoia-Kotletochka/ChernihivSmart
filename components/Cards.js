import React from 'react';
import { ScrollView, Animated, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/main'
import { useNavigation } from '@react-navigation/core'
//cards
import Icon_weather from '../assets/icon_cards_svg/icon_weather.svg'
import Icon_home from '../assets/icon_cards_svg/icon_home.svg'
import Icon_location from '../assets/icon_cards_svg/icon_location.svg'
import Icon_parking from '../assets/icon_cards_svg/icon_parking.svg'


const News = ({ animateopacitycard }) => {
    const navigation = useNavigation()
    const go_address = () => { navigation.navigate('Address'); }
    const go_weather = () => {navigation.navigate('Weather')}

    return (
        <ScrollView
            horizontal={true}
            style={styles.scrollview_horizontal}
            showsHorizontalScrollIndicator={false}
        >
            <TouchableOpacity onPress={go_address}>
                <Animated.View style={[styles.card, {
                    opacity: animateopacitycard,
                }]}>
                    <Icon_home style={styles.icon_cards} />
                    <Text style={styles.text_card}>Мої адреси</Text>
                </Animated.View>
            </TouchableOpacity>

            <TouchableOpacity onPress={go_weather}>
                <Animated.View style={[styles.card, {
                    opacity: animateopacitycard,
                }]}>
                    <Icon_weather style={[styles.icon_cards, { transform: [{ scale: 1.3 }], top: 2 }]} />
                    <Text style={styles.text_card}>Погода{"\n"}в місті</Text>
                </Animated.View>
            </TouchableOpacity>

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
    );
}

export default News;