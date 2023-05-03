import { StyleSheet } from 'react-native'

export const weather = StyleSheet.create({
    header: {
        height: 50,
        width: '90%',
        marginTop: 5,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    weather_contetn: {
        marginTop: 70,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255, 0.4)',
        width: 160,
        height: 160,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    weather: {
        backgroundColor: 'rgba(255,255,255, 0.4)',
        width: 40,
        height: 40,
        marginRight: 5,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header_text: {
        position: 'absolute',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    weatherIcon: {
        width: 60,
        height: 60,
    },
    /////
    button: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    activeButton: {
        backgroundColor: '#f0f0f0',
    },
    content: {
        marginTop: 8,
        color: '#777',
    },
    container1: {
        backgroundColor: '#EEEEEE',
        marginVertical: 5,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
    },
    container2: {
        backgroundColor: '#EEEEEE',
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    container3: {
        marginVertical: -20,
        backgroundColor: '#EEEEEE',
        marginHorizontal: 16,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
})