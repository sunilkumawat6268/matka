import React, { Component } from 'react'
import { Text, View, BackHandler } from 'react-native'
import { WebView } from 'react-native-webview';


export default class WebViewScreen extends Component {

    componentWillUnmount() {
        this.backHandler.remove();
    }

    componentDidMount() {

        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );

    }

    backAction = () => {
        this.props.navigation.goBack()
        return true;
    };

    
    render() {
        const { item } = this.props.route.params;
        return (
            <WebView
                source={{ uri: item.web_chart_url }}
            />

        )
    }
}