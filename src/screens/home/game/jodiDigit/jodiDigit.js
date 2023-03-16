import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, ToastAndroid, ScrollView, FlatList, Modal, Image, Keyboard, ImageBackground } from 'react-native';
import { AutoComplete } from 'react-native-element-textinput';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';



var array = []
var walletUpdateBal = Number(global.wallet_Balance)

export default class JodiDigitScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            realDate: "",
            digits: "",
            points: "",
            status: false,
            dateShow: [],
            showlist: [
                '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24',
                '25',
                '26',
                '27',
                '28',
                '29',
                '30',
                '31',
                '32',
                '33',
                '34',
                '35',
                '36',
                '37',
                '38',
                '39',
                '40',
                '41',
                '42',
                '43',
                '44',
                '45',
                '46',
                '47',
                '48',
                '49',
                '50',
                '51',
                '52',
                '53',
                '54',
                '55',
                '56',
                '57',
                '58',
                '59',
                '60',
                '61',
                '62',
                '63',
                '64',
                '65',
                '66',
                '67',
                '68',
                '69',
                '70',
                '71',
                '72',
                '73',
                '74',
                '75',
                '76',
                '77',
                '78',
                '79',
                '80',
                '81',
                '82',
                '83',
                '84',
                '85',
                '86',
                '87',
                '88',
                '89',
                '90',
                '91',
                '92',
                '93',
                '94',
                '95',
                '96',
                '97',
                '98',
                '99',


            ],
            modalVisible: false,
            wallet: walletUpdateBal,
            inputedit: true,
            inputData: [],
            wallet1: global.wallet_Balance
        }

    }


    componentDidMount(index) {
        walletUpdateBal = global.wallet_Balance
        this.wallet_Balance()
        ShowDate()
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



    proceed = () => {

        var digits = this.state.digits;
        var points = this.state.points;
        var showlist = this.state.showlist;
        var wallet = this.state.wallet;
        var wallet1 = this.state.wallet1;

        Keyboard.dismiss()

        if (digits === "") {
            ToastAndroid.show("Enter Digit ", ToastAndroid.SHORT)
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

        else if (!showlist.includes(digits)) {
            ToastAndroid.show('Not a Valid Digit ', ToastAndroid.SHORT)
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
            console.log(points);
            // Number(walletUpdateBal) - Number(points)
            // console.log(walletUpdateBal , points)


            if (array.length === 0) {
                array.push({
                    digits: this.state.digits,
                    closedigits: "",
                    points: this.state.points,
                    session: "",
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
                    closedigits: "",
                    points: this.state.points,
                    session: "",
                })
            }

            this.setState({
                status: true,
                inputData: [...array],
                btn: !this.state.btn,
                wallet: walletUpdateBal,
                points: "",
            })
            console.log(array)
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
        // var totalDigit = ''
        // for (i = 0; i < array.length; i++) {
        //     totalDigit = totalDigit + "" + array[i].digits
        // }
        // console.log(totalDigit)


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
                    "app_key": global.appKey,
                    unique_token: global.uniqueToken,
                    "game_id": item.game_id
                })
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(responseJSON.new_date,)
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
                        totalbit: totalpoints,
                        gameid: item.game_id,
                        "pana": "Jodi Digit",
                        bid_date: global.todayDate,
                        session: "",
                        result: array
                    }
                })
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(responseJSON, array)
                    if (!responseJSON.status) {
                        ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        if (this.state.status == true) {
                            this.setState({
                                status: false,
                                modalVisible: false,
                                inputedit: true
                            })
                            array.splice(index);
                            this.setState({ inputData: [...array] });
                        }
                        else {
                            this.setState({
                                status: true,
                                modalVisible: false,
                                inputedit: true
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
                                <Text style={styles.homeText} > Jodi Digit </Text>
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


                            {/* <View>

            <View style={styles.sessionView} >
              <Text style={styles.sessionText} >Choose Session </Text>
            </View>

            {(() => {
              if (global.gameStatus == 1) {
                return (
                  <View style={styles.sessionBtnView} >

                    <TouchableOpacity
                      disabled={this.state.btn}
                      // style={styles.sessionBtn}
                      onPress={() => this.textChange('Open', 1)}
                      style={[styles.sessionBtn, (this.state.background === 1) ? global.gameStatus === 2 ? styles.red : styles.sessionBtn : (global.gameStatus === 2) ? styles.sessionBtn : styles.red]}

                    >
                      <Text style={styles.openText} >OPEN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      disabled={this.state.btn}
                      // style={styles.sessionBtn}
                      onPress={() => this.textChange('Close', 2)}
                      style={[styles.sessionBtn, (this.state.background === 2) ? styles.sessionBtn : (global.gameStatus === 1) ? styles.red : styles.sessionBtn]}
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


          </View> */}

                            <View style={styles.inputView}>

                                <View style={styles.autoView} >
                                    <Text style={styles.digitText} > Digit</Text>
                                    <AutoComplete
                                        value={this.state.digits}
                                        data={this.state.showlist}
                                        style={styles.input}
                                        inputStyle={styles.inputStyle}
                                        labelStyle={styles.labelStyle}
                                        placeholderStyle={styles.placeholderStyle}
                                        textErrorStyle={styles.textErrorStyle}
                                        placeholder="Enter Digit"
                                        onChangeText={digits => this.setState({ digits })}
                                        keyboardType='numeric'
                                        maxLength={2}
                                        editable={this.state.inputedit}

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
                                        <Text style={styles.digitValue} >Digit</Text>
                                        <Text style={styles.digitNumber}> {item.digits}</Text>
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
