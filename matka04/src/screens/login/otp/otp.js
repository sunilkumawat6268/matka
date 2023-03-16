import React, { Component } from 'react'
import { Image, SafeAreaView, Text, TextInput, ToastAndroid, TouchableOpacity, View, Vibration, ScrollView, ImageBackground, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import styles from './styles';
import DeviceInfo from 'react-native-device-info';

export default class OtpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otp: "",
            resend: "",
            timer: 30,
            displayButton: 'none',
            displayTime: 'flex',
            resendText: 'flex',
            count: 4,
            uniqueToken: "",
        }
    }
    componentDidMount() {
        this.clockCall = setInterval(() => {
            this.decrementClock_04();
        }, 1000);
    }
    decrementClock_04 = () => {
        this.setState(
            (prevState) => ({ timer: prevState.timer - 1 }),
            () => {
                if (this.state.timer === 0) {
                    this.setState({
                        displayButton: "flex",
                        displayTime: "none",
                        resendText: 'none'
                    })
                }

            },
        );
    };







    render() {

        const { signUp, phonePeText, paytmText, title, name, security_pin, email, mobile, password, forgotOTP, googlePe, google, phone, phonePe, pay, paytm, googlePeText } = this.props.route.params;

        const otp = () => {
            var otp = this.state.otp;

            if (otp === "") {
                ToastAndroid.show("Enter OTP ", ToastAndroid.SHORT)
            }
        }



        handelOptInput = (otp) => {
            // var otp = this.state.otp;
            var uniqueId = DeviceInfo.getUniqueId();
            this.setState({ otp })
            if (otp.length == 4) {
                if (otp === "") {
                    ToastAndroid.show(" Enter OTP ", ToastAndroid.SHORT)
                }
                else if (otp == title || otp == global.frogotresendOTP) {

                    fetch('http://13.127.179.165/api-user-registration', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "env_type": "1",
                            "app_key": global.appKey,
                            name: name,
                            email: email,
                            password: password,
                            mobile: mobile,
                            security_pin: security_pin
                        })
                    })
                        .then((response) => response.json())
                        .then((responseJSON) => {
                            console.log(responseJSON);
                            global.uniqueToken = responseJSON.unique_token
                            this.setState({
                                uniqueToken: responseJSON.unique_token
                            })
                            if (!responseJSON.status) {
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                                this.props.navigation.navigate('signUp')
                                this.setState({ otp: null })
                            }
                            else {
                                AsyncStorage.setItem('@token', global.uniqueToken);

                                fetch('http://13.127.179.165/api-user-login', {
                                    method: 'POST',
                                    headers: {
                                        Accept: "application/json",
                                        "Content-type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        "env_type": "1",
                                        "app_key": global.appKey,
                                        "device_id": uniqueId,
                                        mobile: mobile,
                                        password: password,
                                    })
                                })
                                    .then((response) => response.json())
                                    .then((responseJson) => {
                                        console.log(responseJson, responseJson.status);
                                        global.tokenStore = responseJson.unique_token
                                        if (!responseJson.status) {
                                            Vibration.vibrate()
                                            ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                                        }
                                        else {
                                            // this.props.navigation.navigate('refresh',{
                                            //     flag:'otp'
                                            // })

                                            this.props.navigation.dispatch(
                                                StackActions.replace('refresh', {
                                                    flag: 'otp'
                                                })
                                            )
                                            ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                                        }
                                    })
                                    .catch((error) => {
                                        alert('error' + error);
                                        ToastAndroid.show(error, ToastAndroid.SHORT);
                                    })


                            }
                        })
                    console.log("HEllo ");
                    ToastAndroid.show("You are successfully register.", ToastAndroid.SHORT);
                    this.setState({ otp: null })

                }

                else if (otp == forgotOTP || otp == global.frogotresendOTP) {
                    this.props.navigation.replace('changePassword', {
                        mobile: mobile

                    })
                    this.setState({ otp: "" })
                }
                else if (otp == googlePe || otp == global.googleOTP) {
                    fetch("http://13.127.179.165/api-add-user-upi-details", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            "env_type": "1",
                            "app_key": global.appKey,
                            "unique_token": global.uniqueToken,
                            "paytm_no": "",
                            "google_pay_no": google,
                            "phon_pay_no": "",
                            "upi_type": "2"
                        })
                    })
                        .then((response) => response.json())
                        .then((responseJSON) => {
                            console.log(responseJSON)
                            if (!responseJSON.status) {
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                                this.setState({ otp: null })
                            }
                            else {
                                this.props.navigation.navigate('method');
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                            }
                        })
                }
                else if (otp == phone || otp == global.phonePeOTP) {
                    fetch("http://13.127.179.165/api-add-user-upi-details", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            "env_type": "1",
                            "app_key": global.appKey,
                            "unique_token": global.uniqueToken,
                            "paytm_no": "",
                            "google_pay_no": "",
                            "phon_pay_no": phonePe,
                            "upi_type": "3"
                        })
                    })
                        .then((response) => response.json())
                        .then((responseJSON) => {
                            console.log(responseJSON)
                            if (!responseJSON.status) {
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                                this.setState({ otp: null })
                            }
                            else {
                                this.props.navigation.navigate('method');
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                            }
                        })
                }
                else if (otp == pay || otp == global.paytmOTP) {
                    fetch("http://13.127.179.165/api-add-user-upi-details", {
                        method: "POST",
                        headers: {
                            Accept: "application/json",
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            "env_type": "1",
                            "app_key": global.appKey,
                            "unique_token": global.uniqueToken,
                            "paytm_no": paytm,
                            "google_pay_no": "",
                            "phon_pay_no": "",
                            "upi_type": "1"
                        })
                    })
                        .then((response) => response.json())
                        .then((responseJSON) => {
                            console.log(responseJSON)
                            if (!responseJSON.status) {
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                                this.setState({ otp: null })
                            }
                            else {
                                this.props.navigation.navigate('method');
                                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                            }
                        })
                }
                else {
                    // count = this.state.count + 1 ;
                    this.setState({
                        otp: "",
                        count: this.state.count - 1
                    });
                    Vibration.vibrate()
                    ToastAndroid.show("OTP incorrect, You have " + this.state.count + " attempts left", ToastAndroid.SHORT)
                    if (this.state.count === 0) {
                        this.props.navigation.goBack()
                    }


                }
            }


        }

        const resendOTP = () => {
            this.setState({
                displayButton: "none",
                displayTime: "flex",
                resendText: 'flex',
                timer: 30,
                count: 5
            })

            if (googlePeText === "google") {
                fetch('http://13.127.179.165/api-validate-bank', {
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
                        console.log(responseJSON)
                        global.googleOTP = responseJSON.otp
                        if (!responseJSON.status) {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        }
                        else {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        }
                    })
            }
            else if (phonePeText === "phonePe") {
                fetch('http://13.127.179.165/api-validate-bank', {
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
                        console.log(responseJSON)
                        global.phonePeOTP = responseJSON.otp
                        if (!responseJSON.status) {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        }
                        else {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        }
                    })
            }
            else if (paytmText === "paytm") {
                fetch('http://13.127.179.165/api-validate-bank', {
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
                        console.log(responseJSON)
                        global.paytmOTP = responseJSON.otp
                        if (!responseJSON.status) {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        }
                        else {
                            ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT)
                        }
                    })
            }
            else {
                fetch('http://13.127.179.165/api-resend-otp', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "env_type": "1",
                        "app_key": global.appKey,
                        mobile: mobile
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson.status);
                        console.log(responseJson, responseJson.status);
                        global.frogotresendOTP = responseJson.otp
                        if (!responseJson.status) {
                            ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT)
                        }
                        else {
                            ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT)
                        }
                        // this.setState({
                        //     resend: responseJson.otp
                        // })
                    })
                    .catch((error) => {
                        alert('Unable to Fetch : ' + error);
                        ToastAndroid.show("Unabel to Fetch", ToastAndroid.SHORT);
                    })
            }
        }

        global.phoneNo = mobile;






        return (
            <SafeAreaView style={styles.mainView} >
                <ImageBackground style={styles.mainBackImg} source={require('../../../assets/images/screen_bg.png')} >
                    <ScrollView>

                        <View style={styles.logoView} >
                            <Image style={styles.logoImg} source={require('../../../assets/images/logo.png')} />
                            <Text style={styles.logoText} >LOGO</Text>
                        </View>

                        {/* <View style={styles.connetView} >
              <Text style={styles.connetText} >Connect with</Text>
              <View style={styles.connetImgView} >

                <TouchableOpacity>
                  <Image style={styles.connetImg} source={require('../../../assets/images/phone.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={styles.connetImg} source={require('../../../assets/images/telegram.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={styles.connetImg} source={require('../../../assets/images/whatsapp.png')} />
                </TouchableOpacity>
              </View>
            </View> */}

                        <View style={styles.loginInputView} >
                            <View style={styles.loginView} >
                                <Text style={styles.loginText} >OTP</Text>
                            </View>

                            <View style={styles.mainInputView} >
                                <View style={styles.subInputView} >

                                    <View>
                                        <Text style={styles.enter} >Please enter the OTP sent to your mobile number </Text>
                                        <Text style={styles.enter1} > {"XXXXXX" + global.phoneNo.substring(6, 10)} </Text>
                                        <View style={styles.inputView} >


                                            <TextInput maxLength={4}
                                                value={this.state.otp}
                                                keyboardType='numeric'
                                                style={styles.otpInput}
                                                placeholder='----'
                                                placeholderTextColor={'#fff'}
                                                onChangeText={otp => handelOptInput(otp)}
                                            />
                                        </View>

                                        <View style={styles.resendOtpView} >
                                            <View style={styles.subresendOtpView} >
                                                <View style={styles.timerView} >
                                                    <Text style={{ display: this.state.resendText }} > <Text style={styles.resendOtpText}> Resend OTP in </Text> </Text>
                                                    <Text style={{ display: this.state.displayTime }}> <Text style={styles.timer} >{this.state.timer} sec</Text></Text>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={resendOTP}
                                                    style={styles.resendBtn}>
                                                    <Text style={{ display: this.state.displayButton }}  > <Text style={styles.resend}  >Resend OTP</Text></Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>







                                    </View>


                                    <TouchableOpacity style={styles.loginBtn}
                                            onPress={otp}
                                        >
                                        <View style={styles.firstBtnView} ></View>
                                        <View style={styles.btnView}>
                                            <Text style={styles.textBtn} > Submit </Text>
                                            {/* <Image style={styles.signArrow} source={require('../../../assets/images/sign_arrow.png')} /> */}
                                        </View>
                                        <View style={styles.secondBtnView} ></View>

                                    </TouchableOpacity>




                                </View>
                            </View>

                        </View>


                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}