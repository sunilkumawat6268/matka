import { StyleSheet } from 'react-native';
import Colors from '../../../assets/theme/colors';

export default StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:'#fff'
    },
    firstView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    imag:{
        width:250,
        height:290,
        // marginLeft:50
    },
    mag:{
        marginTop:50,
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        textAlign:'center',
        width:'80%'
    },
    closeBtn:{
        marginTop:20,
        backgroundColor:Colors.tertiary,
        width:'60%',
        borderRadius:10,
        justifyContent:'center',
        padding:5
    },
    closeText:{
        color:"#fff",
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        
    }


})