import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, Image, FlatList, Linking, RefreshControl, ScrollView, BackHandler, ImageBackground } from 'react-native'
import styles from './styles';
import LottieView from 'lottie-react-native';


export default class ContactUsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            whatsapp: [],
            telegram: [],
            phone: [],
            email: [],
            isLoading: false,
            refreshing: false,


        }
    }



    componentWillUnmount() {
        this.backHandler.remove();
    }
    backAction = () => {
        this.props.navigation.goBack()
        return true;
    };

    componentDidMount() {

        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );

        this.contact_us()
    }

    contact_us = () => {
        this.setState({ isLoading: true })
        fetch("http://13.127.179.165/api-get-contact-details", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "env_type": "1",
                "app_key": global.appKey
            })
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                global.whatsapp = responseJSON.whatsapp_no,
                    global.telegram = responseJSON.mobile_2,
                    global.phone = responseJSON.mobile_1,
                    global.email = responseJSON.email_1
                this.setState({
                    whatsapp: responseJSON.whatsapp_no,
                    telegram: responseJSON.mobile_2,
                    phone: responseJSON.mobile_1,
                    email: responseJSON.email_1
                })
            })
            .finally(() => this.setState({ isLoading: false }))
    }


    onRefresh = () => {
        this.setState({ refreshing: true })
        setTimeout(() => {
            this.setState({ refreshing: false })
        }, 2000);
    };

    render() {
        return (
            <SafeAreaView style={styles.maninView} >
                <ImageBackground style={styles.mainBackImg} source={require('../../../../assets/images/screen_bg.png')} >
                    <View style={styles.headerView} >
                        <View style={styles.barImgView} >
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.goBack()
                            }} >
                                <Image style={styles.barImag} source={require('../../../../assets/images/back_1.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.secondHeaderView} >
                            <View>
                                <Text style={styles.homeText} > Contact Us </Text>
                            </View>

                        </View>
                    </View>

                    <View style={styles.contactImgView} >
                        <LottieView style={styles.contactImg} source={require('../../../../assets/images/contact.json')} autoPlay loop />

                    </View>


                    <View style={styles.firstView} >

                        <View style={styles.contactView} >

                            <TouchableOpacity onPress={() => {
                                Linking.openURL(`whatsapp://send?phone=${this.state.whatsapp}`)
                            }}>
                                <View style={styles.whatsappView1} >
                                    <View style={styles.imageView} >
                                        {/* <Image style={styles.whatsappImag} source={require('../../../../assets/images/whatsapp.png')} /> */}
                                        <LottieView style={styles.whatsappImag} source={require('../../../../assets/images/whatsapp_1.json')} autoPlay loop />

                                    </View>
                                    <Text style={styles.whatsappText} > {this.state.whatsapp} </Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                Linking.openURL(`https://t.me/&+${this.state.telegram}}`)
                            }} >
                                <View style={styles.whatsappView2} >
                                    <View style={styles.imageView} >
                                        {/* <Image style={styles.whatsappImag} source={require('../../../../assets/images/telegram.png')} /> */}
                                        <LottieView style={styles.whatsappImag} source={require('../../../../assets/images/telegram_1.json')} autoPlay loop />

                                    </View>
                                    <Text style={styles.whatsappText} > {this.state.telegram} </Text>

                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contactView} >
                            <TouchableOpacity onPress={() => {
                                Linking.openURL(`tel:${this.state.phone}`)
                            }} >
                                <View style={styles.whatsappView} >
                                    <View style={styles.imageView} >
                                        {/* <Image style={styles.whatsappImag} source={require('../../../../assets/images/phone_call.png')} /> */}
                                        <LottieView style={styles.whatsappImag} source={require('../../../../assets/images/phone_1.json')} autoPlay loop />

                                    </View>
                                    <Text style={styles.whatsappText} > {this.state.phone} </Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                Linking.openURL(`mailto:${this.state.email}`)
                            }} >
                                <View style={styles.whatsappView2} >
                                    <View style={styles.imageView} >
                                        {/* <Image style={styles.whatsappImag} source={require('../../../../assets/images/email_1.png')} /> */}
                                        <LottieView style={styles.whatsappImag1} source={require('../../../../assets/images/gmail_1.json')} autoPlay loop />

                                    </View>
                                    <Text style={styles.whatsappText} > {this.state.email} </Text>

                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                </ImageBackground>
            </SafeAreaView>

        )
    }
}