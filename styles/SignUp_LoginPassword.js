import { StyleSheet } from 'react-native'

export const SignUp_LoginPassword = StyleSheet.create({
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
        height: 300,
        borderRadius: 10,
        elevation: 9,
        marginBottom: 20
    },
    input: {
        height: 50,
        borderWidth: 1,
        marginBottom: 10,
        width: '62%',
        borderColor: 'white',
        backgroundColor: 'white',
        borderBottomColor: 'rgb(204, 204, 204)',
        fontSize: 25,
        textAlign: 'center'
    },
    img: {
        width: 130,
        height: 130,
        marginTop: -120,
        marginBottom: 20
    },
    button: {
        marginTop: 10,
        height: 40,
        width: '70%',
        color: 'red',
        backgroundColor: '#4BB5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    }
})
