import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/colors';

export default StyleSheet.create({
    mainView: {
        flex: 1,
    },
    mainBackImg: {
        flex:1
    },
    firstView: {
        backgroundColor: '#fff',
        // borderTopWidth: 2,
        borderColor: '#ffff',
        width: '95%',
        height: 300,
        elevation:10,
        marginLeft:10,
        marginTop:20,
        borderRadius:10,
        padding:10

    },
    timeView: {
        flexDirection: 'row',
        // backgroundColor:'#ff/f',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
        // borderRadius: 20,
        width: '95%',
        height: 35,
        borderBottomWidth:2,
        borderColor: '#000'

    },
    flatListView1: {
        flexDirection: 'row',
        justifyContent:"space-evenly"
        
    },
    withDrawtimeText: {
        fontSize: 14,
        marginLeft: 10,
        color: '#000',
        fontWeight: 'bold',
    },
    pointInput: {
        marginTop: 20,
        backgroundColor: '#fff',
        width: '90%',
        marginLeft: 20,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
        height: 40,
        borderWidth:1,
        borderColor:'#000'

    },
    btn: {
        marginTop: 20,
        backgroundColor: Colors.secondary,
        width: '90%',
        marginLeft: 20,
        borderRadius: 10,
        height: 40,
        justifyContent: 'center'
    },
    btnText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    btnText1: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    recentView:{
        marginTop:15,
        backgroundColor:Colors.secondary,
        width:'80%',
        alignItems:'center',
        // justifyContent:'center'
        padding:5,
        borderRadius:30,
        borderWidth:2,
        borderColor:Colors.white,
        marginLeft:40,
        marginBottom:10
    },
    recent: {
        color:Colors.white,
        fontWeight:'bold',
        fontSize:20,
    },
    selectBtn: {
        backgroundColor: '#fff',
        width: '90%',
        marginLeft: 20,
        borderRadius: 10,
        height: 40,
        marginTop: 20,
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'#000'
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    arrowImag: {
        width: 26,
        height: 15,
        marginTop: 5
    },
    mainInnerModalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // elevation:20
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.header,
        height: 300,
        width: '90%',
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100,
        elevation:10

    },
    dataView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    flatListPhone: {
        width: "90%",
        marginTop: 20
    },
    flatListView: {
        width: '100%'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        // margin:10
    },
    phoneBtn: {
        backgroundColor: Colors.tertiary,
        marginTop: 5,
        borderRadius: 10,
        width: '100%'

    },
    crossImg: {
        width: 30,
        height: 30,
        marginTop: 20
    },
    selectItem: {
        backgroundColor: '#ffff',
        width: '90%',
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#000'
        // height:40
    },
    selectText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    mainFlatListView: {
        backgroundColor: '#df8402',
        width: '100%',
        marginLeft: 10,
        // borderRadius: 5,
        // elevation:10,
        marginTop: 10,
        padding: 10,
        marginBottom: 10,
        borderTopLeftRadius:40,
        borderBottomRightRadius:40,
        paddingHorizontal:20
    },
    subflatListView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    id: {
        color: '#fff',
        fontWeight: 'bold',
        // textAlign:'center'
        // fontSize: 17
    },
    id1: {
        color: '#fff',
        fontWeight: 'bold',
        // fontSize: 17
        // backgroundColor:"blue",
        width:250
    },
    idNo: {
        fontWeight: '400',
        color: '#fff',
        // fontSize: 17
    },
    date: {
        color: '#fff',
        // fontSize: 15
    },
    status: {
        color: 'yellow',
        fontWeight: 'bold',
        // fontSize: 17
    },
    amount: {
        fontWeight: '500',
        color: '#fff',
        // fontSize: 17
    },
    pts: {
        color: '#fff',
        fontWeight: 'bold',
        // fontSize: 17
    },
    remark: {
        color: Colors.white,
        fontWeight: '400',
        // backgroundColor:'red',
        // width:50

    },
    remarkempty: {
        color: '#9cff0a',
        fontWeight: 'bold',
        display:"none"
    },
    pending: {
        color: '#afd422',
        fontWeight: 'bold',
        // fontSize: 17
    },
    rejected: {
        color: "#8B0000",
        fontWeight: 'bold',
        // fontSize: 17
    },
    apporved: {
        color: Colors.green,
        fontWeight: 'bold',
        // fontSize: 17
    },
    pointsView: {
        marginTop: 10
    },
    noResultImag: {
        width: 130,
        height: 130
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
    upiView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    upiText: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 3,
        textAlign: 'center'
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
    mainViewFlateList:{
        // backgroundColor:Colors.white,
        width:'95%',
        // marginBottom:5,
        // marginLeft:10,
        // borderTopLeftRadius:75,
        // borderBottomRightRadius:75


    },
    headFlateListView:{
        marginBottom:30
    },
    flatListWhiteView: {
        width: '95%',
        height: 100,
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginLeft:10,
        // marginBottom:20
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
        width: '100%',
        // height: 90,
        backgroundColor: '#df8402',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
        // marginLeft:20,
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