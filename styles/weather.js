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
    }
})