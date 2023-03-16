import React, { useEffect, useRef, useState } from "react"
import { SafeAreaView, FlatList, Text, TouchableOpacity, View, Image, TextInput, ToastAndroid, ImageBackground, Linking, ScrollView, Vibration } from "react-native";
import ReactNativePinView from "react-native-pin-view";
import { StackActions } from '@react-navigation/native';
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import Colors from "../../../../../assets/theme/colors";


function WithDrawPinScreen({ navigation, route }) {
  const pinView = useRef(null)
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const [enteredPin, setEnteredPin] = useState("")
  const [showCompletedButton, setShowCompletedButton] = useState(false)
  const [count, setCount] = useState(4)
  const [whatsappNo, setWhatsappNo] = useState([])

  const { point, method } = route.params;

  useEffect(() => {
    socialapp_04();
    wallet_Balance_04()
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
      goToHomeScreen_04()
    }
    // goToHomeScreen_04();
  }, [enteredPin])

  const wallet_Balance_04 = () => {
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
  const goToHomeScreen_04 = () => {
    fetch('http://13.127.179.165/api-check-security-pin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "env_type": "1",
        "app_key": global.appKey,
        unique_token: global.uniqueToken,
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
          setCount(count - 1)
          ToastAndroid.show("PIN incorrect, You have " + count + " attempts left", ToastAndroid.SHORT);
          if (count === 0) {
            navigation.navigate('withDraw')
          }
          pinView.current.clearAll()
        }
        else {
          fetch("http://13.127.179.165/api-user-withdraw-fund-request", {
            method: "POST",
            headers: {
              Accept: 'application/json',
              'Content-type': "application/json",
            },
            body: JSON.stringify({
              "env_type": "1",
              "app_key": global.appKey,
              unique_token: global.uniqueToken,
              request_amount: point,
              payment_method: method
            })
          })
            .then((response) => response.json())
            .then((responseJSON) => {
              console.log(responseJSON)
              if (!responseJSON.status) {
                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
              }

              else {
                ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
              }
            })

          navigation.navigate('withDraw');
          // ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT);
        }

      })
      .catch((error) => {
        alert('error' + error);
        ToastAndroid.show(error, ToastAndroid.SHORT);
      })


  }

  const socialapp_04 = () => {
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



  return (
    <SafeAreaView style={styles.mainView} >
      <ImageBackground style={styles.mainBackImg} source={require('../../../../../assets/images/screen_bg.png')} >
        <ScrollView>

          <View style={styles.logoView} >
            <Image style={styles.logoImg} source={require('../../../../../assets/images/logo.png')} />
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
                    // onChnageText={enteredPin => goToHomeScreen_04(enteredPin) }
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

                    customLeftButton={showRemoveButton ? <Image style={styles.backImg} source={require('../../../../../assets/images/back.png')} /> : undefined}
                    customRightButton={showCompletedButton ? <TouchableOpacity style={styles.nextBtn} onPress={goToHomeScreen_04}>
                      <Image style={styles.nextImag} source={require('../../../../../assets/images/right_arrow.png')} />
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
                <Image style={styles.whatsImg} source={require('../../../../../assets/images/whatsapp.png')} />
                <Text style={styles.dontText} >Reset PIN {whatsappNo} </Text>
              </View>

              <View style={styles.loginArrowView} >

                <Image style={styles.loginArrowImg} source={require('../../../../../assets/images/login_arrow.png')} />

              </View>
            </TouchableOpacity>
          </View>


        </ScrollView>
      </ImageBackground>
    </SafeAreaView >
  )
}

export default WithDrawPinScreen;