import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView, ToastAndroid, Linking } from 'react-native';
import styles from './styles'


export default class SignUpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            mobile: "",
            email: "",
            password: "",
            security_pin: "",
            hidePassword: true,
            hideMPIN: true,
            phone: '',
            whatsapp: "",
            telegram: "",
        }
    }

    componentDidMount() {
        this.socialapp();
    }

    _changeIcon = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    mPinshow = () => {
        this.setState({ hideMPIN: !this.state.hideMPIN });
    }

    signUp = () => {
        const reg = /\S+@\S+\.\S+/;
        var name = this.state.name;
        var mobile = this.state.mobile;
        var email = this.state.email;
        var password = this.state.password;
        var security_pin = this.state.security_pin;
        if (name === "") {
            ToastAndroid.show(" Enter User Name   ", ToastAndroid.SHORT);
        }
        else if (mobile === "") {
            ToastAndroid.show("Enter Mobile Number  ", ToastAndroid.SHORT)
        }
        else if (mobile.includes('-') || mobile.includes('.') || mobile.includes(',') || mobile.includes(' ')) {
            ToastAndroid.show('Invalid Mobile Number ', ToastAndroid.SHORT)
        }
        else if (mobile.length < 10) {
            ToastAndroid.show("Mobile Number Must be at least 10 Characters", ToastAndroid.SHORT)
        }
        else if (password === "") {
            ToastAndroid.show("Enter Password  ", ToastAndroid.SHORT)
        }
        else if (password.length < 6) {
            ToastAndroid.show(" Password Must be at least 6 Characters   ", ToastAndroid.SHORT);
        }
        else if (security_pin === "") {
            ToastAndroid.show("Enter MPIN ", ToastAndroid.SHORT)
        }
        else if (security_pin.length < 4) {
            ToastAndroid.show(" MPIN Must be 4 Characters   ", ToastAndroid.SHORT)
        }
        else if (email !== "") {
            if (reg.test(this.state.email) === true) {
                fetch('http://13.127.179.165/api-check-mobile', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "env_type": "1",
                        "app_key": global.appKey,
                        mobile: mobile,
                    })
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson.status);
                        console.log(responseJson, responseJson.status);
                        if (!responseJson.status) {
                            ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                        }
                        else {
                            this.props.navigation.navigate('otp', {
                                title: responseJson.otp,
                                fullData: responseJson,
                                name: name,
                                mobile: mobile,
                                password: password,
                                security_pin: security_pin,
                                email: email,
                                signUp: "register"
                            })
                            ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                            this.setState({
                                name: "",
                                mobile: "",
                                password: "",
                                email: "",
                                security_pin: ""

                            })
                        }

                    })
                    .catch((error) => {
                        alert('error' + error);
                        ToastAndroid.show(error, ToastAndroid.SHORT);
                    })

            }
            else {
                ToastAndroid.show('Email invalid  ', ToastAndroid.SHORT)
            }
        }
        else {
            fetch('http://13.127.179.165/api-check-mobile', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "env_type": "1",
                    "app_key": global.appKey,
                    mobile: mobile,
                })
            })
                // alert("Successfull Entry : ")
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson.status);
                    console.log(responseJson, responseJson.status);
                    if (!responseJson.status) {
                        ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                    }
                    else {
                        this.props.navigation.navigate('otp', {
                            title: responseJson.otp,
                            fullData: responseJson,
                            name: name,
                            mobile: mobile,
                            password: password,
                            security_pin: security_pin,
                            email: email,
                            signUp: "register"
                        })



                        // this.props.navigation.navigate('otp', {
                        //   title: responseJson.otp,
                        //   fullData: responseJson,
                        //   name: name,
                        //   mobile: mobile,
                        //   password: password,
                        //   security_pin: security_pin,
                        //   email: email,
                        //   signUp: "register"
                        // });
                        ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                        this.setState({
                            name: "",
                            mobile: "",
                            password: "",
                            email: "",
                            security_pin: ""

                        })
                    }

                })
                .catch((error) => {
                    alert('error' + error);
                    ToastAndroid.show(error, ToastAndroid.SHORT);
                })

        }

    }

    socialapp = () => {
        fetch('http://13.127.179.165/api-get-social-data', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "env_type": "1",
                "app_key": global.appKey,

            })
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                this.setState({
                    phone: responseJSON.mobile_1,
                    whatsapp: responseJSON.mobile_no,
                    telegram: responseJSON.telegram_no
                })
            })
    }

    render() {
        return (
            <SafeAreaView style={styles.mainView} >
                <ImageBackground style={styles.mainBackImg} source={require('../../../assets/images/screen_bg.png')} >
                    <ScrollView>
                        <View style={styles.logoView} >
                            <Image style={styles.logoImg} source={require('../../../assets/images/logo.png')} />
                            <Text style={styles.logoText} >LOGO</Text>
                        </View>

                        <View style={styles.connetView} >
                            <Text style={styles.connetText} >Connect with</Text>
                            <View style={styles.connetImgView} >

                                <TouchableOpacity onPress={() => {
                                    Linking.openURL(`tel:${this.state.phone}`)
                                }} >
                                    <Image style={styles.connetImg} source={require('../../../assets/images/phone.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    Linking.openURL(`https://t.me/&+${this.state.telegram}}`)
                                }} >
                                    <Image style={styles.connetImg} source={require('../../../assets/images/telegram.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    Linking.openURL(`whatsapp://send?phone=${this.state.whatsapp}`)
                                }}>
                                    <Image style={styles.connetImg} source={require('../../../assets/images/whatsapp.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.loginInputView} >
                            <View style={styles.loginView} >
                                <Text style={styles.loginText} >SIGN UP</Text>
                            </View>

                            <View style={styles.mainInputView} >

                                <View style={styles.subInputView} >

                                    <View style={styles.inputView1} >
                                        <Image style={styles.mobileImag} source={require('../../../assets/images/user.png')} />
                                        <TextInput
                                            style={styles.mobileInput}
                                            value={this.state.name}
                                            placeholder='USER NAME'
                                            placeholderTextColor={'#fff'}
                                            onChangeText={name => this.setState({ name })}
                                        />
                                    </View>

                                    <View style={styles.inputView} >
                                        <Image style={styles.mobileImag} source={require('../../../assets/images/phone_1.png')} />
                                        <TextInput style={styles.mobileInput}
                                            value={this.state.mobile}
                                            placeholder='MOBILE NUMBER'
                                            placeholderTextColor={'#fff'}
                                            maxLength={10}
                                            keyboardType="numeric"
                                            onChangeText={mobile => this.setState({ mobile })}
                                        />
                                    </View>

                                    <View style={styles.inputView} >
                                        <Image style={styles.mobileImag} source={require('../../../assets/images/email.png')} />
                                        <TextInput style={styles.mobileInput}
                                            value={this.state.email}
                                            placeholder='EMAIL'
                                            placeholderTextColor={'#fff'}
                                            keyboardType='email-address'
                                            onChangeText={email => this.setState({ email })}
                                        />
                                    </View>

                                    <View style={styles.inputView} >
                                        <Image style={styles.mobileImag} source={require('../../../assets/images/padlock.png')} />
                                        <TextInput style={styles.mobileInput}
                                            value={this.state.password}
                                            placeholder='PASSWORD  '
                                            placeholderTextColor={'#fff'}
                                            secureTextEntry={this.state.hidePassword}
                                            onChangeText={password => this.setState({ password })}
                                        />
                                        <TouchableOpacity onPress={this._changeIcon}>
                                            <Image style={styles.eye} source={require('../../../assets/images/eye.png')} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.inputView} >
                                        <Image style={styles.mobileImag} source={require('../../../assets/images/key.png')} />
                                        <TextInput style={styles.mobileInput}
                                            value={this.state.security_pin}
                                            placeholder='MPIN  '
                                            keyboardType="numeric"
                                            maxLength={4}
                                            placeholderTextColor={'#fff'}
                                            secureTextEntry={this.state.hideMPIN}
                                            onChangeText={security_pin => this.setState({ security_pin })}
                                        />
                                        <TouchableOpacity onPress={this.mPinshow}>
                                            <Image style={styles.eye} source={require('../../../assets/images/eye.png')} />
                                        </TouchableOpacity>
                                    </View>



                                    <TouchableOpacity style={styles.loginBtn}
                                        onPress={this.signUp}
                                    >
                                        <View style={styles.firstBtnView} ></View>
                                        <View style={styles.btnView}>
                                            <Text style={styles.textBtn} > Sign Up </Text>
                                            <Image style={styles.signArrow} source={require('../../../assets/images/sign_arrow.png')} />
                                        </View>
                                        <View style={styles.secondBtnView} ></View>

                                    </TouchableOpacity>



                                </View>
                            </View>
                        </View>



                        <View style={styles.accoutView} >

                            <View style={styles.firstAccountView} >
                                <View style={styles.dontaccoutView}>
                                    <Text style={styles.dontText} >Already Have An Account ?</Text>
                                </View>

                                <View style={styles.loginArrowView} >
                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate('login')
                                    }} >
                                        <Image style={styles.loginArrowImg} source={require('../../../assets/images/login_arrow.png')} />
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