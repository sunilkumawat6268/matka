import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import { WebView } from 'react-native-webview';


export default class WithDrawWebViewScreen extends Component {
  render() {
    const { receipt } = this.props.route.params;
    return (
      <WebView
        source={{ uri: receipt }}
      />

    )
  }
}

