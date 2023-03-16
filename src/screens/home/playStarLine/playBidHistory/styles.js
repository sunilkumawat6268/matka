import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/colors';

export default StyleSheet.create({
    mainView: {
        flex: 1,

    },
    mainBackImg: {
        flex: 1,
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
        marginLeft: 70,
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
        // borderTopWidth: 2,
        borderColor: '#ffff',
        backgroundColor: '#fff',
        height: 200,
        elevation: 15,
        marginBottom: 20,
        width: '95%',
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 10
    },
    datePickerView: {
        // justifyContent:'center',
        alignItems: 'center',
        marginTop: 20,

    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    datePickerView1: {
        // justifyContent:'center',
        alignItems: 'center',
        marginTop: 20,

    },
    fromDateBtn: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 20,
        height: 40,
        borderWidth: 1
    },
    textFromDateBtn: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',

    },
    fromText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,

    },
    fromDateBtnView: {
        flexDirection: 'row',
        justifyContent: 'center',
        // marginHorizontal:20
    },
    pickerImag: {
        width: 25,
        height: 25,
        marginHorizontal: 10
    },
    submitView: {
        alignItems: 'center',
        marginTop: 30
    },
    submitBtn: {
        backgroundColor: Colors.tertiary,
        width: '90%',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center'

    },
    submitText: {
        textAlign: 'center',
        fontSize: 20,
        // padding:10,
        fontWeight: 'bold',
        color: '#fff'
    },
    flatListView: {
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#df8402',
        width: '95%',
        marginLeft: 10,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingHorizontal: 20,

    },
    subFlatlistView: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    gameNameFirst: {
        fontWeight: 'bold',
        color: Colors.white
    },
    gameName: {
        color: '#8B0000',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    gameName1:{
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    gameNameSecond: {
        fontWeight: 'bold',
        color: "#fff"
    },
    gamePoint: {
        color: '#fff',
        fontWeight: 'bold',

    },
    secondFlatlistView: {
        flexDirection: 'column',
        justifyContent: "space-between"
    },
    noResultImag: {
        width: 150,
        height: 150
    },
    noResultView: {
        alignItems: 'center',
        marginTop: 100
    },
    noResultText: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 22,
        marginTop: 10
    },
    historyBtn: {
        // backgroundColor: Colors.white,
        // marginBottom: 40,
        // marginLeft: 10,
        // width: '95%',
        // borderTopLeftRadius: 50,
        // borderBottomRightRadius: 50,
        // height:90

    }


})