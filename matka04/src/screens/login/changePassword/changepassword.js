import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, ToastAndroid, ImageBackground, ScrollView } from 'react-native'
import styles from './styles'

export default class ChangePasswordScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            new_pass: "",
            confirmPassword: "",
            hidePassword: true,
            confirmPaswd: true
        }
    }

    _changeIcon = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    confirm = () => {
        this.setState({ confirmPaswd: !this.state.confirmPaswd });
    }


    render() {



        const { mobile } = this.props.route.params;

        const checkmobileNo_4 = () => {
            var new_pass = this.state.new_pass;
            var confirmPassword = this.state.confirmPassword;

            if (new_pass === "") {
                ToastAndroid.show('Enter New Password ', ToastAndroid.SHORT)
            }
            else if (confirmPassword == "") {
                ToastAndroid.show('Enter Confirm Password ', ToastAndroid.SHORT)
            }
            else if (new_pass.length < 6) {
                ToastAndroid.show(" Password Must be at least 6 Characters ", ToastAndroid.SHORT);
            }
            else if (confirmPassword.length < 6) {
                ToastAndroid.show("Confirm Password Must be at least 6 Characters ", ToastAndroid.SHORT)
            }
            else if (new_pass == confirmPassword) {
                fetch("http://13.127.179.165/api-forgot-password", {
                    method: 'POST',
                    headers: {
                        Accept: "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "env_type": "1",
                        "app_key": global.appKey,
                        mobile: mobile,
                        new_pass: new_pass,
                    })
                })
                    // alert("Successfull Entry : ")
                    .then((response) => response.json())
                    .then((responseJson) => {
                        // console.log(responseJson.status);
                        console.log(responseJson, responseJson.status);
                        if (!responseJson.status) {
                            ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                        }
                        else {
                            this.props.navigation.navigate('login')
                            ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                        }

                    })
                    .catch((error) => {
                        alert('error' + error);
                        ToastAndroid.show(error, ToastAndroid.SHORT);
                    })

                // alert("ok")
            }
            else {
                ToastAndroid.show("Password not Match", ToastAndroid.SHORT)
            }
        }



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
                                <Text style={styles.loginText} >Change Password </Text>
                            </View>

                            <View style={styles.mainInputView} >
                                <View style={styles.subInputView} >

                                    <View style={styles.inputView} >
                                        <Image style={styles.mobileImag} source={require('../../../assets/images/padlock.png')} />
                                        <TextInput style={styles.mobileInput}
                                            placeholder='New Password'
                                            placeholderTextColor={'#fff'}
                                            secureTextEntry={this.state.hidePassword}
                                            onChangeText={new_pass => this.setState({ new_pass })}


                                        />
                                        <TouchableOpacity onPress={this._changeIcon}>
                                            <Image style={styles.eye} source={require('../../../assets/images/eye.png')} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.inputView} >
                                        <Image style={styles.mobileImag} source={require('../../../assets/images/padlock.png')} />
                                        <TextInput style={styles.mobileInput}
                                            placeholder='Confirm Password'
                                            placeholderTextColor={'#fff'}
                                            secureTextEntry={this.state.confirmPaswd}
                                            onChangeText={confirmPassword => this.setState({ confirmPassword })}


                                        />
                                        <TouchableOpacity onPress={this.confirm}>
                                            <Image style={styles.eye} source={require('../../../assets/images/eye.png')} />
                                        </TouchableOpacity>

                                    </View>



                                    <TouchableOpacity style={styles.loginBtn}
                                        onPress={checkmobileNo_4}
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