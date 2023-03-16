import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList, Keyboard, Linking, ToastAndroid, Button, BackHandler, ImageBackground } from 'react-native'
import RNUpiPayment from 'react-native-upi-payment';
import styles from './styles';
import LottieView from 'lottie-react-native';
import { initiateTransaction } from 'react-native-allinone-upi';





export default class AddMoneyScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [],
            amount: "",
            isLoading: false,
            gPay: true,
            phonePe: false,
            others: false,

        }
    }

    gPay = () => {
        this.setState({
            gPay: true,
            phonePe: false,
            other: false
        })

    }

    phonePe = () => {
        this.setState({
            gPay: false,
            phonePe: true,
            other: false
        })

    }

    others = () => {
        this.setState({
            gPay: false,
            phonePe: false,
            other: true
        })

    }

    componentWillUnmount() {
        this.backHandler.remove();
    }
    backAction = () => {
        this.props.navigation.goBack()
        return true;
    };

    componentDidMount() {
        this.willBlurListener = this.props.navigation.addListener('focus', () => {
            this.historyData_04();
            this.admindetails_04();
            this.amountDetils_04();
            this.wallet_Balance_04();
        })



        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );

    }

    wallet_Balance_04 = () => {
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
                // console.log(responseJSON.wallet_amt)
                global.wallet_Balance = responseJSON.wallet_amt

            })

    }

    historyData_04 = () => {
        this.setState({ isLoading: true })
        try {
            fetch("http://13.127.179.165/api-get-auto-deposit-list", {
                method: 'POST',
                headers: {
                    Accept: "application/json",
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
                    this.setState({
                        history: responseJSON.result
                    })

                })
                .finally(() => this.setState({ isLoading: false }))

        }
        catch (error) {
            console.log("error", error);
        }

    }

    admindetails_04 = () => {
        fetch("http://13.127.179.165/api-admin-bank-details", {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "env_type": "1",
                "app_key": "crAqClSy*^#FpyuBI!#knEi(matka)5Io#e8#I#w7G*g#D#xdI%b4FO&P"

            })
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                global.name = responseJSON.bank_details[0].ac_holder_name
                global.other = responseJSON.bank_details[0].upi_payment_id
                global.google = responseJSON.bank_details[0].google_upi_payment_id
                global.phonepe = responseJSON.bank_details[0].phonepay_upi_payment_id
            })
    }

    amountDetils_04 = () => {
        try {
            fetch('http://13.127.179.165/api-last-fund-request-detail', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "env_type": "1",
                    "app_key": global.appKey,
                    unique_token: global.uniqueToken,
                })
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    console.log(responseJSON.google_upi_option)
                    global.minAmount = responseJSON.min_amt
                    global.maxAmount = responseJSON.max_amt
                    global.googlePay1 = responseJSON.google_upi_option
                    global.phonePe1 = responseJSON.phone_upi_option
                    global.other1 = responseJSON.other_upi_option

                })
        } catch (error) {
            console.log('error', error)
        }
    }

    submitbtn = (len) => {
        let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        console.log(randomString)
    }


    submit_04 = (len) => {

        let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        console.log(randomString)

        var amount = this.state.amount;
        Keyboard.dismiss()



        if (amount === "") {
            ToastAndroid.show('Enter Amount ', ToastAndroid.SHORT)
        }
        else if (amount.includes('-') || amount.includes('.') || amount.includes(',') || amount.includes(' ')) {
            ToastAndroid.show('Invalid amount ', ToastAndroid.SHORT)
        }
        else if (amount < Number(global.minAmount)) {
            ToastAndroid.show("Minimum amount is : " + global.minAmount, ToastAndroid.SHORT)
        }

        else if (amount > Number(global.maxAmount)) {
            ToastAndroid.show("Maximum amount is : " + global.maxAmount, ToastAndroid.SHORT)
        }

        // else if (this.state.gPay == true) {

        //     RNUpiPayment.initializePayment({
        //         vpa: global.google, // or can be john@ybl or mobileNo@upi
        //         payeeName: global.name,
        //         amount: amount,
        //         transactionRef: randomString
        //     }, successGoogle, failureGoogle, `tez://upi/pay?`);

        //     function successGoogle(data) {
        //         console.log(data, "success", 'google Pay');

        //         fetch("http://13.127.179.165/api-add-money-via-upi", {
        //             method: 'POST',
        //             headers: {
        //                 Accept: "application/json",
        //                 'Content-type': 'application/json',
        //             },
        //             body: JSON.stringify({
        //                 env_type: "1",
        //                 app_key: global.appKey,
        //                 unique_token: global.uniqueToken,
        //                 amount: amount,
        //                 txn_id: data.txnId,
        //                 txn_ref: data.txnRef,
        //                 "upigpay": "1",
        //                 "upiphonepe": "0",
        //                 "otherupi": "0"
        //             })
        //         })
        //             .then((response) => response.json())
        //             .then((responseJSON) => {
        //                 console.log(responseJSON)
        //                 if (!responseJSON.status) {
        //                     ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
        //                 }
        //                 else {
        //                     ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
        //                 }
        //             })
        //     }

        //     function failureGoogle(data) {
        //         // do whatever with the data
        //         console.log(data.status, " google pay");
        //         console.log(data, 'fail', 'googlePay');

        //         var mesg = data.status.toUpperCase()
        //         // console.log(mesg);

        //         if (mesg == "SUCCESS") {
        //             fetch("http://13.127.179.165/api-add-money-via-upi", {
        //                 method: 'POST',
        //                 headers: {
        //                     Accept: "application/json",
        //                     'Content-type': 'application/json',
        //                 },
        //                 body: JSON.stringify({
        //                     env_type: "1",
        //                     app_key: global.appKey,
        //                     unique_token: global.uniqueToken,
        //                     amount: amount,
        //                     txn_id: data.txnId,
        //                     txn_ref: data.txnRef,
        //                     "upigpay": "1",
        //                     "upiphonepe": "0",
        //                     "otherupi": "0"
        //                 })
        //             })
        //                 .then((response) => response.json())
        //                 .then((responseJSON) => {
        //                     console.log(responseJSON)
        //                     if (!responseJSON.status) {
        //                         ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
        //                     }
        //                     else {
        //                         ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
        //                     }
        //                 })
        //         }



        //     }
        // }

        else if (this.state.gPay == true) {
            initiateTransaction({
                upi: global.google,
                transactionId: randomString,
                currency: 'INR',
                merchantCategoryCode: '0000',
                payeeName: global.name,
                amount: amount,
                note: 'ADD NOTE',
                upi_app: "com.google.android.apps.nbu.paisa.user",
            })
                .then((res) => {
                    var mesg = res.message.toUpperCase()
                    console.log(mesg, "Console Google Pay", res.message);

                    if (mesg == "SUCCESS") {
                        console.log("Success to add money in Google ", res);

                        fetch("http://13.127.179.165/api-add-money-via-upi", {
                            method: 'POST',
                            headers: {
                                Accept: "application/json",
                                'Content-type': 'application/json',
                            },
                            body: JSON.stringify({
                                env_type: "1",
                                "app_key": global.appKey,
                                unique_token: global.uniqueToken,
                                amount: amount,
                                txn_id: res.txnId,
                                txn_ref: res.txnRef,
                                "upigpay": "1",
                                "upiphonepe": "0",
                                "otherupi": "0"
                            })
                        })
                            .then((response) => response.json())
                            .then((responseJSON) => {
                                console.log(responseJSON)
                                if (!responseJSON.status) {
                                    ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                                }
                                else {
                                    ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                                }
                            })
                    }
                    else {
                        console.log("FAIL to add money in Google ", res);


                    }
                    // console.log(res, 'RESPONSE', res.paymentStatus);
                })
                .catch((e) => {
                    console.log(e.message, '  ERRORR PAYMENT in Google pay  ', e);
                });

        }

        else if (this.state.phonePe == true) {

            RNUpiPayment.initializePayment({
                vpa: global.phonepe, // or can be john@ybl or mobileNo@upi
                payeeName: global.name,
                amount: amount,
                transactionRef: randomString
            }, successPhonepe, failurePhonepe, `phonepe://pay?`);

            function successPhonepe(data) {
                // global.txnID = data.txnId
                // global.txnRef = data.txnRef

                // console.log(data.Status, "success 1 ");
                console.log(data, "success", 'Phone pe');

                fetch("http://13.127.179.165/api-add-money-via-upi", {
                    method: 'POST',
                    headers: {
                        Accept: "application/json",
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        env_type: "1",
                        app_key: global.appKey,
                        unique_token: global.uniqueToken,
                        amount: amount,
                        txn_id: data.txnId,
                        txn_ref: data.txnRef,
                        "upigpay": "0",
                        "upiphonepe": "1",
                        "otherupi": "0"
                    })
                })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        console.log(responseJSON)
                        if (!responseJSON.status) {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        }
                        else {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        }
                    })
            }

            function failurePhonepe(data) {
                // global.txnID = data.txnId
                // global.txnRef = data.txnRef

                // do whatever with the data
                console.log(data.Status, "phone pe");
                console.log(data, 'fail', 'Phone pe ');

                if (data.Status == "Success") {
                    fetch("http://13.127.179.165/api-add-money-via-upi", {
                        method: 'POST',
                        headers: {
                            Accept: "application/json",
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            env_type: "1",
                            "app_key": global.appKey,
                            unique_token: global.uniqueToken,
                            amount: amount,
                            "txn_id": data.txnId,
                            "txn_ref": data.txnRef,
                            "upigpay": "0",
                            "upiphonepe": "1",
                            "otherupi": "0"
                        })
                    })
                        .then((response) => response.json())
                        .then((responseJSON) => {
                            console.log(responseJSON)
                            if (!responseJSON.status) {
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                            }
                            else {
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                            }
                        })
                }
            }
        }

        else if (this.state.other == true) {

            RNUpiPayment.initializePayment({
                vpa: global.other, // or can be john@ybl or mobileNo@upi
                payeeName: global.name,
                amount: amount,
                transactionRef: randomString
            }, successOther, failureOther, `upi://pay?`);

            function successOther(data) {
                // console.log(data.Status, "success 1 ");
                console.log(data, "success", 'Others');

                // global.txnID = data.txnId
                // global.txnRef = data.txnRef

                // console.log('success', data);

                fetch("http://13.127.179.165/api-add-money-via-upi", {
                    method: 'POST',
                    headers: {
                        Accept: "application/json",
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        env_type: "1",
                        "app_key": global.appKey,
                        unique_token: global.uniqueToken,
                        amount: amount,
                        "txn_id": data.txnId,
                        "txn_ref": data.txnRef,
                        "upigpay": "0",
                        "upiphonepe": "0",
                        "otherupi": "1"
                    })
                })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        console.log(responseJSON)
                        if (!responseJSON.status) {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        }
                        else {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        }
                    })

            }

            function failureOther(data) {
                global.txnID = data.txnId
                global.txnRef = data.txnRef
                // do whatever with the data
                // console.log(data.Status, "success 2 ");
                console.log(data, 'fail', 'Others ');

                if (data.Status == "Success") {
                    fetch("http://13.127.179.165/api-add-money-via-upi", {
                        method: 'POST',
                        headers: {
                            Accept: "application/json",
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            env_type: "1",
                            "app_key": global.appKey,
                            unique_token: global.uniqueToken,
                            amount: amount,
                            "txn_id": data.txnId,
                            "txn_ref": data.txnRef,
                            "upigpay": "0",
                            "upiphonepe": "0",
                            "otherupi": "1"
                        })
                    })
                        .then((response) => response.json())
                        .then((responseJSON) => {
                            console.log(responseJSON)
                            if (!responseJSON.status) {
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                            }
                            else {
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                            }
                        })
                }
            }
        }

        else {
            ToastAndroid.show("Please select one method to add Fund ", ToastAndroid.SHORT)
        }
    }

    emptyComponnt_04 = () => {
        return (
            <View style={styles.noResultView} >
                {/* <Image style={styles.noResultImag} source={require('../../../../assets/images/no_resut.png')} /> */}
                <LottieView style={styles.noResultImag} source={require('../../../../assets/images/no_result.json')} autoPlay loop />

                <Text style={styles.noResultText} > No result found  </Text>
            </View>
        )
    }





    render() {

        return (
            <SafeAreaView style={styles.mainView}>
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
                                <Text style={styles.homeText} > Add Fund </Text>
                            </View>
                            <View>

                                <View style={{ flexDirection: 'row', marginTop: 5 }} >

                                    <Image style={styles.walletimag} source={require('../../../../assets/images/wallet.png')} />
                                    <Text style={styles.amountText} >{global.wallet_Balance} </Text>

                                </View>



                            </View>
                        </View>
                    </View>
                    <View style={styles.formView} >

                        <View style={styles.inputView} >

                            <TextInput
                                style={styles.input}
                                placeholder='Enter Amount'
                                placeholderTextColor={'black'}
                                onChangeText={amount => this.setState({ amount })}
                                keyboardType='numeric'
                                value={this.state.amount}
                            />



                            <View style={styles.btnView} >
                                <TouchableOpacity style={[(this.state.gPay == true) ? styles.gPayBtn1 : styles.gPayBtn]} onPress={this.gPay}  >
                                    <Text style={styles.gPayText} >G-Pay</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[(this.state.phonePe == true) ? styles.gPayBtn1 : styles.gPayBtn]} onPress={this.phonePe} >
                                    <Text style={styles.gPayText} >PhonePe</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[(this.state.other == true) ? styles.gPayBtn1 : styles.gPayBtn]} onPress={this.others} >
                                    <Text style={styles.gPayText} >Others</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={styles.submitBtn} onPress={() => this.submit_04(35)} >
                                <Text style={styles.submitText} > SUBMIT </Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {(() => {
                        if (this.state.history.length > 0) {
                            return (
                                <View style={styles.recentView}>

                                    <Text style={styles.recent} >Recent Transactions :- </Text>
                                </View>

                            )
                        }


                    })()}


                    <FlatList
                        data={this.state.history}
                        ListEmptyComponent={this.emptyComponnt_04}
                        refreshing={this.state.isLoading}
                        onRefresh={this.historyData_04}
                        renderItem={({ item }) =>
                            <View style={styles.mainListView} >
                                <View style={styles.mainFlatlistView} >

                                    <View style={styles.rowFlatListView} >

                                        <View style={styles.firstFlatListView} >
                                            <Text style={styles.idNo} >ID : <Text style={styles.number}>{item.txn_id}</Text></Text>
                                            <Text style={styles.idNo} >Payment Method : <Text style={styles.number}> {item.payment_method} </Text></Text>
                                            <Text style={styles.idNo} >{item.insert_date} </Text>
                                            <Text style={[styles.idNo, (item.reject_remark === "") ? styles.remark : styles.idNo]} > Remark : <Text style={styles.number}> {item.reject_remark} </Text></Text>

                                        </View>
                                        <View style={styles.amountView} >

                                            <Text style={[styles.pointStatus, (item.fund_status === "0") ? styles.pointStatus0 : (item.fund_status === "1") ? styles.pointStatus1 : styles.pointStatus]} >{item.amount} Pts </Text>
                                            <Text style={[styles.pointStatus, (item.fund_status === "0") ? styles.pointStatus0 : (item.fund_status === "1") ? styles.pointStatus1 : styles.pointStatus]} > {[(item.fund_status === "0") ? "Pending" : (item.fund_status === "1") ? (item.fund_status && item.deposit_type === "1") ? "Auto Approved" : "Approved" : "Rejected"]} </Text>

                                        </View>

                                    </View>

                                </View>
                            </View>
                        }
                    />




















                </ImageBackground>
            </SafeAreaView>
        )
    }
}
