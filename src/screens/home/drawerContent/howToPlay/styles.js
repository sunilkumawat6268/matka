import { StyleSheet } from 'react-native'
import Colors from '../../../../assets/theme/colors'

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
    contactImgView: {
        alignItems: 'center',
        marginTop: 20,

    },
    contactImg: {
        width: 100,
        height: 100
    },
    firstView: {
        backgroundColor: Colors.primary,
        // borderWidth:2,
        padding: 10,
        marginTop: 20,
        width: '95%',
        marginLeft: 10,
        borderRadius: 10,
        elevation:10,
        flexDirection:"row",
        justifyContent:'center'
        // flex:0.3,

    },
    heading: {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:25

    },
    flatListView: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    flatListDataView: {
        // alignItems:'center',
        // borderWidth:2,
        height:350
    },
    dataText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white,

    },
    youTubeBtn: {
        backgroundColor: Colors.white,
        // flexDirection:'row',
        justifyContent:'center',
        marginBottom:30,
        // borderWidth:2,
        borderColor:"#fff",
        padding:5,
        width:'90%',
        borderRadius:10
        

    },
    youTubeImg:{
        width:50,
        height:50
    },
    youTubeLink:{
        fontSize:17,
        fontWeight:'bold',
        textDecorationLine:'underline',
        color:'blue',
        textAlign:'center',
        // textDecorationStyle:'dotted'

    },
    flatListDataView1:{
        // marginTop:30,
        alignItems:'center',
        elevation:10


    },
    imag:{
        width:50,
        height:50
    }


})