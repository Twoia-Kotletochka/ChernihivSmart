import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
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
        height: 290,
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
    button: {
        marginTop: 10,
        height: 40,
        width: '50%',
        color: 'red',
        backgroundColor: '#4BB5F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
})
