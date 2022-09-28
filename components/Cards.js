import React from 'react';
import { ScrollView, Animated, Text } from 'react-native';
import { styles } from '../styles/main'
//cards
import Icon_card from '../assets/icon_cards_svg/icon_card.svg'
import Icon_home from '../assets/icon_cards_svg/icon_home.svg'
import Icon_location from '../assets/icon_cards_svg/icon_location.svg'
import Icon_parking from '../assets/icon_cards_svg/icon_parking.svg'

const News = ({ animateopacitycard }) => {
    return (
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
    );
}

export default News;