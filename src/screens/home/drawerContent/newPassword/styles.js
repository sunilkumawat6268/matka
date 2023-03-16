import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/colors';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.screen_Background
    },
    mainBackImg: {
        flex: 1
    },
    headerView: {
        backgroundColor: Colors.secondary,
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-around',
        borderRadius: 30
    },
    barImag: {
        width: 25,
        height: 23,
        marginLeft: 5,
        marginTop: 5
    },
    homeText: {
        color: Colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginLeft: 50,
        marginTop: 4,
        marginBottom: 4
    },
    walletBtn: {
        marginTop: 5
    },
    walletimag: {
        width: 25,
        height: 25
    },
    secondHeaderView: {
        backgroundColor: Colors.white,
        marginLeft: 20,
        flexDirection: 'row',
        borderRadius: 30,
        width: 300,
        justifyContent: 'space-between'
    },
    amountText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        // marginTop: 3,
        marginRight: 2,
        marginBottom: 6
    },
    contactImgView: {
        alignItems: 'center',
        marginTop: 20,

    },
    contactImg: {
        width: 200,
        height: 200
    },
    firstView: {
        backgroundColor: '#fff',
        // borderTopWidth:2,
        // borderColor:'#000',
        elevation: 10,
        width: "95%",
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 10
    },
    inputView: {
        marginTop: 40
        // borderWidth:3
    },
    passwordInputView: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: "90%",
        marginLeft: 20,
        borderRadius: 10,
        marginBottom: 20,
        height: 40,
        borderWidth: 1

    },
    passwordInput: {
        // borderWidth:3,
        width: '68%',
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
    oldPassword: {
        marginTop: 20,
        // borderWidth:2,
        width: '90%',
        marginLeft: 20,
        backgroundColor: '#ffff',
        borderRadius: 30,
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fb0218'

    },
    changeBtn: {
        backgroundColor: Colors.tertiary,
        marginTop: 10,
        width: '90%',
        borderRadius: 10,
        marginLeft: 20,
        marginBottom: 20,
        height: 40,
        justifyContent: "center"
    },

    changeText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff"
    },

    mobileImag: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 5
    },
    mobileInput: {
        marginLeft: 20,
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
        width: '60%',
        // borderWidth:2
    },
    eye: {
        width: 30,
        height: 30,
        marginLeft: 10,
        marginTop: 4,
        alignItems: 'flex-end'
    },

})