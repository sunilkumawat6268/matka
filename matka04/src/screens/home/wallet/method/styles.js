import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/colors';

export default StyleSheet.create({
    mainView: {
        flex: 1,
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
        width: 22,
        height: 20,
        marginLeft: 5,
        marginTop: 10
    },
    homeText: {
        color: Colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginLeft: 40,
        marginTop: 4,
        marginBottom: 5
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
        // marginTop: 40,

    },
    contactImg: {
        width: 200,
        height: 200
    },
    mainFirstView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100
    },
    firstView: {
        flexDirection: 'row'
    },
    googleView: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        width: '40%',
        height: 130,
        margin: 10,
        elevation: 10
    },
    googlepayView: {
        alignItems: 'center'
    },
    googleImag: {
        width: 55,
        height: 46,
        marginTop: 8,
        marginBottom: 5

    },
    googleText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        padding: 15,
        borderTopWidth: 2,
        borderColor: '#000'
    },
    googlepayImagBtn: {
        margin: 10
    },
    paytmImag: {
        width: 60,
        height: 60,

    },
    phonepeImag: {
        width: 60,
        height: 60,

    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.header,
        height: 350,
        width: '90%',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        elevation: 10

    },
    text: {
        color: Colors.black,
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalGoogleImag: {
        // backgroundColor:Colors.secondary,
        borderRadius: 75,
        padding: 5,
        margin: 10
    },
    phoneNo: {
        // borderWidth:2,
        backgroundColor: Colors.white,
        width: "80%",
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        height: 40,
        marginTop: 20,
        elevation: 10

    },
    mainInnerModalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnView: {
        flexDirection: 'row',
        marginTop: 30,

    },
    cancelBtn: {
        backgroundColor: 'red',
        width: '40%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center'

    },
    cancelText: {
        textAlign: 'center',
        fontSize: 20,
        color: Colors.white,
        fontWeight: 'bold',
    },
    submitBtn: {
        backgroundColor: 'green',
        width: '40%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 20

    },
    submitText: {
        textAlign: 'center',
        fontSize: 20,
        color: Colors.white,
        fontWeight: 'bold',
    },
    amountview: {

    },
    imgAmountView: {
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    tokenImg: {
        width: 37,
        height: 37,
        marginRight: 10,
        marginTop: 7,
        marginLeft: 150

    },
    amountText: {
        fontSize: 30,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    patymModalImag: {
        width: 60,
        height: 60,
    },
    modalpaytmImag: {
        backgroundColor: Colors.white,
        borderRadius: 75,
        padding: 15,
        marginTop: 5
    },
})