import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, ToastAndroid, ScrollView, FlatList, Modal, Image, Keyboard, ImageBackground } from 'react-native';
import { AutoComplete } from 'react-native-element-textinput';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';



var array = []
var walletUpdateBal = Number(global.wallet_Balance)

export default class SingleDigitScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            realDate: "",
            change: (global.gameStatus === 1) ? "Open" : 'Close',
            secondChange: "Close",
            background: 1,
            digits: "",
            points: "",
            closedigits: "",
            status: false,
            dateShow: [],
            showDigitList: [
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
            ],
            showlist: [
                "000",
                "100",
                "110",
                "111",
                "112",
                "113",
                "114",
                "115",
                "116",
                "117",
                "118",
                "119",
                "120",
                "122",
                "123",
                "124",
                "125",
                "126",
                "127",
                "128",
                "129",
                "130",
                "133",
                "134",
                "135",
                "136",
                "137",
                "138",
                "139",
                "140",
                "144",
                "145",
                "146",
                "147",
                "148",
                "149",
                "150",
                "155",
                "156",
                "157",
                "158",
                "159",
                "160",
                "166",
                "167",
                "168",
                "169",
                "170",
                "177",
                "178",
                "179",
                "180",
                "188",
                "189",
                "190",
                "199",
                "200",
                "220",
                "222",
                "223",
                "224",
                "225",
                "226",
                "227",
                "228",
                "229",
                "230",
                "233",
                "234",
                "235",
                "236",
                "237",
                "238",
                "239",
                "240",
                "244",
                "245",
                "246",
                "247",
                "248",
                "249",
                "250",
                "255",
                "256",
                "257",
                "258",
                "259",
                "260",
                "266",
                "267",
                "268",
                "269",
                "270",
                "277",
                "278",
                "279",
                "280",
                "288",
                "289",
                "290",
                "299",
                "300",
                "330",
                "333",
                "334",
                "335",
                "336",
                "337",
                "338",
                "339",
                "340",
                "344",
                "345",
                "346",
                "347",
                "348",
                "349",
                "350",
                "355",
                "356",
                "357",
                "358",
                "359",
                "360",
                "366",
                "367",
                "368",
                "369",
                "370",
                "377",
                "378",
                "379",
                "380",
                "388",
                "389",
                "390",
                "399",
                "400",
                "440",
                "444",
                "445",
                "446",
                "447",
                "448",
                "449",
                "450",
                "455",
                "456",
                "457",
                "458",
                "459",
                "460",
                "466",
                "467",
                "468",
                "469",
                "470",
                "477",
                "478",
                "479",
                "480",
                "488",
                "489",
                "490",
                "499",
                "500",
                "550",
                "555",
                "556",
                "557",
                "558",
                "559",
                "560",
                "566",
                "567",
                "568",
                "569",
                "570",
                "577",
                "578",
                "579",
                "580",
                "588",
                "589",
                "590",
                "599",
                "600",
                "660",
                "666",
                "667",
                "668",
                "669",
                "670",
                "677",
                "678",
                "679",
                "680",
                "688",
                "689",
                "690",
                "699",
                "700",
                "770",
                "777",
                "778",
                "779",
                "780",
                "788",
                "789",
                "790",
                "799",
                "800",
                "880",
                "888",
                "889",
                "890",
                "899",
                "900",
                "990",
                "999"
            ],
            modalVisible: false,
            wallet: walletUpdateBal,
            inputedit: true,
            inputData: [],
            btn: false,
            wallet1: global.wallet_Balance
        }

    }

    componentDidMount(index) {
        walletUpdateBal = global.wallet_Balance
        this.wallet_Balance()
        ShowDate()
        console.log(this.state.change)
        array.splice(index);
        this.setState({ inputData: [...array] });
        this.view.fadeInDown(1500)
    }
    handleViewRef = ref => this.view = ref;

    wallet_Balance = () => {
        fetch('http://13.127.179.165/api-user-wallet-balance', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "env_type": "1",
                "app_key": global.appKey,
                unique_token: global.uniqueToken
            })
        })

            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON.wallet_amt)
                global.wallet_Balance = responseJSON.wallet_amt

            })

    }
    textChange1 = (a, b) => {
        this.setState({
            change: a,
            background: b
        })
    }
    textChange = (a, b) => {
        this.setState({
            secondChange: a,
            background: b
        })
    }
    proceed = () => {
        var digits = this.state.digits;
        var points = this.state.points;
        var closedigits = this.state.closedigits;
        var showlist = this.state.showlist;
        var showDigitList = this.state.showDigitList;
        var wallet = this.state.wallet;
        var wallet1 = this.state.wallet1;

        Keyboard.dismiss()
        if (digits === "") {
            ToastAndroid.show("Enter Digit ", ToastAndroid.SHORT)
        }
        else if (closedigits === "") {
            ToastAndroid.show('Enter Panna ', ToastAndroid.SHORT)
        }
        else if (points === "") {
            ToastAndroid.show('Enter Points ', ToastAndroid.SHORT)
        }
        else if (points.includes('-') || points.includes('.') || points.includes(',') || points.includes(' ')) {
            ToastAndroid.show('Invalid points ', ToastAndroid.SHORT)
        }
        else if (points < Number(global.bidMin)) {
            ToastAndroid.show('Minimum amount required : ' + global.bidMin, ToastAndroid.SHORT)

        }
        else if (points > Number(global.bidMax)) {
            ToastAndroid.show('Maximum amount required : ' + global.bidMax, ToastAndroid.SHORT)
        }
        else if (!showDigitList.includes(digits)) {
            ToastAndroid.show('Not a Valid Digit ', ToastAndroid.SHORT)
        }
        else if (!showlist.includes(closedigits)) {
            ToastAndroid.show('Not a Valid Pana ', ToastAndroid.SHORT)
        }
        else if (this.state.background === "" || this.state.change === "") {
            // alert("ok")
            ToastAndroid.show("Select session :", ToastAndroid.SHORT)
        }
        else if (points > Number(walletUpdateBal)) {
            ToastAndroid.show("Sorry You Don't Have Sufficient Amount For This Bid", ToastAndroid.SHORT)
        }
        else {
            walletUpdateBal = Number(walletUpdateBal) - Number(points)
            if (array.length === 0) {
                array.push({
                    digits: this.state.digits,
                    closedigits: this.state.closedigits,
                    points: this.state.points,
                    session: this.state.secondChange === "Close" ? "Open" : "Close",
                })
            }
            else {
                for (i = 0; i < array.length; i++) {
                    if (digits === array[i].digits) {
                        var remainingPoint = array[i].points;
                        array.splice(i, 1)
                        walletUpdateBal = Number(walletUpdateBal) + Number(remainingPoint)

                    }
                }
                array.push({
                    digits: this.state.digits,
                    closedigits: this.state.closedigits,
                    points: this.state.points,
                    session: this.state.secondChange === "Close" ? "Open" : "Close",
                })
            }
            this.setState({
                status: true,
                inputData: [...array],
                btn: true,
                wallet: walletUpdateBal,
                points: "",
                // digits: null,
            })
            console.log(digits)
        }
    }

    deleteDynamicField = (index) => {

        var points = this.state.points;
        console.log(points);
        walletUpdateBal = Number(walletUpdateBal) + Number(array[index].points)
        this.setState({
            wallet: walletUpdateBal,
        })
        console.log("llllll", Number(walletUpdateBal) + Number(array[0].points),)
        array.splice(index, 1);


        this.setState({ inputData: [...array] });
        if (array.length == 0) {
            this.setState({
                btn: false,
                status: false,
            })
        }
        else {
            this.setState({
                btn: true,
                // status: false,
            })
        }
        // console.log(index)


        // console.log(walletUpdateBal, "before")

        // console.log(walletUpdateBal , points, "after")
        // var update = walletUpdateBal 
        // console.log(update)

        // console.log(wallet)
    }

    counthow = (index) => {

        array.splice(index);
        this.setState({ inputData: [...array] });
        console.log(array.splice())

    }



    render() {
        var totalpoints = 0
        for (i = 0; i < array.length; i++) {
            totalpoints = totalpoints + Number(array[i].points)
        }

        const { item } = this.props.route.params;
        ShowDate = () => {
            fetch("http://13.127.179.165/api-get-current-date", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "env_type": "1",
                    "env_type": "1",
                    "app_key": global.appKey,
                    unique_token: global.uniqueToken,
                    "game_id": item.game_id
                })
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(responseJSON.new_date)
                    global.todayDate = responseJSON.new_date
                    global.bidMin = responseJSON.min_bid_amount
                    global.bidMax = responseJSON.max_bid_amount
                    this.setState({
                        dateShow: responseJSON
                    })
                })
        }
        const submit1 = () => {
            this.setState({
                modalVisible: true,
            })

        }

        const submit = (index) => {
            var totalpoints = 0
            for (i = 0; i < array.length; i++) {
                totalpoints = totalpoints + Number(array[i].points)
            }

            fetch("http://13.127.179.165/api-submit-bid", {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    "env_type": "1",
                    app_key: global.appKey,
                    new_result:
                    {
                        unique_token: global.uniqueToken,
                        Gamename: item.game_name,
                        "totalbit": totalpoints,
                        gameid: item.game_id,
                        pana: "Half Sangam",
                        bid_date: global.todayDate,
                        session: this.state.change,
                        result: array
                    }
                })
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(responseJSON)
                    if (!responseJSON.status) {
                        ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        if (this.state.status == true) {
                            this.setState({
                                status: false,
                                modalVisible: false,
                                inputedit: true,
                                btn: false,
                            })
                            array.splice(index);
                            this.setState({ inputData: [...array] });
                        }
                        else {
                            this.setState({
                                status: true,
                                modalVisible: false,
                                inputedit: true,
                                btn: false,
                            })
                            array.splice(index);
                            this.setState({ inputData: [...array] });
                        }
                    }
                    else {
                        fetch('http://13.127.179.165/api-user-wallet-balance', {
                            method: "POST",
                            headers: {
                                Accept: 'application/json',
                                'Content-type': 'application/json',
                            },
                            body: JSON.stringify({
                                "env_type": "1",
                                "app_key": global.appKey,
                                unique_token: global.uniqueToken
                            })
                        })

                            .then((response) => response.json())
                            .then((responseJSON) => {
                                console.log(responseJSON.wallet_amt)
                                global.wallet_Balance = responseJSON.wallet_amt

                            })

                        ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        if (this.state.status == true) {
                            this.setState({
                                status: false,
                                modalVisible: false,
                                inputedit: true,
                                btn: false,

                            })
                            array.splice(index);
                            this.setState({ inputData: [...array] });

                        }
                        else {
                            this.setState({
                                status: true,
                                modalVisible: false,
                                inputedit: true,
                                btn: false,
                            })
                            array.splice(index);
                            this.setState({ inputData: [...array] });
                        }
                    }
                })
        }


        return (
            <SafeAreaView style={styles.mainView} >
                <ImageBackground style={styles.mainBackImg} source={require('../../../../assets/images/screen_bg.png')} >

                <View style={styles.headerView} >
                        <View style={styles.barImgView} >
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack()
                            }} >
                                <Image style={styles.barImag} source={require('../../../../assets/images/back_1.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secondHeaderView} >
                            <View>
                                <Text style={styles.homeText} > Half Sangam </Text>
                            </View>
                            <View>

                                <View style={{ flexDirection: 'row', marginTop: 5 }} >

                                    <Image style={styles.walletimag} source={require('../../../../assets/images/wallet.png')} />
                                    <Text style={styles.amountText} >{walletUpdateBal} </Text>

                                </View>



                            </View>
                        </View>
                    </View>
                    <Animatable.View
                        ref={this.handleViewRef}
                    // disable
                    >
                          <View style={styles.loginView} >
                                <FlatList
                                    data={[this.state.dateShow]}
                                    // horizontal
                                    renderItem={({ item }) =>
                                        <View style={styles.flatListView1} >
                                            <Text style={styles.loginText}  > Date :  {item.new_date}</Text>
                                        </View>
                                    }
                                />
                            </View>
                        <View style={styles.firstView} >

                    

                            <View>

                                <View style={styles.sessionView} >
                                    <Text style={styles.sessionText} >Choose Session </Text>
                                </View>

                                {(() => {
                                    if (global.gameStatus == 1) {
                                        return (
                                            <View style={styles.sessionBtnView} >

                                                <TouchableOpacity
                                                    disabled={this.state.btn}
                                                    style={[styles.sessionBtn, (this.state.background === 1) ? styles.sessionBtn : (global.gameStatus === 2) ? styles.btn : styles.red]}
                                                    onPress={() => this.textChange('Close', 1)} >

                                                    <Text style={styles.openText} >OPEN</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                    disabled={this.state.btn}
                                                    style={[styles.sessionBtn, (this.state.background === 2) ? styles.sessionBtn : (global.gameStatus === 1) ? styles.red : styles.sessionBtn]}
                                                    onPress={() => this.textChange('Open', 2)}
                                                >
                                                    <Text style={styles.openText}>CLOSE</Text>
                                                </TouchableOpacity>

                                            </View>
                                        )
                                    }


                                })()}

                                {(() => {
                                    if (global.gameStatus === 2) {
                                        return (
                                            <View style={styles.sessionBtnView} >

                                                <TouchableOpacity disabled={global.gameStatus === 2}
                                                    style={[styles.red,]}
                                                    onPress={() => this.textChange('Open', 1)}
                                                >
                                                    <Text style={styles.openText} >OPEN</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={[styles.sessionBtn,]}
                                                    onPress={() => this.textChange('Close', 2)}   >
                                                    <Text style={styles.openText}>CLOSE</Text>
                                                </TouchableOpacity>

                                            </View>

                                        )
                                    }

                                    return null;
                                })()}


                            </View>

                            <View style={styles.inputView}>

                                <View style={styles.autoView} >
                                    <Text style={styles.digitText} >{this.state.secondChange == "Close" ? "Open" : "Close"} Digit </Text>
                                    {/* <Text style={styles.digitText} >{this.state.change} Digit</Text> */}
                                    <AutoComplete
                                        value={this.state.digits}
                                        data={this.state.showDigitList}
                                        style={styles.input}
                                        inputStyle={styles.inputStyle}
                                        labelStyle={styles.labelStyle}
                                        placeholderStyle={styles.placeholderStyle}
                                        textErrorStyle={styles.textErrorStyle}
                                        // label="Auto Complete"
                                        placeholder="Enter Digit"
                                        // placeholderTextColor=''
                                        onChangeText={digits => this.setState({ digits })}
                                        keyboardType='numeric'
                                        maxHeight={50}
                                        showIcon={false}
                                        numeric={true}
                                        editable={this.state.inputedit}
                                        maxLength={1}
                                    />
                                </View>



                                <View style={styles.autoView} >
                                    <Text style={styles.digitText} >{this.state.secondChange} Panna</Text>

                                    <AutoComplete
                                        value={this.state.closedigits}
                                        data={this.state.showlist}
                                        style={styles.input}
                                        inputStyle={styles.inputStyle}
                                        labelStyle={styles.labelStyle}
                                        placeholderStyle={styles.placeholderStyle}
                                        textErrorStyle={styles.textErrorStyle}
                                        // label="Auto Complete"
                                        placeholder="Enter Panna"
                                        // placeholderTextColor=''
                                        onChangeText={closedigits => this.setState({ closedigits })}
                                        keyboardType='numeric'
                                        maxHeight={50}
                                        showIcon={false}
                                        numeric={true}
                                        editable={this.state.inputedit}
                                        maxLength={3}
                                    />

                                </View>


                                <View>
                                    <Text style={styles.digitText} >Point</Text>
                                    <TextInput style={styles.inputPoint}
                                        value={this.state.points}
                                        placeholder='Enter Points'
                                        keyboardType='number-pad'
                                        // maxLength={4}
                                        onChangeText={points => this.setState({ points })}
                                        placeholderTextColor="black"
                                        editable={this.state.inputedit}
                                    />
                                </View>

                            </View>

                            <View style={styles.mainBtnView} >

                                <TouchableOpacity style={styles.proceedBtn} onPress={this.proceed}>
                                    <Text style={styles.proceedText} >PROCEED</Text>
                                </TouchableOpacity>
                                {
                                    this.state.status ?
                                        <TouchableOpacity style={styles.proceedBtn} onPress={submit1}>
                                            <Text style={styles.proceedText} >SUBMIT</Text>
                                        </TouchableOpacity> :
                                        null
                                }

                            </View>

                        </View>
                    </Animatable.View>

                    <FlatList
                        data={this.state.inputData}
                        extraData={this.state.inputData}
                        renderItem={({ item, index }) =>
                            <View style={styles.mainFlatListView}>
                                <View style={styles.flatListView} >
                                    <View>
                                        <Text style={styles.digitValue} >{this.state.secondChange == "Close" ? "Open" : "Close"} Digit</Text>
                                        <Text style={styles.digitNumber}> {item.digits}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.digitValue} >{this.state.secondChange} Panna</Text>
                                        <Text style={styles.digitNumber}> {item.closedigits}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.digitValue} >Point</Text>
                                        <Text style={styles.digitNumber} >{item.points}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.deleteBtn} onPress={() => this.deleteDynamicField(index)}  >
                                        {/* <Image style={styles.deleteImg} source={require('../../../../assets/images/delete.png')} /> */}
                                        <LottieView style={styles.deleteImg} source={require('../../../../assets/images/delete.json')} autoPlay loop />

                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    />


                    <View style={styles.modalView} >
                        <Modal
                            transparent={true}
                            animationType={"fade"}
                            visible={this.state.modalVisible}

                        >
                            <View style={styles.mainInnerModalView} >
                                <View style={styles.innerModalView} >
                                    <Text style={styles.holdView} >
                                        <Text style={styles.holdText} >Hold on!</Text>
                                    </Text>
                                    <Text style={styles.warning} >Once you placed a bid, it will not be cancelled in any situation.</Text>

                                    <View style={styles.btnView} >

                                        <TouchableOpacity style={styles.cancelBtn}
                                            onPress={() => { this.setState({ modalVisible: false, }) }}
                                        >
                                            <Text style={styles.cancelText} >CANCEL</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.submitBtn}
                                            onPress={submit}
                                        >
                                            <Text style={styles.submitText} >SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>

                        </Modal>
                    </View>








                </ImageBackground>
            </SafeAreaView>
        )
    }
}
