import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/colors';

export default StyleSheet.create({
    mainView: {
        flex: 1,
    },
    mainBackImg:{
        flex:1
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
        marginTop: 4
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


    firstView: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    subView: {
        width: '95%',
        height: 350,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        marginLeft:10,
        marginTop:20
    },
    enterText: {
        fontSize: 17,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10
    },
    enterInput: {
        borderWidth: 1,
        borderColor: '#000',
        fontSize: 15,
        // width: '100%',
        borderRadius: 10,
        paddingHorizontal: 20,
        color: '#000',
        height: 40,
        // backgroundColor:'#fff',
        fontWeight: "bold"

    },
    enterInput1: {
        fontSize: 15,
        width: '85%',
        borderRadius: 10,
        paddingHorizontal: 20,
        color: '#000',
        backgroundColor: '#fff',
        fontWeight: 'bold',
        height: 40


    },
    inputView: {
        width: '90%',
        marginBottom: 20,
    },
    sendBtn: {
        backgroundColor: Colors.secondary,
        width: '100%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center'

    },
    sendText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',

    },
    mobileView: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        // borderColor: '#ffff',
        backgroundColor: '#fff',
        height: 42,
        marginBottom: 10
    },
    rightImg: {
        width: 21,
        height: 21,
        marginTop: 10
    },
    modalView: {

    },
    mainInnerModalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerModalView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        height: 350,
        width: '90%',
        borderTopLeftRadius:100,
        elevation:10,
        borderBottomLeftRadius:100
    },
    transferImgView: {
        backgroundColor: '#fff',
        borderRadius: 75,
        padding: 15,
        // margin: 20,
        marginTop: -60,
        borderWidth: 5,
        borderColor: Colors.white
    },
    transferImag: {
        width: 70,
        height: 70,
    },
    textView:{
        justifyContent:'flex-start'
    },
    flatListDataView: {
        // height:50,
        flexDirection: 'row',
        width: '90%',
        marginTop: 20,
    },
    flatListData: {

    },
    amountTransferText: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 15
    },
    amountTransferTextName: {
        color: Colors.black,
        fontWeight: '500',
        fontSize: 15
    },
    amountNumber: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    },
    amountNumberData: {
        color: Colors.black,
        fontWeight: '500',
        fontSize: 15,
        marginTop: 10
    },
    amountReceiverNumber: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10
    },
    amountReceiverNumberData: {
        color: Colors.black,
        fontWeight: '500',
        fontSize: 15,
        marginTop: 10
    },
    btnView: {
        flexDirection: 'row',
        marginTop: 20,

    },
    cancelBtn: {
        backgroundColor: Colors.red,
        width: '40%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center'

    },
    cancelText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    submitBtn: {
        backgroundColor: Colors.green,
        width: '40%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 20

    },
    submitText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    imag:{
        width:200,
        height:200
    },
    moneyView:{
        alignItems:'center',
        // marginBottom:50
    }

})