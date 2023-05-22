import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%', height: '100%'
    },
    header: {
        width: '90%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        position: 'absolute',
        alignItems: 'center'
    },
    button_back: {
        backgroundColor: 'rgba(255,255,255, 0.4)',
        width: 40,
        height: 40,
        marginRight: 5,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editor: {
        backgroundColor: 'rgba(255,255,255, 0.4)',
        width: 50,
        height: 50,
        marginLeft: 5,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_vertical: {
        width: '100%',
        height: '100%',
    },
    view_news: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        paddingBottom: 50,
        width: '95%',
        height: 650,
        paddingTop: 10
    },
    profile_container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    profile_container_card: {
        marginTop: 70,
        marginBottom: 20,
        backgroundColor: 'white',
        width: 320,
        height: 200,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text_name: {
        color: 'white',
        fontSize: 24,
    },
    text_tel: {
        marginTop: 5,
        marginBottom: 20,
        color: 'white',
        fontSize: 14,
    },
    container2: {
        height: 75,
        backgroundColor: '#EEEEEE',
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container2_static: {
        backgroundColor: '#EEEEEE',
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
    },
    title1: {
        fontSize: 18,
    },
    title2: {
        fontSize: 11,
    },
    icon_board: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 15
    },
    icon_board_static: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    icon_basket: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_cards: {
        width: 65,
        height: 65
    },
    profile_container_circle: {
        marginTop: -10,
        backgroundColor: '#DBD9D9',
        width: 80,
        height: 80,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    container2_icon: {
        marginLeft: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 5
    }
})
