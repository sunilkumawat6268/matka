import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/colors';

export default StyleSheet.create({
    mainView: {
        flex: 1,
    },
    mainBackImg:{
        flex:1,
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

    formView: {
        backgroundColor: '#fff',
        elevation:10,
        width:'95%',
        marginLeft:10,
        marginTop:10,
        borderRadius:10
    },
    inputView: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 10,
        width: '90%',
        paddingHorizontal: 20,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        borderWidth:1,


    },
    radioBtnView: {
        marginTop: 20,
        // marginLeft:-29
    },
    radiobtn: {
        fontSize: 16,
        color: "#000",
        fontWeight: 'bold',
        // letterSpacing:1
        marginLeft:0
    },
    submitBtn: {
        marginTop: 20,
        backgroundColor: Colors.tertiary,
        width: '80%',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        marginBottom:20
    },
    submitText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    flatListBtn:{
        // backgroundColor:'black'
    },
    mainFlatlistView: {
        backgroundColor: '#df8402',
        width: '100%',
        // marginLeft: 10,
        // borderRadius: 5,
        // elevation:10,
        // marginTop: 10,
        padding: 10,
        // marginBottom: 10,
        borderTopLeftRadius:40,
        borderBottomRightRadius:40,
        paddingHorizontal:20

    },
    rowFlatListView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor:'#dbf1fb'
    },
    idNo: {
        color: "#fff",
        fontWeight: 'bold'
    },
    number: {
        color: '#fff',
        fontWeight: '400',
    },
    amountView: {
        flexDirection: 'column',
        justifyContent: "flex-end",
        width:'30%',
        // backgroundColor:'#dbf1fb'
    },
    points: {
        color: 'red',
        fontWeight: 'bold',

    },
    pointStatus: {
        color: '#8B0000',
        fontWeight: 'bold',
        textAlign:'center'
    },
    pointStatus0: {
        color: '#bef417',
        fontWeight: 'bold',
    },
    pointStatus1: {
        color: 'green',
        fontWeight: 'bold'
    },
    remark:{
        display:'none'
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
    firstFlatListView:{
        width:'70%',
        // backgroundColor:'#dbf1fb'
    },
    noResultImag: {
        width: 130,
        height: 130
    },
    noResultView: {
        alignItems: 'center',
        marginTop: 150
    },
    noResultText: {
        fontWeight: 'bold',
        color: Colors.white,
        fontSize: 22,
        marginTop: 10
    },
    mainListView:{
        // backgroundColor:Colors.primary,
        // marginBottom:10,
        padding:10,
        
        
    },























































    flatListmainView:{
        backgroundColor:'#ff5000',
        // height:20,
        padding:10,
        marginBottom:10
    },
    subFlatListView:{
        // width:'95%',
        marginLeft:10,
        // height:20,
        backgroundColor:'blue',
        flexDirection:'row',
        padding:10,
        borderRadius:10
    },
    gPayBtn:{
        backgroundColor: Colors.primary,
        width:"29%",
        borderRadius:5,
        padding:5,
        margin:5,
        elevation:10

    },
    gPayText:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:15,
        textAlign:'center'
    },
    gPayBtn1:{
        backgroundColor: Colors.secondary,
        width:"29%",
        borderRadius:5,
        padding:5,
        margin:5,
        elevation:10
    },
    btnView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    }



})