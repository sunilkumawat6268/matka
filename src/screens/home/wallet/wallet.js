import React, { Component } from 'react'
import { Text, View, SafeAreaView, BackHandler, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList, ToastAndroid, Vibration, Modal, TextInput, Keyboard } from 'react-native'
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class WalletScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactionHistory: [],
            isLoading: false,

            isVisible: false,
            phonePeModal: false,
            paytmModal: false,
            // walletBalance: [],
        }
    }


    componentWillUnmount() {
        this.willBlurListener();
        this.backHandler.remove();
    }

    componentDidMount() {
        this.willBlurListener = this.props.navigation.addListener('focus', () => {
            this.transaction_history_04();
            this.wallet_Balance_04();
            this.phoneNo_04();
        })
        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
    }

    backAction = () => {
        this.props.navigation.goBack()
        return true;
    };

    phoneNo_04() {
        fetch('http://13.127.179.165/api-get-user-payment-details', {
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
                console.log(responseJSON.payment_details[0].insert_date)
                global.date = responseJSON.payment_details[0].insert_date
                global.googlePay = responseJSON.payment_details[0].google_pay_number
                global.phonePe = responseJSON.payment_details[0].phone_pay_number
                global.paytm = responseJSON.payment_details[0].paytm_number
                this.setState({
                    number: responseJSON.payment_details.google_pay_number
                })

            })

            .catch((error) => {
                console.error(error);
            });
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
                console.log(responseJSON.wallet_amt)
                global.wallet_Balance = responseJSON.wallet_amt

            })

    }
    transaction_history_04 = () => {
        this.setState({ isLoading: true })
        fetch('http://13.127.179.165/api-wallet-transaction-history', {
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
                console.log(responseJSON.transaction_history.length)
                global.wallet_Balance = responseJSON.wallet_amt
                this.setState({
                    transactionHistory: responseJSON.transaction_history
                })
            })
            .finally(() => this.setState({ isLoading: false }))
    }

    emptyComponnt_04 = () => {
        return (
            <View style={styles.noResultView} >
                <LottieView style={styles.noResultImag} source={require('../../../assets/images/no_result.json')} autoPlay loop />

                <Text style={styles.noResultText} > No result found  </Text>
            </View>
        )
    }

    transfScreen = () => {
        Vibration.vibrate()
        ToastAndroid.show('Transfer fund is currently disabled , Please contact to admin', ToastAndroid.SHORT)
    }


    render() {
        return (
            <SafeAreaView style={styles.mainView} >
                <ImageBackground style={styles.mainBackImg} source={require('../../../assets/images/screen_bg.png')} >

                    <View style={styles.headerView} >
                        <View style={styles.barImgView} >
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack()
                            }} >
                                <Image style={styles.barImag} source={require('../../../assets/images/back_1.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secondHeaderView} >
                            <View>
                                <Text style={styles.homeText} > Wallet </Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.mainAmountView} >
                        <View style={styles.subAmountView} >

                            <View>
                                <Text style={styles.availableText} >Available Balance </Text>
                                <View style={styles.walletAmountView} >
                                    <Image style={styles.coniImg} source={require('../../../assets/images/poker.png')} />
                                    <Text style={styles.amountText} >{global.wallet_Balance} Pts </Text>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.whatsappBtn} onPress={() => {
                                this.props.navigation.navigate('method')
                            }} >
                                <LinearGradient colors={['#e3ba43', '#ff8647',]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.mainwhatsView} >

                                    <View style={styles.mainwhatsView1} >
                                        <View style={styles.whatsappWhiteView} >
                                            <Image style={styles.whatsappIcon} source={require('../../../assets/images/setting.png')} />
                                        </View>
                                        <View>
                                            <Text style={styles.whatsappText} >Withdraw Method</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>
                    </View>


                    <View style={styles.paymentView} >

                        <View style={styles.subPaymentView} >

                            <TouchableOpacity style={styles.addFundBtn} onPress={() => {
                                this.props.navigation.navigate('addFund')
                            }} >
                                <LinearGradient colors={['#fe5e59', '#fc945d',]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.addFundColor} >

                                    <View style={styles.addfund} >

                                        <View style={styles.subAddFundView} >
                                            <Image style={styles.addfundImg} source={require('../../../assets/images/add.png')} />
                                            <Text style={styles.addfundText} >Add </Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.addFundBtn} onPress={() => {
                                this.props.navigation.navigate('withDraw')
                            }} >
                                <LinearGradient colors={['#219894', '#38bbb3',]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.addFundColor} >

                                    <View style={styles.addfund} >

                                        <View style={styles.subAddFundView} >
                                            <Image style={styles.addfundImg} source={require('../../../assets/images/withdraw.png')} />
                                            <Text style={styles.addfundText} >Withdraw </Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.addFundBtn} onPress={(global.transferfund === "0") ? this.transfScreen : () => {
                                this.props.navigation.navigate('transfer')
                            }} >
                                <LinearGradient colors={['#ad0d53', '#fd307f',]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.addFundColor} >

                                    <View style={styles.addfund} >

                                        <View style={styles.subAddFundView} >
                                            <Image style={styles.addfundImg} source={require('../../../assets/images/transfer.png')} />
                                            <Text style={styles.addfundText} >Transfer</Text>
                                        </View>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.recentView} >
                        <Text style={styles.recentText} >Recent Transaction</Text>
                    </View>


  

                    <FlatList
                        data={this.state.transactionHistory}
                        ListEmptyComponent={this.emptyComponnt_04}
                        refreshing={this.state.isLoading}
                        onRefresh={this.transaction_history_04}
                        renderItem={({ item }) =>
                            <View>
                                <View style={styles.mainFlateListView} >
                                    <ImageBackground style={styles.mainWhiteview} source={require('../../../assets/images/bg_wallet.png')} >

                                        <View style={styles.subbWhiteView} >

                                            <View style={styles.downImgView} >
                                                <Image style={styles.downImg} source={(item.transaction_type == 1) ? require('../../../assets/images/credit_icon.png') : require('../../../assets/images/debit_icon.png')} />
                                            </View>

                                            <View style={styles.recentHistoryView} >
                                                <Text style={styles.transactionHistoryText} >{item.transaction_note}</Text>
                                            </View>

                                            <View style={styles.recentAmountView} >
                                                <Text style={[(item.transaction_type == 1) ? styles.amountView : styles.amountView1,]}    >{[(item.transaction_type == 1) ? "+" : "-",item.amount]}</Text>
                                            </View>

                                        </View>
                                    </ImageBackground>
                                    <View>

                                        <ImageBackground style={styles.secondBackImg} source={require('../../../assets/images/bg_wallet_1.png')} >
                                            <Text style={styles.transactionHistoryText}>{item.insert_date}</Text>
                                        </ImageBackground>
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