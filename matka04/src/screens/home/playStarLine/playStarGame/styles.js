import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/colors';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.screen_Background
    },
    singleDigitView: {
        marginTop: 10,
        // borderWidth: 2,
        width: '95%',
        marginLeft: 10,
        borderRadius: 10,
        marginBottom:10
    },
    sigitView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    singleDigitImg: {
        width: 130,
        height: 130,

    },
    digitTextView:{
        // backgroundColor:'#2c2e45',
        // borderTopRightRadius:8,
        // borderTopLeftRadius:8,

    },
    digitText:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    triplePanaView:{
        alignItems:'center',

    }
})