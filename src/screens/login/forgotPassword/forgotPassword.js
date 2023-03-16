import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, Image, TouchableOpacity, ToastAndroid, ImageBackground, ScrollView } from 'react-native'
import styles from './styles';

export default class ForgotPasswordScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile: "",
        }
    }
    checkmobileNo_4 = () => {
        var mobile = this.state.mobile;
        if (mobile === "") {
            ToastAndroid.show('Enter the Mobile No. : ', ToastAndroid.SHORT)
        }
        else {
            fetch('http://13.127.179.165/api-forget-check-mobile', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    "env_type": "1",
                    "app_key": global.appKey,
                    mobile: mobile,
                })
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    // console.log(responseJson.status);
                    console.log(responseJson, responseJson.status);
                    if (!responseJson.status) {
                        ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                    }
                    else {
                        this.props.navigation.navigate('otp', {
                            forgotOTP: responseJson.otp,
                            mobile: mobile,
                            fotp: "forgotPassword"
                        })
                        // ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
                    }

                })
                .catch((error) => {
                    alert('error' + error);
                    ToastAndroid.show(error, ToastAndroid.SHORT);
                })
        }
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
                <Text style={styles.loginText} >Forgot Password</Text>
              </View>

              <View style={styles.mainInputView} >
                <View style={styles.subInputView} >

                  <View style={styles.inputView} >
                    <Image style={styles.mobileImag} source={require('../../../assets/images/phone_1.png')} />
                    <TextInput style={styles.mobileInput}
                      value={this.state.mobile}
                      placeholder='Enter Mobile No'
                      placeholderTextColor={'#fff'}
                      keyboardType='numeric'
                      maxLength={10}
                      onChangeText={mobile => this.setState({ mobile })}

                    />
                  </View>

              

                  <TouchableOpacity style={styles.loginBtn}
                    onPress={this.checkmobileNo_4}
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