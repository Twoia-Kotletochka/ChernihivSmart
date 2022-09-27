const Card = () => {
    return (
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
    );
}

