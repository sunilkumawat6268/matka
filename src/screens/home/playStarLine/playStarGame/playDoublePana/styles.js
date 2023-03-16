import { StyleSheet } from 'react-native';
import Colors from '../../../../../assets/theme/colors';

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
        // borderWidth: 2,
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '95%',
        marginLeft: 10,
        // marginTop: 10

    },
    timeView: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 10,
        width: '90%',
        borderBottomWidth: 2,
        marginLeft: 20

    },





    loginInputView: {
        marginTop: 30,
        width: '95%',
        marginLeft: 10,
        alignItems: 'center',
        flex: 1,
    },
    loginView: {
        backgroundColor: Colors.secondary,
        width: '80%',
        height: 50,
        borderTopLeftRadius: 50,
        justifyContent: 'center',
        marginLeft:40,
        marginTop:40
    },
    flatListView1: {
        // flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    loginText: {
        textAlign: 'center',
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },
    withDrawtimeText: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    },
    sessionView: {
        marginTop: 5
    },
    sessionText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        color: '#000',
    },
    sessionBtnView: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 10
    },
    sessionBtn: {
        backgroundColor: Colors.tertiary,
        padding: 8,
        borderRadius: 10,
        width: 150
    },
    openText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
    },
    red: {
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 10,
        width: 150
    },
    inputView: {
        marginLeft: 20,
        marginTop: 10
    },
    autoView: {
        width: '90%'
    },
    digitText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000'
    },
    input: {
        // width: '90%',
        paddingHorizontal: 20,
        fontSize: 15,
        marginTop: 5,
        fontWeight: "bold",
        color: 'black',
        // backgroundColor:'red',
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        height: 40,
    },
    inputPoint: {
        width: '90%',
        paddingHorizontal: 20,
        fontSize: 15,
        marginTop: 5,
        fontWeight: "bold",
        color: 'black',
        // backgroundColor:'red',
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        height: 40,
    },
    inputStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        // backgroundColor:'red',
        color: 'black'
    },
    labelStyle: {
        fontSize: 15,
        fontWeight: '500',
        backgroundColor: 'red',

    },
    Text: {
        color: 'red'
    },
    placeholderStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: 'red',
        color: 'black'

    },
    textErrorStyle: {
        fontSize: 15,
        backgroundColor: 'red',
        width: '40%',
        backgroundColor: 'red',
        color: 'black'

    },

    mainBtnView: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-evenly',
        marginBottom: 15
    },
    proceedBtn: {
        backgroundColor: Colors.tertiary,
        // paddingVertical:5,
        width: 150,
        borderRadius: 10,
        padding: 8,

    },
    proceedText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    mainFlatListView: {
        backgroundColor: Colors.white,
        marginTop: 15,
        width: '95%',
        marginLeft: 10,
        borderRadius: 5
    },
    flatListView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5
    },
    deleteBtn: {
        justifyContent: 'center'
    },
    deleteImg: {
        width: 30,
        height: 30,
        // marginTop:1
    },
    digitValue: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14
    },
    digitNumber: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },









    mainInnerModalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerModalView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.header,
        height: 250,
        width: '90%',
        // borderRadius: 10,
        // borderWidth: 3,
        // borderColor: 'red',
        elevation: 50,
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100,
        // elevation:10
    },
    imgView: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 150,
        // borderWidth:5,
        // borderColor:'#5fafd4',
        marginTop: -40,
        marginBottom: 20
    },
    transferImag: {
        width: 50,
        height: 50,
        // marginBottom:20
    },

    flatListDataView: {
        // height:50,
        flexDirection: 'row',
        width: '90%',
        marginTop: 20,
    },
    warning: {
        fontWeight: "bold",
        fontSize: 17,
        color: "#000",
        marginTop: -10,
        // marginBottom:20,
        textAlign: "center",
        // backgroundColor:'red',
        width: 300
    },




    btnView: {
        flexDirection: 'row',
        marginTop: 30,
        // marginBottom

    },
    cancelBtn: {
        backgroundColor: 'red',
        width: '35%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',

    },
    cancelText: {
        textAlign: 'center',
        fontSize: 17,
        color: '#ffff',
        fontWeight: 'bold',
    },
    submitBtn: {
        backgroundColor: 'green',
        width: '35%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 20

    },
    submitText: {
        textAlign: 'center',
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold',
    },
    holdText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.tertiary,

    },
    holdView: {
        alignItems: 'flex-start',
        marginBottom: 40
    }

})