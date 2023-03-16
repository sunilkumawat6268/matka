import { StyleSheet } from 'react-native';
import Colors from '../../assets/theme/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
    imgView: {
        // backgroundColor: "#602400",
        borderRadius: 10,
        padding: 20,
        // elevation: 10
    },
    img: {
        width: 140,
        height: 130
    },
    img1: {
        // width:200,
        // height:200
    },

    matkaText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        // marginTop: 20,
        fontStyle: 'italic',
        letterSpacing: 10,
        textAlign: 'center'
    },
    matkaText1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginTop: 20,
        fontStyle: 'italic',
        // letterSpacing: 10,
        textAlign: 'center'
    },
    loader: {
        width: 120,
        height: 120,
    },
    textView: {
    },
    loderView: {
        position: 'absolute',
        bottom: 0
    }



})