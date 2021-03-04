import { StyleSheet } from 'react-native';

const CommonStyles = StyleSheet.create({
    contianer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerStyle: {
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        color: '#333A42'
    },
    textInputHeaderStyle: {
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 5,
        fontSize: 18,
        fontWeight: '600',
        color: '#bf4932'
    },
    textInputStyle: {
        height: 50,
        backgroundColor: '#e3e1e1',
        marginHorizontal: 15,
        borderRadius: 5,
        paddingHorizontal: 15,
    },
    buttonStyle: {
        height: 50,
        marginVertical: 20,
        width: 200,
        backgroundColor: '#bf4932',
        borderRadius: 5,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        fontSize: 18,
        letterSpacing: 0.5,
        fontWeight: '700',
        textAlign: 'center'
    },
    iconStyle: {
        height: 20,
        width: 20
    },
    checkBoxHeaderStyle: {
        paddingHorizontal: 15,
        fontSize: 18,
        fontWeight: '600',
        color: '#bf4932'
    },
    errorStyle: {
        fontSize: 14,
        paddingLeft: 15,
        letterSpacing: 0.2,
        color: '#EB5757'
    }
})

export { CommonStyles };