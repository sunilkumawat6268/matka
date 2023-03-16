import React, { useState, useEffect } from 'react';
import { View, Image, Text, } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';



const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation

  useEffect(() => {
    var uniqueId = DeviceInfo.getUniqueId();
    global.uniqueid = uniqueId
    matkaAppKey_04();
    this.view.fadeInDownBig(2200)
    this.text.fadeInDownBig(2200)

    setTimeout(() => {
      AsyncStorage.getItem('@token').then(asyncStorageRes => {
        console.log(asyncStorageRes)
        if (asyncStorageRes !== null) {
          navigation.dispatch(
            StackActions.replace('pin', {
              unique_token: asyncStorageRes,
            })
          )
        }
        else {
          navigation.dispatch(
            StackActions.replace('login')
          )


        }
      });
    }, 2500);
  }, []);

  handleViewRef = ref => this.view = ref;
  handleViewText = ref => this.text = ref;


  const matkaAppKey_04 = () => {
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
        console.log(global.uniqueid)
        global.appKey = responseJSON.app_key
      })
  }




  return (
    <View style={styles.container}>
      <Animatable.View
        ref={this.handleViewRef}
      >
        <View style={styles.imgView} >


          <Image style={styles.img} source={require("../../assets/images/logo.png")} />

        </View>
      </Animatable.View>

      <Animatable.View
        ref={this.handleViewText}
      >
        <View style={styles.textView}>

          <Text style={styles.matkaText1}> Welcome To </Text>
          <Text style={styles.matkaText} > MATKA 04 </Text>

        </View>
      </Animatable.View>

      <View style={styles.loderView} >
        <LottieView style={styles.loader} source={require('../../assets/images/loader.json')} autoPlay loop />
      </View>

    </View>
  );
};

export default SplashScreen;

