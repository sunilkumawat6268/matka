import React, { useEffect, useRef, useState } from "react"
import { SafeAreaView, FlatList, Text, TouchableOpacity, View, Image, TextInput, ToastAndroid, ImageBackground, Linking, ScrollView, Vibration } from "react-native";
import ReactNativePinView from "react-native-pin-view";
import { StackActions } from '@react-navigation/native';
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import Colors from "../../../assets/theme/colors";
import PushNotification from "react-native-push-notification";


function PinScreen({ navigation, route }) {
  const pinView = useRef(null)
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [enteredPin, setEnteredPin] = useState("")
  const [showCompletedButton, setShowCompletedButton] = useState(false)
  const [count, setCount] = useState(4)
  const [whatsappNo, setWhatsappNo] = useState([])

  const { unique_token, mobile } = route.params;

  useEffect(() => {
    wallet_Balance();
    socialapp();
    dashboard_Data();
    phoneNo();
    pushCreateChannel();

    if (enteredPin.length > 0) {
      setShowRemoveButton(true)
    }
    else {
      setShowRemoveButton(false)
    }
    if
      (enteredPin.length === 4) {
      setShowCompletedButton(true)
    }
    else {
      setShowCompletedButton(false)
    }
    if (enteredPin.length === 4) {
      goToHomeScreen()
    }
    // goToHomeScreen();
  }, [enteredPin])

  const pushCreateChannel = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel '
    })
  }

  const wallet_Balance = () => {
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

  const goToHomeScreen = () => {
    fetch('http://13.127.179.165/api-check-security-pin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "env_type": "1",
        "app_key": global.appKey,
        unique_token: unique_token,
        security_pin: enteredPin
      })
    })
      // alert("Successfull Entry : ")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.status);
        console.log(responseJson, responseJson.status);

        if (!responseJson.status) {
          Vibration.vibrate()
          setCount(count - 1);
          if (count > 1) {
            setCount(count - 1)
          }
          else {
            setCount(0);
          }
          // setCount(count - 1)
          ToastAndroid.show("PIN incorrect, You have " + count + " attempts left", ToastAndroid.SHORT);
          pinView.current.clearAll()
          if (count === 0) {
            AsyncStorage.removeItem('@token')
            navigation.navigate('login')
          }
        }
        else {
          navigation.dispatch(StackActions.replace('home'))
          // navigation.replace('home');
          ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
        }

      })
      .catch((error) => {
        alert('error' + error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      })


  }

  const socialapp = () => {
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
        // console.log(responseJSON)
        setWhatsappNo(responseJSON.mobile_no)
      })
  }
  const dashboard_Data = () => {
    try {
      fetch('http://13.127.179.165/api-get-dashboard-data', {
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

          global.userName = responseJSON.user_name,
            global.phoneNo = responseJSON.mobile,
            global.appRates = responseJSON.app_link,
            global.appMsg = responseJSON.share_msg,
            global.transferfund = responseJSON.transfer_point_status
          global.betting = responseJSON.betting_status
          global.logoutStatus = responseJSON.device_result
          global.maintainence = responseJSON.maintainence_msg_status
          global.maintainence_msg = responseJSON.app_maintainence_msg
          global.account = responseJSON.account_block_status
          global.current_version = responseJSON.user_current_version
          global.message = responseJSON.message
          global.minimum_version = responseJSON.user_minimum_version
          global.withdraw = responseJSON.withdraw_status

          // for(i=0; responseJSON.device_id.length; i++){
          //   if(global.uniqueid == i.find(device_id)){
          //     console.log("ok")
          //   }
          // }

        })
    }
    catch (error) {
      console.log("error", error);
    }
  }

  const phoneNo = () => {
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
        // console.log(responseJSON.payment_details[0].insert_date)
        global.date = responseJSON.payment_details[0].insert_date
        global.googlePay = responseJSON.payment_details[0].google_pay_number
        global.phonePe = responseJSON.payment_details[0].phone_pay_number
        global.paytm = responseJSON.payment_details[0].paytm_number


      })

      .catch((error) => {
        console.error(error);
      });
  }


  global.uniqueToken = unique_token;
  global.phoneNo = mobile;
  return (
    <SafeAreaView style={styles.mainView} >
      <ImageBackground style={styles.mainBackImg} source={require('../../../assets/images/screen_bg.png')} >
        <ScrollView>

          <View style={styles.logoView} >
            <Image style={styles.logoImg} source={require('../../../assets/images/logo.png')} />
            <Text style={styles.logoText} >LOGO</Text>
          </View>


          <View style={styles.loginInputView} >
            <View style={styles.loginView} >
              <Text style={styles.loginText} >PIN</Text>
            </View>

            <View style={styles.mainInputView} >
              <View style={styles.subInputView} >

                <View style={styles.inputView} >
                  <ReactNativePinView
                    inputSize={22}
                    ref={pinView}
                    pinLength={4}
                    buttonSize={60}
                    // onChnageText={enteredPin => goToHomeScreen(enteredPin) }
                    onValueChange={enteredPin => setEnteredPin(enteredPin)}
                    buttonAreaStyle={{
                      marginTop: 24,
                    }}
                    inputAreaStyle={{
                      // marginBottom: 10,
                    }}
                    inputViewEmptyStyle={{
                      backgroundColor: "#fff",
                      borderWidth: 2,
                      borderColor: "black",
                    }}
                    inputViewFilledStyle={{
                      backgroundColor: Colors.primary,
                    }}
                    buttonViewStyle={{
                      // borderWidth: 1,
                      borderColor: "black",
                      backgroundColor: Colors.primary,
                      borderRadius: 15
                    }}
                    buttonTextStyle={{
                      color: Colors.black,
                      fontSize: 30
                    }}

                    onButtonPress={key => {
                      if (key === "custom_left") {
                        pinView.current.clear()
                      }

                    }}

                    customLeftButton={showRemoveButton ? <Image style={styles.backImg} source={require('../../../assets/images/back.png')} /> : undefined}
                    customRightButton={showCompletedButton ? <TouchableOpacity style={styles.nextBtn} onPress={goToHomeScreen}>
                      <Image style={styles.nextImag} source={require('../../../assets/images/right_arrow.png')} />
                    </TouchableOpacity> : undefined}
                  />
                </View>




              </View>
            </View>

          </View>

          <View style={styles.accoutView} >
            <TouchableOpacity style={styles.firstAccountView} onPress={() => {
              Linking.openURL(`whatsapp://send?phone=${whatsappNo}&text=${'Hello How are You '}`)
            }}>
              <View style={styles.dontaccoutView}>
                <Image style={styles.whatsImg} source={require('../../../assets/images/whatsapp.png')} />
                <Text style={styles.dontText} >Reset PIN {whatsappNo} </Text>
              </View>

              <View style={styles.loginArrowView} >

                <Image style={styles.loginArrowImg} source={require('../../../assets/images/login_arrow.png')} />
              </View>

            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => {
            navigation.navigate('test')
          }} >
            <Text style={{ color: Colors.white }} >Go to Test Screen </Text>
          </TouchableOpacity>


        </ScrollView>
      </ImageBackground>
    </SafeAreaView >
  )
}

export default PinScreen;
