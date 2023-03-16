import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    firstView: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // height:300
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000'

    },
    imgView:{
        borderWidth:2,
        borderRadius:75,
        width:100,
        height:100,
        alignItems:'center'
        
    },
    img:{
        width:95,
        height:95,
        borderRadius:75

        
    },
    mainFlatListView:{
        backgroundColor:'#eee',
        width:'95%',
        alignItems:'center',
        padding:10,
        margin:10,
        borderWidth:1,
        borderRadius:5

    },
    gameName:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000',

    },
    msg:{
        fontSize:15,
        fontWeight:'bold'
    }
})