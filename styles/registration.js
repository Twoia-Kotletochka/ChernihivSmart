import { StyleSheet } from 'react-native'

export const RegistrationStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        alignItems: 'center',
        backgroundColor: 'white',
        width: '90%',
        height: 340,
        borderRadius: 10,
        elevation: 9,
    },
    inputline: {
        alignItems: 'center',
        width: '90%',
    },
    input: {
        height: 50,
        borderWidth: 1,
        marginBottom: 5,
        width: '80%',
        borderColor: 'white',
        backgroundColor: 'white',
        borderBottomColor: 'rgb(204, 204, 204)',
        fontSize: 17,
        textAlign: 'center'
    },
    img: {
        width: 130,
        height: 130,
        marginTop: -60,
        marginBottom: 30
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        height: 40,
        width: '50%',
        color: 'red',
        backgroundColor: '#4BB5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
})
