import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, ToastAndroid, Vibration, BackHandler, ImageBackground } from 'react-native'
import styles from './styles';
import * as Animatable from 'react-native-animatable';

export default class GameScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      realTime: "",
    }
  }
  componentDidMount() {
    var time = new Date().getTime();

    this.setState({
      realTime: time
    })
    checkStatus_04();
    this.wallet_Balance()
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
    this.view.fadeInLeft(1500)
    this.pana.fadeInRight(1500)
    this.sangam.fadeInLeft(1500)


  }

  handleViewRef = ref => this.view = ref;
  handleViewPana = ref => this.pana = ref;
  handleViewSangam = ref => this.sangam = ref;
  jodiImg = ref => this.jodi = ref;
  halfImg = ref => this.half = ref;
  fullImg = ref => this.full = ref;

  // bounce = () => this.view.shake(200)
  componentWillUnmount() {
    this.backHandler.remove();
  }
  backAction = () => {
    this.props.navigation.goBack()
    return true;
  };


  wallet_Balance = () => {
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
        // console.log(responseJSON.wallet_amt)
        global.wallet_Balance = responseJSON.wallet_amt

      })

  }


  render() {
    const { item } = this.props.route.params;

    const jodiDigitScreen_04 = () => {
      if (global.gameStatus == "1") {

        this.props.navigation.navigate("jodiDigit", {
          item
        })

        // alert("no")
      }
      else {
        Vibration.vibrate()
        this.jodi.wobble(500)
        ToastAndroid.show("This Session is Closed ", ToastAndroid.SHORT)
        // alert("Yes")

      }
    }

    const halfSangamScreen_04 = () => {
      if (global.gameStatus == "1") {

        this.props.navigation.navigate("halfSangam", {
          item
        })
      }
      else {
        Vibration.vibrate()
        this.half.wobble(500)
        ToastAndroid.show("This Session is Closed ", ToastAndroid.SHORT)

      }
    }

    const fullSangamScreen_04 = () => {
      if (global.gameStatus == "1") {

        this.props.navigation.navigate("fullSangam", {
          item
        })
      }
      else {
        Vibration.vibrate()
        this.full.wobble(500)
        ToastAndroid.show("This Session is Closed ", ToastAndroid.SHORT)

      }
    }

    checkStatus_04 = () => {
      fetch("http://13.127.179.165/api-check-game-status", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          "env_type": "1",
          "app_key": global.appKey,
          unique_token: global.uniqueToken,
          "game_id": item.game_id
        })
      })
        .then((response) => response.json())
        .then((responseJSON) => {
          console.log(responseJSON.game_status)
          global.gameStatus = responseJSON.game_status
        })
    }



    return (
      <SafeAreaView style={styles.mainView} >
        

        <ScrollView>
          <Animatable.View
            ref={this.handleViewRef}
          // disable
          >

            <View style={styles.singleDigitView} >
              <View style={styles.sigitView} >
                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('singleDigit', {
                    item
                  })
                }} >
                  <Image style={styles.singleDigitImg} source={require('../../../assets/images/single_digit.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={jodiDigitScreen_04} >
                  <Animatable.View
                    ref={this.jodiImg}
                  // disable
                  >
                    <Image style={styles.singleDigitImg} source={require('../../../assets/images/jodi_digit.png')} />
                  </Animatable.View>
                </TouchableOpacity>
              </View>
            </View>

          </Animatable.View>

          <Animatable.View
            ref={this.handleViewPana}
          // disable
          >
            <View style={styles.singleDigitView} >


              <View style={styles.sigitView} >

                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('singlePana', {
                    item
                  })
                }}>
                  <Image style={styles.singleDigitImg} source={require('../../../assets/images/single_panna.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('doublePana', {
                    item
                  })
                }} >
                  <Image style={styles.singleDigitImg} source={require('../../../assets/images/double_panna.png')} />
                </TouchableOpacity>
              </View>

              <View style={styles.triplePanaView} >

                <TouchableOpacity onPress={() => {
                  this.props.navigation.navigate('triplePana', {
                    item
                  })
                }} >
                  <Image style={styles.singleDigitImg} source={require('../../../assets/images/triple_panna.png')} />
                </TouchableOpacity>

              </View>
            </View>

          </Animatable.View>


          <Animatable.View
            ref={this.handleViewSangam}
          >
            <View style={styles.singleDigitView} >


              <View style={styles.sigitView} >


                <TouchableOpacity style={styles.singleDigitBtn} onPress={halfSangamScreen_04} >
                <Animatable.View
                    ref={this.halfImg}
                  // disable
                  >
                  <Image style={styles.singleDigitImg} source={require('../../../assets/images/half_sangam.png')} />
                  </Animatable.View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.singleDigitBtn} onPress={fullSangamScreen_04} >
                <Animatable.View
                    ref={this.fullImg}
                  // disable
                  >
                  <Image style={styles.singleDigitImg} source={require('../../../assets/images/full_sangam.png')} />
                  </Animatable.View>
                </TouchableOpacity>
              </View>
            </View>
          </Animatable.View>


        </ScrollView>
      </SafeAreaView >
    )
  }
}