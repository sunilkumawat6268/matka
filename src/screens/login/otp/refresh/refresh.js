import React, { useState, useEffect } from 'react';
import { View, Image, Text, } from 'react-native';
import styles from './styles';
import { StackActions } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import LottieView from 'lottie-react-native';



const RefreshScreen = ({ navigation, route }) => {


    const { flag } = route.params;

    //State for ActivityIndicator animation
    useEffect(() => {
        var uniqueId = DeviceInfo.getUniqueId();
        global.uniqueid = uniqueId
        dashboard_Data();
        setTimeout(() => {

            if (flag == 'otp') {
                navigation.dispatch(
                    StackActions.replace('home')
                )
            }
        }, 3000);
    }, []);



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

                    console.log(responseJSON.share_msg)

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





    return (
        <View style={styles.container}>
            <LottieView style={styles.img} source={require('../../../../assets/images/loader.json')} autoPlay loop />

        </View>
    );
};

export default RefreshScreen;

