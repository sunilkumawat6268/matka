import { StyleSheet } from 'react-native';
import Colors from '../../../assets/theme/colors';

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
        marginLeft: 80,
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














    subMainView: {
        backgroundColor: '#fff',
        width: '95%',
        // borderWidth:2,
        marginLeft: 10,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 20,
        elevation: 15,
    },
    gameRatesHeading: {
        textAlign: 'center',
        color: Colors.tertiary,
        backgroundColor: Colors.primary,
        fontWeight: 'bold',
        fontSize: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    dataView: {
        // justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: 15
    },
    flatListDataView: {
        marginTop: 15,
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
        // marginTop: 10
    },
    singleDigit: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16,
        // width: 200
    },
    dataText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 16
    },
    dataTextView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    historyText: {
        fontSize: 20,
        color: Colors.tertiary,
        fontWeight: 'bold',

    },
    play_history:{
        width:45,
        height:45
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: Colors.primary,
        padding: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

















    headFlateListView:{
        marginBottom:30
    },
    flatListWhiteView: {
        width: '100%',
        height: 100,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    gameNameView: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 5
    },
    gameName: {
        // marginLeft:40,
        color: Colors.tertiary,
        fontWeight: 'bold',
        fontSize:17

    },
    playView:{
        backgroundColor:Colors.tertiary,
        width:100,
        marginBottom:5,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    gamePlayText:{
        color:Colors.white,
        fontWeight:'bold',
        marginLeft:10
    },
    playImgView:{
        backgroundColor:Colors.black,
        borderRadius:75,
        padding:5
    },
    playimg:{
        width:10,
        height:10
    },
    secondYellowView: {
        width: '90%',
        height: 90,
        backgroundColor: '#df8402',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginLeft:20,
        padding:15,
        // marginBottom:20
    },
    hangingImg:{
        width:75,
        height:75
    },
    marketClose:{
        color:Colors.red,
        fontSize:12,
        fontWeight:'bold',
        // backgroundColor:'black',
        marginTop:30,
        width:50,
        marginLeft:10,
        textAlign:'center',
        transform: [{ skewY: '-15deg' }, { skewX: '-10deg' }],
        

    },
    marketOpen:{
        color:'#70ef00',
        fontSize:12,
        fontWeight:'bold',
        // backgroundColor:'black',
        marginTop:30,
        width:50,
        marginLeft:10,
        textAlign:'center',
        transform: [{ skewY: '-15deg' }, { skewX: '-10deg' }],
        

    },

    subSecondView:{
        flexDirection:'row',
        justifyContent:'space-between',
        // marginBottom:30
    },
    middleView:{

    },
    gameNo:{
        color:Colors.white,
        fontWeight:'bold',
        textAlign:'center',
        // fontSize:20,
        

    },
    timeView:{
        flexDirection:'row',
        // justifyContent:'space-between'
    },
    watchImg:{
        width:15,
        height:15,
        marginTop:3
    },
    timeText:{
        color:Colors.white,
        fontWeight:"600",
        fontStyle:'italic',

    },
    playBtn:{
        width:50,
        height:50
    }




}) 