import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, Modal, Button, TextInput, FlatList, ScrollView, ToastAndroid, Keyboard, ImageBackground } from 'react-native'
import styles from './styles';
import LottieView from 'lottie-react-native';



var googleNo = Number(global.googlePay)
var phonePeNo = Number(global.phonePe)
var paytmNo = Number(global.paytm)

export default class PaymentMethodScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            phonePeModal: false,
            paytmModal: false,
            walletBalance: [],
            // google: "",
            // phonePe: "",
            // paytm: "",
            google: global.googlePay === null ? null : global.googlePay,
            phonePe: global.phonePe === null ? null : global.phonePe,
            paytm: global.paytm === null ? null : global.paytm,
            number: []
        }
    }


    componentWillUnmount() {
        this.willBlurListener();
    }

    componentDidMount() {
        this.willBlurListener = this.props.navigation.addListener('focus', () => {
            this.phoneNo_04();
        })

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



    googlePayMethod_04 = () => {
        var google = this.state.google;
        Keyboard.dismiss()
        console.log('click');

        if (google == null) {
            ToastAndroid.show("Enter the Phone No. : ", ToastAndroid.SHORT)
        }
        else if (google.includes('-') || google.includes('.') || google.includes(',') || google.includes(' ')) {
            ToastAndroid.show('Invalid Phone no. ', ToastAndroid.SHORT)
        }

        else if (google.length < 10) {
            ToastAndroid.show("Phone No. Must be at least 10 Characters  ", ToastAndroid.SHORT)
        }
        else if (Number(global.googlePay) == google) {
            ToastAndroid.show("Please Change Number ", ToastAndroid.SHORT)
        }
        else {
            fetch('http://13.127.179.165/api-validate-bank', {
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
                    console.log(responseJSON)
                    if (!responseJSON.status) {
                        ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                    }
                    else {
                        this.props.navigation.navigate('otp', {
                            googlePe: responseJSON.otp,
                            googlePeText: "google",
                            google: google,
                            mobile: global.phoneNo,


                        });
                        // ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                    }
                })
        }
    }

    phonePeMethod_04 = () => {
        var phonePe = this.state.phonePe;
        // this.setState({
        //     phonePe: phonePe.replace(/[^0-9]/g, ''),
        // });

        if (phonePe == null) {
            ToastAndroid.show("Enter the Phone No.  ", ToastAndroid.SHORT)
        }
        else if (phonePe.includes('-') || phonePe.includes('.') || phonePe.includes(',') || phonePe.includes(' ')) {
            ToastAndroid.show('Invalid Phone no. ', ToastAndroid.SHORT)
        }
        else if (phonePe.length < 10) {
            ToastAndroid.show("Phone No. Must be at least 10 Characters  ", ToastAndroid.SHORT)
        }
        else if (Number(global.phonePe) == phonePe) {
            ToastAndroid.show("Please Change Number ", ToastAndroid.SHORT)
            // alert("ok")
        }
        else {
            fetch('http://13.127.179.165/api-validate-bank', {
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
                    console.log(responseJSON)
                    if (!responseJSON.status) {
                        ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                    }
                    else {
                        this.props.navigation.navigate('otp', {
                            phone: responseJSON.otp,
                            phonePeText: "phonePe",
                            phonePe: phonePe,
                            mobile: global.phoneNo,

                        });
                        // ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                    }
                })
        }
    }

    paytmMethod_04 = () => {
        var paytm = this.state.paytm;
        // this.setState({
        //     paytm: paytm.replace(/[^0-9]/g, ''),
        // });
        if (paytm == null) {
            ToastAndroid.show("Enter the Phone No. ", ToastAndroid.SHORT)
        }
        else if (paytm.includes('-') || paytm.includes('.') || paytm.includes(',') || paytm.includes(' ')) {
            ToastAndroid.show('Invalid Phone no. ', ToastAndroid.SHORT)
        }
        else if (paytm.length < 10) {
            ToastAndroid.show("Phone No. Must be at least 10 Characters  ", ToastAndroid.SHORT)
        }
        else if (Number(global.paytm) == paytm) {
            ToastAndroid.show("Please Change Number ", ToastAndroid.SHORT)

        }
        else {
            fetch('http://13.127.179.165/api-validate-bank', {
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
                    console.log(responseJSON)
                    if (!responseJSON.status) {
                        ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                    }
                    else {
                        this.props.navigation.navigate('otp', {
                            pay: responseJSON.otp,
                            paytmText: "paytm",
                            paytm: paytm,
                            mobile: global.phoneNo,

                        });
                        // ToastAndroid.show(responseJSON.msg, ToastAndroid.SHORT);
                    }
                })
        }
    }

    handelGooglepayNo_04 = (google) => {
        // var google = this.state.google;
        this.setState({ google })
        if (google.length == 10) {
            Keyboard.dismiss()
        }
        // else {
        //     alert('ok')
        // }
    }
    handelPhonePeNo_04 = (phonePe) => {
        this.setState({ phonePe })
        if (phonePe.length == 10) {
            Keyboard.dismiss()
        }
    }
    handelPaytmNo_04 = (paytm) => {
        this.setState({ paytm })
        if (paytm.length == 10) {
            Keyboard.dismiss()
        }
    }


    render() {
        return (
            <SafeAreaView style={styles.mainView} >
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
                                <Text style={styles.homeText} > Payment Method </Text>
                            </View>
                            <View>





                            </View>
                        </View>
                    </View>


                    <View style={styles.contactImgView} >
                        <LottieView style={styles.contactImg} source={require('../../../../assets/images/method.json')} autoPlay loop />

                    </View>



                    <View style={styles.mainFirstView} >
                        <View style={styles.firstView} >

                            <View style={styles.googleView} >
                                <TouchableOpacity style={styles.googlepayImagBtn}
                                    onPress={() => { this.setState({ isVisible: !this.state.isVisible }) }}
                                >
                                    <View style={styles.googlepayView} >
                                        <Image style={styles.googleImag} source={require('../../../../assets/images/google.png')} />
                                        <Text style={styles.googleText} > G-Pay </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.googleView}>
                                <TouchableOpacity style={styles.googlepayImagBtn}
                                    onPress={() => { this.setState({ phonePeModal: !this.state.phonePeModal }) }}
                                >
                                    <View style={styles.googlepayView} >
                                        <Image style={styles.phonepeImag} source={require('../../../../assets/images/phonepe.png')} />
                                        <Text style={styles.googleText} > PhonePe </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.googleView} >
                            <TouchableOpacity style={styles.googlepayImagBtn}
                                onPress={() => { this.setState({ paytmModal: !this.state.paytmModal }) }}
                            >
                                <View style={styles.googlepayView} >
                                    <Image style={styles.paytmImag} source={require('../../../../assets/images/paytm.png')} />
                                    <Text style={styles.googleText} > Paytm </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View>
                        <Modal
                            animationType={"slide"}
                            transparent={true}
                            visible={this.state.isVisible}
                        // onRequestClose={() => { console.log("Modal has been closed.") }}
                        >
                            <View style={styles.mainInnerModalView} >
                                <View style={styles.modal}>
                                    <Text style={styles.text}>Add Google Pay Number </Text>
                                    <View style={styles.modalGoogleImag} >
                                        <Image style={styles.googleImag} source={require('../../../../assets/images/google.png')} />
                                    </View>
                                    <TextInput placeholder='Enter Number '
                                        value={this.state.google}
                                        keyboardType='numeric'
                                        maxLength={10}
                                        style={styles.phoneNo}
                                        placeholderTextColor="black"
                                        // onChangeText={google => this.setState({ google })}
                                        onChangeText={google => this.handelGooglepayNo_04(google)}
                                    />
                                    <View style={styles.btnView} >

                                        <TouchableOpacity style={styles.cancelBtn}
                                            onPress={() => { this.setState({ isVisible: false }) }}
                                        >
                                            <Text style={styles.cancelText} >CANCEL</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.submitBtn}
                                            onPress={this.googlePayMethod_04}
                                        >
                                            <Text style={styles.submitText} >SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </Modal>
                    </View>

                    <View>
                        <Modal
                            animationType={"slide"}
                            transparent={true}
                            visible={this.state.phonePeModal}
                            onRequestClose={() => { console.log("Modal has been closed.") }}>
                            <View style={styles.mainInnerModalView} >
                                <View style={styles.modal}>
                                    <Text style={styles.text}>Add PhonePe Number </Text>
                                    <View style={styles.modalGoogleImag} >
                                        <Image style={styles.googleImag} source={require('../../../../assets/images/phonepe.png')} />
                                    </View>
                                    <TextInput placeholder='Enter Number '
                                        value={this.state.phonePe}
                                        keyboardType='numeric'
                                        maxLength={10}
                                        style={styles.phoneNo}
                                        placeholderTextColor="black"
                                        // onChangeText={phonePe => this.setState({ phonePe })}
                                        onChangeText={phonePe => this.handelPhonePeNo_04(phonePe)}

                                    />
                                    <View style={styles.btnView} >

                                        <TouchableOpacity style={styles.cancelBtn}
                                            onPress={() => { this.setState({ phonePeModal: false }) }}
                                        >
                                            <Text style={styles.cancelText} >CANCEL</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.submitBtn}
                                            onPress={this.phonePeMethod_04}
                                        >
                                            <Text style={styles.submitText} >SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* <Button title="Click To Close Modal" onPress={() => {
                                    this.setState({ isVisible: !this.state.isVisible })
                                }} /> */}
                                </View>
                            </View>
                        </Modal>
                    </View>

                    <View>
                        <Modal
                            animationType={"slide"}
                            transparent={true}
                            visible={this.state.paytmModal}
                            onRequestClose={() => { console.log("Modal has been closed.") }}>
                            <View style={styles.mainInnerModalView} >
                                <View style={styles.modal}>
                                    <Text style={styles.text}>Add Paytm Number </Text>
                                    <View style={styles.modalpaytmImag} >
                                        <Image style={styles.patymModalImag} source={require('../../../../assets/images/paytm.png')} />
                                    </View>
                                    <TextInput placeholder='Enter Number '
                                        value={this.state.paytm}
                                        keyboardType='numeric'
                                        maxLength={10}
                                        style={styles.phoneNo}
                                        placeholderTextColor="black"
                                        // onChangeText={paytm => this.setState({ paytm })}
                                        onChangeText={paytm => this.handelPaytmNo_04(paytm)}
                                    />
                                    <View style={styles.btnView} >

                                        <TouchableOpacity style={styles.cancelBtn}
                                            onPress={() => { this.setState({ paytmModal: false }) }}
                                        >
                                            <Text style={styles.cancelText} >CANCEL</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.submitBtn}
                                            onPress={this.paytmMethod_04}
                                        >
                                            <Text style={styles.submitText} >SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* <Button title="Click To Close Modal" onPress={() => {
                                    this.setState({ isVisible: !this.state.isVisible })
                                }} /> */}
                                </View>
                            </View>
                        </Modal>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
