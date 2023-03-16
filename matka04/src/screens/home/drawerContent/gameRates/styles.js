import {StyleSheet} from 'react-native';
import Colors from '../../../../assets/theme/colors';

export default StyleSheet.create({
    mainView:{
        flex:1,
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
        marginTop: 4,
        marginBottom:4
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
    contactImgView:{
        alignItems:'center',
        marginTop:20,

    },
    contactImg:{
        width:200,
        height:200
    },
    headerDigit:{
        backgroundColor:'#2c2e45',
        borderTopLeftRadius:5,
        borderTopRightRadius:5

    },
    headerDigitText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:25,
        fontStyle:'italic',
        textAlign:'center'
    },
    digitView:{
        flexDirection:'row',
        justifyContent:'space-around',
        // marginVertical:20,
        // width:
    },
    digitView1:{
        flexDirection:'row',
        justifyContent:'space-around',
        // marginBottom:20
    },
    singleDigitView:{
        // borderWidth:3,
        borderRadius:5,
        backgroundColor:Colors.primary,
        padding:5,
        width:150,
        margin:10
        // marginTop:20,
        // marginLeft:20,
        
    },
    singleDigitText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:17,
        textAlign:'center'

    },
    singleDigitNo:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:17
    },
    firstView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    }
})