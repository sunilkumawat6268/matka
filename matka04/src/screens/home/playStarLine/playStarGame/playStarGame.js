import React, { Component } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import * as Animatable from 'react-native-animatable';


export default class PlayStarGameScreen extends Component {

  componentDidMount() {
    this.view.fadeInLeft(1500)
    this.pana.fadeInRight(1500)
  }

  handleViewRef = ref => this.view = ref;
  handleViewPana = ref => this.pana = ref;

  render() {
    const { item } = this.props.route.params;

    return (
      <SafeAreaView style={styles.mainView} >

        <Animatable.View
          ref={this.handleViewRef}
        // disable
        >
          <View style={styles.singleDigitView} >
            <View style={styles.digitTextView} >
            </View>
            <View style={styles.sigitView} >
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('playSingleDigit', {
                  item
                })
              }} >
                <Image style={styles.singleDigitImg} source={require('../../../../assets/images/single_digit.png')} />
              </TouchableOpacity>


            </View>
          </View>
        </Animatable.View>

        <Animatable.View
          ref={this.handleViewPana}
        // disable
        >
          <View style={styles.singleDigitView} >

            <View style={styles.digitTextView} >
              {/* <Text style={styles.digitText} >PANNA</Text> */}
            </View>

            <View style={styles.sigitView} >

              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('playSinglePana', {
                  item
                })
              }}>
                <Image style={styles.singleDigitImg} source={require('../../../../assets/images/single_panna.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('playDoublePana', {
                  item
                })
              }} >
                <Image style={styles.singleDigitImg} source={require('../../../../assets/images/double_panna.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.triplePanaView} >

              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('playTriplePana', {
                  item
                })
              }} >
                <Image style={styles.singleDigitImg} source={require('../../../../assets/images/triple_panna.png')} />
              </TouchableOpacity>

            </View>
          </View>
        </Animatable.View>

      </SafeAreaView>
    )
  }
}