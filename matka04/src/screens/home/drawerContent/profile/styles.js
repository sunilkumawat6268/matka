import { StyleSheet } from 'react-native';
import Colors from '../../../../assets/theme/colors';

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
        marginLeft: 50,
        marginTop: 4,
        marginBottom: 4
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
    firstView: {
        // borderTopWidth: 2,
        borderColor: '#fff',
        // flexDirection: 'row',
        alignItems: 'center',
        padding: 25,
        justifyContent: 'center',
        height:200

    },
    adminImg: {
        width: 110,
        height: 110,
        borderRadius: 75,
        // marginTop:100
        // bac
    },
    numberText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 20,
        marginTop: 20
    },
    number1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 20,
        // marginTop: 20
        // display:'none'
    },
    number: {
        display: 'none'
    },
    editBtn: {
        marginTop: 20,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    editImag: {
        width: 30,
        height: 30,
    },
    editText: {
        fontSize: 20,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingHorizontal: 5

    },
    mainInputView: {
        marginTop: 20,
        // backgroundColor:'#fff',
        padding:30,
        // elevation:10
    },
    inputview: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '90%',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 20,
        marginLeft: 20,
        marginBottom: 20,
        // borderColor: "#fb0218",
        height:40,
        // justifyContent:'center',

    },
    userImag: {
        width: 20,
        height: 20,
        marginTop: 10,

    },
    userInput: {
        width: '90%',
        paddingHorizontal: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: "#000",
    },
    btnView: {
        alignItems: 'center',
        marginTop: 10
    },
    submitBtn: {
        backgroundColor: Colors.tertiary,
        width: '80%',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center'

    },
    submitText: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: "bold",
        color: "#fff"
    },

















    mainImgView:{
        flexDirection:'row',
        justifyContent:"center",
        marginTop:100

    },

    imgView:{
        borderWidth:2,
        borderRadius:75,
        width:115,
        height:115,

        
    },
    img:{
        width:95,
        height:95,
        borderRadius:75

        
    },
    cameraView:{
        marginLeft:-20
    },
    cameraBtn:{
        backgroundColor:Colors.primary,
        padding:5,
        borderRadius:75,
        marginLeft:-10
    },
    cameraImg:{
        width:20,
        height:20
    }

})