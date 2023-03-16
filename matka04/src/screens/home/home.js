import React, { Component } from 'react'
import { Text, View, BackHandler, Button, Alert, SafeAreaView, FlatList, TouchableOpacity, Image, ImageBackground, Linking, Vibration, TextInput, Modal } from 'react-native';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { version } from '../../../package.json'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import styles from './styles';
import LottieView from 'lottie-react-native';
import TextTicker from 'react-native-text-ticker';
import LinearGradient from 'react-native-linear-gradient';


global.update = true;
global.check_Status = true;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderImage: [],
      dashboardData: [],
      whatsapp: "",
      phone: "",
      telegram: "",
      isLoading: false,
      deviceID: [],
      mataince: "",
      current: false,
      isVisible: false,

    }
  }


  backAction() {
    Alert.alert("MATKA ", "Are you sure you want to close this application", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  componentWillUnmount() {
    this.willBlurListener();
    this.backHandler.remove();

  }

  componentDidMount() {
    // console.log(version);
    this.willBlurListener = this.props.navigation.addListener('focus', () => {
      this.profile_04();
      this.slider_Image_04();
      this.dashboard_Data_04();
      // this.socialapp();
      // global.maintainence = "1"
      if (global.maintainence == "1") {
        this.props.navigation.dispatch(
          StackActions.replace('maintainence')
        )
      }

      var device_array = global.logoutStatus;

      for (const device of device_array) {
        var deviceResult = device.device_id
        var logoutStatus = device.logout_status
        var securityPin = device.security_pin_status
        // console.log(deviceResult, "Device Id ");
        // console.log(logoutStatus, "logoutStatus");
        // console.log(securityPin, "Security PIn");r
        if (device.device_id == global.uniqueid) {
          if (logoutStatus == "1") {
            AsyncStorage.removeItem('@token')
            this.props.navigation.navigate('login')
          }
          else if (securityPin == "1") {
            AsyncStorage.removeItem('@token')
            this.props.navigation.navigate('login')
          }
          global.check_Status = false;
          break;
        }
        else {
          global.check_Status = true
        }

      }

      if (global.check_Status == true) {
        AsyncStorage.removeItem('@token')
        this.props.navigation.navigate('login')
      }



      // for (i = 0; device[i]; i++) {
      //   if (device[i].device_id == global.uniqueid) {
      //     if (device[i].logout_status == "1") {
      //       AsyncStorage.removeItem('@token')
      //       this.props.navigation.navigate('login')
      //       console.log("ok")
      //     }
      //     else {
      //       // console.log('logoout no')
      //     }

      //     if (device[i].security_pin_status == "1") {
      //       AsyncStorage.removeItem('@token')
      //       this.props.navigation.navigate('login')
      //     }
      //     else {
      //       // console.log('security pin no')
      //     }
      //   }

      // }




      if (global.account === "0") {
        AsyncStorage.removeItem('@token')
        this.props.navigation.navigate('login')
      }

      // global.minimum_version = "1.0.1"
      // global.current_version = "1.1.1"
      // var version = "1.1.1",

      if (global.minimum_version > version) {
        // alert("continue disable upadate enable ")
        this.setState({ isVisible: true })
        return
      }

      else if (global.current_version > version) {
        if (global.update == true) {
          this.setState({ current: true })
          global.update = false
        }
      }
    })

    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );

  }


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


  slider_Image_04() {
    try {
      fetch('http://13.127.179.165/api-get-slider-images', {
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
          // console.log(responseJSON.sliderdata)
          // console.log(responseJSON.sliderdata)
          this.setState({
            sliderImage: responseJSON.sliderdata
          })
        })
    }
    catch (error) {
      console.log("error", error);
    }
  }

  dashboard_Data_04 = () => {
    this.setState({ isLoading: true })

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

          console.log(responseJSON.telegram_no)

          global.userName = responseJSON.user_name
          global.phoneNo = responseJSON.mobile
          global.appRates = responseJSON.app_link
          global.wallet_Balance = responseJSON.wallet_amt
          global.appMsg = responseJSON.share_msg
          global.transferfund = responseJSON.transfer_point_status
          global.maintainence_msg = responseJSON.app_maintainence_msg
          global.betting = responseJSON.betting_status
          global.maintainence = responseJSON.maintainence_msg_status
          global.logoutStatus = responseJSON.device_result
          global.account = responseJSON.account_block_status
          global.current_version = responseJSON.user_current_version
          global.message = responseJSON.message
          global.minimum_version = responseJSON.user_minimum_version
          global.withdraw = responseJSON.withdraw_status


          // global.maintainence = "1"
          if (global.maintainence == "1") {
            this.props.navigation.dispatch(
              StackActions.replace('maintainence')
            )
          }

          // global.account ="0"
          if (global.account === "0") {
            AsyncStorage.removeItem('@token')
            this.props.navigation.navigate('login')
          }


          // global.minimum_version = "1.0.1"
          // global.current_version = "1.1.1"

          if (global.minimum_version > version) {
            // alert("continue disable upadate enable ")
            this.setState({ isVisible: true })
            return
          }

          else if (global.current_version > version) {
            if (global.update == true) {
              this.setState({ current: true })
              global.update = false
            }
          }

          this.setState({
            dashboardData: responseJSON.result,
            deviceID: responseJSON.device_id,
            mataince: responseJSON.maintainence_msg_status,
            phone: responseJSON.mobile_1,
            whatsapp: responseJSON.mobile_no,
            telegram: responseJSON.telegram_no

          })

        })
        .finally(() => this.setState({ isLoading: false }))

    }
    catch (error) {
      console.log("error", error);
    }
  }



  bounce_04 = () => {
    Vibration.vibrate()
  }
  profile_04 = () => {
    fetch('http://13.127.179.165/api-get-profile', {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Content-type': "application/json",
      },
      body: JSON.stringify({
        "env_type": "1",
        "app_key": global.appKey,
        unique_token: global.uniqueToken
      })
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        // console.log(responseJSON.profile[0].user_name)
        // global.name = responseJSON.msg
        global.userName = responseJSON.profile[0].user_name
        global.email = responseJSON.profile[0].email
        global.wallet_Balance = responseJSON.profile[0].wallet_balance
      })
  }
  emptyComponnt_04 = () => {
    return (
      <View style={styles.noResultView} >
        {/* <Image style={styles.noResultImag} source={require('../../assets/images/no_resut.png')} /> */}
        <LottieView style={styles.noResultImag} source={require('../../assets/images/no_result.json')} autoPlay loop />

        <Text style={styles.noResultText} > No result found  </Text>
      </View>
    )
  }





  render() {
    return (
      <SafeAreaView style={styles.mainView} >
        <ImageBackground style={styles.mainBackImg} source={require('../../assets/images/screen_bg.png')} >

          <View style={styles.headerView} >
            <View style={styles.barImgView} >
              <TouchableOpacity onPress={() => {
                this.props.navigation.toggleDrawer()
              }} >
                <Image style={styles.barImag} source={require('../../assets/images/menu.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.secondHeaderView} >
              <View>
                <Text style={styles.homeText} > HOME </Text>
              </View>
              <View>
                {(() => {
                  if (global.betting == "1") {
                    return (
                      <TouchableOpacity
                        disabled={global.betting === "0"}
                        onPress={() => { this.props.navigation.navigate('wallet') }}
                        style={styles.walletBtn}
                      >
                        <View style={{ flexDirection: 'row', }} >

                          <Image style={styles.walletimag} source={require('../../assets/images/wallet.png')} />
                          <Text style={styles.amountText} >{global.wallet_Balance} </Text>

                        </View>

                      </TouchableOpacity>
                    )
                  }
                })()}


              </View>
            </View>
          </View>

          <View style={styles.mainSocilaView} >

            <TouchableOpacity style={styles.whatsappBtn} onPress={() => {
              Linking.openURL(`whatsapp://send?phone=${this.state.whatsapp}&text=${this.message}`)
            }}>
              <LinearGradient colors={['#006110', '#0b8f21',]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.mainwhatsView} >

                <View style={styles.mainwhatsView}>

                  <View style={styles.whatsappWhiteView} >
                    <Image style={styles.whatsappIcon} source={require('../../assets/images/whatsapp_icon.png')} />
                  </View>
                  <View>
                    <Text style={styles.whatsappText} >Whatsapp</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.whatsappBtn} onPress={() => {
              Linking.openURL(`https://t.me/&+${this.state.telegram}`)
            }} >
              <LinearGradient colors={['#0080b3', '#00adf1',]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.mainwhatsView} >

                <View style={styles.mainTelegramView} >
                  <View style={styles.whatsappWhiteView} >
                    <Image style={styles.whatsappIcon} source={require('../../assets/images/telegram-icon.png')} />
                  </View>
                  <View>
                    <Text style={styles.whatsappText} >Telegram</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.whatsappBtn} onPress={() => {
              Linking.openURL(`tel:${this.state.phone}`)
            }} >
              <LinearGradient colors={['#002f8a', '#1e4fad',]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.mainwhatsView} >

                <View style={styles.mainPhoneView} >
                  <View style={styles.whatsappWhiteView} >
                    <Image style={styles.whatsappIcon} source={require('../../assets/images/call_icon.png')} />
                  </View>
                  <View>
                    <Text style={styles.whatsappText} >Phone</Text>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.howtoplayBtn} onPress={() => {
            this.props.navigation.navigate('howToPlay')
          }} >

            <View style={styles.mainhowtoPlayView} >
              <View style={styles.subhowtoPlayView} >
                <Text style={styles.howToPlayText} >How To Play ?</Text>
              </View>

              <View style={styles.goImgView} >
                <Image style={styles.goImg} source={require('../../assets/images/go.png')} />
              </View>

            </View>

          </TouchableOpacity>


          <View style={styles.sliderView}>

            <SwiperFlatList
              autoplay
              autoplayLoop
              showPagination
              data={this.state.sliderImage}
              renderItem={({ item }) => (
                <View style={styles.sliderImg} >
                  <Image style={styles.sliderImageFlatlist} source={{ uri: item.slider_image }} />
                </View>
              )}
            />
          </View>


          {(() => {
            if (global.betting == "1") {
              return (
                <View style={styles.mainPlayStarLineView} >
                  <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('playStarLine')
                  }} >

                    <View style={styles.firstPlayStarview} >

                      <LinearGradient colors={['#c09e53', '#f6e284', '#e6b964']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.playTextView} >
                        <View  >
                          <Text style={styles.playText} >Play StarLine Game</Text>
                        </View>
                      </LinearGradient>


                      <View style={styles.starImgView} >
                        <Image style={styles.starImg} source={require('../../assets/images/starline_btn.png')} />
                      </View>

                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
          })()}







          <FlatList
            data={this.state.dashboardData}
            refreshing={this.state.isLoading}
            ListEmptyComponent={this.emptyComponnt_04}
            onRefresh={this.dashboard_Data_04}
            renderItem={({ item }) => (
              <View style={styles.headFlateListView} >
                <View style={styles.mainFlatListView} >
                  <TouchableOpacity
                    disabled={global.betting === "0"}
                    onPress={
                      (item.msg_status === 2) ? this.bounce_04 : () => {
                        this.props.navigation.navigate('game', {
                          headername: item.game_name,
                          item,
                        })
                      }
                    }
                  >

                    <View style={styles.firstFlatListView} >
                      <View style={styles.flatListWhiteView} >

                        <View style={styles.gameNameView} >
                          <Text style={styles.gameName} >{item.game_name} </Text>
                          {/* <Text style={styles.gameName} >00:00:00</Text> */}

                          <View style={styles.playView} >
                            <Text style={styles.gamePlayText} >{(item.msg_status == "1") ? "PLAY" : "PAUSE"}</Text>
                            <View style={styles.playImgView} >
                              <Image style={styles.playimg} source={(item.msg_status === 1) ? require('../../assets/images/play_icon.png') : require('../../assets/images/pause_icon.png')} />
                            </View>
                          </View>

                        </View>

                        <View style={styles.secondYellowView} >

                          <View style={styles.subSecondView} >

                            <View>
                              <ImageBackground style={styles.hangingImg} source={require('../../assets/images/hanging_board.png')} >
                                <Text style={[
                                  (item.msg_status === 1) ? styles.marketOpen : styles.marketClose]} >{item.msg} </Text>
                              </ImageBackground>
                            </View>

                            <View style={styles.middleView} >
                              <Text style={styles.gameNo} >{[item.open_result, (item.open_result === "") ? "XXX-X" : ""]}{[item.close_result, (item.close_result === "") ? "X-XXX" : ""]}</Text>

                              <View style={styles.timeView} >
                                <Image style={styles.watchImg} source={require('../../assets/images/clock_icon.png')} />
                                <Text style={styles.timeText} >  Open - {item.open_time} </Text>
                              </View>

                              <View style={styles.timeView} >
                                <Image style={styles.watchImg} source={require('../../assets/images/clock_icon.png')} />
                                <Text style={styles.timeText} >  Close -{item.close_time} </Text>
                              </View>

                            </View>

                            <View>
                              <TouchableOpacity
                                onPress={() => {
                                  this.props.navigation.navigate('webView', {
                                    webViewHeaderName: item.game_name,
                                    item,
                                  })
                                }}
                              >
                                <Image style={styles.playBtn} source={require('../../assets/images/bar_chart.png')} />
                              </TouchableOpacity>
                            </View>

                          </View>

                        </View>

                      </View>
                    </View>

                  </TouchableOpacity>
                </View>

              </View>
            )}
          />


          <View style={styles.container1}>
            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.isVisible}
              onRequestClose={() => { console.log("Modal has been closed.") }}>
              <View style={styles.modalboxView} >
                <View style={styles.modal}>
                  <View style={styles.modalImgView} >
                    {/* <Image style={styles.updateImag} source={require('../../assets/images/update.png')} /> */}
                    <LottieView style={styles.updateImag} source={require('../../assets/images/update.json')} autoPlay loop />

                  </View>
                  <Text style={styles.text}>{global.message}</Text>
                  <TouchableOpacity style={styles.updateBtn}
                    onPress={() => Linking.openURL(global.appRates)}
                  >
                    <Text style={styles.updateText}>UPDATE</Text>
                  </TouchableOpacity>
                  {/* <Button title="Click To Close Modal" onPress={() => {
                  this.setState({ isVisible: !this.state.isVisible })
                }} /> */}
                </View>
              </View>
            </Modal>
            {/*Button will change state to true and view will re-render*/}

          </View>

          <View style={styles.container1}>
            <Modal
              animationType={"fade"}
              transparent={true}
              visible={this.state.current}
              onRequestClose={() => { console.log("Modal has been closed.") }}>
              <View style={styles.modalboxView} >
                <View style={styles.modal}>
                  <View style={styles.modalImgView} >
                    {/* <Image style={styles.updateImag} source={require('../../assets/images/update.png')} /> */}
                    <LottieView style={styles.updateImag} source={require('../../assets/images/update.json')} autoPlay loop />
                  </View>
                  <Text style={styles.text}>{global.message}</Text>
                  <View style={styles.btnView} >

                    <TouchableOpacity style={styles.updateBtn}
                      onPress={() => Linking.openURL(global.appRates)}
                    >
                      <Text style={styles.updateText}>UPDATE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.updateBtn1}
                      onPress={() => this.setState({ current: !this.state.current })}
                    >
                      <Text style={styles.updateText}>CONTINUE</Text>
                    </TouchableOpacity>
                  </View>
                  {/* <Button title="Click To Close Modal" onPress={() => {
                  this.setState({ isVisible: !this.state.isVisible })
                }} /> */}
                </View>
              </View>
            </Modal>
            {/*Button will change state to true and view will re-render*/}

          </View>


        </ImageBackground>

      </SafeAreaView>
    )
  }
}