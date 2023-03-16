import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ToastAndroid, Image, Button, Modal, FlatList, ImageBackground } from 'react-native'
import styles from './styles';
import LottieView from 'lottie-react-native';


export default class TransferMoneyScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: "",
            mobile_no: "",
            isVisible: false,
            blockImage: false,
            modalVisible: false,
            userName: [],
            walletBalance: [],
            number: "",
            wallet: global.wallet_Balance,

        }
    }


    componentWillUnmount() {
        this.willBlurListener();
    }

    componentDidMount() {
        this.willBlurListener = this.props.navigation.addListener('focus', () => {
            this.wallet_Balance_04();
        })

    }

    wallet_Balance_04() {
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
                // console.log(responseJSON)
                global.minTransfer = responseJSON.min_transfer
                global.maxTransfer = responseJSON.max_transfer
                global.wallet = responseJSON.wallet_amt
                global.wallet_Balance = responseJSON.wallet_amt
                // this.setState({
                //     walletBalance: responseJSON
                // })
            })

            .catch((error) => {
                console.error(error);
            });
    }

    handelmobileNoChnage_04 = (mobile_no) => {
        // var mobile_no = this.state.mobile_no;
        this.setState({ mobile_no })
        if (mobile_no.length == 10) {

            fetch('http://13.127.179.165/api-check-user-for-transfer-amt', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "env_type": "1",
                    "app_key": global.appKey,
                    unique_token: global.uniqueToken,
                    mobile_no: mobile_no

                })
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    // console.log(responseJson.status);
                    this.setState({
                        userName: responseJson.user_name
                    })
                    console.log(responseJson, responseJson.status);
                    if (!responseJson.status) {
                        this.setState((state) => ({
                            blockImage: !state.blockImage,
                            isVisible: false,
                            number: false,
                        }));
                        ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                    }

                    else {
                        this.setState((state) => ({
                            isVisible: !state.isVisible,
                            blockImage: false,
                            number: true,
                        }));
                        ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                    }

                })
                .catch((error) => {
                    alert('error' + error);
                    ToastAndroid.show(error, ToastAndroid.SHORT);
                })
        }

        // else {
        //     ToastAndroid.show("hello ", ToastAndroid.SHORT)
        // }
    }

    transferMoney_04 = () => {
        var amount = this.state.amount;
        var mobile_no = this.state.mobile_no;
        var number = this.state.number;
        var wallet = this.state.wallet;

        if (amount === "") {
            ToastAndroid.show("Enter Points  ", ToastAndroid.SHORT)
        }
        else if (amount.includes('-') || amount.includes('.') || amount.includes(',') || amount.includes(' ')) {
            ToastAndroid.show('Invalid Points ', ToastAndroid.SHORT)
        }
        else if (amount < Number(global.minTransfer)) {
            ToastAndroid.show("Minimum Amount required :" + global.minTransfer, ToastAndroid.SHORT)
        }
        else if (amount > Number(global.maxTransfer)) {
            ToastAndroid.show("Maximum Amount required : " + global.maxTransfer, ToastAndroid.SHORT)
        }
        else if (amount > Number(wallet)) {
            ToastAndroid.show('Insufficient Amount : ', ToastAndroid.SHORT)
            console.log(amount, wallet)
        }
        else if (mobile_no === "") {
            ToastAndroid.show("Enter Phone No. ", ToastAndroid.SHORT)
        }
        else if (mobile_no.length < 10) {
            ToastAndroid.show("Phone No. Must be at least 10 Characters : ", ToastAndroid.SHORT)
        }
        else if (mobile_no === global.phoneNo) {
            ToastAndroid.show("You Can Not Use Your Number :", ToastAndroid.SHORT)
        }
        else if (mobile_no.includes('-') || mobile_no.includes('.') || mobile_no.includes(',') || mobile_no.includes(' ')) {
            ToastAndroid.show('Invalid Phone no. ', ToastAndroid.SHORT)
        }
        else if (number === false) {
            ToastAndroid.show("Account not found ", ToastAndroid.SHORT)
        }
        else {
            this.setState({
                modalVisible: true,

            })
        }
    }

    sendMoney_04 = () => {
        var mobile_no = this.state.mobile_no;
        var amount = this.state.amount;
        fetch("http://13.127.179.165/api-user-transfer-wallet-balance", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "env_type": "1",
                "app_key": global.appKey,
                unique_token: global.uniqueToken,
                mobile_no: mobile_no,
                amount: amount,
                transfer_note: ""
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT)
            })
        this.setState({
            modalVisible: false,
            mobile_no: null,
            amount: ""
        })
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

    render() {
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
                                <Text style={styles.homeText} > Transfer Fund </Text>
                            </View>
                            <View>

                                <View style={{ flexDirection: 'row', marginTop: 5 }} >

                                    <Image style={styles.walletimag} source={require('../../../../assets/images/wallet.png')} />
                                    <Text style={styles.amountText} >{global.wallet_Balance} </Text>

                                </View>



                            </View>
                        </View>
                    </View>

                    <View style={styles.moneyView} >
                        <LottieView style={styles.imag} source={require('../../../../assets/images/transfer.json')} autoPlay loop />
                    </View>

                    <View style={styles.firstView}>
                        <View style={styles.subView} >

                            <View style={styles.inputView} >
                                <Text style={styles.enterText} > Enter Points : </Text>

                                <TextInput style={styles.enterInput}
                                    value={this.state.amount}
                                    placeholder='Enter Points'
                                    placeholderTextColor={'#000'}
                                    keyboardType="numeric"

                                    onChangeText={amount => this.setState({ amount })}
                                />
                            </View>

                            <View style={styles.inputView}>

                                <Text style={styles.enterText} > Enter Phone No. </Text>

                                <View style={styles.mobileView} >
                                    <TextInput style={styles.enterInput1}
                                        value={this.state.mobile_no}
                                        placeholder='Enter Phone No.'
                                        placeholderTextColor={'#000'}
                                        keyboardType="numeric"

                                        maxLength={10}
                                        onChangeText={mobile_no => this.handelmobileNoChnage_04(mobile_no)}
                                    />
                                    {this.state.isVisible ? (
                                        <Image style={styles.rightImg} source={require('../../../../assets/images/right.png')} />
                                    ) : null}

                                    {this.state.blockImage ? (
                                        <Image style={styles.rightImg} source={require('../../../../assets/images/block.png')} />
                                    ) : null}

                                </View>
                            </View>

                            <View style={styles.inputView} >
                                <TouchableOpacity style={styles.sendBtn}
                                    onPress={this.transferMoney_04}
                                >
                                    <Text style={styles.sendText} >TRANSFER</Text>
                                </TouchableOpacity>
                            </View>


                            <View style={styles.modalView} >
                                <Modal
                                    transparent={true}
                                    animationType={"fade"}
                                    visible={this.state.modalVisible}
                                >
                                    <View style={styles.mainInnerModalView} >
                                        <View style={styles.innerModalView} >
                                            <View style={styles.transferImgView}>
                                                <Image style={styles.transferImag} source={require('../../../../assets/images/transfer_1.png')} />
                                            </View>
                                            <View style={styles.textView} >
                                                <View style={styles.flatListDataView} >
                                                    <Text style={styles.amountTransferText} >Receiver Name : </Text>
                                                    <FlatList
                                                        style={styles.flatListData}
                                                        data={this.state.userName}
                                                        horizontal={true}
                                                        renderItem={({ item }) =>
                                                            <Text style={styles.amountTransferTextName} >{item}</Text>
                                                        }
                                                    />
                                                </View>
                                                <Text style={styles.amountNumber} >Amount : <Text style={styles.amountNumberData} > {this.state.amount}</Text> </Text>
                                                <Text style={styles.amountReceiverNumber} >Receiver Phone : <Text style={styles.amountReceiverNumberData} > {this.state.mobile_no}</Text> </Text>
                                            </View>

                                            <View style={styles.btnView} >

                                                <TouchableOpacity style={styles.cancelBtn}
                                                    onPress={() => { this.setState({ modalVisible: false }) }}
                                                >
                                                    <Text style={styles.cancelText} >CANCEL</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={styles.submitBtn}
                                                    onPress={this.sendMoney_04}
                                                >
                                                    <Text style={styles.submitText} >SUBMIT</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>


                                </Modal>
                            </View>


                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}