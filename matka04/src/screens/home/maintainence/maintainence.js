import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView, BackHandler  } from 'react-native'
import styles from './styles'
import LottieView from 'lottie-react-native';


export default class MaintainenceScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.mainView}>
                <View style={styles.firstView} >
                    {/* <Image style={styles.imag} source={require('../../../assets/images/maintainence.png')} /> */}

                    <LottieView style={styles.imag} source={require('../../../assets/images/maientace.json')} autoPlay loop />

                    <Text style={styles.mag} > {global.maintainence_msg} </Text>

                    <TouchableOpacity style={styles.closeBtn} onPress={()=> BackHandler.exitApp()} >
                        <Text style={styles.closeText} > CLOSE </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}