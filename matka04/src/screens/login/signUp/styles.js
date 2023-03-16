import { StyleSheet } from 'react-native';
import Colors from '../../../assets/theme/colors';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        // backgroundColor: 'red'
    },
    mainBackImg: {
        flex: 1,
    },
    logoView: {
        alignItems: 'center',
        marginTop: 10
    },
    logoImg: {
        width: 90,
        height: 80
    },
    logoText: {
        color: Colors.primary,
        fontSize: 25,
        letterSpacing: 10,
        fontWeight: '600'
    },
    connetView: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    connetText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: '600',
        textDecorationLine: 'underline',
        marginTop: 8
    },
    connetImgView: {
        flexDirection: 'row',


    },
    connetImg: {
        width: 40,
        height: 40,
        marginHorizontal: 10
    },
    loginInputView: {
        marginTop: 20,
        width: '95%',
        marginLeft: 10,
        // justifyContent:'center',
        alignItems: 'center',
    },
    loginView: {
        backgroundColor: Colors.white,
        width: '80%',
        height: 50,
        borderTopLeftRadius: 50,
        justifyContent: 'center'
    },
    loginText: {
        textAlign: 'center',
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 30,
    },
    mainInputView: {
        width: '90%',
        backgroundColor: Colors.secondary,
        height: 390,
        borderRadius: 15,
        elevation: 10,
        // padding:10
    },
    subInputView: {
        marginTop: 20,
        marginLeft: 20,

    },














    inputView: {
        flexDirection: 'row',
        // backgroundColor: Colors.tertiary,
        borderColor: Colors.white,
        width: '95%',
        // marginLeft: 20,
        // borderRadius: 30,
        marginTop: 15,
        height: 45,
        borderBottomWidth: 2

    },
    inputView1: {
        flexDirection: 'row',
        // backgroundColor: Colors.tertiary,
        borderColor: Colors.white,
        width: '95%',
        // marginLeft: 20,
        // borderRadius: 30,
        // marginTop: -10,
        height: 45,
        borderBottomWidth: 2
    },
    mobileImag: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 8
    },
    mobileInput: {
        marginLeft: 20,
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        width: '60%',
        height: 45,
        // borderWidth:2

    },
    eye: {
        width: 30,
        height: 30,
        marginLeft: 10,
        justifyContent: 'center',
        marginTop: 4
    },
    loginBtn: {
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '112%',
        marginLeft: -30
    },
    btnView: {
        backgroundColor: Colors.primary,
        borderRadius: 3,
        // marginTop: 40,,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-evenly'
        // borderTopWidth:5,
        // borderBottomWidth:5,



    },
    signArrow: {
        width: 30,
        height: 30,
        marginTop: 5
    },
    textBtn: {
        color: Colors.tertiary,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        marginTop: 3,
        fontStyle: 'italic',



    },
    firstBtnView: {
        marginTop: 20,
        borderWidth: 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderColor: Colors.tertiary
    },
    secondBtnView: {
        // marginTop: 40,
        borderWidth: 3,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderColor: Colors.tertiary

    },

    accoutView: {
        marginTop: 50,
        // width:'90%',
        // marginLeft:20,
        alignItems: 'center'
    },
    dontaccoutView: {
        backgroundColor: Colors.primary,
        borderRadius: 30,
        width: '70%',
        height: 35
        // flexDirection:'row'
    },
    firstAccountView: {
        flexDirection: 'row'
    },
    dontText: {
        color: Colors.tertiary,
        fontWeight: '600',
        marginHorizontal: 20,
        padding: 8,
        fontSize:12
    },
    loginArrowView: {
        marginLeft: -40,
        marginTop: -8

    },
    loginArrowImg: {
        width: 50,
        height: 50
    }

})