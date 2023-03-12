import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%', height: '100%'
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
        paddingTop: 10
    },
    profile_container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    profile_container_circle: {
        marginTop: 70,
        marginBottom: 10,
        backgroundColor: 'white',
        width: 140,
        height: 140,
        borderRadius: 100,
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
        marginRight: 20,

    }
})
