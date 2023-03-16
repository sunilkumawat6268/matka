import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView, ToastAndroid, Linking, Vibration } from 'react-native';
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import { StackActions } from '@react-navigation/native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: "",
      password: "",
      hidePassword: true,
      // deviceId: "",
      whatsapp: "",
      phone: "",
      telegram: "",
    }
  }


  componentDidMount() {
    this.appKey_4()
    this.socialapp_4();

  }

  appKey_4 = () => {
    fetch("http://13.127.179.165/api-get-app-key", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        "env_type": "1"
      })
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON)
        global.appKey = responseJSON.app_key
      })
  }

  _changeIcon_4 = () => {
    // var hidePassword= this.state.hidePassword;
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  loginform = () => {

    var uniqueId = DeviceInfo.getUniqueId();


    var mobile = this.state.mobile;
    var password = this.state.password;
    if (mobile === "") {
      ToastAndroid.show(" Enter Mobile Number  ", ToastAndroid.SHORT)
    }
    else if (password === "") {
      ToastAndroid.show('Enter Password ', ToastAndroid.SHORT)
    }
    else {
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
        // alert("Successfull Entry : ")
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson.status);
          console.log(responseJson, responseJson.status);
          // console.log(responseJson.unique_token)
          global.tokenStore = responseJson.unique_token
          if (!responseJson.status) {
            Vibration.vibrate()
            ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
          }
          else {
            AsyncStorage.setItem('@token', global.tokenStore);

            this.props.navigation.dispatch(
              StackActions.replace('pin', {
                unique_token: responseJson.unique_token,
                fullData: responseJson,
                mobile: mobile
              })
            )

            // this.props.navigation.navigate('pin', {
            //   unique_token: responseJson.unique_token,
            //   fullData: responseJson,
            //   mobile: mobile
            // })
            this.setState({
              mobile: "",
              password: ""
            })
            ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
          }


        })
        .catch((error) => {
          alert('error' + error);
          ToastAndroid.show(error, ToastAndroid.SHORT);
        })

    }
  }

  socialapp_4 = () => {
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
        <ImageBackground style={styles.mainBackImg} source={require('../../assets/images/screen_bg.png')} >
          <ScrollView>

            <View style={styles.logoView} >
              <Image style={styles.logoImg} source={require('../../assets/images/logo.png')} />
              <Text style={styles.logoText} >LOGO</Text>
            </View>

            <View style={styles.connetView} >
              <Text style={styles.connetText} >Connect with</Text>
              <View style={styles.connetImgView} >

                <TouchableOpacity onPress={() => {
                  Linking.openURL(`tel:${this.state.phone}`)
                }} >
                  <Image style={styles.connetImg} source={require('../../assets/images/phone.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                  Linking.openURL(`https://t.me/&+${this.state.telegram}}`)
                }} >
                  <Image style={styles.connetImg} source={require('../../assets/images/telegram.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                  Linking.openURL(`whatsapp://send?phone=${this.state.whatsapp}`)
                }}>
                  <Image style={styles.connetImg} source={require('../../assets/images/whatsapp.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.loginInputView} >
              <View style={styles.loginView} >
                <Text style={styles.loginText} >LOGIN</Text>
              </View>

              <View style={styles.mainInputView} >
                <View style={styles.subInputView} >

                  <View style={styles.inputView} >
                    <Image style={styles.mobileImag} source={require('../../assets/images/phone_1.png')} />
                    <TextInput style={styles.mobileInput}
                      value={this.state.mobile}
                      placeholder='Enter Mobile No'
                      placeholderTextColor={'#fff'}
                      keyboardType='numeric'
                      maxLength={10}
                      onChangeText={mobile => this.setState({ mobile })}

                    />
                  </View>

                  <View style={styles.inputView} >
                    <Image style={styles.mobileImag} source={require('../../assets/images/padlock.png')} />
                    <TextInput style={styles.mobileInput}
                      value={this.state.password}
                      placeholder='Enter Password  '
                      placeholderTextColor={'#fff'}
                      secureTextEntry={this.state.hidePassword}
                      onChangeText={password => this.setState({ password })}

                    />
                    <TouchableOpacity onPress={this._changeIcon_4}>
                      <Image style={styles.eye} source={require('../../assets/images/eye.png')} />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.loginBtn}
                    onPress={this.loginform}
                  >
                    <View style={styles.firstBtnView} ></View>
                    <View style={styles.btnView}>
                      <Text style={styles.textBtn} > Login </Text>
                      <Image style={styles.signArrow} source={require('../../assets/images/sign_arrow.png')} />
                    </View>
                    <View style={styles.secondBtnView} ></View>

                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('forgotPassword')
                  }} >
                    <Text style={styles.forgotPassword} > FORGOT PASSWORD?</Text>
                  </TouchableOpacity>


                </View>
              </View>

            </View>

            
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('signUp')
            }} >
              <View style={styles.accoutView} >

                <View style={styles.firstAccountView} >
                  <View style={styles.dontaccoutView}>
                    <Text style={styles.dontText} >Don't have an account?</Text>
                  </View>

                  <View style={styles.loginArrowView} >

                    <Image style={styles.loginArrowImg} source={require('../../assets/images/login_arrow.png')} />
                  </View>

                </View>
              </View>
            </TouchableOpacity>

          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}