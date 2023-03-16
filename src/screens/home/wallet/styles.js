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
        width: 22,
        height: 20,
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
        // justifyContent: 'center'
    },

    whatsappBtn: {
        width: "40%",
        justifyContent: 'flex-end'
    },
    mainwhatsView: {
        width: "100%",
        // height: 45,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    addFundColor:{
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems:'center'
    },


    mainwhatsView1: {
        // height: 45,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 2,
        borderColor: Colors.white,
        padding:5


    },
    addfund:{
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 5,
        borderColor: Colors.white,
        // padding:10
        width:100,
    },
    addfundImg:{
        width:30,
        height:30
    },
    addFundBtn: {
        width: 100,
        justifyContent: 'center',
        alignItems:"center",
        marginTop:30,
        // padding:10
    },








    whatsappWhiteView: {
        marginTop: 5,
        marginLeft: 5,
        backgroundColor: Colors.white,
        width: 30,
        height: 30,
        borderTopRightRadius: 75,
        borderTopLeftRadius: 75,
        borderBottomRightRadius: 75,
    },
    whatsappIcon: {
        width: 20,
        height: 20,
        marginTop: 5,
        marginLeft: 5
    },
    whatsappText: {
        color: Colors.tertiary,
        fontWeight: "bold",
        marginTop: 3,
        marginRight: 10,
        width:60,
        textAlign:'center',
        fontSize:12
    },
    amountText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.white,
        // marginTop: 3,
        // marginRight: 2,
        // marginBottom:6,
        marginLeft: 10
    },
    mainAmountView: {
        marginTop: 20,
    },
    subAmountView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    availableText: {
        color: '#f6ff00',
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic',

    },
    walletAmountView: {
        flexDirection: 'row',
    },
    coniImg: {
        width: 40,
        height: 40,

    },
    paymentView:{
        marginTop:20,
        width:'98%',
        height:150,
        backgroundColor:'#ffffff80',
        marginLeft:10,
        borderTopLeftRadius:60,
        borderBottomLeftRadius:60,
        padding:10
    },
    addfundText: {
        color: Colors.white,
        fontWeight: "bold",
        marginTop: 3,
        // marginRight: 10,
        // width:60,
        textAlign:'center'
    },
    subAddFundView:{
        alignItems:'center',
        padding:10
    },
    subPaymentView:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:40
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
        marginLeft:40
    },
    recentText:{
        color:Colors.white,
        fontWeight:'bold',
        fontSize:20,

    },
    mainFlateListView:{
        width:'98%',
        marginLeft:5,
        marginTop:10
    },
    mainWhiteview:{
        // width:'100%',
        padding:7,
        paddingHorizontal:10
        // height:40
    },
    subbWhiteView:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    downImgView:{
        // backgroundColor:'blue'
    },
    downImg:{
        width:30,
        height:30,
        marginLeft:5
    },
    recentHistoryView:{
        // backgroundColor:'red',
        width:240,
    },
    transactionHistoryText:{
        fontWeight:'bold',
        color:Colors.black,
        textAlign:'center',
        fontSize:11
    },
    recentAmountView:{
        backgroundColor:'#ffb822',
        // padding:3,
        borderRadius:10,
        height:25,
        justifyContent:'center',
        paddingHorizontal:5,
        marginLeft:-20
    },
    amountView:{
        fontWeight:'bold',
        color:Colors.green,
        fontSize:12
    },  
    amountView1:{
        fontWeight:"bold",
        fontSize:12,
        color:Colors.red,
    },
    secondBackImg:{
        width:'90%',
        height:20,
        paddingHorizontal:20,
        // fontWeight:'bold'
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
    

})