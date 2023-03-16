import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, ToastAndroid, Image, BackHandler, ImageBackground } from 'react-native'
import styles from './styles';
import LottieView from 'lottie-react-native';


export default class ChnagePasswordScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
            hideoldPassword: true,
            hideNewPassoword: true,
            hideconfirmPassword: true
        }
    }

    componentDidMount() {

        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );

    }
    componentWillUnmount() {
        this.backHandler.remove();
    }
    backAction = () => {
        this.props.navigation.goBack()
        return true;
    };


    showOldPassword_04 = () => {
        this.setState({
            hideoldPassword: !this.state.hideoldPassword,
        })
    }
    showNewPassword_04 = () => {
        this.setState({
            hideNewPassoword: !this.state.hideNewPassoword
        })
    }
    showconfirmPassword_04 = () => {
        this.setState({
            hideconfirmPassword: !this.state.hideconfirmPassword
        })
    }

    changePassword_04 = () => {


        var oldPassword = this.state.oldPassword;
        var newPassword = this.state.newPassword;
        var confirmPassword = this.state.confirmPassword;
        if (oldPassword === "") {
            ToastAndroid.show("Enter Old Password ", ToastAndroid.SHORT)
        }
        else if (newPassword === "") {
            ToastAndroid.show('Enter New Password', ToastAndroid.SHORT)
        }
        else if (confirmPassword === "") {
            ToastAndroid.show('Enter Confirm  Password ', ToastAndroid.SHORT)
        }
        else if (oldPassword.length < 6) {
            ToastAndroid.show("Old password required at least 6 digits ", ToastAndroid.SHORT)
        }
        else if (newPassword.length < 6) {
            ToastAndroid.show('New password required at least 6 digit ', ToastAndroid.SHORT)
        }
        else if (confirmPassword.length < 6) {
            ToastAndroid.show('Confirm password required at least 6 digit ', ToastAndroid.show)
        }
        else if (oldPassword === newPassword) {
            ToastAndroid.show("The new password should not be the same as the old password ", ToastAndroid.SHORT)
        }
        else if (newPassword !== confirmPassword) {
            ToastAndroid.show("Password not Match ", ToastAndroid.SHORT)
        }
        else if (oldPassword !== newPassword) {
            fetch('http://13.127.179.165/api-change-password', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    "env_type": "1",
                    "app_key": global.appKey,
                    unique_token: global.uniqueToken,
                    old_pass: oldPassword,
                    new_pass: newPassword
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
                        this.setState({
                            oldPassword: null,
                            confirmPassword: null,
                            newPassword: null,

                        })


                    }
                })
        }
        else {
            // console.log('ok');
        }


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
                                <Text style={styles.homeText} > Change Password </Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.contactImgView} >
                        <LottieView style={styles.contactImg} source={require('../../../../assets/images/password.json')} autoPlay loop />

                    </View>



                    <View style={styles.firstView} >
                        <View style={styles.inputView} >

                            <View style={styles.passwordInputView} >
                                <Image style={styles.mobileImag} source={require('../../../../assets/images/password1.png')} />
                                <TextInput style={styles.passwordInput}
                                    value={this.state.oldPassword}
                                    placeholder="Enter Old Password"
                                    secureTextEntry={this.state.hideoldPassword}
                                    placeholderTextColor={"#000"}
                                    onChangeText={oldPassword => this.setState({ oldPassword })}
                                />
                                <TouchableOpacity onPress={this.showOldPassword_04} >
                                    <Image style={styles.eye} source={require('../../../../assets/images/eye1.png')} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.passwordInputView} >
                                <Image style={styles.mobileImag} source={require('../../../../assets/images/password1.png')} />
                                <TextInput style={styles.passwordInput}
                                    value={this.state.newPassword}
                                    placeholder="Enter New Password"
                                    secureTextEntry={this.state.hideNewPassoword}
                                    placeholderTextColor={"#000"}
                                    onChangeText={newPassword => this.setState({ newPassword })}
                                />
                                <TouchableOpacity onPress={this.showNewPassword_04}>
                                    <Image style={styles.eye} source={require('../../../../assets/images/eye1.png')} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.passwordInputView} >
                                <Image style={styles.mobileImag} source={require('../../../../assets/images/password1.png')} />
                                <TextInput style={styles.passwordInput}
                                    value={this.state.confirmPassword}
                                    placeholder="Enter Confirm Password"
                                    secureTextEntry={this.state.hideconfirmPassword}
                                    placeholderTextColor={"#000"}
                                    onChangeText={confirmPassword => this.setState({ confirmPassword })}
                                />
                                <TouchableOpacity onPress={this.showconfirmPassword_04} >
                                    <Image style={styles.eye} source={require('../../../../assets/images/eye1.png')} />
                                </TouchableOpacity>
                            </View>


                            <TouchableOpacity style={styles.changeBtn}
                                onPress={this.changePassword_04}
                            >
                                <Text style={styles.changeText} > CHANGE PASSWORD </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

