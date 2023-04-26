import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%', height: '100%'
    },
    container1: {
        backgroundColor: '#EEEEEE',
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
        borderWidth: 2.5,
        borderColor:"#4B9CE4"
    },
    container2: {
        backgroundColor: '#EEEEEE',
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
        borderWidth: 2.5,
        borderColor:"#E9B5BC"
    },
    icon_board: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,

    },
    view_news: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        paddingBottom: 50,
        width: '95%',
        paddingTop: 10
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
    },
    header: {
        width: '90%',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        position: 'absolute',
        alignItems: 'center'
    },

    profile: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        marginLeft: 5,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    weather: {
        backgroundColor: 'rgba(255,255,255, 0.4)',
        width: 40,
        height: 40,
        marginRight: 5,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    degrees_text: {
        color: 'white',
        marginRight: 5
    }
})
