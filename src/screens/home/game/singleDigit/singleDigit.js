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
            change: (global.gameStatus === 1) ? "Open" : 'Close',
            background: 1,
            digits: "",
            close: "",
            points: "",
            status: false,
            dateShow: [],
            showlist: [
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
            ],
            modalVisible: false,
            wallet: walletUpdateBal,
            inputedit: true,
            btn: false,
            inputData: [],
            wallet1: global.wallet_Balance
        }
    }

    componentDidMount(index) {
        walletUpdateBal = global.wallet_Balance
        this.wallet_Balance()
        ShowDate();
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

    textChange = (a, b) => {
        this.setState({
            change: a,
            background: b
        })
    }

    proceed = () => {
       

        if (digits === "") {
            ToastAndroid.show("Enter Digit ", ToastAndroid.SHORT)
        }
        else {
            walletUpdateBal = Number(walletUpdateBal) - Number(points)

            if (array.length === 0) {
                array.push({
                    digits: this.state.digits,
                    closedigits: "",
                    points: this.state.points,
                    session: this.state.change,

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
                    session: this.state.change,

                })
            }
            this.setState({
                status: true,
                inputData: [...array],
                btn: true,
                wallet: walletUpdateBal,
                points: "",
                // digits: "",

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
        array.splice(index);
        this.setState({ inputData: [...array] });
        console.log(array.splice())

    }




    render() {

        // var totalpoints = 0
        // for (i = 0; i < array.length; i++) {
        //   totalpoints = totalpoints + Number(array[i].points)
        // }

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
                    // console.log(responseJSON.max_bid_amount)
                    global.todayDate = responseJSON.new_date
                    global.bidMin = responseJSON.min_bid_amount
                    global.bidMax = responseJSON.max_bid_amount
                    global.wallet = responseJSON.wallet_amt
                    this.setState({
                        dateShow: responseJSON
                    })
                })
        }

        const submit1 = () => {
            this.setState({
                modalVisible: true,

            })
            var totalpoints = 0
            for (i = 0; i < array.length; i++) {
                totalpoints = totalpoints + Number(array[i].points)
            }
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
                    env_type: "1",
                    app_key: global.appKey,
                    new_result:
                    {
                        unique_token: global.uniqueToken,
                        Gamename: item.game_name,
                        totalbit: totalpoints,
                        gameid: item.game_id,
                        pana: "Single Digit",
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
               

                        <View style={styles.firstView} >
                            <View style={styles.inputView}>

                                <View>
                                    <Text style={styles.digitText} >Point</Text>
                                    <TextInput style={styles.inputPoint}
                                        value={this.state.points}
                                        placeholder='Enter Points'
                                        keyboardType='number-pad'
                                        onChangeText={points => this.setState({ points })}
                                        placeholderTextColor="black"
                                    />
                                </View>

                            </View>
                        </View>

                    <FlatList
                        data={this.state.inputData}
                        extraData={this.state.inputData}
                        renderItem={({ item, index }) =>
                            <View style={styles.mainFlatListView}>
                                <View style={styles.flatListView} >
                                    <View>
                                        <Text style={styles.digitValue} >{this.state.change} Digit</Text>
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


            </SafeAreaView>
        )
    }
}
