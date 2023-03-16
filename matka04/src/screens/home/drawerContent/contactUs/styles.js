import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/colors';

export default StyleSheet.create({
    maninView:{
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
        marginTop:40,

    },
    contactImg:{
        width:200,
        height:200
    },
    firstView:{
       
        justifyContent:'center',
        alignItems:"center"
    },

    whatsappView:{
        borderWidth:4,
        width:150,
        // marginLeft:10,
        marginTop:40,
        borderRadius:10,
        borderColor:Colors.primary,
    },
    whatsappView1:{
        borderWidth:4,
        width:150,
        // marginLeft:10,

        marginTop:40,
        borderRadius:10,
        borderColor:Colors.primary,
    },
    whatsappView2:{
        borderWidth:4,
        width:150,
        marginLeft:10,

        marginTop:40,
        borderRadius:10,
        borderColor:Colors.primary,
        marginLeft:40
    },
    whatsappImag:{
        width:70,
        height:70,
    },
    whatsappImag1:{
        width:70,
        height:70
    },
    whatsappText:{
        textAlign:'center',
        backgroundColor:Colors.primary,
        fontSize:16,
        fontWeight:'bold',
        color:'#fff'
    },
    whatsappNo:{
        color:Colors.primary,
        fontWeight:'bold',
        fontSize:16,
        padding:10
    },
    imageView:{
        alignItems:'center',
        padding:10
    },
    contactView:{
        flexDirection:'row',
        justifyContent:'space-evenly',

    },
    container: {
        flex: 1,
      },

})


