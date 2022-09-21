import { StyleSheet } from 'react-native'

export const signupStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        alignItems: 'center',
        backgroundColor: 'white',
        width: '90%',
        height: 170,
        borderRadius: 10,
        elevation: 9,
        marginBottom: 20
    },
    text: {
        color: '#343436'
    },
    input: {
        height: '30%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        backgroundColor: '#EEEEEE',
        borderColor: 'white',
        borderRadius: 7,
        fontSize: 25,
    },
    img: {
        width: 130,
        height: 130,
        marginTop: -120,
        marginBottom: 20,
    },
    button: {
        height: 40,
        width: '70%',
        color: 'red',
        backgroundColor: '#4BB5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    }
})
