import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../assets/theme/colors';


const { width } = Dimensions.get('window');


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
        width: 33,
        height: 30,
        marginLeft: 5,
        marginTop: 3
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
    mainSocilaView: {
        marginTop: 10,
        // width:'95%',
        // marginLeft:10,
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    whatsappBtn: {
        width: "30%"
    },
    mainwhatsView: {
        // backgroundColor: '#08831d',
        width: "100%",
        height: 40,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    mainTelegramView: {
        // backgroundColor: '#008cc3',
        width: "100%",
        height: 40,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    mainPhoneView: {
        // backgroundColor: '#073793',
        width: "100%",
        height: 40,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    whatsappWhiteView: {
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: Colors.white,
        width: 30,
        height: 30,
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75,
        borderBottomRightRadius: 75
    },
    whatsappIcon: {
        width: 20,
        height: 20,
        marginTop: 5,
        marginLeft: 5
    },
    whatsappText: {
        color: Colors.white,
        fontWeight: "bold",
        marginTop: 10,
        marginRight: 10,
        fontSize:12
    },
    howtoplayBtn: {
        marginTop: 10,

    },
    mainhowtoPlayView: {
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor:Colors.secondary,
        // width:'80%'
    },
    subhowtoPlayView: {
        backgroundColor: Colors.secondary,
        width: '50%',
        elevation: 10,
        borderRadius: 20,
        height: 35,
        justifyContent: 'center'

    },
    howToPlayText: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    goImgView: {
        backgroundColor: "#884400",
        width: '25%',
        alignItems: 'center',
        marginLeft: -30,
        borderRadius: 20,
        zIndex: -1,
        height: 35,
        justifyContent: 'center'

    },
    goImg: {
        width: 30,
        height: 20,
        tintColor: Colors.white,
        marginTop: 3,
        marginLeft: 10
    },
    sliderView: {
        // marginLeft:10,
        // marginRight:10,
        // width,
        height: 180,
        marginTop: 10
    },
    sliderImg: {
        // backgroundColor: '#5fafd4',
        // width:'90%',
        // marginLeft:10
    },
    sliderImageFlatlist: {
        width,
        height: 180,
        // marginTop: 10,
        // marginLeft: 10,
        borderRadius: 20,
        borderWidth: 5,
        borderColor: Colors.primary,
        marginBottom: 10

    },
    mainPlayStarLineView: {
        marginTop: -20,
        marginBottom:20
    },
    firstPlayStarview: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    playTextView: {
        backgroundColor: 'red',
        width: '70%',
        borderRadius: 30,
        height: 40,
        justifyContent: 'center'
    },
    playText: {
        color: '#070098',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    starImgView: {
        marginLeft: -20,
        marginTop: -10
    },
    starImg: {
        width: 50,
        height: 60,
    },
    mainFlatListView: {
        width: '95%',
        marginLeft: 10,
        // marginTop:20,
        // marginBottom:30
    },
    firstFlatListView: {

    },
    headFlateListView:{
        marginBottom:20,
        marginTop:10
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
        backgroundColor:Colors.white,
        borderRadius:75,
        padding:3
    },
    playimg:{
        width:10,
        height:12
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
    },
    noResultImag:{
        width:150,
        height:150
    },
    noResultView:{
        alignItems:'center',
        marginTop:100
    },
    noResultText:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:22,
        marginTop:10
    },












    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:20
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        height: 300,
        width: '90%',
        borderTopLeftRadius:100,
        elevation:10,
        borderBottomLeftRadius:100

    },
    modalboxView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        elevation:10
    },
   
    text: {
        color: '#000',
        marginTop: 10,
        fontWeight: "bold",
        marginBottom: 10,
        fontSize:20

    },
    updateBtn: {
        backgroundColor: '#ff5000',
        width: '35%',
        borderRadius: 10,
        justifyContent: 'center',
        height: 40,
        marginLeft:30
    },
    updateText: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    btnView: {
        flexDirection: "row",
        // justifyContent:'space-between'
    },
    updateBtn1: {
        backgroundColor: 'green',
        width: '35%',
        borderRadius: 10,
        justifyContent: 'center',
        height: 40,
        marginLeft: 10
    },
    modalImgView:{
        // padding:20,
        marginBottom:10,
        backgroundColor:Colors.primary,
        borderRadius:75,
        // marginTop:-80,
        // borderWidth:5,
        // borderColor:'#2c2e45'
    },
    updateImag: {
        width: 120,
        height: 120,
        
    },



})